// import { useController } from 'react-hook-form';

import { TextareaHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  rules?: Object
}

export const TextAreaField = ({
  label,
  name,
  rules,
  ...rest
}: TextAreaFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  return (
    <fieldset className="flex flex-col gap-1">
      <label htmlFor={name} className="font-body font-medium">
        {label}
      </label>
      <textarea
        className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
        ref={ref}
        {...inputProps}
        {...rest}
      />
      {error && <small className="text-red-400">{error.message}</small>}
    </fieldset>
  )
}
