import styled from 'styled-components'
import ProfileImage from '../profile-image'
import SearchBar from '../search-bar'
import MyImage from '../../assets/images/my-user.jpg'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'
import { ReactComponent as Message } from '../../assets/icons/message-text.svg'
import ChatList from '../chat-list'

const SideContainer = () => {
  return (
    <Container>
      <Header>
        <ProfileImage src={MyImage} />
        <MessageIcon />
        <DotsIcon />
      </Header>

      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <ChatList />
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
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
