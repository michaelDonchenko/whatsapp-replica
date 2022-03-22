import styled from 'styled-components'

const Message: React.FC<{
  isMyMessage: boolean
  text: string
  time: string
}> = ({ isMyMessage, text, time }) => {
  return (
    <Container>
      {isMyMessage ? (
        <SelfMessage>
          {text}
          <Time>{time}</Time>
        </SelfMessage>
      ) : (
        <PartnerMessage>
          {text}
          <Time>{time}</Time>
        </PartnerMessage>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  padding: 10px;
`

const SelfMessage = styled.div`
  background-color: #dcf8c6;
  min-width: 50%;
  width: 50%;
  padding: 8px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-left: auto;
`

const PartnerMessage = styled.div`
  background-color: white;
  min-width: 50%;
  width: 50%;
  padding: 8px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Time = styled.div`
  color: gray;
  width: 100%;
  text-align: right;
`

export default Message
