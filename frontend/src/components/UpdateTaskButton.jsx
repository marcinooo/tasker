import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ControlTaskModal from './ControlTaskModal';

function AddTaskButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>Update</Button>
      <ControlTaskModal
        show={show}
        onClose={handleClose}
        onConfirm={() => {}}
        title="Update task"
      />
    </>
  );
}

export default AddTaskButton;
