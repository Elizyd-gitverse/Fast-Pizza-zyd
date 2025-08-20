import { createSlice } from "@reduxjs/toolkit"

//create state
const initialState = {
  username: ''
}

//action function reducer create slice
const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    FullName(state, action) {
      state.username = action.payload
    }
  }
})

//export 
export const {FullName} = userSlice.actions
export default userSlice.reducer

//useSelector
export const getFullName = (store) => store.user.username