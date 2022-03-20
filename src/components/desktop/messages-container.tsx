import styled from 'styled-components'

const MessagesContainer = () => {
  return (
    <Container>
      <Header />

      <Messages></Messages>

      <NewMessageContainer></NewMessageContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  height: 50px;
  background-color: #dadada;
  border-bottom: 1px solid lightgrey;
`

const Messages = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #fdf5e6;
`

const NewMessageContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: #dadada;
  border-top: 1px solid lightgrey;
`

export default MessagesContainer
