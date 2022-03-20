import styled from 'styled-components'

const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #128c7e 15%, #cdcdcd 15% 85%);
  display: flex;
  justify-content: center;
`

export default Layout
