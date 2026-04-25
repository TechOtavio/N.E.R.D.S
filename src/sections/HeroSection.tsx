import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import heroImg from "../assets/EquipeNERDS.jpeg"

function HeroSection() {
  return (
    <section id="inicio" className="section-shell overflow-hidden" style={{ paddingTop: '120px' }}>
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge bg="transparent" className="border border-primary text-primary px-3 py-2 mb-3 rounded-pill">
                NÚCLEO DE DESENVOLVIMENTO - UFC
              </Badge>
              <h1 className="text-white display-5 display-md-4 fw-semibold">
                N.E.R.D.S: Excelência em <span className="text-primary glow-effect px-2 rounded">Software</span>
              </h1>
              <p className="mb-4 text-white-50 fs-6 fs-md-5">
                Somos o Núcleo Especializado em Reengenharia e Desenvolvimento de Software da UFC. Focamos em criar e modernizar aplicações web escaláveis, unindo tecnologia de ponta e inovação acadêmica.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <Button variant="primary" className="px-4 py-3 py-md-2 w-100 w-md-auto">VER PROJETOS</Button>
                <Button variant="outline-primary" className="px-4 py-3 py-md-2 w-100 w-md-auto">CONTATO</Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.img 
                className="img-fluid hero-image" 
                src={heroImg}
                alt="Equipe NERDS"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
