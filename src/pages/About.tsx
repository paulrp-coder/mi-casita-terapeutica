type Page = 'home' | 'services' | 'about' | 'contact'
interface AboutProps { onNavigate: (page: Page) => void }

const values = [
  { icon: '❤️', color: '#C0415A', bg: '#FDEEF2', title: 'Calidez', desc: 'Cada familia merece sentirse escuchada, respetada y acompañada.' },
  { icon: '🔬', color: '#2B7A6F', bg: '#EDF7F5', title: 'Evidencia', desc: 'Solo usamos métodos respaldados por la ciencia y la práctica clínica.' },
  { icon: '🤝', color: '#6D4FA0', bg: '#EDE8F7', title: 'Colaboración', desc: 'Trabajamos en equipo con la familia, el colegio y otros especialistas.' },
  { icon: '📈', color: '#E8922A', bg: '#FEF3E3', title: 'Progreso real', desc: 'Metas concretas, medibles y revisadas continuamente.' },
]

const audience = [
  { icon: '👶', title: 'Niños con diagnóstico de TEA', desc: 'Desde edades tempranas hasta la adolescencia. La intervención temprana marca la diferencia.' },
  { icon: '🧩', title: 'Niños con retrasos del desarrollo', desc: 'Dificultades en habla, lenguaje, motricidad o habilidades adaptativas.' },
  { icon: '🏠', title: 'Familias que buscan orientación', desc: 'Padres que necesitan herramientas claras para apoyar a su hijo en casa y el colegio.' },
  { icon: '📚', title: 'Niños en etapa escolar', desc: 'Con dificultades de integración, conductas disruptivas o bajo desempeño por causas del neurodesarrollo.' },
]

const team = [
  { role: 'Analistas de Conducta ABA', specialty: 'Certificados con experiencia en autismo', emoji: '🧠', color: '#2B7A6F', bg: '#EDF7F5' },
  { role: 'Terapeutas de Lenguaje', specialty: 'Logopedas y fonoaudiólogos especializados', emoji: '🗣️', color: '#6D4FA0', bg: '#EDE8F7' },
  { role: 'Terapeutas Ocupacionales', specialty: 'Especialistas en neurodesarrollo', emoji: '🤲', color: '#E8922A', bg: '#FEF3E3' },
]

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="page-enter" style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ position: 'relative', background: 'white', padding: '64px 24px 56px', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,155,138,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,79,160,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--purple-light)', color: 'var(--purple)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
            🏠 Nuestra historia
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--ink)', marginBottom: 16, letterSpacing: '-0.02em' }}>Nosotros</h1>
          <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.75 }}>
            Mi Casita Terapéutica nació de la convicción de que cada niño merece un lugar donde sea comprendido, valorado y apoyado para alcanzar su máximo potencial — un lugar que se sienta como un hogar.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: 'var(--cream)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3', background: '#D1EDE9' }}>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&h=525&fit=crop&auto=format"
              alt="Equipo de Mi Casita Terapéutica"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--teal-pale)', color: 'var(--teal)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
              🌟 Nuestra Misión
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--ink)', marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Un hogar para crecer,{' '}
              <span style={{ color: 'var(--teal-mid)', fontStyle: 'italic' }}>no solo una clínica.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 16 }}>
              Nuestra misión es brindar terapias especializadas de alta calidad a niños con autismo y dificultades del desarrollo en Lima, en un ambiente cálido, seguro y familiar — como una casita — donde cada niño y cada familia se sienta genuinamente acompañada.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 24 }}>
              Creemos que el cambio real sucede cuando ciencia, amor y compromiso familiar trabajan juntos. Por eso no trabajamos solo con el niño: trabajamos con toda la familia.
            </p>
            <div style={{ padding: '20px 24px', borderRadius: 16, borderLeft: '4px solid var(--teal-mid)', background: 'var(--teal-pale)' }}>
              <p style={{ fontSize: 14, color: 'var(--teal)', fontStyle: 'italic', lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
                "Cada niño tiene un ritmo único. Nuestro rol es caminar a su lado, celebrar sus logros y nunca dejar de creer en su potencial."
              </p>
              <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 10, marginBottom: 0, fontWeight: 600 }}>— Equipo Mi Casita Terapéutica</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2) > div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Values */}
      <section style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>Nuestros valores</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 500, margin: '0 auto' }}>Los principios que guían cada sesión, cada decisión y cada interacción con las familias que confían en nosotros.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--cream)', textAlign: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = v.color; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = 'var(--shadow-md)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 16px' }}>{v.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section style={{ background: 'var(--cream)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-light)', color: 'var(--amber)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
              🎯 ¿A quién ayudamos?
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>Diseñado para estas familias</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 520, margin: '0 auto' }}>Si reconoces a tu hijo o a tu familia en alguna de estas situaciones, estamos aquí para acompañarte.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {audience.map((a) => (
              <div
                key={a.title}
                style={{ display: 'flex', gap: 18, padding: 24, borderRadius: 18, background: 'white', border: '1.5px solid var(--border)', alignItems: 'flex-start', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--teal-mid)'; el.style.boxShadow = 'var(--shadow-sm)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border)'; el.style.boxShadow = 'none' }}
              >
                <span style={{ fontSize: 32, flexShrink: 0, marginTop: 2 }}>{a.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 6 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>Nuestro equipo</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 480, margin: '0 auto' }}>Un equipo multidisciplinario comprometido con el desarrollo y bienestar de cada niño.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {team.map((t) => (
              <div key={t.role} style={{ padding: 28, borderRadius: 20, background: 'var(--cream)', border: '1.5px solid var(--border)', textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 16px', border: `2px solid ${t.color}20` }}>{t.emoji}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, color: 'var(--ink)', marginBottom: 6 }}>{t.role}</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{t.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#16120F', padding: '64px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'white', marginBottom: 14, letterSpacing: '-0.02em' }}>Conozcámonos</h2>
          <p style={{ fontSize: 16, color: '#8A7F79', marginBottom: 32, lineHeight: 1.7 }}>La primera consulta es gratuita. Conversemos sobre tu hijo y cómo podemos ayudarlo juntos.</p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ padding: '14px 32px', borderRadius: 12, fontWeight: 800, fontSize: 15, background: 'var(--teal-mid)', color: 'white', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(43,122,111,0.4)' }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal)'; b.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal-mid)'; b.style.transform = 'none' }}
          >Agendar una consulta →</button>
        </div>
      </section>
    </div>
  )
}
