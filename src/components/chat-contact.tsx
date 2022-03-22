import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setActiveChat } from '../redux/userSlice'
import { Contact } from '../types/user'
import ProfileImage from './profile-image'

const ChatContact: React.FC<{ contact: Contact }> = ({ contact }) => {
  const dispatch = useAppDispatch()
  const contactName = useAppSelector(
    (state) => state.user.activeChat?.contactName
  )

  const lastMessageText = contact.messages[
    contact.messages.length - 1
  ].messageText.slice(0, 9)

  const lastMessageTime =
    contact.messages[contact.messages.length - 1].createdAt

  const onClick = (contact: Contact) => {
    dispatch(setActiveChat(contact))
  }

  return (
    <Container
      onClick={() => onClick(contact)}
      isActive={contactName === contact.contactName}
    >
      <ProfileImage src={contact.imgUrl} />
      <NameContainer>
        <Name>{contact.contactName}</Name>
        <LightText>{lastMessageText + ' ...'}</LightText>
      </NameContainer>

      <LightText>{lastMessageTime}</LightText>
    </Container>
  )
}

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.isActive ? 'lightgray' : 'white')};
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

export default ChatContact
