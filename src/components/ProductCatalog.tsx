const CATALOG_PDF_URL =
  'https://www.dropbox.com/scl/fi/vfv7psxozm5hjhi2e4ik2/Cat-logo-septiembre-2-MC.pdf?rlkey=jlysq7vrsffw5b9n9m5mkqpmr&st=9byj4cu5&dl=0'

export default function ProductCatalog() {
  return (
    <section className="catalog-section" aria-labelledby="catalog-title">
      <div className="catalog-shell">
        <div className="catalog-copy">
          <div className="catalog-eyebrow">
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M6.75 3.75h7.5l3 3v13.5H6.75V3.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M14.25 3.75v3h3M9.5 11h5M9.5 14.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Catálogo de productos
          </div>

          <h2 id="catalog-title" className="font-display catalog-title">
            Recursos pensados para acompañar cada avance
          </h2>
          <p className="catalog-description">
            Consulta nuestro catálogo de productos y contáctanos por WhatsApp para obtener más
            información o realizar tu pedido.
          </p>

          <div className="catalog-note">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 10.5v5M12 7.75v.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>
              Descubre materiales y recursos seleccionados para apoyar el aprendizaje, la autonomía
              y el bienestar en casa.
            </span>
          </div>

          <div className="catalog-action">
            <a
              href={CATALOG_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="catalog-download"
              aria-label="Descargar catálogo de productos en PDF; se abre en una pestaña nueva"
            >
              <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Descargar catálogo de productos
            </a>
          </div>
        </div>

        <div className="catalog-preview" aria-label="Vista previa del catálogo de productos disponible en PDF">
          <div className="catalog-orbit catalog-orbit-one" />
          <div className="catalog-orbit catalog-orbit-two" />
          <div className="catalog-document">
            <div className="catalog-document-top">
              <span>MI CASITA</span>
              <span>TERAPÉUTICA</span>
            </div>
            <div className="catalog-document-mark">
              <svg aria-hidden="true" width="46" height="46" viewBox="0 0 48 48" fill="none">
                <path d="M8 22.5 24 9l16 13.5V40H8V22.5Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M18.5 40V27.5h11V40M15 18v-6h6v1" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="catalog-document-kicker">EDICIÓN DIGITAL</span>
              <div className="font-display catalog-document-title">Catálogo de productos</div>
              <p>Recursos para acompañar el desarrollo y el aprendizaje.</p>
            </div>
            <div className="catalog-document-footer">
              <span>Edición digital</span>
              <span>PDF</span>
            </div>
          </div>
          <div className="catalog-file-badge">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6.75 3.75h7.5l3 3v13.5H6.75V3.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M14.25 3.75v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Disponible en PDF
          </div>
        </div>
      </div>

      <style>{`
        .catalog-section {
          background: var(--cream);
          padding: 80px 24px;
          overflow: hidden;
        }
        .catalog-shell {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr);
          gap: 72px;
          align-items: center;
        }
        .catalog-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          margin-bottom: 20px;
          border: 1px solid var(--purple-light);
          border-radius: 30px;
          background: var(--purple-light);
          color: var(--purple);
          font-size: 13px;
          font-weight: 700;
        }
        .catalog-title {
          max-width: 600px;
          margin: 0 0 18px;
          color: var(--ink);
          font-size: clamp(32px, 4.5vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }
        .catalog-description {
          max-width: 600px;
          margin: 0;
          color: var(--ink-mid);
          font-size: 16px;
          line-height: 1.75;
        }
        .catalog-note {
          display: flex;
          gap: 11px;
          max-width: 590px;
          margin-top: 24px;
          padding: 14px 16px;
          border-left: 3px solid var(--teal-mid);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          background: var(--teal-pale);
          color: var(--teal);
          font-size: 13px;
          line-height: 1.6;
        }
        .catalog-note svg { flex: 0 0 auto; margin-top: 1px; }
        .catalog-action {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
        }
        .catalog-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border: 0;
          border-radius: 12px;
          background: var(--teal-light);
          color: var(--teal);
          font-family: inherit;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
        }
        .catalog-download:hover {
          background: var(--teal-mid);
          color: var(--white);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .catalog-preview {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
        }
        .catalog-preview::before {
          content: '';
          position: absolute;
          inset: 8% 0;
          z-index: -2;
          border-radius: var(--radius-xl);
          background: linear-gradient(145deg, var(--teal-light), var(--purple-light));
          transform: rotate(3deg);
        }
        .catalog-orbit {
          position: absolute;
          z-index: -1;
          border: 1px solid rgba(43, 122, 111, .18);
          border-radius: 50%;
        }
        .catalog-orbit-one { width: 330px; height: 330px; }
        .catalog-orbit-two { width: 410px; height: 410px; }
        .catalog-document {
          width: 290px;
          min-height: 405px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          border: 1px solid var(--border);
          border-radius: 8px 22px 22px 8px;
          background: var(--white);
          box-shadow: var(--shadow-lg);
          color: var(--ink);
          transform: rotate(-4deg);
        }
        .catalog-document-top,
        .catalog-document-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--ink-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
        }
        .catalog-document-mark {
          width: 78px;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--teal-pale);
          color: var(--teal);
        }
        .catalog-document-kicker {
          color: var(--amber);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .14em;
        }
        .catalog-document-title {
          margin: 7px 0 10px;
          color: var(--purple);
          font-size: 38px;
          line-height: .96;
        }
        .catalog-document p {
          margin: 0;
          color: var(--ink-muted);
          font-size: 11px;
          line-height: 1.55;
        }
        .catalog-file-badge {
          position: absolute;
          right: 0;
          bottom: 48px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--white);
          box-shadow: var(--shadow-md);
          color: var(--purple);
          font-size: 12px;
          font-weight: 800;
        }
        @media (max-width: 820px) {
          .catalog-shell {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .catalog-copy { text-align: center; }
          .catalog-title,
          .catalog-description,
          .catalog-note { margin-left: auto; margin-right: auto; }
          .catalog-note { text-align: left; }
          .catalog-action { justify-content: center; }
          .catalog-preview { min-height: 460px; }
        }
        @media (max-width: 520px) {
          .catalog-section { padding: 64px 20px; }
          .catalog-action { flex-direction: column; gap: 11px; }
          .catalog-download { width: 100%; }
          .catalog-preview { min-height: 400px; }
          .catalog-preview::before { inset: 9% 2%; }
          .catalog-orbit-one { width: 260px; height: 260px; }
          .catalog-orbit-two { width: 330px; height: 330px; }
          .catalog-document {
            width: 235px;
            min-height: 340px;
            padding: 23px;
          }
          .catalog-document-title { font-size: 32px; }
          .catalog-file-badge { right: -8px; bottom: 28px; }
        }
      `}</style>
    </section>
  )
}
