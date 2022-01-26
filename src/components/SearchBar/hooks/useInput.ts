import { ChangeEvent, useState } from 'react'

export type InputType = 'text' | 'email' | 'password'

export const useInput = (type: InputType, initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const cleanUp = () => {
    setValue('')
  }

  return {
    value,
    type,
    cleanUp,
    onChange
  }
}
