import { createSlice } from "@reduxjs/toolkit/react";
import { Auth } from "./types";

const initialState:Auth = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCredentials: (state: Auth, {payload}: {payload: Auth}) => {
            state = payload
        },

    },
    selectors: {
        selectUser: (state) => state.user
    }
})

export const { setCredentials } = authSlice.actions
export const { selectUser } = authSlice.selectors
export default authSlice.reducer