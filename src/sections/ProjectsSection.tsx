import { Badge, Card, Col, Container, Row, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { projectsData } from '../data'
import { containerVariants, itemVariants } from '../utils/animations'

function ProjectsSection() {
  return (
    <section id="projetos" className="section-shell">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-2">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-white-50 mb-4">
            Soluções reais construídas pela nossa equipe de desenvolvimento de software.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Row className="g-4">
            {projectsData.map((project) => (
              <Col key={project.title} lg={4} md={6}>
                <motion.div variants={itemVariants} className="h-100">
                  <Card className="h-100 vector-card d-flex flex-column">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text-white mb-3 fw-semibold fs-5">{project.title}</Card.Title>
                      <Card.Text className="text-white-50 mb-4 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      <div className="d-flex gap-2 flex-wrap mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} bg="transparent" className="border border-primary text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline-primary" className="w-100 mt-auto" href={project.link}>
                        VER DETALHES
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default ProjectsSection
