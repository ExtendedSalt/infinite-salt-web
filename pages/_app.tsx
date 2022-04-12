import '../styles/globals.scss'
import {useEffect} from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/nav'
import Sidebar from '../components/sidebar'
import Store from '../components/store'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from "next-auth/react"
import Router from "next/router";
import Cursor from '../components/cursor'
// import { GlobalStylesKuy } from '../components/Layout/Global'


import "../styles/nprogress.scss";
import NProgress from "nprogress"
import Footer from '../components/footer'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const navOpenMobile = Store((state) => state.navOpen_Mobile)

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);



  return (
    <>  
    

      <SessionProvider session={session}>
      {/* <GlobalStylesKuy /> */}
        <AnimatePresence>
          {navOpenMobile && <Sidebar />}
        </AnimatePresence>

        <Navbar />

        <Component {...pageProps} />
        
      </SessionProvider>
      <Cursor />
      <Footer />




    </>
  )
}

export default MyApp
