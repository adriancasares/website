import '../styles/globals.css'
import Link from 'next/link'
import { AnimateSharedLayout } from "framer-motion"


function MyApp({ Component, pageProps }) {
  return <AnimateSharedLayout>
    <div id="__app" style={{ '--text-color': '#E14689'}}>
      <Component {...pageProps} />
    </div>
  </AnimateSharedLayout>
}

export default MyApp
