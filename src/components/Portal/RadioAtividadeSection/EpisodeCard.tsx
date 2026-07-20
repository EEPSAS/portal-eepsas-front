interface Episode {
  id: number
  image: string
  title: string
  date: string
  duration: string
}

interface EpisodeCardProps {
  episode: Episode
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => (
  <div className="col-12">
    <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="row g-0 align-items-center">
        <div className="col-auto position-relative">
          <img
            src={episode.image}
            alt={episode.title}
            className="img-fluid rounded-start"
            style={{ width: 120, height: 90, objectFit: 'cover' }}
          />
          <button
            type="button"
            className="btn btn-sm btn-primary position-absolute top-50 start-50 translate-middle rounded-circle"
            style={{ width: 36, height: 36 }}
          >
            ▶
          </button>
        </div>
        <div className="col">
          <div className="card-body py-3">
            <h6 className="mb-1">{episode.title}</h6>
            <p className="text-muted small mb-0">
              {episode.date} · {episode.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EpisodeCard
