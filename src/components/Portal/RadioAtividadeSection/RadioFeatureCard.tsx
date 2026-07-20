interface RadioFeatureCardProps {
  title: string
  description: string
}

const RadioFeatureCard = ({ title, description }: RadioFeatureCardProps) => (
  <div className="col">
    <div className="card border-0 shadow-sm p-3 h-100">
      <h6 className="mb-2">{title}</h6>
      <p className="mb-0 text-muted small">{description}</p>
    </div>
  </div>
)

export default RadioFeatureCard
