import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'assets/styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from 'src/redux/store'

export default function App({ Component, pageProps }: AppProps) {

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  const theme = extendTheme({
    fonts: {
      body: 'Inter, sans-serif',
      heading: 'Inter, sans-serif',
    },
  })

  return (
    <Provider store={storeRef.current}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
