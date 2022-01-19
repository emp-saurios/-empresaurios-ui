import React from 'react'
import { Button, Switch } from 'empresaurios-ui'

const ButtonSection = () => {
  return (
    <section>
      <h3>Botones :)</h3>
      <div className="section-container">
        <div>
          <label htmlFor="default">Default</label>
          <Button id="default" typeButton="default">
            Button
          </Button>
        </div>
        <div>
          <label htmlFor="light">Light</label>
          <Button id="light" typeButton="light" icon="ThumbUpIcon" iconType="outline">
            Button
          </Button>
        </div>

        <div>
          <label htmlFor="white">White</label>
          <Button id="white" typeButton="white" icon="ThumbUpIcon" iconSide="left" iconType="solid">
            Button a
          </Button>
        </div>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="action">Action</label>
          <Button id="action" typeButton="action" icon="TrashIcon" iconSide="left" />
        </div>
        <div>
          <label htmlFor="actionWithText">Action with text</label>
          <Button id="actionWithText" typeButton="action" icon="TrashIcon" iconSide="left">
            Delete
          </Button>
        </div>
        <div>
          <label htmlFor="switch">Switch</label>
          <Switch name="switch" active={true} />
        </div>
      </div>
      <hr />
    </section>
  )
}

export default ButtonSection
