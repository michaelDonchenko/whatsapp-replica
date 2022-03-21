import styled from 'styled-components'

const ProfileImage: React.FC<{ src: string }> = ({ src }) => (
  <Image src={src} alt='profile-image' />
)

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

export default ProfileImage
