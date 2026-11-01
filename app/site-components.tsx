import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}

export function Brand() {
  return (
    <span className="brand" aria-label="GraviSoft">
      <Image className="brand-logo" src={sitePath("/gravisoft-logo.png")} alt="GraviSoft" width={593} height={199} />
    </span>
  );
}

export function Header() {
  const links = [
    { href: sitePath("/#sluzby"), label: "Služby" },
    { href: sitePath("/pripadove-studie/"), label: "Případové studie" },
    { href: sitePath("/#proces"), label: "Jak pracujeme" },
    { href: sitePath("/kariera/"), label: "Kariéra" },
  ];

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <a href={sitePath("/")} className="brand-link"><Brand /></a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          {links.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a href={sitePath("/#kontakt")} className="header-cta">Nezávazná konzultace <span>↗</span></a>
        <MobileMenu links={[...links, { href: sitePath("/#kontakt"), label: "Nezávazná konzultace" }]} />
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
