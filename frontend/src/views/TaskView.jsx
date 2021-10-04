import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import DeleteTaskButton from '../components/DeleteTaskButton';
import UpdateTaskButton from '../components/UpdateTaskButton';

function TaskView() {
  return (
    <Container>
      <Card className="mt-3">
        <Card.Header as="h5">Task</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="success">Mark as completed</Button>
          {' '}
          <UpdateTaskButton />
          {' '}
          <DeleteTaskButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TaskView;
