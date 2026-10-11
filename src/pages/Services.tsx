type Page = 'home' | 'services' | 'about' | 'contact'
interface ServicesProps { onNavigate: (page: Page) => void }

const services = [
  {
    emoji: '🧠',
    color: '#2B7A6F',
    colorLight: '#EDF7F5',
    tag: 'Método principal',
    title: 'Análisis de Conducta Aplicado (ABA)',
    what: 'La Terapia ABA (Applied Behavior Analysis) es el método con mayor respaldo científico para el tratamiento del autismo. A través de técnicas estructuradas, enseñamos habilidades funcionales de forma sistemática, motivadora y medible.',
    problem: 'Muchos niños con autismo tienen dificultades para aprender conductas cotidianas: comunicarse, seguir instrucciones, relacionarse o regular sus emociones. Las familias se sienten perdidas sin saber cómo ayudarlos.',
    benefit: 'Mayor independencia, mejor comunicación y reducción de conductas problemáticas. Cada avance es registrado y el plan se ajusta continuamente para garantizar el progreso.',
    img: 'https://images.unsplash.com/photo-1573691863165-14bf17020fd7?w=680&h=460&fit=crop&auto=format',
    imgAlt: 'Terapeuta ABA con niño',
  },
  {
    emoji: '🗣️',
    color: '#6D4FA0',
    colorLight: '#EDE8F7',
    tag: 'Comunicación',
    title: 'Terapia de Lenguaje y Comunicación',
    what: 'Intervención especializada en habla, lenguaje receptivo y expresivo, y comunicación alternativa (PECS, comunicación aumentativa). Adaptada al nivel de desarrollo de cada niño.',
    problem: 'Muchos niños con autismo no pueden comunicar sus necesidades, comprender instrucciones o iniciar conversaciones. Esto genera frustración intensa tanto para el niño como para la familia.',
    benefit: 'Mayor capacidad para expresarse y entender el entorno. Menos frustraciones, más confianza y mejor calidad de vida para toda la familia.',
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=680&h=460&fit=crop&auto=format',
    imgAlt: 'Terapeuta de lenguaje con niño',
  },
  {
    emoji: '🤲',
    color: '#E8922A',
    colorLight: '#FEF3E3',
    tag: 'Autonomía',
    title: 'Terapia Ocupacional e Integración Sensorial',
    what: 'Trabaja las habilidades motoras finas y gruesas, la coordinación, el procesamiento de estímulos sensoriales y las actividades de la vida diaria, como vestirse, comer y cuidar la higiene. El objetivo es favorecer la regulación y alcanzar la mayor autonomía posible.',
    problem: 'Muchos niños con autismo presentan hipersensibilidad o hiposensibilidad a sonidos, texturas, movimientos y otros estímulos, además de dificultades motrices o para realizar tareas cotidianas. Esto puede limitar su participación en casa y en el colegio.',
    benefit: 'Mayor independencia en actividades cotidianas, mejor regulación ante los estímulos del entorno y más seguridad para participar en la vida escolar, familiar y social.',
    img: 'https://images.unsplash.com/photo-1714646792977-4aa8f6890aac?w=680&h=460&fit=crop&auto=format',
    imgAlt: 'Terapia ocupacional',
  },
  {
    emoji: '👥',
    color: '#C0415A',
    colorLight: '#FDEEF2',
    tag: 'Habilidades Sociales',
    title: 'Habilidades Sociales y Terapia de Aprendizaje',
    what: 'Intervención individual y grupal para fortalecer la comunicación con pares, el juego cooperativo y el reconocimiento de emociones, junto con habilidades de atención, comprensión, lectoescritura y razonamiento necesarias para aprender.',
    problem: 'Algunos niños tienen dificultades para relacionarse, comprender las normas sociales o seguir el ritmo de aprendizaje escolar. Estas barreras pueden generar frustración, aislamiento y poca confianza en sus propias capacidades.',
    benefit: 'Mayor seguridad para relacionarse y aprender, mejores herramientas para desenvolverse en el colegio y avances en las habilidades académicas de acuerdo con las necesidades de cada niño.',
    img: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=680&h=460&fit=crop&auto=format',
    imgAlt: 'Niños en terapia de habilidades sociales',
  },
  {
    emoji: '👨‍👩‍👧',
    color: '#2E7AB0',
    colorLight: '#E6F2FA',
    tag: 'Apoyo Familiar',
    title: 'Escuela para Padres y Orientación Familiar',
    what: 'Talleres y sesiones de orientación para que padres y cuidadores aprendan estrategias concretas y aplicables en casa, el colegio y la comunidad.',
    problem: 'Muchas familias se sienten agotadas y sin herramientas para manejar las conductas de sus hijos en el día a día. La falta de apoyo en casa puede frenar los avances logrados en terapia.',
    benefit: 'Padres formados y empoderados aceleran el progreso de sus hijos. Una familia con herramientas es el mejor complemento a cualquier terapia.',
    img: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=680&h=460&fit=crop&auto=format',
    imgAlt: 'Padres en orientación familiar',
  },
]

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="page-enter" style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'white', padding: '64px 24px 56px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--teal-pale)', color: 'var(--teal)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
            🎯 Lo que ofrecemos
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--ink)', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Nuestros Servicios
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.75 }}>
            Cada servicio está diseñado por especialistas y adaptado al niño de manera individual. Trabajamos de forma integral para que los avances se vean en terapia, en casa y en el colegio.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: 'var(--cream)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 52,
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              {/* Image */}
              <div style={{ direction: 'ltr', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '3/2', background: s.colorLight }}>
                <img src={s.img} alt={s.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>

              {/* Content */}
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 13, background: s.colorLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{s.emoji}</div>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, background: s.colorLight, padding: '4px 12px', borderRadius: 20 }}>{s.tag}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: 'var(--ink)', marginBottom: 24, letterSpacing: '-0.02em', lineHeight: 1.25 }}>{s.title}</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    ['¿Qué es?', s.what],
                    ['¿Qué problema resuelve?', s.problem],
                    ['Beneficio para tu hijo', s.benefit],
                  ].map(([label, text]) => (
                    <div key={label} style={{ display: 'flex', gap: 14 }}>
                      <div style={{ width: 3, borderRadius: 2, background: s.color, flexShrink: 0, minHeight: 18, marginTop: 4 }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)', marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`@media(max-width:768px){section:nth-of-type(2) > div > div{grid-template-columns:1fr!important; direction:ltr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--purple)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'white', marginBottom: 14, letterSpacing: '-0.02em' }}>
            ¿No sabes por dónde empezar?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', marginBottom: 32, lineHeight: 1.7 }}>
            La primera consulta es gratuita. Te orientamos sin compromiso para que tomes la mejor decisión para tu hijo.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{ padding: '14px 32px', borderRadius: 12, fontWeight: 800, fontSize: 15, background: 'white', color: 'var(--purple)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'none' }}
          >Solicitar orientación gratuita →</button>
        </div>
      </section>
    </div>
  )
}