import styled from 'styled-components'
import ProfileImage from '../profile-image'
import SearchBar from '../search-bar'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'
import { ReactComponent as Message } from '../../assets/icons/message-text.svg'
import ChatList from '../chat-list'
import { useAppSelector } from '../../redux/hooks'

const SideContainer: React.FC = () => {
  const { user } = useAppSelector((state) => state.user)
  const { contacts } = user

  return (
    <Container>
      <Header>
        <ProfileImage src={user.imgUrl} />
        <MessageIcon />
        <DotsIcon />
      </Header>

      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <ChatList contacts={contacts} />
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  min-width: 200px;
  height: 100%;
  border-right: 1px solid lightgrey;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background-color: #dadada;
  border-bottom: 1px solid lightgrey;
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f0ec;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  padding: 0 10px;
`

const MessageIcon = styled(Message)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: auto;
  cursor: pointer;
`

const DotsIcon = styled(Dots)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: 15px;
  cursor: pointer;
`

export default SideContainer
