import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return(
    <div className="App">
        <Component {...pageProps} />     
</div>
  ) 
}

export default MyApp
