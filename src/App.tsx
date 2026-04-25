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
import AmbientBackground from './components/AmbientBackground'

function App() {
  return (
    <>
      <AmbientBackground />
      <Container fluid className="grid-pattern px-0">
        <Header />
        <HeroSection />
        <VectorsSection />
        <TeamSection />
        <ProjectsSection />
        <Footer />
      </Container>
    </>
  )
}

export default App
