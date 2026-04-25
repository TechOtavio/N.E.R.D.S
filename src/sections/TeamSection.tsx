import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import TeamMember from '../components/TeamMember'
import { teamMembers } from '../data'
import { containerVariants, itemVariants } from '../utils/animations'

function TeamSection() {
  return (
    <section id="equipe" className="section-shell overflow-hidden">
      <Container>
        <motion.div 
          className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-white mb-2">
              Núcleo <span className="text-primary">Operacional</span>
            </h2>
            <p className="mb-0 text-white-50">Pesquisadores e engenheiros do laboratório N.E.R.D.S.</p>
          </div>
          <a href="#" className="text-primary text-decoration-none fw-semibold d-flex align-items-center gap-1">
            VER ORGANOGRAMA COMPLETO <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="team-banner mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="py-5"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name} style={{ width: '300px' }}>
                <motion.div variants={itemVariants} className="h-100">
                  <TeamMember {...member} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  )
}

export default TeamSection
