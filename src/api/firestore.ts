import { Room, User } from '../types/types'
import {
  collection,
  onSnapshot,
  where,
  getDocs,
  query,
  addDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid'

export async function fetchUsers(myId: string) {
  const q = query(collection(db, 'users'), where('uid', '!=', myId))
  const users: User[] = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    users.push(doc.data() as User)
  })

  return users
}

export async function createRoom(userId: string, myId: string) {
  const q = query(
    collection(db, 'rooms'),
    where('participants', 'array-contains', myId)
  )

  const docs = await getDocs(q)

  if (docs.docs.length > 0) {
    let foundRoom: Room | undefined

    docs.docs.forEach((doc) => {
      const room = doc.data() as Room
      if (room.participants.includes(userId)) {
        foundRoom = room
      }
    })

    if (foundRoom) {
      return foundRoom
    }
  }

  await addDoc(collection(db, 'rooms'), {
    uid: uuidv4(),
    status: 'pending',
    invitedFrom: myId,
    participants: [userId, myId],
    messages: [],
    img: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
  })

  const secondQuery = await getDocs(q)
  return secondQuery?.docs[0]?.data()
}

export async function fetchRooms(myId: string) {
  const q = query(collection(db, 'rooms'), where('uid', '!=', myId))
  const users: Room[] = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    users.push(doc.data() as Room)
  })

  return users
}
