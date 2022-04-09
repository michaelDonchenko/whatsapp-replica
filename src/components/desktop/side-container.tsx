import styled from 'styled-components'
import ProfileImage from '../profile-image'
import SearchBar from '../search-bar'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'
import { ReactComponent as Add } from '../../assets/icons/add.svg'
import ChatList from '../chat-list'
import { useAppSelector } from '../../redux/hooks'
import { useState } from 'react'

interface SideContainerProps {
  setContactsSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SideContainer: React.FC<SideContainerProps> = ({
  setContactsSidebar,
}) => {
  const { user } = useAppSelector((state) => state.user)
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <Container>
      <Header>
        <ProfileImage src={user?.img || 'profile image'} />

        <AddIcon onClick={() => setContactsSidebar(true)} />

        <DotsIcon onClick={() => setOpenDropdown(!openDropdown)} />
        {openDropdown && (
          <DropdownCopntainer>
            <Option>Add contact</Option>
            <Option>Logout</Option>
          </DropdownCopntainer>
        )}
      </Header>

      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <ChatList chats={[]} />
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
  position: relative;
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f0ec;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  padding: 0 10px;
  cursor: pointer;
`

const DotsIcon = styled(Dots)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: 15px;
  cursor: pointer;
`

const AddIcon = styled(Add)`
  fill: gray;
  width: 22px;
  height: 22px;
  margin-left: auto;
  cursor: pointer;
`

const DropdownCopntainer = styled.div`
  position: absolute;
  min-width: 120px;
  z-index: 200;
  background-color: white;
  border: 1px solid lightgray;
  top: 50px;
  right: 0;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
`

const Option = styled.div`
  color: gray;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  padding: 12px 4px;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`

export default SideContainer
