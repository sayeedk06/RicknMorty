import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Error from "next/error";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }

  return <>
        <Navbar key='1'/>
        <Component {...pageProps} />
        </>
}
