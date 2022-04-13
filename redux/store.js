import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer"

let store

const persistConfig = {
  timeout: 10, //Set the timeout function to 2 seconds
  key: 'root',
  storage,
  whitelist: ['currentCountry', 'cart'], // place to select which state you want to persist
};

// const persistConfig = {
//   key: 'primary',
//   storage,
//   whitelist: ['currentCountry', 'cart'], // place to select which state you want to persist
//   timeout: null,
// }

const persistedReducer = persistReducer(persistConfig, rootReducer)

function makeStore() {
  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
