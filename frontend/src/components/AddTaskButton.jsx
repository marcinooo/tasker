import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ControlTaskModal from './ControlTaskModal';

function AddTaskButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card border="success" className="my-2">
        {/* eslint-disable */}
        <Link
          to='#'
          onClick={handleShow}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
        {/* eslint-enable */}
          <Card.Body>
            <Card.Text style={{ color: 'green' }}>
              Add new task
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <ControlTaskModal
        show={show}
        onClose={handleClose}
        onConfirm={() => {}}
        title="Add new task"
      />
    </>
  );
}

export default AddTaskButton;
