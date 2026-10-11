type Page = 'home' | 'services' | 'about' | 'contact'

interface FooterProps {
  onNavigate: (page: Page) => void
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Autismo-Mi-Casita-Terap%C3%A9utica/61560623434876/', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/micasitaterapeutica', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { label: 'TikTok', href: 'https://www.tiktok.com/@micasitaterapeutica', icon: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  )},
]

export default function Footer({ onNavigate }: FooterProps) {
  const navLinks: [string, Page][] = [
    ['Inicio', 'home'],
    ['Servicios', 'services'],
    ['Nosotros', 'about'],
    ['Contacto', 'contact'],
  ]

  return (
    <footer style={{ background: '#16120F', color: 'white', paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
             <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(58, 155, 138, 0.15)', display:      'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 8px rgba(58, 155, 138, 0.6))' 
             }}> 
              <img src="/logo.svg" alt="Mi Casita Terapéutica" style={{
                width: 40, height: 40, objectFit: 'contain' }} />
             </div>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.2, fontStyle: 'italic', letterSpacing: '0.02em' }}>
                 <span style={{ color: 'var(--amber)' }}>Mi Casita</span>
                 <span style={{ color: 'var(--teal-mid)' }}> Terapéutica</span>
                </div>
                <div style={{ fontSize: 11, color: '#7A9B94', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Lima, Perú</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#8A7F79', lineHeight: 1.7, maxWidth: 240 }}>
              Acompañamos a niños y familias en Lima con terapias especializadas, basadas en evidencia y llenas de calidez.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#8A7F79', textDecoration: 'none',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--teal-mid)'; (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = '#8A7F79' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5350', marginBottom: 16 }}>Páginas</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#8A7F79', padding: 0, transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#3A9B8A' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#8A7F79' }}
                  >{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick list */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5350', marginBottom: 16 }}>Servicios</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Terapia ABA', 'Terapia de Lenguaje', 'Terapia Ocupacional', 'Habilidades Sociales', 'Escuela para Padres'].map(s => (
                <li key={s} style={{ fontSize: 14, color: '#8A7F79' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5350', marginBottom: 16 }}>Contacto y ubicación</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', gap: 11, fontSize: 13, color: '#8A7F79', alignItems: 'flex-start' }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2, color: '#3A9B8A' }}>
                   <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                   <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                 </svg>
                 <span style={{ lineHeight: 1.65 }}>
                  <strong style={{ display: 'block', color: '#B8AFA9', fontWeight: 700 }}>Barranco, Lima</strong>
                  <span style={{ display: 'block' }}>Pasaje Viñita 101</span>
                  <span style={{ display: 'block', marginTop: 3 }}>A tres cuadras de la estación Plaza Flores del Metropolitano</span>
                </span>
              </li>

              <li style={{ display: 'flex', gap: 11, fontSize: 13, color: '#8A7F79', alignItems: 'center' }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: '#3A9B8A' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <a
                  href="https://wa.me/51985140104"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp al 985 140 104"
                  style={{ color: '#B8AFA9', fontWeight: 700, textDecoration: 'none' }}
                >
                  985 140 104
                </a>              
              </li>
            
              <li style={{ display: 'flex', gap: 11, fontSize: 13, color: '#8A7F79', alignItems: 'center' }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: '#3A9B8A' }}>
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7.5v5l3.25 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Lun–Sáb: 8am – 7pm</span>
              </li>

              <li style={{ display: 'flex', gap: 11, fontSize: 13, color: '#8A7F79', alignItems: 'center' }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: '#3A9B8A' }}>
                  <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg> 
                <a
                  href="mailto:micasitaterapeutica@gmail.com" 
                  style={{ 
                    color: '#B8AFA9', 
                    textDecoration: 'none', 
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  micasitaterapeutica@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
          <p style={{ fontSize: 12, color: '#5A5350', margin: 0 }}>
            © {new Date().getFullYear()} Mi Casita Terapéutica · Todos los derechos reservados
          </p>
          <p style={{ fontSize: 12, color: '#5A5350', margin: 0 }}>
            Especialistas en autismo y neurodesarrollo · Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  )
}