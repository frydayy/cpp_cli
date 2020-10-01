import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink, Container
} from 'reactstrap';

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar className="fryday-navbar" light expand="md">
          <Container style={{ maxWidth: '1240px' }}>
            <NavbarBrand className="fryday-navbar-brand" href="/">
              Wire under the ocean
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Get Started</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">API</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Docs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarContainer;