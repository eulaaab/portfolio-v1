import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./Header.scss";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavbarBrand className="mr-auto">
          <Link to="/" className="nav-link navbar-brand">
            EULA BENGCO
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/works" className="nav-link">
                WORKS
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/skills" className="nav-link">
                SKILLS
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
