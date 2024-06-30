// NavigationMenu.js component

// navigation menu imported from
// https://react-bootstrap.github.io/docs/components/navbar

// import all components required by this component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// the 'NavigationMenu()' function creates the navigation bar and the links to the pages from the navigation bar
function NavigationMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand>Green Blue Red Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to='/products'>Products</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationMenu;