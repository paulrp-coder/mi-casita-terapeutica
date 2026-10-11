import { useState, useEffect } from 'react'

type Page = 'home' | 'services' | 'about' | 'contact'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'home' },
  { label: 'Servicios', page: 'services' },
  { label: 'Nosotros', page: 'about' },
  { label: 'Contacto', page: 'contact' },
]

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (p: Page) => { onNavigate(p); setOpen(false) }

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(253,250,246,0.97)' : 'rgba(253,250,246,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src="/logo.svg" alt="Mi Casita Terapeutica" style={{height: 42, width: 42, borderRadius: '50%',objectFit: 'contain', boxShadow: '0 2px 8px rgba(43,122,111,0.3)', }} />
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--amber)', lineHeight: 1.2, fontStyle: 'italic', letterSpacing: '0.02em' }}>Mi Casita</div>
              <div style={{ fontWeight: 600, fontSize: 11, color: 'var(--teal-mid)', lineHeight: 1, letterSpacing: '0.06em',  textTransform: 'uppercase', fontStyle: 'italic' }}>Terapéutica</div>
            </div>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => go(page)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  background: currentPage === page ? 'var(--teal-pale)' : 'none',
                  color: currentPage === page ? 'var(--teal)' : 'var(--ink-mid)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (currentPage !== page) (e.currentTarget as HTMLButtonElement).style.background = 'var(--teal-pale)' }}
                onMouseLeave={e => { if (currentPage !== page) (e.currentTarget as HTMLButtonElement).style.background = 'none' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              style={{
                marginLeft: 12,
                padding: '9px 22px',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                background: 'var(--amber)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(232,146,42,0.35)',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4811f'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--amber)'; (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}
            >
              Consulta gratis
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
            className="show-mobile"
            aria-label="Menú"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '16px 24px 20px' }}>
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => go(page)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 16px', borderRadius: 10, marginBottom: 4,
                  fontWeight: 600, fontSize: 15,
                  background: currentPage === page ? 'var(--teal-pale)' : 'none',
                  color: currentPage === page ? 'var(--teal)' : 'var(--ink)',
                  border: 'none', cursor: 'pointer',
                }}
              >{label}</button>
            ))}
            <button
              onClick={() => go('contact')}
              style={{
                display: 'block', width: '100%', marginTop: 8,
                padding: '13px 16px', borderRadius: 10,
                fontWeight: 700, fontSize: 15,
                background: 'var(--amber)', color: 'white',
                border: 'none', cursor: 'pointer',
              }}
            >Solicitar consulta gratuita →</button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}