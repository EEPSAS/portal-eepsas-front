import type { MouseEventHandler, ReactNode, CSSProperties } from 'react'

export interface MediaCardProps {
  image: string
  imageAlt: string
  title: string
  subtitle?: string
  metadata?: string
  badge?: string
  badgeClassName?: string
  buttonIcon?: ReactNode
  buttonAriaLabel?: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  style?: CSSProperties
}

const MediaCard = ({
  image,
  imageAlt,
  title,
  subtitle,
  metadata,
  badge,
  badgeClassName,
  buttonIcon = '▶',
  buttonAriaLabel = 'Play',
  onButtonClick,
  className = '',
  style,
}: MediaCardProps) => (
  <div className={`card border-0 shadow-sm rounded-3 overflow-hidden ${className}`} style={style}>
    <div className="row g-0 align-items-center">
      <div className="col-auto position-relative">
        <img
          src={image}
          alt={imageAlt}
          className="img-fluid rounded-start"
          style={{ width: 120, height: 90, objectFit: 'cover' }}
        />
        <button
          type="button"
          className="btn btn-sm btn-primary position-absolute top-50 start-50 translate-middle rounded-circle"
          style={{ width: 36, height: 36 }}
          aria-label={buttonAriaLabel}
          onClick={onButtonClick}
        >
          {buttonIcon}
        </button>
      </div>
      <div className="col">
        <div className="card-body py-3">
          {badge ? (
            <span className={`badge ${badgeClassName ?? 'bg-success'} mb-2 d-inline-block`}>{badge}</span>
          ) : null}
          <h6 className="mb-1">{title}</h6>
          {subtitle ? <p className="text-muted small mb-1">{subtitle}</p> : null}
          {metadata ? <p className="text-muted small mb-0">{metadata}</p> : null}
        </div>
      </div>
    </div>
  </div>
)

export default MediaCard
