import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks'
import ChatList from '../chat-list'
import SearchBar from '../search-bar'
import ActionsFooter from './actions-footer'
import ActionsHeader from './actions-header'
import ChatRoom from './chat-room'
import TopBar from './top-bar'

const MobileWrapper: React.FC = () => {
  const {
    user: { contacts },
    activeChat,
  } = useAppSelector((state) => state.user)

  return (
    <Container>
      <TopBar />

      {activeChat ? (
        <ChatRoom />
      ) : (
        <>
          <ActionsHeader />

          <SearchContainer>
            <SearchBar />
          </SearchContainer>

          <ChatList contacts={contacts} />
        </>
      )}

      <ActionsFooter />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: white;
`

const SearchContainer = styled.div`
  padding: 0 20px 10px 20px;
`

export default MobileWrapper
