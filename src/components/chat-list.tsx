import styled from 'styled-components'
import { Contact } from '../types/user'
import ChatContact from './chat-contact'

const ChatList: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <Container>
      {contacts &&
        contacts.map((contact) => (
          <ChatContact key={contact.contactName} contact={contact} />
        ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`

export default ChatList
