import ProductCatalog from '../components/ProductCatalog'

type Page = 'home' | 'services' | 'about' | 'contact'
interface HomeProps { onNavigate: (page: Page) => void }

const services = [
  {
    emoji: '🧠', color: '#2B7A6F', bg: '#EDF7F5',
    title: 'Análisis de Conducta (ABA)',
    desc: 'El método con mayor evidencia científica para desarrollar habilidades comunicativas, sociales y de aprendizaje en niños con autismo.',
  },
  {
    emoji: '🗣️', color: '#6D4FA0', bg: '#EDE8F7',
    title: 'Terapia de Lenguaje',
    desc: 'Trabajamos el habla, la comprensión y la comunicación alternativa para que cada niño pueda expresarse con confianza.',
  },
  {
    emoji: '🤲', color: '#E8922A', bg: '#FEF3E3',
    title: 'Terapia Ocupacional',
    desc: 'Desarrollamos habilidades motoras, sensoriales y de autonomía para que el niño participe plenamente en su vida diaria.',
  },
]

const benefits = [
  { icon: '🎯', title: 'Evaluación inicial gratuita', desc: 'Empezamos conociendo a tu hijo antes de cualquier compromiso. Sin costo, sin presión.' },
  { icon: '📋', title: 'Plan 100% personalizado', desc: 'Cada niño es único. Su plan de intervención también lo es.' },
  { icon: '👨‍👩‍👧', title: 'Involucra a toda la familia', desc: 'Formamos a los padres para que los avances continúen en casa, no solo en terapia.' },
  { icon: '🔬', title: 'Basado en evidencia', desc: 'Trabajamos exclusivamente con métodos validados científicamente por la comunidad médica.' },
]

const testimonials = [
  {
    text: "Gracias a Mi Casita, mi hijo pudo decir 'mamá' por primera vez a los 4 años. No tengo palabras para describir ese momento.",
    name: 'Lucía Ramos',
    role: 'Madre de Sebastián, 4 años',
    initials: 'LR',
    color: '#2B7A6F',
  },
  {
    text: "El equipo es increíblemente paciente y profesional. Nos explicaron todo con claridad y vimos cambios reales en solo 3 meses.",
    name: 'Carlos y María Herrera',
    role: 'Padres de Valeria, 6 años',
    initials: 'CH',
    color: '#6D4FA0',
  },
  {
    text: "Lo que más valoro es que nos enseñaron a nosotros también. Ahora sabemos cómo apoyar a Diego en casa todos los días.",
    name: 'Patricia Quispe',
    role: 'Madre de Diego, 5 años',
    initials: 'PQ',
    color: '#E8922A',
  },
]

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="page-enter" style={{ paddingTop: 68 }}>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--cream)' }}>
        {/* Background shapes */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,155,138,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,79,160,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left: copy */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--teal-pale)', color: 'var(--teal)',
              padding: '7px 16px', borderRadius: 30,
              fontSize: 13, fontWeight: 700, marginBottom: 24,
              border: '1px solid var(--teal-light)',
            }}>
              <span>🌿</span> Centro de Terapias Especializadas · Lima, Perú
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.15, color: 'var(--ink)', marginBottom: 20, letterSpacing: '-0.02em' }}>
              Tu hijo puede{' '}
              <span style={{ color: 'var(--teal-mid)', fontStyle: 'italic' }}>crecer</span>,{' '}
              comunicarse<br />y{' '}
              <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>florecer</span>.
            </h1>

            <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              Encontrar el apoyo correcto para tu hijo con autismo no debería ser tan difícil. En Mi Casita Terapéutica, te acompañamos con terapias especializadas, un equipo comprometido y un ambiente que se siente como un hogar.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}>
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15,
                  background: 'var(--teal-mid)', color: 'white', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(43,122,111,0.35)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal)'; b.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal-mid)'; b.style.transform = 'none' }}
              >Solicitar consulta gratuita</button>

              <button
                onClick={() => onNavigate('services')}
                style={{
                  padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15,
                  background: 'transparent', color: 'var(--teal-mid)',
                  border: '2px solid var(--teal-light)', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal-pale)'; b.style.borderColor = 'var(--teal-mid)' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'var(--teal-light)' }}
              >Ver servicios →</button>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 32, paddingTop: 28, borderTop: '1px solid var(--border)' }}>
              {[['100+', 'Familias acompañadas'], ['5', 'Especialidades terapéuticas'], ['100%', 'Enfoque personalizado']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--teal-mid)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4, fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image composition */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '4/5', background: '#D1EDE9',
            }}>
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&h=875&fit=crop&auto=format"
                alt="Niño feliz en sesión de terapia"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating badge — ABA */}
            <div style={{
              position: 'absolute', top: -16, right: -20,
              background: 'var(--purple)', color: 'white',
              borderRadius: 16, padding: '12px 18px', textAlign: 'center',
              boxShadow: '0 8px 24px rgba(109,79,160,0.35)',
            }}>
              <div style={{ fontSize: 20, fontWeight: 800 }}>ABA</div>
              <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 600 }}>Certificado</div>
            </div>

            {/* Floating badge — families */}
            <div style={{
              position: 'absolute', bottom: -16, left: -20,
              background: 'white', borderRadius: 16, padding: '14px 18px',
              boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: 12,
              border: '1px solid var(--border)', maxWidth: 220,
            }}>
              <span style={{ fontSize: 28 }}>⭐</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>Familias satisfechas</div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>en Lima y Perú</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`@media(max-width:768px){section:first-of-type > div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--purple-light)', color: 'var(--purple)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
              🎯 Nuestros servicios
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--ink)', marginBottom: 14, letterSpacing: '-0.02em' }}>
              Terapias especializadas para cada niño
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Cada sesión genera avances reales y medibles. Trabajamos con los métodos más efectivos y con el corazón puesto en tu familia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  padding: 28, borderRadius: 20,
                  border: '1.5px solid var(--border)',
                  background: 'var(--cream)',
                  cursor: 'default',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = s.color; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = 'var(--shadow-md)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 18 }}>{s.emoji}</div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button
              onClick={() => onNavigate('services')}
              style={{ padding: '12px 28px', borderRadius: 12, fontWeight: 700, fontSize: 14, background: 'var(--teal-mid)', color: 'white', border: 'none', cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--teal)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--teal-mid)' }}
            >Ver todos los servicios →</button>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ background: 'var(--cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '1/1', background: '#E0EEE7' }}>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&h=700&fit=crop&auto=format"
              alt="Terapeuta trabajando con niño"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-light)', color: 'var(--amber)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
              💡 ¿Por qué elegirnos?
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--ink)', marginBottom: 28, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              No solo tratamos el autismo.<br />
              <span style={{ color: 'var(--teal-mid)', fontStyle: 'italic' }}>Acompañamos a toda la familia.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {benefits.map((b) => (
                <div key={b.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: 4, fontSize: 15 }}>{b.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.65 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(3) > div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ─── PRODUCT CATALOG ─── */}
      <ProductCatalog />

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--teal-pale)', color: 'var(--teal)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
              💬 Lo que dicen las familias
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
              Historias que nos inspiran
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: 28, borderRadius: 20,
                  border: '1.5px solid var(--border)',
                  background: 'var(--cream)',
                  display: 'flex', flexDirection: 'column', gap: 20,
                }}
              >
                <div style={{ fontSize: 36, color: t.color, lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.75, flex: 1, marginTop: -16 }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 14 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-mid) 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            ¿Listo para dar el primer paso?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', marginBottom: 36, lineHeight: 1.7 }}>
            La primera consulta es gratuita y sin compromiso. Cuéntanos sobre tu hijo y te orientamos con honestidad.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              padding: '15px 36px', borderRadius: 14, fontWeight: 800, fontSize: 16,
              background: 'white', color: 'var(--teal)', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'translateY(-2px)'; b.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)' }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'none'; b.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)' }}
          >Contáctanos ahora →</button>
        </div>
      </section>
    </div>
  )
}