import React from "react";
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
      <Navbar.Brand href="#home">Bookstore HEHE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="Tabel.js">Book List</Nav.Link>
          <NavDropdown title="Filter" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Author</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Price</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
