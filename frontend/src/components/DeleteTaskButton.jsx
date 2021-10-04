import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DeleteTaskModal from './DeleteTaskModal';

function DeleteTaskButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>Delte</Button>
      <DeleteTaskModal show={show} onCloseModal={handleClose} />
    </>
  );
}

export default DeleteTaskButton;
