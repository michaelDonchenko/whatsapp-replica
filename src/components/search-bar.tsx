import styled from 'styled-components'
import { ReactComponent as Search } from '../icons/magnify.svg'

const SearchBar = () => {
  return (
    <InputContainer>
      <Input type='text' placeholder='Search or start new chat ' />
      <SearchIcon />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

const Input = styled.input`
  background-color: white;
  width: 100%;
  height: 30px;
  color: gray;
  outline: none;
  border: none;
  padding-left: 10%;
  padding-right: 5%;
`
const SearchIcon = styled(Search)`
  fill: gray;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 2%;
`

export default SearchBar
