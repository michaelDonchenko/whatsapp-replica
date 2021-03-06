import styled from 'styled-components'
import { ReactComponent as Circle } from '../../assets/icons/circle-outline.svg'
import { ReactComponent as Triangle } from '../../assets/icons/triangle-outline.svg'
import { ReactComponent as Square } from '../../assets/icons/square-outline.svg'
import { useAppDispatch } from '../../redux/hooks'
import { clearActiveChat } from '../../redux/userSlice'

const ActionsFooter: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <Container>
      <IconsWrapper>
        <TriangleIcon onClick={() => dispatch(clearActiveChat())} />
        <CircleIcon />
        <SquareIcon />
      </IconsWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 50px;
  margin-top: auto;
`

const IconsWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`

const CircleIcon = styled(Circle)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
`

const TriangleIcon = styled(Triangle)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
  transform: rotate(-90deg);
  cursor: pointer;
`

const SquareIcon = styled(Square)`
  fill: white;
  width: 26px;
  height: 26px;
  margin-right: 15px;
`

export default ActionsFooter
