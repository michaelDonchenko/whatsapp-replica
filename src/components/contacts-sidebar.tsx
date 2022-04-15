import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { createRoom } from '../api/firestore'
import { ReactComponent as ArrowBack } from '../assets/icons/arrow-back.svg'
import { User } from '../types/types'
import SearchBar from './search-bar'
import ProfileImage from './profile-image'
import { useAppSelector } from '../redux/hooks'

interface ContactsSidebarProps {
  setContactsSidebar: React.Dispatch<React.SetStateAction<boolean>>
  usersFromDB: User[] | []
}

const ContactsSidebar: React.FC<ContactsSidebarProps> = ({
  setContactsSidebar,
  usersFromDB,
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const { user: userFromRedux } = useAppSelector((state) => state.user)

  const createRoomInvitation = async (userId: string) => {
    if (userFromRedux) {
      const response = await createRoom(userId, userFromRedux.uid)
      console.log(response)
    }
  }

  return (
    <Container isClosing={isClosing}>
      <Header>
        <ArrowBakcIcon
          onClick={() => (
            setIsClosing(true), setTimeout(() => setContactsSidebar(false), 400)
          )}
        />
        New chat
      </Header>

      <SearchBar placeholder='Search for contacts' />

      <HR></HR>

      <UsersContainer>
        {usersFromDB?.map((user) => (
          <Contact
            onClick={() => createRoomInvitation(user.uid)}
            key={user.uid}
          >
            <ProfileImage src={user.img} />
            <Name>{user.username}</Name>
          </Contact>
        ))}
      </UsersContainer>
    </Container>
  )
}

export default ContactsSidebar

const Slide = keyframes`
  0% {
    left: -200px;
    opacity: 0
  }
  100% {
    left: 0;
    opacity: 1
  }
`

const SlideOut = keyframes`
  0% {
    left: 0;
    opacity: 1
  }
  100% {
    left: -200px;
    opacity: 0
  }
`

const Container = styled.div<{ isClosing: boolean }>`
  width: 30%;
  min-width: 200px;
  height: 100%;
  border-right: 1px solid lightgrey;
  position: absolute;
  z-index: 100;
  background-color: white;
  animation-name: ${(props) => (props.isClosing ? SlideOut : Slide)};
  animation-duration: 0.5s;
`

const Header = styled.div`
  color: white;
  background-color: #125f5c;
  min-height: 50px;
  height: 14%;
  display: flex;
  align-items: center;
  padding: 10px;
`

const ArrowBakcIcon = styled(ArrowBack)`
  fill: white;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;
`

const UsersContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 15px;

  &:hover {
    background-color: lightgray;
  }
`
const Name = styled.div`
  margin-left: 8px;
  color: #474545;
`

const HR = styled.div`
  background-color: lightgray;
  height: 1px;
  margin: 2px 0;
`
