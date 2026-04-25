import { Col, Container, Row } from 'react-bootstrap'
import TeamMember from '../components/TeamMember'
import avatarJC from '../assets/avatar-jc.svg'
import whatsappImg1 from '../assets/WhatsApp Image 2026-04-25 at 10.26.42 (1).jpeg'
import whatsappImg2 from '../assets/avatar-as.svg'
import whatsappImg3 from '../assets/avatar-cm.svg'

const teamMembers = [
  {
    image: whatsappImg1,
    name: 'Marcos Vinicius',
    role: 'Cientista de Dados/Chefe',
  },
  {
    image: whatsappImg2,
    name: 'Ana Silva',
    role: 'Engenheira Biomédica',
  },
  {
    image: whatsappImg3,
    name: 'Carlos Mendes',
    role: 'Pesquisador IA',
  },
  {
    image: avatarJC,
    name: 'Julia Costa',
    role: 'Especialista Hardware',
  },
]

function TeamSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="text-white mb-2">
              Núcleo <span className="text-primary">Operacional</span>
            </h2>
            <p className="mb-0">Pesquisadores e engenheiros do laboratório N.E.R.D.S.</p>
          </div>
          <a href="#" className="text-primary text-decoration-none fw-semibold">
            VER ORGANOGRAMA COMPLETO -&gt;
          </a>
        </div>
        <div className="team-banner mb-4" />
        <Row className="g-3">
          {teamMembers.map((member) => (
            <Col key={member.name} md={3}>
              <TeamMember {...member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TeamSection
