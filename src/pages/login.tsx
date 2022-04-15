import { signInWithGoogle } from '../firebase'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { onFirebaseLoginSuccess } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { User } from '../types/types'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = useAppSelector((state) => state.user.isAuth)

  const onClick = async () => {
    try {
      const user = await signInWithGoogle()

      dispatch(onFirebaseLoginSuccess(user as User))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <div>
      <button onClick={() => onClick()}>Google signin</button>
    </div>
  )
}

export default Login
