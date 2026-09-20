export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
    id: number
    type: ToastType
    title?: string
    message: string
    duration?: number
}

let toastId = 0

export const useToast = () => {
    // useState باعث میشه state بین همهی کامپوننتها share بشه (SSR-safe)
    const toasts = useState<Toast[]>('toasts', () => [])

    const remove = (id: number) => {
        toasts.value = toasts.value.filter((t) => t.id !== id)
    }

    const show = (options: Omit<Toast, 'id'> | string) => {
        const opts =
            typeof options === 'string'
                ? { type: 'info' as ToastType, message: options }
                : options

        const id = ++toastId
        const toast: Toast = {
            id,
            type: opts.type ?? 'info',
            title: opts.title,
            message: opts.message,
            duration: opts.duration ?? 4000,
        }

        toasts.value.push(toast)

        // Auto dismiss
        if (toast.duration && toast.duration > 0) {
            setTimeout(() => remove(id), toast.duration)
        }

        return id
    }

    return {
        toasts,
        show,
        remove,
        success: (message: string, title?: string) =>
            show({ type: 'success', message, title }),
        error: (message: string, title?: string) =>
            show({ type: 'error', message, title }),
        warning: (message: string, title?: string) =>
            show({ type: 'warning', message, title }),
        info: (message: string, title?: string) =>
            show({ type: 'info', message, title }),
    }
}