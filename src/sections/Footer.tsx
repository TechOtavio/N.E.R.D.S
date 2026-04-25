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
            <p className="mb-1">
              <a href="#" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                LinkedIn
              </a>
            </p>
            <p className="mb-1">
              <a href="https://www.instagram.com/nerds.ufc/" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                Instagram
              </a>
            </p>
            <p className="mb-0">
              <a href="mailto:otavio.holanda05@gmail.com" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                E-mail
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h3 className="h6 text-white">Institucional</h3>
            <p className="mb-1">
              <a href="#" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                Sobre o Núcleo
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                Publicações
              </a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#63f7ff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                Parcerias
              </a>
            </p>
          </Col>
        </Row>
        <hr className="my-4 border-primary opacity-25" />
        <p className="mb-0 small">© {new Date().getFullYear()} UFC - Todos os direitos reservados.</p>
      </Container>
    </footer>
  )
}

export default Footer
