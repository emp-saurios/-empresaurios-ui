import React from 'react'

import { ExampleComponent, Button, Input, Separator, Form } from 'empresaurios-ui'
import 'empresaurios-ui/dist/index.css'

const IconTest = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const App = () => {
  return (
    <div style={{ padding: '0 2rem' }}>
      <ExampleComponent text="Create React Library Example 😄" />
      <div>
        <h3>Botones</h3>
        <Button title="otro hola">Hola</Button>
        <hr />
      </div>

      <div>
        <h3>Inputs</h3>
        <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Input
            labelText="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            smallText="Este es un mensaje de prueba"
          />
          <Input labelText="Usuario" placeholder="jean@jeanda.mx" icon={<IconTest />} />
          <Input labelText="Usuario" placeholder="jean@jeanda.mx" />
          <Input placeholder="jean@jeanda.mx" />
          <Input placeholder="jean@jeanda.mx" icon={<IconTest />} />
          <Input
            labelText="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            smallText="Este es un mensaje de prueba"
            variant="success"
          />
          <Input
            labelText="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            smallText="Este es un mensaje de prueba"
            variant="error"
          />
          <Input
            labelText="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            smallText="Este es un mensaje de prueba"
            variant="warning"
          />
        </section>
        <hr />
      </div>

      <div>
        <h3>Separadores</h3>
        <Separator text="Ya tienes cuenta?" />
        <hr />
      </div>

      <div>
        <h3>Formularios</h3>
        <Form titleText="Registrate gratis">
          <Input labelText="Usuario" type="email" placeholder="jean@jeanda.mx" />
          <Input labelText="Contraseña" type="password" value="123123" />
        </Form>
        <hr />
      </div>
    </div>
  )
}

export default App
