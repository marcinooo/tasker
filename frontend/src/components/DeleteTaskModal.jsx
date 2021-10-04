import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DeleteTaskModal({ show, onCloseModal }) {
  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Delete task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you realy want to delete this task?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

DeleteTaskModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default DeleteTaskModal;
