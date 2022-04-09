import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as ArrowBack } from '../assets/icons/arrow-back.svg'

interface ContactsSidebarProps {
  setContactsSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactsSidebar: React.FC<ContactsSidebarProps> = ({
  setContactsSidebar,
}) => {
  const [isClosing, setIsClosing] = useState(false)

  return (
    <Container isClosing={isClosing}>
      <Header>
        <ArrowBakcIcon
          onClick={() => (
            setIsClosing(true), setTimeout(() => setContactsSidebar(false), 400)
          )}
        />
        New chat
      </Header>
    </Container>
  )
}

export default ContactsSidebar

const Slide = keyframes`
  0% {
    left: -200px;
    opacity: 0
  }
  100% {
    left: 0;
    opacity: 1
  }
`

const SlideOut = keyframes`
  0% {
    left: 0;
    opacity: 1
  }
  100% {
    left: -200px;
    opacity: 0
  }
`

const Container = styled.div<{ isClosing: boolean }>`
  width: 30%;
  min-width: 200px;
  height: 100%;
  border-right: 1px solid lightgrey;
  position: absolute;
  z-index: 100;
  background-color: white;
  animation-name: ${(props) => (props.isClosing ? SlideOut : Slide)};
  animation-duration: 0.5s;
`

const Header = styled.div`
  color: white;
  background-color: #125f5c;
  min-height: 50px;
  height: 14%;
  display: flex;
  align-items: center;
  padding: 10px;
`

const ArrowBakcIcon = styled(ArrowBack)`
  fill: white;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;
`
