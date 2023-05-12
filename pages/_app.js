import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import styles from '../styles/index.module.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className={styles.fontFamily}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
