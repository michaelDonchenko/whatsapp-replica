import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../redux/hooks'
import { Room } from '../types/types'
import ProfileImage from './profile-image'

const RoomsList: React.FC<{ rooms: Room[] }> = ({ rooms }) => {
  const [filteredRooms, setFilteredRooms] = useState(rooms)

  const { searchQuery } = useAppSelector((state) => state.user)

  function filterChats() {
    if (searchQuery === '') {
      setFilteredRooms(rooms)
      return
    }

    const filteredResult = rooms.filter((chat) => chat.uid.match(searchQuery))
    setFilteredRooms(filteredResult)
  }

  useEffect(() => {
    filterChats()
  }, [searchQuery, rooms])

  return (
    <Container>
      {filteredRooms &&
        filteredRooms.map((room) => (
          <RoomContainer isActive={false} key={room.uid}>
            <ProfileImage src={room.img} />
          </RoomContainer>
        ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100%;
`

const RoomContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.isActive ? 'lightgray' : 'white')};
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`

export default RoomsList
