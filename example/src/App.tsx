import React from 'react'

import { ExampleComponent, Input, Separator, Form } from 'empresaurios-ui'
import 'empresaurios-ui/dist/index.css'
import ButtonSection from './sections/Buttons/ButtonSection'

const IconTest = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const App = () => {
  return (
    <div style={{ padding: '0 2rem' }}>
      <ExampleComponent text="Empresaurios components UI 😄" />

      <ButtonSection />

      <div>
        <h3 className="h2">Inputs</h3>
        <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Input
            title="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            message="Este es un mensaje de prueba"
          />
          <Input title="Usuario" placeholder="jean@jeanda.mx" icon={<IconTest />} />
          <Input title="Usuario" placeholder="jean@jeanda.mx" />
          <Input placeholder="jean@jeanda.mx" />
          <Input placeholder="jean@jeanda.mx" icon={<IconTest />} />
          <Input
            title="Usuario success"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            message="Este es un mensaje de prueba"
            variant="success"
          />
          <Input
            title="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            message="Este es un mensaje de prueba"
            variant="error"
          />
          <Input
            title="Usuario"
            placeholder="jean@jeanda.mx"
            icon={<IconTest />}
            message="Este es un mensaje de prueba"
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
          <Input title="Usuario" type="email" placeholder="jean@jeanda.mx" />
          <Input title="Contraseña" type="password" value="123123" />
        </Form>
        <hr />
      </div>
    </div>
  )
}

export default App
