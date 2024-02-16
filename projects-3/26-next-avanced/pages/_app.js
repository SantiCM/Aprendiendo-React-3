import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (

    //En este caso damos el componente del layout porque queremos que este en todo momento
    <Layout>

      <Component {...pageProps} />

    </Layout>

  )

}

export default MyApp