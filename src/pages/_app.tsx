import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  let dwadaw = 'dada'
  console.log(dwadaw)
  return <Component {...pageProps} />
}
