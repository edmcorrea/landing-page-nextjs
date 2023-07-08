'use client'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <header className="">
      <Navbar bg="transparent" expand="lg">
        <Container className="d-none d-lg-block text-start ms-lg-5">
          <Navbar.Brand className="" href="/">
          <Image
            src="https://www.amigoconstrutor.com.br/on/demandware.static/Sites-amigoConstrutor-Site/-/default/dw69cf4fbe/images/logo/logo_preferential.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-lg-end text-center"
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto me-lg-5">
              <Nav.Link className="me-lg-2 link" href="#projects">
                Home
              </Nav.Link>
              <Nav.Link className="me-lg-2 link" href="#projects">
                Nossos Serviços
              </Nav.Link>
              <Nav.Link className="me-lg-2 link" href="#about">
                Sobre Nós
              </Nav.Link>
              <Nav.Link className="me-lg-2 link" href="#footer">
                Contatos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
