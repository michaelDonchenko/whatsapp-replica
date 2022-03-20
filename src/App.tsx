import { user } from './mocks/user'
import { GlobalStyles } from './global-styles'
import Layout from './components/layout'
import DesktopWrapper from './components/desktop-wrapper'
import MobileWrapper from './components/mobile-wrapper'

const App = () => {
  console.log(user)

  return (
    <Layout>
      <GlobalStyles />

      <DesktopWrapper />
      {/* <MobileWrapper /> */}
    </Layout>
  )
}

export default App
