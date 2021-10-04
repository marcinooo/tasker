import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

function MainNavbar({ location }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tasker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}>
            <Nav.Link href="/tasks" activeClassName="active">Tasks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainNavbar.propTypes = {
  location: PropTypes.shape({
    pathname: propTypes.string,
  }).isRequired,
};

const MainNavbarWithRouter = withRouter(MainNavbar);

export default MainNavbarWithRouter;
