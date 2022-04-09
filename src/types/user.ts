export interface User {
  uid: string
  username: string
  img: string
  email: string
  contacts: User[]
}

export interface Chat {
  uid: string
  contactName: string
  img: string
  participants: User[]
  messages: Message[]
}

export interface Message {
  id: string
  createdAt: Date
  messageText: string
  sender: string
}
