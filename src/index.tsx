import * as React from 'react'
import './styles/main.scss'

export * from './components'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
