import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContactsSidebar from '../contacts-sidebar'
import MainContainer from './main-container'
import SideContainer from './side-container'
import { fetchUsers } from '../../api/firestore'
import { useAppSelector } from '../../redux/hooks'
import { User } from '../../types/types'

const DesktopWrapper: React.FC = () => {
  const [contactsSidebar, setContactsSidebar] = useState(false)
  const { user: userFromRedux } = useAppSelector((state) => state.user)

  const [users, setUsers] = useState<User[]>([])

  const getUsers = async () => {
    if (userFromRedux) {
      const response = await fetchUsers(userFromRedux.uid)
      setUsers(response)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <SideContainer setContactsSidebar={setContactsSidebar} />

      {contactsSidebar && (
        <ContactsSidebar
          usersFromDB={users}
          setContactsSidebar={setContactsSidebar}
        />
      )}

      <MainContainer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: auto 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
  height: 90vh;
  position: relative;
  overflow: hidden;
`

export default DesktopWrapper
