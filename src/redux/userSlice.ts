import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact, User } from '../types/user'

export interface userState {
  user: User | null
  activeChat: Contact | null
  searchQuery: string
  isAuth: boolean
}

const initialState: userState = {
  user: null,
  activeChat: null,
  searchQuery: '',
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onFirebaseLoginSuccess: (state, action: PayloadAction<User>) => {
      if (!action.payload) return

      state.user = action.payload

      state.isAuth = true
    },
    setActiveChat: (state, action: PayloadAction<Contact>) => {
      state.activeChat = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    clearActiveChat: (state) => {
      state.activeChat = null
    },
  },
})

export const {
  setActiveChat,
  setSearchQuery,
  clearActiveChat,
  onFirebaseLoginSuccess,
} = userSlice.actions

export default userSlice.reducer
