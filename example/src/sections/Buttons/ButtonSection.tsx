import React from 'react'
import { Button } from 'empresaurios-ui'

const ButtonSection = () => {
  return (
    <section>
      <h3>Botones</h3>
      <div className="section-container">
        <Button typeButton="default">Button</Button>
        <Button typeButton="light" icon="ThumbUpIcon" iconType="outline">
          Button
        </Button>
        <Button typeButton="white" icon="ThumbUpIcon" iconSide="left" iconType="solid">
          Button
        </Button>
        <Button size="small" typeButton="ghost" icon="ThumbUpIcon" iconSide="left" iconType="solid">
          Button
        </Button>
        <Button
          size="smaller"
          typeButton="link"
          icon="ThumbDownIcon"
          iconSide="left"
          iconType="solid"
        >
          Button
        </Button>
      </div>
      <hr />
    </section>
  )
}

export default ButtonSection
