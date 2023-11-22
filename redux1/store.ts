// RTK Query with Redux Persist
// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import {
  userSlice,
  cartSlice,
} from "./slices"

import { 
  userApi
} from './services'

// For NextJS 
// We need to create dummy storage on the server-side (we don't want to share persisted state with multiple clients) and wrapper for locale storage on the client-side.
// From https://github.com/vercel/next.js/discussions/15687
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  }
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const rootReducer = combineReducers({
  user: userSlice.reducer,    
  cart: cartSlice.reducer,    
  [userApi.reducerPath]: userApi.reducer    
 });
 
 const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // blacklist: [userApi.reducerPath], // this is super dangerous we need a axios interceptor to check if JWT is expired and then refetch user data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore({
  reducer: persistedReducer,
  devTools:  process.env.NODE_ENV !== "development" ? false : true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      userApi.middleware,
    ),
})
 
// Not required for persistance but gives us utility to purge the store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist <--- this
// https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration