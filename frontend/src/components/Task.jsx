import React from 'react';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Task() {
  return (
    <Card className="my-2">
      <Link to={'/tasks/'.concat(1)} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <Card.Body>
          <Row>
            <Col sm={12} md={9} lg={9}>
              Some quick example text to build on the card title and make up the bulk of
              the card&apos;s content.
            </Col>
            <Col sm={11} md={2} lg={2}>
              <Button variant="success" size="sm">Completed</Button>
            </Col>
            <Col sm={1} md={1} lg={1}>
              ()
            </Col>
          </Row>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Task;
