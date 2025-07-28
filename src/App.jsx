import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundDecorations from './components/BackgroundDecorations'
import CompleteOrderButton from './components/CompleteOrderButton'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream relative">
        <BackgroundDecorations />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CompleteOrderButton />
        </div>
      </div>
    </CartProvider>
  )
}

export default App 