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
      <p className="text-primary mb-0">{role}</p>
    </article>
  )
}

export default TeamMember
