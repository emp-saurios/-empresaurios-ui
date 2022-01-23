import React, { useState } from 'react'
import { Button, Switch } from 'empresaurios-ui'

const ButtonSection = () => {
  const [state, setState] = useState({
    toggleValue: true,
    checkboxValue: true
  })

  const { checkboxValue, toggleValue } = state

  const onChange = (target: keyof typeof state) => {
    setState({
      ...state,
      [target]: !state[target]
    })
  }

  return (
    <section>
      <h3>Botones :)</h3>
      <div className="section-container">
        <div className="wrapper-container">
          <label htmlFor="default">Default</label>
          <Button id="default" typeButton="default">
            Button
          </Button>
        </div>
        <div className="wrapper-container">
          <label htmlFor="light">Light</label>
          <Button id="light" typeButton="light" icon="ThumbUpIcon" iconType="outline">
            Button
          </Button>
        </div>

        <div className="wrapper-container">
          <label htmlFor="white">White</label>
          <Button id="white" typeButton="white" icon="ThumbUpIcon" iconSide="left" iconType="solid">
            Button a
          </Button>
        </div>
        <div className="wrapper-container">
          <label htmlFor="ghost">Ghost</label>
          <Button
            id="ghost"
            size="small"
            typeButton="ghost"
            icon="ThumbUpIcon"
            iconSide="left"
            iconType="solid"
          >
            Button small
          </Button>
        </div>
        <div className="wrapper-container">
          <label htmlFor="link">Link</label>
          <Button
            id="link"
            size="smaller"
            typeButton="link"
            icon="ThumbDownIcon"
            iconSide="left"
            iconType="solid"
          >
            Button smaller
          </Button>
        </div>
        <div className="wrapper-container">
          <label htmlFor="action">Action</label>
          <Button id="action" typeButton="action" icon="TrashIcon" iconSide="left" />
        </div>
        <div className="wrapper-container">
          <label htmlFor="actionWithText">Action with text</label>
          <Button id="actionWithText" typeButton="action" icon="TrashIcon" iconSide="left">
            Delete
          </Button>
        </div>
        <div className="wrapper-container">
          <label htmlFor="switch">
            Switch (Toggle)
            <Switch type="toggle" name="switch" active={toggleValue} />
          </label>

        </div>
        <div className="wrapper-container">
          <label htmlFor="switch-checkbox">Switch (Checkbox)</label>
          <Switch
            type="checkbox"
            onChange={() => onChange('checkboxValue')}
            name="switch-checkbox"
            active={checkboxValue}
          />
        </div>
      </div>
      <hr />
    </section>
  )
}

export default ButtonSection
