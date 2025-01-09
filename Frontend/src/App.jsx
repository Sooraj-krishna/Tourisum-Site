import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'
import UploadForm from './UploadForm'
import PlacesList from './PlacesList'
import Footer from './Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <PlacesList />
      <UploadForm />
      <Footer />
    </div>
  )
}

export default App
