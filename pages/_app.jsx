import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate as ReduxPersistGate } from "redux-persist/integration/react";
import { Toaster } from 'react-hot-toast';

import { persistor, store } from "../redux1/store";

export default function App({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <ReduxPersistGate loading={<div>loading...</div>} persistor={persistor}>
          <Toaster />
          <Component {...pageProps} />
        </ReduxPersistGate>
      </ReduxProvider>
    </SessionProvider>
  )
}