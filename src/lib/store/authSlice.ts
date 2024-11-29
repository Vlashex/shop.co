import { createSlice } from "@reduxjs/toolkit/react";
import { IAuth } from "../types";

const initialState:IAuth = {
    user: null,
    tokens: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCredentials: (state: IAuth, {payload}: {payload: IAuth}) => {
            return payload
        },

    },
    selectors: {
        selectUser: (state) => state.user
    }
})

export const { setCredentials } = authSlice.actions
export const { selectUser } = authSlice.selectors
export default authSlice.reducer