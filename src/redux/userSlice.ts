import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Room, User } from '../types/types'

export interface userState {
  user: User | null
  activeChat: Room | null
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
    setActiveChat: (state, action: PayloadAction<Room>) => {
      state.activeChat = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    clearActiveChat: (state) => {
      state.activeChat = null
    },
    onFirebaseLogout: (state) => {
      state.isAuth = false
      state.user = null
    },
  },
})

export const {
  setActiveChat,
  setSearchQuery,
  clearActiveChat,
  onFirebaseLoginSuccess,
  onFirebaseLogout,
} = userSlice.actions

export default userSlice.reducer
