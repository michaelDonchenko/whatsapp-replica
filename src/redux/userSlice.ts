import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact, User } from '../types/user'
import { user as userMock } from '../mocks/user-mock'

export interface userState {
  user: User
  activeChat: Contact | null
}

const initialState: userState = {
  user: userMock,
  activeChat: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<Contact>) => {
      state.activeChat = action.payload
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveChat } = userSlice.actions

export default userSlice.reducer
