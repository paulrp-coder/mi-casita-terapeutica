import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'

interface ContactInfoItem {
  icon: ReactNode
  label: string
  value: ReactNode
  href?: string
  ariaLabel?: string
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    label: 'Ubicación',
    value: (
      <>
        <span style={{ display: 'block' }}>Barranco, Lima</span>
        <span style={{ display: 'block' }}>Pasaje Viñita 101</span>
        <span style={{ display: 'block', marginTop: 4, color: 'var(--ink-mid)', fontSize: 13, fontWeight: 500, lineHeight: 1.55 }}>
          A tres cuadras de la estación Plaza Flores del Metropolitano
        </span>
      </>
    ),
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '985 140 104',
    href: 'https://wa.me/51985140104',
    ariaLabel: 'Escribir por WhatsApp al 985 140 104',
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: 'Facebook',
    value: 'Autismo Mi Casita Terapéutica',
    href: 'https://www.facebook.com/people/Autismo-Mi-Casita-Terap%C3%A9utica/61560623434876/',
    ariaLabel: 'Visitar el perfil de Mi Casita Terapéutica en Facebook',
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    label: 'Instagram',
    value: '@micasitaterapeutica',
    href: 'https://www.instagram.com/micasitaterapeutica',
    ariaLabel: 'Visitar el perfil de Mi Casita Terapéutica en Instagram',
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    label: 'TikTok',
    value: '@micasitaterapeutica',
    href: 'https://www.tiktok.com/@micasitaterapeutica',
    ariaLabel: 'Visitar el perfil de Mi Casita Terapéutica en TikTok',
  },
  {
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5v5l3.25 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Horario',
    value: 'Lun–Sáb: 8am – 7pm',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/mqpebylp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Limpia el formulario después de enviar correctamente
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.")
      }
    } catch (error) {
      alert("Error de conexión. Por favor intenta más tarde.")
    }
  }   

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 12,
    border: `1.5px solid ${focused === name ? 'var(--teal-mid)' : 'var(--border)'}`,
    background: 'var(--cream)',
    fontSize: 14,
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    boxShadow: focused === name ? '0 0 0 3px rgba(58,155,138,0.12)' : 'none',
    fontFamily: 'inherit',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: 'var(--ink)',
    marginBottom: 7,
  }

  return (
    <div className="page-enter" style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'white', padding: '64px 24px 56px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-light)', color: 'var(--amber)', padding: '7px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
            ✉️ Estamos aquí para ti
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--ink)', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Hablemos sobre tu hijo
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.75 }}>
            La primera consulta es completamente gratuita y sin compromiso. Cuéntanos tu situación y te orientamos con honestidad.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ background: 'var(--cream)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 48, alignItems: 'start' }}>

          {/* Left: info + reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)', marginBottom: 8 }}>Información de contacto</h2>
              <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                Atendemos de forma presencial en Lima. También ofrecemos orientación por videollamada para familias en otras ciudades.
              </p>
            </div>

            {contactInfo.map((item) => {
              const content = (
                <>
                  <span style={{ color: 'var(--teal)', flexShrink: 0, lineHeight: 1.2 }}>{item.icon}</span>
                  <span>
                    <span style={{ display: 'block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-muted)', marginBottom: 2 }}>{item.label}</span>
                    <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>{item.value}</span>
                  </span>
                </>
              )
              const cardStyle: React.CSSProperties = {
                display: 'flex', gap: 14, padding: '14px 16px',
                borderRadius: 14, background: 'white',
                border: '1.5px solid var(--border)',
                transition: 'border-color 0.15s, transform 0.15s',
                textDecoration: 'none',
                cursor: item.href ? 'pointer' : 'default',
              }
              const handleEnter = (element: HTMLElement) => {
                element.style.borderColor = 'var(--teal-light)'
                if (item.href) element.style.transform = 'translateY(-1px)'
              }
              const handleLeave = (element: HTMLElement) => {
                element.style.borderColor = 'var(--border)'
                element.style.transform = 'none'
              }

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  style={cardStyle}
                  onMouseEnter={e => handleEnter(e.currentTarget)}
                  onMouseLeave={e => handleLeave(e.currentTarget)}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  style={cardStyle}
                  onMouseEnter={e => handleEnter(e.currentTarget)}
                  onMouseLeave={e => handleLeave(e.currentTarget)}
                >
                  {content}
                </div>
              )
            })}

            {/* Reassurance */}
            <div style={{ padding: '18px 20px', borderRadius: 14, background: 'var(--teal-pale)', border: '1px solid var(--teal-light)', marginTop: 4 }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>🌿</div>
              <p style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 500, lineHeight: 1.75, margin: 0 }}>
                <strong>No necesitas un diagnóstico confirmado</strong> para contactarnos. Si tienes dudas sobre el desarrollo de tu hijo, escríbenos. Te orientamos con honestidad y sin ninguna presión.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div style={{ background: 'white', borderRadius: 24, border: '1.5px solid var(--border)', padding: '64px 40px', textAlign: 'center' }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: 'var(--ink)', marginBottom: 12 }}>¡Mensaje recibido!</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.75, maxWidth: 360, margin: '0 auto 28px' }}>
                  Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto para coordinar tu consulta gratuita.
                </p>
                <button
                  onClick={() => {setSubmitted(false)
                    setForm({ 
                      name: "", 
                      email: "", 
                      phone: "", 
                      service: "", 
                      message: "",
                    })
                 }}                 
                  style={{ padding: '12px 28px', borderRadius: 12, fontWeight: 700, fontSize: 14, background: 'var(--teal-mid)', color: 'white', border: 'none', cursor: 'pointer' }}
                >Enviar otro mensaje</button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: 'white', borderRadius: 24, border: '1.5px solid var(--border)', padding: '36px 36px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>Solicitar consulta gratuita</h2>
                  <p style={{ fontSize: 13, color: 'var(--ink-muted)' }}>Respondemos dentro de 24 horas hábiles.</p>
                </div>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Nombre completo <span style={{ color: '#C0415A' }}>*</span></label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Ej: Ana García"
                      style={fieldStyle('name')}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Correo electrónico <span style={{ color: '#C0415A' }}>*</span></label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      style={fieldStyle('email')}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Teléfono / WhatsApp</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="Ej: 987 654 321"
                    style={fieldStyle('phone')}
                    onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Service select */}
                <div>
                  <label style={labelStyle}>¿En qué servicio estás interesado/a?</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...fieldStyle('service'), appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A706A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 40 }}
                    onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                  >
                    <option value="">Selecciona un servicio (opcional)</option>
                    <option value="aba">Terapia ABA</option>
                    <option value="lenguaje">Terapia de Lenguaje</option>
                    <option value="ocupacional">Terapia Ocupacional</option>
                    <option value="social">Habilidades Sociales</option>
                    <option value="padres">Escuela para Padres</option>
                    <option value="no_se">No lo sé, necesito orientación</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Cuéntanos sobre tu hijo <span style={{ color: '#C0415A' }}>*</span></label>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="Describe brevemente la situación de tu hijo y cómo podemos ayudarte..."
                    style={{ ...fieldStyle('message'), resize: 'none' }}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '15px 24px',
                    borderRadius: 12, fontWeight: 800, fontSize: 16,
                    background: 'var(--teal-mid)', color: 'white',
                    border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(43,122,111,0.3)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal)'; b.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--teal-mid)'; b.style.transform = 'none' }}
                >Enviar solicitud de consulta →</button>

                <p style={{ fontSize: 12, color: 'var(--ink-muted)', textAlign: 'center', margin: 0 }}>
                  🔒 Tu información es confidencial y nunca será compartida con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2) > div{grid-template-columns:1fr!important} section:nth-of-type(2) form > div:first-of-type > div:first-of-type{grid-template-columns:1fr!important}}`}</style>
      </section>
    </div>
  )
}
