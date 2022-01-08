import * as React from 'react'
import './css/app.scss'

export * from './components'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
