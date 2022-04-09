import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../redux/hooks'
import { Chat } from '../types/user'
import ChatContact from './chat-contact'

const ChatList: React.FC<{ chats: Chat[] }> = ({ chats }) => {
  const [filteredChats, setFilteredChats] = useState(chats)

  const { searchQuery } = useAppSelector((state) => state.user)

  function filterChats() {
    if (searchQuery === '') {
      setFilteredChats(chats)
      return
    }

    const filteredResult = chats.filter((chat) => chat.uid.match(searchQuery))
    setFilteredChats(filteredResult)
  }

  useEffect(() => {
    filterChats()
  }, [searchQuery])

  return (
    <Container>
      {filteredChats &&
        filteredChats.map((contact) => (
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
