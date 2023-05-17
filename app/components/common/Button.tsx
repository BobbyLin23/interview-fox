'use client'

import clsx from 'clsx'

interface ButtonProps {
  type?: 'button' | 'submit'
  varient?: 'primary' | 'info' | 'danger' | 'warning' | 'success'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  varient,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex w-full justify-center rounded-md border border-transparent bg-neutral-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        varient && `${varient}`
      )}
    >
      {children}
    </button>
  )
}

export default Button
