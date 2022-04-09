import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setActiveChat } from '../redux/userSlice'
import { Chat } from '../types/user'
import ProfileImage from './profile-image'

const ChatContact: React.FC<{ contact: Chat }> = ({ contact }) => {
  const dispatch = useAppDispatch()
  const contactName = useAppSelector(
    (state) => state.user.activeChat?.contactName
  )

  const lastMessageText = contact.messages[
    contact.messages.length - 1
  ].messageText.slice(0, 9)

  const lastMessageTime =
    contact.messages[contact.messages.length - 1].createdAt

  // const onClick = (contact: Contact) => {
  //   dispatch(setActiveChat(contact))
  // }

  return (
    <Container
      onClick={() => ''}
      isActive={contactName === contact.contactName}
    >
      {/* <ProfileImage src={contact.imgUrl} />
      <NameContainer>
        <Name>{contact.contactName}</Name>
        <LastMessageText>{lastMessageText + ' ...'}</LastMessageText>
      </NameContainer>

      <TimeContainer>
        <LastMessageTime hasUnreadMessages={contact.unreadMessages > 0}>
          {lastMessageTime}
        </LastMessageTime>

        {contact.unreadMessages > 0 && (
          <UnreadMessagesBadge>{contact.unreadMessages}</UnreadMessagesBadge>
        )}
      </TimeContainer> */}
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

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
`

const LastMessageText = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: gray;
`

const LastMessageTime = styled.div<{ hasUnreadMessages: boolean }>`
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => (props.hasUnreadMessages ? '#25d366' : 'gray')};
`

const UnreadMessagesBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background-color: #25d366;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-top: 4px;
`

export default ChatContact
