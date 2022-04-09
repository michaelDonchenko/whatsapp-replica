import { useState } from 'react'
import styled from 'styled-components'
import ContactsSidebar from '../contacts-sidebar'
import MainContainer from './main-container'
import SideContainer from './side-container'

const DesktopWrapper: React.FC = () => {
  const [contactsSidebar, setContactsSidebar] = useState(false)

  return (
    <Container>
      <SideContainer setContactsSidebar={setContactsSidebar} />

      {contactsSidebar && (
        <ContactsSidebar setContactsSidebar={setContactsSidebar} />
      )}

      <MainContainer />
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
  height: 90vh;
  position: relative;
  overflow: hidden;
`

export default DesktopWrapper
