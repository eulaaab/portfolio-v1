import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  useEffect(() =>
    props.history.listen(() => {
      setIsOpen(false);
    })
  );

  //onToggleNavBar={() => setIsOpen(!isOpen)}
  return (
    <div>
      <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <NavbarBrand>
          <Link to="/" className="nav-link navbar-brand nav__logo">
            EULA BENGCO
          </Link>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          onToggleMenu={() => setIsOpen(!isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                className="nav-link nav__text"
                activeClassName="active"
                exact={true}
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                className="nav-link nav__text"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/works"
                className="nav-link nav__text"
                activeClassName="active"
              >
                WORKS
              </NavLink>
            </NavItem>
            {/*
    <NavItem>
              <NavLink
                to="/contact"
                className="nav-link nav__text"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </NavItem>
          */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
