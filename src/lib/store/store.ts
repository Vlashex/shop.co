import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authSlice from './authSlice'

import {
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';


const createNoopStorage = () => {
  return {
    getItem(_key:any) {
      return Promise.resolve(null);
    },
    setItem(_key:any, value:any) {
      return Promise.resolve(value);
    },
    removeItem(_key:any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  auth: authSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return configureStore({
      reducer: rootReducer
    })
  }
  
  let store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
        }
      })
  })
  store.__persistor = persistStore(store)
  return store
}
export const persistor = persistStore(makeStore());

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']