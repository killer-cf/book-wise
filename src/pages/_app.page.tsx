import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
const nunito = Nunito({ subsets: ['cyrillic'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
