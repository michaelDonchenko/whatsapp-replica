import styled from 'styled-components'
import User1 from '../assets/images/user1.jpg'
import ProfileImage from './profile-image'

const ChatList = () => {
  return (
    <Container>
      <Contact />
      <Contact />
      <Contact />
    </Container>
  )
}

const Contact = () => {
  return (
    <ChatContact>
      <ProfileImage src={User1} />
      <NameContainer>
        <Name>Name</Name>
        <LightText>test</LightText>
      </NameContainer>

      <LightText>2:01</LightText>
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
  height: 60px;
  background-color: white;
  padding: 0 15px;

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
