import { Badge, Card } from 'react-bootstrap'

type VectorCardProps = {
  icon: string
  title: string
  description: string
  tags: string[]
}

function VectorCard({ icon, title, description, tags }: VectorCardProps) {
  return (
    <Card className="h-100 vector-card">
      <Card.Body>
        <div className="fs-2 mb-3">{icon}</div>
        <Card.Title className="text-white">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} bg="transparent" className="border border-primary text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default VectorCard
