import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

function HeroSection() {
  return (
    <section className="section-shell">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <Badge bg="transparent" className="border border-primary text-primary px-3 py-2 mb-3 rounded-pill">
              SISTEMA ONLINE - UFC
            </Badge>
            <h1 className="text-white display-4 fw-semibold">
              N.E.R.D.S: O Futuro da <span className="text-primary glow-effect px-2 rounded">Pesquisa</span>
            </h1>
            <p className="mb-4">
              Análise biométrica avançada e otimização de desempenho através de processamento de dados em tempo
              real e modelagem preditiva.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary">EXPLORAR PESQUISAS</Button>
              <Button variant="outline-primary">{'>'} ACESSO AO NÓ</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="placeholder-chart" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
