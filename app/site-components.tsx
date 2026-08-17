export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}

export function Brand() {
  return (
    <span className="brand" aria-label="GraviSoft">
      <img className="brand-logo" src={sitePath("/gravisoft-logo.png")} alt="GraviSoft" />
    </span>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <a href={sitePath("/")} className="brand-link"><Brand /></a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href={sitePath("/#sluzby")}>Služby</a>
          <a href={sitePath("/pripadove-studie/")}>Případové studie</a>
          <a href={sitePath("/#proces")}>Jak pracujeme</a>
          <a href={sitePath("/kariera/")}>Kariéra</a>
        </nav>
        <a href={sitePath("/#kontakt")} className="header-cta">Nezávazná konzultace <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Otevřít menu"><span /><span /></summary>
          <nav>
            <a href={sitePath("/#sluzby")}>Služby</a>
            <a href={sitePath("/pripadove-studie/")}>Případové studie</a>
            <a href={sitePath("/#proces")}>Jak pracujeme</a>
            <a href={sitePath("/kariera/")}>Kariéra</a>
            <a href={sitePath("/#kontakt")}>Nezávazná konzultace</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-top">
        <div className="footer-brand"><Brand /><p>Data, automatizace a AI s měřitelným přínosem pro váš byznys.</p></div>
        <div className="footer-col"><strong>Navigace</strong><a href={sitePath("/#sluzby")}>Služby</a><a href={sitePath("/pripadove-studie/")}>Případové studie</a><a href={sitePath("/kariera/")}>Kariéra</a></div>
        <div className="footer-col"><strong>Kontakt</strong><a href="mailto:toman@gravisoft.cz">toman@gravisoft.cz</a><a href="tel:+420602720416">+420 602 720 416</a></div>
        <div className="footer-col"><strong>Vedení</strong><span>David Vítek Toman · CEO</span><span>Martin Gráf · CTO</span></div>
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 GraviSoft</span><span>Řešení, která dávají smysl.</span></div>
    </footer>
  );
}
