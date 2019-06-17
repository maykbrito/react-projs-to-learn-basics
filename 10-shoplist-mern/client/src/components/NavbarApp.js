import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

const NavbarApp = () => {

  const [toogleState, setToggleState] = useState({
    isOpen: false
  })

  const toggle = () => {
    setToggleState({
      isOpen: !toogleState.isOpen
    })
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
          <Container>
              <NavbarBrand href="/">ShoppingList</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={toogleState.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="https://github.com/maykbrito">GitHub</NavLink>
                  </NavItem>
                  </Nav>
              </Collapse>
          </Container>
      </Navbar>
    </div>
  )

}

export default NavbarApp