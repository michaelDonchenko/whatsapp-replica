import styled from 'styled-components'
import User1 from '../../assets/images/user1.jpg'
import ProfileImage from '../profile-image'
import { ReactComponent as Clip } from '../../assets/icons/paperclip.svg'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'
import { ReactComponent as Happy } from '../../assets/icons/happy.svg'
import { ReactComponent as Microphone } from '../../assets/icons/microphone.svg'
import Message from '../message'

const MessagesContainer = () => {
  return (
    <Container>
      <Header>
        <ProfileImage src={User1} />
        <NameContainer>
          <Name>Name</Name>
          <LightText>test</LightText>
        </NameContainer>

        <ClipIcon />
        <DotsIcon />
      </Header>

      <Messages>
        <Message
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.'
          isMyMessage={true}
          time='02:02'
        />
        <Message time='02:02' text='test' isMyMessage={true} />
        <Message time='02:02' text='test' isMyMessage={false} />
      </Messages>

      <NewMessage>
        <HappyIcon />

        <NewMessageInput type='text' />
        <MicrophoneIcon />
      </NewMessage>
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
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background-color: #dadada;
  border-bottom: 1px solid lightgrey;
`

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  background-color: #fdf5e6;
  padding: 10px;
`

const NewMessage = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #dadada;
  border-top: 1px solid lightgrey;
  padding: 10px 15px;
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

const ClipIcon = styled(Clip)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: auto;
  cursor: pointer;
  transform: rotate(45deg);
`

const DotsIcon = styled(Dots)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: 15px;
  cursor: pointer;
`
const HappyIcon = styled(Happy)`
  fill: gray;
  width: 26px;
  height: 26px;
  cursor: pointer;
`

const MicrophoneIcon = styled(Microphone)`
  fill: gray;
  width: 26px;
  height: 26px;
  cursor: pointer;
`

const NewMessageInput = styled.input`
  background-color: white;
  width: 100%;
  height: 34px;
  border-radius: 4px;
  margin: 0 15px;
  color: gray;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 0 10px;
`

export default MessagesContainer
