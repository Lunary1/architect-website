import Layout from '../components/Layout'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <Navbar />
        <Featured />
      </header>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>


    </>

  )
}

export default MyApp
