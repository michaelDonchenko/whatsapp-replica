import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks'
import ChatList from '../chat-list'
import ActionsFooter from './actions-footer'
import ActionsHeader from './actions-header'
import TopBar from './top-bar'

const MobileWrapper = () => {
  const { contacts } = useAppSelector((state) => state.user.user)
  return (
    <Container>
      <TopBar />

      <ActionsHeader />

      <ChatList contacts={contacts} />

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

export default MobileWrapper
