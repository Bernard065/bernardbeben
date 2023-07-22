import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;
