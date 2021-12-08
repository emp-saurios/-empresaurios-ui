import React, { FC, FormHTMLAttributes } from 'react'
import './Form.css'

const Form: FC<FormProps> = ({ children, titleText, ...rest }) => {
  return (
    <form {...rest}>
      <h2>{titleText}</h2>
      {children}
    </form>
  )
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  titleText?: string
}

export default Form
