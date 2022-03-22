import styled from 'styled-components'
import { Contact as ContactI } from '../types/user'
import ProfileImage from './profile-image'

interface ChatListI {
  contacts: ContactI[]
  setActiveChat: React.Dispatch<React.SetStateAction<ContactI | null>>
}

const ChatList: React.FC<ChatListI> = ({ contacts, setActiveChat }) => {
  return (
    <Container>
      {contacts &&
        contacts.map((contact) => (
          <Contact key={contact.contactName} contact={contact} />
        ))}
    </Container>
  )
}

export const Contact: React.FC<{ contact: ContactI }> = ({ contact }) => {
  const lastMessageText = contact.messages[
    contact.messages.length - 1
  ].messageText.slice(0, 9)

  const lastMessageTime =
    contact.messages[contact.messages.length - 1].createdAt

  return (
    <ChatContact>
      <ProfileImage src={contact.imgUrl} />
      <NameContainer>
        <Name>{contact.contactName}</Name>
        <LightText>{lastMessageText + ' ...'}</LightText>
      </NameContainer>

      <LightText>{lastMessageTime}</LightText>
    </ChatContact>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`

const ChatContact = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 40px;
  padding: 0 15px;
  justify-content: center;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
`

const LightText = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: gray;
`

export default ChatList
