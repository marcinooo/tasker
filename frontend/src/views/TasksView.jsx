import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TasksListHeader from '../components/TasksListHeader';
import AddTaskButton from '../components/AddTaskButton';
import Task from '../components/Task';

function TasksView() {
  return (
    <Container>
      <Row>
        <Col>
          <TasksListHeader />
          <AddTaskButton />
          <Task />
        </Col>
      </Row>
    </Container>
  );
}

export default TasksView;
