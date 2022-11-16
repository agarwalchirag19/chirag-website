import '../styles/globals.css'

import { MetaMaskProvider } from "metamask-react";
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return(
    <div className="App">
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
      
</div>
  ) 
}

export default MyApp
