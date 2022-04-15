import styled from 'styled-components'
import { ReactComponent as Search } from '../assets/icons/magnify.svg'
import { useAppDispatch } from '../redux/hooks'
import { setSearchQuery } from '../redux/userSlice'

const SearchBar: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const dispatch = useAppDispatch()

  return (
    <InputContainer>
      <Input
        type='text'
        placeholder={placeholder || 'Search...'}
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
      />
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
  border-radius: 6px;
  background-color: white;
  width: 100%;
  height: 30px;
  color: gray;
  outline: none;
  border: none;
  padding-left: 15%;
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
