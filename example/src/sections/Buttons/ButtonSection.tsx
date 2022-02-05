import React, { FormEvent, useState } from 'react'
import { Button, Switch } from 'empresaurios-ui'

const ButtonSection = () => {
  const [state, setState] = useState({
    toggle: true,
    checkbox: true,
    radio: 'none' as 'yes' | 'no' | 'none'
  })

  const { checkbox, toggle, radio } = state

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
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
            color="green-500"
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
          <label htmlFor="switch">Switch (Toggle)</label>
          <Switch type="toggle" name="switch" defaultChecked={toggle} onChange={onChange} />
        </div>
        <div className="wrapper-container">
          <label htmlFor="checkbox">Switch (Checkbox)</label>
          <Switch type="checkbox" onChange={onChange} name="checkbox" defaultChecked={checkbox} />
        </div>
        <div className="wrapper-container">
          <label htmlFor="radio">Switch (radio) - No</label>
          <Switch
            type="radio"
            onChange={onChange}
            name="radio"
            value="no"
            checked={radio === 'no'}
          />
          <label htmlFor="radio">Switch (radio) - Yes</label>
          <Switch
            type="radio"
            onChange={onChange}
            name="radio"
            value="yes"
            checked={radio === 'yes'}
          />
        </div>
      </div>
      <hr />
    </section>
  )
}

export default ButtonSection
