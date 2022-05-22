import { ToastContainer } from 'react-toastify'
import { wrapper } from '../redux/store'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.css'

const App = ({ Component, pageProps }) => (
  <>
    <NavBar />
    <Component {...pageProps} />
    <ToastContainer autoClose={2000} />
    <Footer />
  </>
)

export default wrapper.withRedux(App)
