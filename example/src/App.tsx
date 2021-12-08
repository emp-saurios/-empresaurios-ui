import React from 'react'

import {
  ExampleComponent,
  Button,
  Input,
  Separator,
  Form
} from 'empresaurios-ui'
import 'empresaurios-ui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <div>
        <h3>Botones</h3>
        <Button title='otro hola'>Hola</Button>
        <hr />
      </div>
      <div>
        <h3>Inputs</h3>
        <Input labelText='Usuario' placeholder='jean@jeanda.mx' />
        <hr />
      </div>
      <div>
        <h3>Separadores</h3>
        <Separator text='Ya tienes cuenta?' />
        <hr />
      </div>
      <div>
        <h3>Formularios</h3>
        <Form titleText='Registrate gratis'>
          <Input
            labelText='Usuario'
            type='email'
            placeholder='jean@jeanda.mx'
          />
          <Input
            labelText='Contraseña'
            type='password'
            placeholder='contraseña'
            value='123123'
          />
        </Form>
        <hr />
      </div>
    </>
  )
}

export default App
