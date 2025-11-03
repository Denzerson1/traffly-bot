import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import BuyerOptions from './pages/BuyerOptions'
import Statistics from './pages/Statistics'
import CreativeLibrary from './pages/CreativeLibrary'
import Offers from './pages/Offers'
import PWAGenerator from './pages/PWAGenerator'
import Finance from './pages/Finance'
import Reviews from './pages/Reviews'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import UserInstructions from './pages/UserInstructions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buyer-options" element={<BuyerOptions />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/creative-library" element={<CreativeLibrary />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/pwa-generator" element={<PWAGenerator />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/instructions" element={<UserInstructions />} />
      </Routes>
    </Router>
  )
}

export default App
