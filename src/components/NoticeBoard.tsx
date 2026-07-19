interface Notice {
  id: number
  title: string
  date: string
  excerpt: string
}

interface NoticeBoardProps {
  notices: Notice[]
}

const NoticeBoard = ({ notices }: NoticeBoardProps) => {
  return (
    <section id="noticias" className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h4">Mural de Avisos</h2>
            <p className="text-muted mb-0">Últimas notícias e eventos da escola.</p>
          </div>
          <span className="badge bg-secondary">Atualizado</span>
        </div>

        <div className="row gy-4">
          {notices.map((notice) => (
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
