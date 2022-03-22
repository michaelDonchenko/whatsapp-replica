import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact, User } from '../types/user'
import { user as userMock } from '../mocks/user-mock'

export interface userState {
  user: User
  activeChat: Contact | null
  searchQuery: string
}

const initialState: userState = {
  user: userMock,
  activeChat: null,
  searchQuery: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<Contact>) => {
      state.activeChat = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { setActiveChat, setSearchQuery } = userSlice.actions

export default userSlice.reducer
