import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import DarkModeToggle from '../DarkModeToggle'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#create-partys">Create Party</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link class='navlink' href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link class='navlink' href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link class='navlink'href="#/">Home</Nav.Link>
    <Nav.Link class='navlink' href="#view-partys">View Partys</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar id='navbarcontent' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand id='reviewflixlogo' href="#">
      Drinknight
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <DarkModeToggle/>
        { user && <span className="navbar-text mr-2">Welcome, {user.username}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
