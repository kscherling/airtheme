import React, { Fragment } from 'react'
import { UtilityButton, IconPlus, Modal } from '@airtheme/ui'
import { withFontWeightContent } from '@airtheme/make'
import Add from './Add'

const AddModal = () => (
  <Modal
    renderTrigger={({ show, active }) => (
      <UtilityButton onClick={show} active={active}>
        <IconPlus />
      </UtilityButton>
    )}
    renderContent={({ hide }) => <Add hide={hide} />}
  />
)

export default AddModal
