import { useState } from 'react'
import styled from 'styled-components'
import { User } from '../../types/user'
import { Contact } from '../chat-list'
import MessagesContainer from './main-container'
import SideContainer from './side-container'
import { Contact as ContactI } from '../../types/user'

const DesktopWrapper: React.FC<{ user: User }> = ({ user }) => {
  const [activeChat, setActiveChat] = useState<ContactI | null>(null)

  return (
    <Container>
      <SideContainer user={user} setActiveChat={setActiveChat} />
      <MessagesContainer />
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
  height: 95vh;
`

export default DesktopWrapper
