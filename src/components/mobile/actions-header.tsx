import styled from 'styled-components'
import { ReactComponent as Message } from '../../assets/icons/message-text.svg'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'

const ActionsHeader: React.FC = () => {
  return (
    <Container>
      <ActionsSection>
        <Logo>WhatsApp</Logo>

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
  justify-content: space-between;
`

const PageLink = styled.a`
  padding: 0 6%;
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
