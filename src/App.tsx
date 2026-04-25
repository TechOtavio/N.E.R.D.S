import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import TeamSection from './sections/TeamSection'
import VectorsSection from './sections/VectorsSection'

function App() {
  return (
    <Container fluid className="grid-pattern px-0">
      <Header />
      <HeroSection />
      <VectorsSection />
      <TeamSection />
      <Footer />
    </Container>
  )
}

export default App
