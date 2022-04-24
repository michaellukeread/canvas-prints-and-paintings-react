import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from 'redux/store'

import NavBar from 'components/NavBar'

import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.css'

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <NavBar />
    <Component {...pageProps} />
    <ToastContainer autoClose={2000} />
  </Provider>
)

export default App
