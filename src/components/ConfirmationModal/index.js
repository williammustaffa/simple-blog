import React from "react"
import { Button, Modal } from "semantic-ui-react"

function ConfirmationModal({ open, title, text, onConfirm, onClose }) {
  function onConfirmClick() {
    if (typeof onConfirm === "function") {
      onConfirm();
    }
  }

  return (
    <Modal size="tiny" open={open} onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={onClose}>No</Button>
        <Button
          color="red"
          onClick={onConfirmClick}
          icon='checkmark'
          labelPosition='right'
          content='Yes'
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmationModal;
