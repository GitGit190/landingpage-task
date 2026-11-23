import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & { loading?: boolean }

export function Button({ children, className = '', loading = false, disabled, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} disabled={disabled || loading} aria-busy={loading || undefined} className={`action ${className}`}>
      {loading && <span aria-hidden="true" className="size-4 rounded-full border-2 border-current border-e-transparent motion-safe:animate-spin" />}
      {loading ? 'Loading…' : children}
    </button>
  )
}
