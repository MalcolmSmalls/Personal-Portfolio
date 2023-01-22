import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect sticky='top'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>malcolmsmalls.dev</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/resume'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/resume'>
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/resume'>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
