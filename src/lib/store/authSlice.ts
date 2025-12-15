import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../types";

const initialState: IAuth = {
  user: null,
  tokens: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuth>) => {
      return action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      return { ...state, user: action.payload };
    },
  },
  selectors: {
    selectUser: (state) => state.user,
  },
});

export const { setCredentials, setUser } = authSlice.actions;
export const { selectUser } = authSlice.selectors;
export default authSlice.reducer;
