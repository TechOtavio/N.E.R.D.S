/**
 * @file Header.tsx
 * @description Componente de Menu Superior de Navegação.
 * Gerencia a responsividade mobile, mudança visual ao rolar a página (Glassmorphism)
 * e implementa o cálculo milimétrico para rolar âncoras na arquitetura Single Page.
 */
import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { animate } from 'framer-motion'
import logoImg from '../assets/CanecaCast.jpeg'

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Projetos', href: '#projetos' }
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false) // Controle para UX Mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Cálculo preciso da altura da navbar atual
      const headerElement = document.querySelector('.header-shell') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 100;
      
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      animate(window.scrollY, y, {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
      
      // Fecha o menu mobile caso esteja aberto
      if (expanded) setExpanded(false);
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`header-shell ${scrolled ? 'py-2' : 'py-3'}`}
      style={{
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(11, 19, 38, 0.85)' : 'rgba(11, 19, 38, 0.45)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(99, 247, 255, 0.3)' : '1px solid rgba(99, 247, 255, 0.12)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand href="#inicio" className="text-primary fw-bold brand-logo d-flex align-items-center gap-2">
          <img 
            src={logoImg} 
            alt="CanecaCast Mascote" 
            className="rounded-circle"
            style={{ 
              width: '40px', 
              height: '40px', 
              objectFit: 'cover', 
              border: '2px solid rgba(99, 247, 255, 0.5)',
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)'
            }} 
          />
          N.E.R.D.S.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-2">
            {navItems.map((item) => (
              <Nav.Link 
                key={item.name} 
                href={item.href} 
                className="text-light"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-primary" className="px-4">CONTATO</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
