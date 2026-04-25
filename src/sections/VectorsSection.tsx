import { Col, Container, Row } from 'react-bootstrap'
import VectorCard from '../components/VectorCard'

const vectors = [
  {
    icon: '🧬',
    title: 'Biometria Aplicada',
    description: 'Soluções funcionais para rastreio e análise de sinais biométricos em contexto real.',
    tags: ['Ação', 'Funcional', 'Sensores'],
  },
  {
    icon: '🧠',
    title: 'Neuroengenharia',
    description: 'Pesquisa de interfaces cérebro-computador e processamento de sinais EEG de alta precisão.',
    tags: ['BCI', 'EEG'],
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    description: 'Modelagem preditiva e Deep Learning para extração de insights em Big Data biomédico.',
    tags: ['Deep Learning', 'Big Data'],
  },
]

function VectorsSection() {
  return (
    <section className="section-shell">
      <Container>
        <h2 className="text-white mb-4">
          Vetores de <span className="text-primary">Atuação</span>
        </h2>
        <Row className="g-4">
          {vectors.map((vector) => (
            <Col key={vector.title} md={4}>
              <VectorCard {...vector} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default VectorsSection
