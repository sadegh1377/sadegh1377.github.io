<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer
let autoGroup, tiltGroup, starField
let nodes = [], lines = []
let mouseX = 0, mouseY = 0
let targetTiltX = 0, targetTiltZ = 0
let animationId

onMounted(() => {
  const el = container.value
  const width = el.clientWidth
  const height = el.clientHeight

  // ---- Scene Setup ----
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.set(0, 0.5, 5.5)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  el.appendChild(renderer.domElement)

  // ---- Group Hierarchy for independent auto-rotation & mouse tilt ----
  // Auto-rotation group (spins constantly)
  autoGroup = new THREE.Group()
  scene.add(autoGroup)

  // Tilt group (responds to mouse)
  tiltGroup = new THREE.Group()
  autoGroup.add(tiltGroup)

  // ---- Node Parameters ----
  const nodeCount = 80
  const spread = 2.5
  const connectionDistance = 1.8

  // ---- Create Nodes (glowing spheres) ----
  const nodePositions = []
  const nodeColors = []

  for (let i = 0; i < nodeCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = spread * Math.cbrt(Math.random())
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    nodePositions.push(x, y, z)

    const mix = (y / spread + 1) / 2
    const color = new THREE.Color().lerpColors(
        new THREE.Color(0x00E5FF),
        new THREE.Color(0xA855F7),
        mix
    )
    nodeColors.push(color.r, color.g, color.b)

    const size = 0.06 + Math.random() * 0.08
    const geo = new THREE.SphereGeometry(size, 8, 8)
    const mat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.9,
    })
    const sphere = new THREE.Mesh(geo, mat)
    sphere.position.set(x, y, z)
    sphere.userData = {
      baseScale: 1,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
    }
    tiltGroup.add(sphere)
    nodes.push(sphere)
  }

  // ---- Create Lines (connections) ----
  const lineVertices = []
  const lineColors = []

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = nodePositions[i * 3] - nodePositions[j * 3]
      const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1]
      const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2]
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      if (dist < connectionDistance) {
        const i3 = i * 3, j3 = j * 3
        lineVertices.push(
            nodePositions[i3], nodePositions[i3 + 1], nodePositions[i3 + 2],
            nodePositions[j3], nodePositions[j3 + 1], nodePositions[j3 + 2]
        )
        const alpha = 1 - (dist / connectionDistance) * 0.8
        const c = new THREE.Color().lerpColors(
            new THREE.Color(nodeColors[i3], nodeColors[i3+1], nodeColors[i3+2]),
            new THREE.Color(nodeColors[j3], nodeColors[j3+1], nodeColors[j3+2]),
            0.5
        )
        const col = c.multiplyScalar(alpha)
        for (let k = 0; k < 2; k++) {
          lineColors.push(col.r, col.g, col.b)
        }
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3))
  lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
  })
  const lineSegments = new THREE.LineSegments(lineGeo, lineMat)
  tiltGroup.add(lineSegments)
  lines.push(lineSegments)

  // ---- Background Stars (with parallax) ----
  const starCount = 600
  const starPos = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 25
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
  const starMat = new THREE.PointsMaterial({
    color: 0x8899ff,
    size: 0.045,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
  })
  starField = new THREE.Points(starGeo, starMat)
  scene.add(starField) // outside autoGroup so it stays fixed, but we'll rotate it with mouse

  // ---- Lights ----
  const ambient = new THREE.AmbientLight(0x404060)
  scene.add(ambient)

  // ---- Mouse Tracking ----
  const onMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1
  }
  window.addEventListener('mousemove', onMouseMove)

  // ---- Animation Loop ----
  function animate() {
    animationId = requestAnimationFrame(animate)

    // 1. Auto-rotation (constant Y spin)
    autoGroup.rotation.y += 0.002

    // 2. Mouse-reactive tilt (smooth lerp with faster follow)
    // Max tilt 0.4 radians (~23°) – noticeably responsive
    targetTiltX = mouseY * 0.4
    targetTiltZ = mouseX * 0.4

    // lerp speed 0.08 = smooth but snappy (was 0.01 – barely moved)
    tiltGroup.rotation.x += (targetTiltX - tiltGroup.rotation.x) * 0.08
    tiltGroup.rotation.z += (targetTiltZ - tiltGroup.rotation.z) * 0.08

    // 3. Background star parallax (opposite direction, slower)
    starField.rotation.x += (mouseY * -0.02 - starField.rotation.x) * 0.01
    starField.rotation.y += (mouseX * -0.02 - starField.rotation.y) * 0.01

    // 4. Pulse nodes
    const time = Date.now() * 0.001
    nodes.forEach((node) => {
      const pulse = 0.8 + 0.2 * Math.sin(time * node.userData.speed + node.userData.phase)
      const s = pulse * node.userData.baseScale
      node.scale.set(s, s, s)
      node.material.opacity = 0.6 + 0.4 * pulse
    })

    renderer.render(scene, camera)
  }
  animate()

  // ---- Resize Handler ----
  const onResize = () => {
    const w = el.clientWidth
    const h = el.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  // ---- Cleanup ----
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    if (animationId) cancelAnimationFrame(animationId)
    renderer.dispose()
    if (el && renderer.domElement) el.removeChild(renderer.domElement)
  })
})
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>