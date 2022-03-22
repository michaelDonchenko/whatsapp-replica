import { GlobalStyles } from './global-styles'
import Layout from './components/layout'
import DesktopWrapper from './components/desktop/desktop-wrapper'
import MobileWrapper from './components/mobile/mobile-wrapper'
import { useState } from 'react'
import { useEffect } from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App: React.FC = () => {
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
    <Provider store={store}>
      <Layout>
        <GlobalStyles />

        {width > 500 ? <DesktopWrapper /> : <MobileWrapper />}
      </Layout>
    </Provider>
  )
}

export default App
