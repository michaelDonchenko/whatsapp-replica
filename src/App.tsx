import { user as userMock } from './mocks/user-mock'
import { GlobalStyles } from './global-styles'
import Layout from './components/layout'
import DesktopWrapper from './components/desktop/desktop-wrapper'
import MobileWrapper from './components/mobile/mobile-wrapper'
import { useState } from 'react'
import { User } from './types/user'
import { useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState<User>(userMock)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function onWidthChange() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', onWidthChange)

    return () => {
      window.removeEventListener('resize', onWidthChange)
    }
  }, [])

  return (
    <Layout>
      <GlobalStyles />

      {width > 500 ? <DesktopWrapper user={user} /> : <MobileWrapper />}
    </Layout>
  )
}

export default App
