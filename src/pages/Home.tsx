import { useMemo } from 'react';
import PortalNavbar from '../components/Portal/PortalNavbar';
import HeroSection from '../components/Portal/HeroSection';
import NoticeBoard from '../components/Portal/NoticeBoard';
import RadioAtividadeSection from '../components/Portal/RadioAtividadeSection';
import Footer from '../components/Portal/Footer';

const Home = () => {
  const notices = useMemo(
    () => [
      {
        id: 1,
        title: 'Feira de Ciências 2026',
        date: '20 Abr 2026',
        excerpt: 'Participe nas apresentações dos projetos de cada turma e conheça as novas soluções tecnológicas.',
      },
      {
        id: 2,
        title: 'Novo Laboratório de Informática',
        date: '12 Abr 2026',
        excerpt: 'Espaço renovado com equipamentos modernos e ambiente colaborativo para trabalhos práticos.',
      },
      {
        id: 3,
        title: 'Semana da Leitura',
        date: '05 Abr 2026',
        excerpt: 'Atividades de leitura, debates e workshops que reforçam o gosto pelos livros e pela pesquisa.',
      },
    ],
    [],
  )

  return (
    <>
      <PortalNavbar />
      <HeroSection />
      <NoticeBoard notices={notices} />
      <RadioAtividadeSection />
      <Footer />
    </>
  )
}

export default Home
