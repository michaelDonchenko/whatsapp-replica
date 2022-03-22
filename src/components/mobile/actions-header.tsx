import styled from 'styled-components'
import { ReactComponent as Search } from '../../assets/icons/magnify.svg'
import { ReactComponent as Message } from '../../assets/icons/message-text.svg'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'

const ActionsHeader = () => {
  return (
    <Container>
      <ActionsSection>
        <Logo>WhatsApp</Logo>

        <SearchIcon />

        <MessageIcon />

        <DotsIcon />
      </ActionsSection>

      <PagesSelection>
        <PageLink>Calls</PageLink>
        <PageLink>Chats</PageLink>
        <PageLink>Contacts</PageLink>
      </PagesSelection>
    </Container>
  )
}

const Container = styled.div`
  background-color: #128c7e;
  height: 120px;
  width: 100%;
`

const ActionsSection = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  padding-left: 15px;
  align-items: center;
`

const Logo = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 500;
  flex-grow: 1;
`

const SearchIcon = styled(Search)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
`

const DotsIcon = styled(Dots)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
`

const MessageIcon = styled(Message)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
`

const PagesSelection = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const PageLink = styled.a`
  width: 90px;
  text-align: center;
  text-decoration: none;
  color: lightgray;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: white;
  }
`

export default ActionsHeader
