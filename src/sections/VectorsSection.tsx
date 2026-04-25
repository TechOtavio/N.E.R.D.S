import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import VectorCard from '../components/VectorCard'
import { vectorsData } from '../data'
import { containerVariants, itemVariants } from '../utils/animations'

function VectorsSection() {
  return (
    <section id="especialidades" className="section-shell">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-4">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Row className="g-4">
            {vectorsData.map((vector) => (
              <Col key={vector.title} md={4}>
                <motion.div variants={itemVariants} className="h-100">
                  <VectorCard {...vector} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default VectorsSection
