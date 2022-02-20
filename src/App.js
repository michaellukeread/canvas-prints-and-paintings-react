import NavigationBar from './components/NavigationBar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <>
    <NavigationBar />
    <main>
      <Landing />
      <About />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </>
)

export default App
