import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../redux/hooks'
import { Contact } from '../types/user'
import ChatContact from './chat-contact'

const ChatList: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  const { searchQuery } = useAppSelector((state) => state.user)

  function filterContacts() {
    if (searchQuery === '') {
      setFilteredContacts(contacts)
      return
    }

    const filteredResult = contacts.filter((contact) =>
      contact.contactName.match(searchQuery)
    )
    setFilteredContacts(filteredResult)
  }

  useEffect(() => {
    filterContacts()
  }, [searchQuery])

  return (
    <Container>
      {filteredContacts &&
        filteredContacts.map((contact) => (
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
