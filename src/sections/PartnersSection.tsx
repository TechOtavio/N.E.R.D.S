import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiVite, SiPostgresql, SiDjango } from 'react-icons/si'

const technologies = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <SiVite />, name: 'Vite' },
]

function PartnersSection() {
  return (
    <section className="py-5 border-top border-bottom" style={{ borderColor: 'rgba(99, 247, 255, 0.1)' }}>
      <Container fluid className="overflow-hidden px-0">
        <p className="text-center text-white-50 small fw-semibold tracking-wider mb-4 text-uppercase">
          Tecnologias que Dominamos
        </p>
        
        {/* Marquee Container */}
        <div className="d-flex position-relative w-100 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div 
            className="d-flex gap-4 gap-md-5 align-items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            style={{ width: 'fit-content' }}
          >
            {/* Renderizar a lista duplicada para o loop infinito perfeito */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="d-flex align-items-center gap-2 opacity-50 hover-opacity-100 transition-all" style={{ fontSize: '2rem', color: '#63f7ff' }}>
                {tech.icon}
                <span className="fs-5 fw-bold font-monospace">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default PartnersSection
