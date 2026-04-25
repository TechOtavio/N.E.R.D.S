import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

type TeamMemberProps = {
  image: string
  name: string
  role: string
}

function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <article className="team-member text-center p-3">
      <img src={image} alt={name} className="team-member-image mb-3" />
      <h3 className="h5 text-white mb-1">{name}</h3>
      <p className="text-primary mb-3 small fw-medium">{role}</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-white-50 hover-primary" aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
        <a href="#" className="text-white-50 hover-primary" aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href="#" className="text-white-50 hover-primary" aria-label="Email">
          <FaEnvelope size={18} />
        </a>
      </div>
    </article>
  )
}

export default TeamMember
