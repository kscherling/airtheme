import React, { Fragment } from 'react'
import { UtilityButton, IconPlus, Modal } from '@airtheme/ui'
import { withFontWeightContent } from '@airtheme/make'

const Add = withFontWeightContent(({ addFontWeight }) => (
  <Modal
    renderTrigger={({ show, active }) => (
      <UtilityButton onClick={show} active={active}>
        <IconPlus />
      </UtilityButton>
    )}
    renderContent={() => <Fragment>hello</Fragment>}
  />
))

export default Add
