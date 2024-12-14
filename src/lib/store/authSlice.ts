import { createSlice } from "@reduxjs/toolkit/react";
import { IAuth, IUser } from "../types";

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
        setUser: (state: IAuth, {payload}: {payload: IUser}) => {
            return {...state, user: payload}
        },
    },
    selectors: {
        selectUser: (state) => state.user
    }
})

export const { setCredentials, setUser } = authSlice.actions
export const { selectUser } = authSlice.selectors
export default authSlice.reducer