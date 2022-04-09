import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute = () => {
  const { isAuth } = useAppSelector((state) => state.user)

  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

export default PrivateRoute
