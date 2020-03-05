import React from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main">
          <Container>
            <NavbarBrand>
              <img src={logo} width="100px" alt="My Blog"/>
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
