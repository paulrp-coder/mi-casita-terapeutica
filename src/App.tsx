import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

type Page = 'home' | 'services' | 'about' | 'contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  function navigate(page: Page) {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--cream)' }}>
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && <Home onNavigate={navigate} />}
        {currentPage === 'services' && <Services onNavigate={navigate} />}
        {currentPage === 'about' && <About onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  )
}
