import Layout from './../components/layout'
import DesktopWrapper from './../components/desktop/desktop-wrapper'
import MobileWrapper from './../components/mobile/mobile-wrapper'
import useWidth from '../hooks/useWidth'

const Main = () => {
  const { width } = useWidth()

  return <Layout>{width > 500 ? <DesktopWrapper /> : <MobileWrapper />}</Layout>
}

export default Main
