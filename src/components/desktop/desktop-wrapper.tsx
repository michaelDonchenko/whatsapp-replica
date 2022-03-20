import styled from 'styled-components'
import MessagesContainer from './messages-container'
import SideContainer from './side-container'

const DesktopWrapper = () => {
  return (
    <Container>
      <SideContainer />
      <MessagesContainer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: auto 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
  height: 95vh;
`

export default DesktopWrapper
