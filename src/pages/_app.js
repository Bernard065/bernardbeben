import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const App = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} font-sans bg-black w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
export default App;