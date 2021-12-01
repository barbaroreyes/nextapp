import '../styles/globals.css'
import Header from '../compo/Header';
import Footer from '../compo/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component 
      {...pageProps} 
      />
     <Footer/>
    </div>
  
  )
}

export default MyApp
