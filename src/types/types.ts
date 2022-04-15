export interface User {
  uid: string
  username: string
  img: string
  email: string
}

export interface Room {
  uid: string
  status: 'pending' | 'active'
  invitedFrom: string
  participants: string[]
  messages: Message[]
  img: string
}

export interface Message {
  id: string
  createdAt: Date
  messageText: string
  sender: string
}
