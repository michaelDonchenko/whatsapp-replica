import { GlobalStyles } from './global-styles'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import PrivateRoute from './router/private-route'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const App: React.FC = () => {
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />

          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Main />} />
            </Route>

            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
