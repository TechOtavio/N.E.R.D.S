import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="footer-shell py-5 mt-4">
      <Container>
        <Row className="g-4">
          <Col md={5}>
            <h2 className="h4 text-primary fw-bold mb-2">N.E.R.D.S.</h2>
            <p className="mb-0">Núcleo de Excelência em Pesquisa, Desenvolvimento e Sistemas.</p>
          </Col>
          <Col md={3}>
            <h3 className="h6 text-white">Conexões</h3>
            <p className="mb-1">LinkedIn</p>
            <p className="mb-1">GitHub</p>
            <p className="mb-0">Contato</p>
          </Col>
          <Col md={4}>
            <h3 className="h6 text-white">Institucional</h3>
            <p className="mb-1">Sobre o Núcleo</p>
            <p className="mb-1">Publicações</p>
            <p className="mb-0">Parcerias</p>
          </Col>
        </Row>
        <hr className="my-4 border-primary opacity-25" />
        <p className="mb-0 small">© {new Date().getFullYear()} UFC - Todos os direitos reservados.</p>
      </Container>
    </footer>
  )
}

export default Footer
