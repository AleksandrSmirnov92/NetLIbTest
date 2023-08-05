import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
export default store;
// Этот нужно для хуков useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
