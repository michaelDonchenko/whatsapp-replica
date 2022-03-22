import styled from 'styled-components'
import MessagesContainer from '../messages/messages-container'

const ChatRoom: React.FC = () => {
  return (
    <Container>
      <MessagesContainer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export default ChatRoom
