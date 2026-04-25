/**
 * @file App.tsx
 * @description Ponto de entrada da aplicação React.
 * Orquestra as seções estáticas da Single Page Application (View), renderizando-as
 * sobre o componente de AmbientBackground (esferas de luz imersivas).
 */
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import TeamSection from './sections/TeamSection'
import VectorsSection from './sections/VectorsSection'
import ProjectsSection from './sections/ProjectsSection'
import PartnersSection from './sections/PartnersSection'
import ContactSection from './sections/ContactSection'
import AmbientBackground from './components/AmbientBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <div className="d-none d-lg-block">
        <CustomCursor />
      </div>
      <AmbientBackground />
      <Container fluid className="grid-pattern px-0">
        <Header />
        <HeroSection />
        <PartnersSection />
        <VectorsSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Container>
    </>
  )
}

export default App
