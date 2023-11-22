// // RTK Query with Redux Persist
// // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { createWrapper } from 'next-redux-wrapper';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   Persistor,
// } from 'redux-persist'

// import {
//   userSlice,
// } from "./slices"

// import { 
//   userApi
// } from './services'

// // For NextJS 
// // We need to create dummy storage on the server-side (we don't want to share persisted state with multiple clients) and wrapper for locale storage on the client-side.
// // From https://github.com/vercel/next.js/discussions/15687
// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   }
// }

// const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();




// const rootReducer = combineReducers({
//   user: userSlice.reducer,    
//   [userApi.reducerPath]: userApi.reducer    
//  });
 
//  const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   // blacklist: [userApi.reducerPath], // this is super dangerous we need a axios interceptor to check if JWT is expired and then refetch user data
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// let pendingQueries = [];

// const rtkQueryMiddleware = (api) => (next) => (action) => {
//     if (api.endpoints.getUserDetails.matchPending(action)) {
//         const promise = new Promise<void>((resolve) => {
//             action.meta.unsubscribe = () => {
//                 resolve();
//             };
//         });
//         pendingQueries.push(promise);
//     }
//     return next(action);
// };

// export const getRunningOperationPromises = () => {
//   const currentPromises = [...pendingQueries];
//   pendingQueries = []; // Reset the array
//   return currentPromises;
// };
 
// const makeStore =  () => {
//   const store = configureStore({
//     reducer: persistedReducer,
//     devTools:  process.env.NODE_ENV !== "development" ? false : true,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         // Redux persist
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//         rtkQueryMiddleware // Add the custom middleware here
//       }).concat(
//         userApi.middleware,
//       ),
//   });

//   // The createWrapper function expects makeStore to return a Redux store, but in your current implementation, you're returning an object that contains both the store and persistor.
//   // const persistor = persistStore(store);
//   (store as any).__PERSISTOR = persistStore(store);

//   return store;
// };
 

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof makeStore>['getState'];
// export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

// export type AppStore = ReturnType<typeof makeStore>;
// export const wrapper = createWrapper<AppStore>(makeStore, { debug: process.env.NODE_ENV !== "production" });

// // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist <--- this
// // https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration

// // --------------------------------

// import '../styles/globals.css';
// import { SessionProvider } from 'next-auth/react';
// import { Toaster } from 'react-hot-toast';
// import { wrapper } from '../redux1/store'; // Import your wrapper

// function App({ Component, pageProps }) {
//     return (
//       <SessionProvider session={pageProps.session}>
//         <Toaster />
//         <Component {...pageProps} />
//       </SessionProvider>
//     );
// }

// export default wrapper.withRedux(App);

// // ----------------------------------------

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//       store.dispatch(userApi.endpoints.getUserDetails.initiate("123456"));
      
//       // Wait for all RTK Query operations to complete
//       await Promise.all(getRunningOperationPromises());

//       return {
//           props: {
//               initialReduxState: store.getState(),
//           },
//       };
//   }
// );

export const nothing = () => {}