export interface User {
  uid: string
  username: string
  img: string
  email: string
  contacts: User[]
}

export interface Contact {
  imgUrl: string
  contactName: string
  lastConnected: string
  unreadMessages: number
  messages: Message[]
}

export interface Message {
  id: string
  createdAt: string
  messageText: string
  sentFrom: string
}
