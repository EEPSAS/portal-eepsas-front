import { useMemo, useState } from 'react'

interface Notice {
  id: number
  title: string
  date: string
  excerpt: string
}

const categories = ['Destaques', 'Inovações', 'Eventos', 'Conquistas'] as const

type NoticeCategory = (typeof categories)[number]

interface NoticeBoardProps {
  notices: Notice[]
}

const NoticeFilterButton = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    type="button"
    className={`btn btn-sm ${active ? 'btn-primary' : 'btn-outline-secondary'}`}
    onClick={onClick}
  >
    {label}
  </button>
)

const NoticeBoard = ({ notices }: NoticeBoardProps) => {
  const noticeSets = useMemo(
    () => ({
      Destaques: notices,
      Inovações: [
        {
          id: 11,
          title: 'Laboratório Maker inaugurado',
          date: '22 Abr 2026',
          excerpt: 'Equipamentos para robótica e programação gráfica já estão disponíveis para os alunos.',
        },
        {
          id: 12,
          title: 'Workshop de IA',
          date: '18 Abr 2026',
          excerpt: 'A turma de informática participa de um seminário sobre ética e inovação tecnológica.',
        },
      ],
      Eventos: [
        {
          id: 21,
          title: 'Festival Cultural',
          date: '28 Abr 2026',
          excerpt: 'Apresentações artísticas, feiras de ciência e exposições de trabalhos dos alunos.',
        },
        {
          id: 22,
          title: 'Semana do Desporto',
          date: '02 Mai 2026',
          excerpt: 'Competições entre turmas, torneios e atividades físicas para o corpo e a mente.',
        },
      ],
      Conquistas: [
        {
          id: 31,
          title: 'Prémio na Olimpíada de Matemática',
          date: '14 Abr 2026',
          excerpt: 'A equipa da escola trouxe reconhecimento regional e uma nova inspiração para todos.',
        },
        {
          id: 32,
          title: 'Bolsa de Estudos Técnica',
          date: '09 Abr 2026',
          excerpt: 'Alunos premiados em projetos de pesquisa já garantiram novas oportunidades acadêmicas.',
        },
      ],
    }),
    [notices],
  )

  const [activeCategory, setActiveCategory] = useState<NoticeCategory>(categories[0])
  const activeNotices = noticeSets[activeCategory]

  return (
    <section id="noticias" className="py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
          <div>
            <h2 className="h4">Mural de Avisos</h2>
            <p className="text-muted mb-0">Escolha um tipo de aviso e veja os cards dinâmicos.</p>
          </div>
          <div className="btn-group" role="group" aria-label="Filtros de avisos">
            {categories.map((category) => (
              <NoticeFilterButton
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        <div className="row gy-4">
          {activeNotices.map((notice) => (
            <div key={notice.id} className="col-md-6 col-xl-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <small className="text-uppercase text-primary mb-2 d-block">{notice.date}</small>
                  <h5>{notice.title}</h5>
                  <p className="text-muted mb-0">{notice.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NoticeBoard
