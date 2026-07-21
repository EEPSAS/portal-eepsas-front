import MediaCard from '../../common/MediaCard'

type Episode = {
  id: number
  image: string
  title: string
  date: string
  duration: string
}

type EpisodeCardProps = {
  episode: Episode
  onPlay?: () => void
}

const EpisodeCard = ({ episode, onPlay }: EpisodeCardProps) => (
  <div className="col-12">
    <MediaCard
      image={episode.image}
      imageAlt={episode.title}
      title={episode.title}
      metadata={`${episode.date} · ${episode.duration}`}
      buttonAriaLabel={`Tocar ${episode.title}`}
      onButtonClick={onPlay}
    />
  </div>
)

export default EpisodeCard
