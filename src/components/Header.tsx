import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const links = ['Início', 'Pesquisa', 'Equipe', 'Publicações']

function Header() {
  return (
    <Navbar expand="lg" className="py-3 header-shell">
      <Container>
        <Navbar.Brand className="text-primary fw-bold brand-logo">
          N.E.R.D.S.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-2">
            {links.map((link) => (
              <Nav.Link key={link} href="#" className="text-light">
                {link}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-primary">ACESSO AO NÓ</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
