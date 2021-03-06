import styled from 'styled-components'
import MessagesContainer from '../messages/messages-container'

const MainContainer: React.FC = () => {
  return (
    <Container>
      <MessagesContainer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  overflow-y: auto;
`

export default MainContainer
