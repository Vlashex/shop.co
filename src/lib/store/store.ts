import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'



export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']