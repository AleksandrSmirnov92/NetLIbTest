import { createSlice } from "@reduxjs/toolkit";
type User = {
  firstName: string;
  email: string;
  topic: string;
  text: string;
};
const initialState: { user: User | null } = {
  user: null,
};
let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, actions: { type: string; payload: User }) {
      state.user = actions.payload;
    },
    changeUser(state, actions: { type: string; payload: User }) {
      state.user = actions.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, changeUser } = userSlice.actions;
