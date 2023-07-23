import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

const App = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} font-sans bg-black w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
export default App;