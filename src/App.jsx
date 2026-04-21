import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Geschaeftsfuehrung from './pages/Geschaeftsfuehrung'
import Philosophie from './pages/Philosophie'
import Geschichte from './pages/Geschichte'
import Klassiker from './pages/Klassiker'
import Rohstoffe from './pages/Rohstoffe'
import SlowBrewing from './pages/SlowBrewing'
import Unabhaengig from './pages/Unabhaengig'
import Auszeichnungen from './pages/Auszeichnungen'
import Nachhaltigkeit from './pages/Nachhaltigkeit'
import RegionalePartnerschaften from './pages/RegionalePartnerschaften'
import ZertifikateGuetesiegel from './pages/ZertifikateGuetesiegel'
import Blog from './pages/Blog'
import Presse from './pages/Presse'
import MediathekDownloads from './pages/MediathekDownloads'
import Sponsoring from './pages/Sponsoring'
import Ansprechpersonen from './pages/Ansprechpersonen'
import FAQ from './pages/FAQ'
import Newsletter from './pages/Newsletter'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geschaeftsfuehrung" element={<Geschaeftsfuehrung />} />
        <Route path="/philosophie" element={<Philosophie />} />
        <Route path="/geschichte" element={<Geschichte />} />
        <Route path="/klassiker" element={<Klassiker />} />
        <Route path="/rohstoffe" element={<Rohstoffe />} />
        <Route path="/slow-brewing" element={<SlowBrewing />} />
        <Route path="/unabhaengig" element={<Unabhaengig />} />
        <Route path="/auszeichnungen" element={<Auszeichnungen />} />
        <Route path="/nachhaltigkeit" element={<Nachhaltigkeit />} />
        <Route path="/regionale-partnerschaften" element={<RegionalePartnerschaften />} />
        <Route path="/zertifikate-guetesiegel" element={<ZertifikateGuetesiegel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/mediathek-downloads" element={<MediathekDownloads />} />
        <Route path="/sponsoring" element={<Sponsoring />} />
        <Route path="/ansprechpersonen" element={<Ansprechpersonen />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
