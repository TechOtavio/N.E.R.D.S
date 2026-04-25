import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/otavio.holanda05@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nome: form.nome.value,
          email: form.email.value,
          mensagem: form.mensagem.value,
          _subject: "NOVA MENSAGEM - Site N.E.R.D.S.!",
          _template: "box"
        })
      });
      
      if (response.ok) {
        form.reset();
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000); // Volta ao normal após 5 segundos
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <section id="contato" className="section-shell position-relative">
      {/* Glow orb por trás do formulário */}
      <div 
        className="position-absolute rounded-circle glow-effect"
        style={{
          width: '300px',
          height: '300px',
          background: 'rgba(99, 247, 255, 0.1)',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}
      />
      
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col lg={8} xl={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5"
            >
              <h2 className="text-white display-5 fw-bold mb-3">
                Inicie um <span className="text-primary">Projeto</span>
              </h2>
              <p className="text-white-50 fs-5">
                Precisa modernizar o software da sua unidade? Mande uma mensagem para o laboratório N.E.R.D.S.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Form 
                onSubmit={handleSubmit}
                className="p-4 p-md-5 rounded-4 glass-form"
                style={{
                  background: 'rgba(11, 19, 38, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(99, 247, 255, 0.15)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <Row className="g-4 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-white-50 small fw-semibold">NOME</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="nome"
                        required
                        placeholder="Como podemos te chamar?" 
                        className="custom-input bg-transparent border-primary border-opacity-25 text-white"
                        disabled={status === 'submitting'}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-white-50 small fw-semibold">E-MAIL</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        required
                        placeholder="seu@email.com" 
                        className="custom-input bg-transparent border-primary border-opacity-25 text-white"
                        disabled={status === 'submitting'}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label className="text-white-50 small fw-semibold">MENSAGEM</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="mensagem"
                    required
                    rows={4} 
                    placeholder="Fale um pouco sobre a sua ideia ou necessidade..." 
                    className="custom-input bg-transparent border-primary border-opacity-25 text-white"
                    disabled={status === 'submitting'}
                  />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  variant={status === 'success' ? 'success' : status === 'error' ? 'danger' : 'primary'} 
                  size="lg" 
                  className="w-100 py-3 fw-bold tracking-wider"
                  disabled={status === 'submitting'}
                >
                  {status === 'idle' && <>ENVIAR MENSAGEM <span aria-hidden="true" className="ms-2">&rarr;</span></>}
                  {status === 'submitting' && 'ENVIANDO...'}
                  {status === 'success' && 'MENSAGEM ENVIADA! ✔️'}
                  {status === 'error' && 'ERRO AO ENVIAR ❌'}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
