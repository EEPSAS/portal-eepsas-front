import PortalNavbar from '../components/Portal/PortalNavbar'
import Footer from '../components/Portal/Footer'

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PortalNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PortalLayout
