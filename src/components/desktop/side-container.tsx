import styled from 'styled-components'
import SearchBar from '../search-bar'

const SideContainer = () => {
  return (
    <Container>
      <Header></Header>

      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid lightgrey;
`

const Header = styled.div`
  display: flex;
  height: 50px;
  background-color: #dadada;
  border-bottom: 1px solid lightgrey;
`

const SearchWrapper = styled.div`
  background-color: #f4f0ec;
  height: 50px;
  border-bottom: 1px solid lightgrey;
`

export default SideContainer
