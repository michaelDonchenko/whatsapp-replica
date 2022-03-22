export interface User {
  username: string
  imgUrl: string
  contacts: Contact[]
}

export interface Contact {
  imgUrl: string
  contactName: string
  lastConnected: string
  unreadMessages: number
  messages: Message[]
}

export interface Message {
  createdAt: string
  messageText: string
  sentFrom: string
}
