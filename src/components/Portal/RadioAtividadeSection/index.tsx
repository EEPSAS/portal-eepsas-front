import { NavLink } from 'react-router-dom';
import RadioFeatureCard from './RadioFeatureCard';
import EpisodeCard from './EpisodeCard';
import styles from './RadioAtividadeSection.module.css';

const radioFeatures = [
  {
    title: 'Programas temáticos',
    description: 'Roteiros de podcasts para incentivar a produção de conteúdo escolar.',
  },
  {
    title: 'Estúdios colaborativos',
    description: 'Alunos trabalham em grupos para criar episódios e entrevistas.',
  },
  {
    title: 'Técnicas de edição',
    description: 'Dicas de gravação, captação de áudio e produção de rádio.',
  },
  {
    title: 'Conexão com a comunidade',
    description: 'Impacto dos conteúdos da rádio dentro e fora da escola.',
  },
]

const episodes = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    title: 'Podcast Sobre Ciência e Tecnologia',
    date: '21 Abr 2026',
    duration: '18 min',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    title: 'Entrevista com Alunos de TI',
    date: '14 Abr 2026',
    duration: '22 min',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
    title: 'Sons da Escola: Edição Especial',
    date: '07 Abr 2026',
    duration: '15 min',
  },
]

const RadioAtividadeSection = () => {
  return (
    <section id="radioatividade" className={`py-5 ${styles.section}`}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <span className="badge bg-success mb-3">RadioAtividade</span>
            <h2 className="h3">A rádio escolar que conecta alunos e conteúdo</h2>
            <p className="text-muted mb-4">
              Um espaço para produzir, partilhar e consumir podcasts, entrevistas e roteiros com voz dos alunos.
            </p>
            <NavLink className="btn btn-success mb-4" to="/dashboard/radio">
              Ir para Rádio Escolar
            </NavLink>

            <div className="row row-cols-1 gy-3">
              {radioFeatures.map((feature) => (
                <RadioFeatureCard key={feature.title} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm overflow-hidden mb-4" style={{ minHeight: 360 }}>
              <div className="ratio ratio-16x9 bg-dark position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center">
                  <span className="text-white fs-5">Carrossel de vídeos</span>
                </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Últimos Episódios</h5>
                <div className="row gy-3">
                  {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 col-xl-10">
            <div className="d-flex align-items-center justify-content-between px-4 py-3 rounded-4 shadow-sm bg-white">
              <div className="d-flex align-items-center gap-3">
                <span className="badge bg-success rounded-circle" style={{ width: 40, height: 40, display: 'grid', placeItems: 'center' }}>
                  🎧
                </span>
                <span className="fw-semibold">Escute onde quiser</span>
              </div>
              <div className="d-flex gap-3">
                <a href="#" className="text-decoration-none text-secondary">
                  YouTube
                </a>
                <a href="#" className="text-decoration-none text-secondary">
                  Spotify
                </a>
                <a href="#" className="text-decoration-none text-secondary">
                  SoundCloud
                </a>
                <a href="#" className="text-decoration-none text-secondary">
                  Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadioAtividadeSection
