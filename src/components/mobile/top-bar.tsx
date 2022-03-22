import styled from 'styled-components'
import { ReactComponent as Battery } from '../../assets/icons/battery.svg'
import { ReactComponent as Network } from '../../assets/icons/network.svg'
import { ReactComponent as Wifi } from '../../assets/icons/wifi.svg'

const TopBar: React.FC = () => {
  return (
    <Container>
      <WifiIcon />
      <NetworkIcon />
      <BattryIcon />
      <Time>11:40</Time>
    </Container>
  )
}

const Container = styled.div`
  background-color: #075e54;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Time = styled.div`
  color: white;
  font-size: 14px;
  margin-right: 5px;
`

const BattryIcon = styled(Battery)`
  fill: white;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

const WifiIcon = styled(Wifi)`
  fill: white;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

const NetworkIcon = styled(Network)`
  fill: white;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

export default TopBar
