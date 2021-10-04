import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TasksListHeader() {
  return (
    <div className="m-2 p-2">
      <Row>
        <Col md={9} lg={9} className="d-sm-none d-md-block">
          <h5>Task</h5>
        </Col>
        <Col md={2} lg={2} className="d-sm-none d-md-block">
          <h5>Status</h5>
        </Col>
        <Col md={1} lg={1} className="d-sm-none d-md-block">
          <h5>Actions</h5>
        </Col>
      </Row>
    </div>
  );
}

export default TasksListHeader;
