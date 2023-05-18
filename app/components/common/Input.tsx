'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

interface InputProps {
  type?: HTMLInputElement['type']
  id: string
  label: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  label,
  required,
  disabled,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        className={clsx(
          `peer w-full rounded-md border-2 border-neutral-300 bg-white p-4 pl-4 pt-6 font-light outline-none transition focus:border-black dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:border-neutral-200`,
          errors[id] && 'border-rose-500',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
      />
      <label
        htmlFor={id}
        className="text-md absolute left-4 top-5 z-10 origin-[0] -translate-y-3 transform text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
