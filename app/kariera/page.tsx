import type { Metadata } from "next";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: "Kariéra | GraviSoft",
  description: "Přidejte se ke GraviSoft a tvořte datová, automatizační a AI řešení s reálným dopadem.",
};

const values = [
  ["01", "Reálný dopad", "Nestavíme ukázky do šuplíku. Tvoříme řešení, která se používají v každodenním provozu."],
  ["02", "Moderní technologie", "Sledujeme vývoj AI a datových nástrojů, ale vybíráme je podle problému, ne podle trendu."],
  ["03", "Flexibilní spolupráce", "Remote, hybrid nebo kancelář — důležitější než místo je pro nás kvalitní výsledek a komunikace."],
  ["04", "Prostor růst", "Dostanete odpovědnost, zpětnou vazbu a možnost ovlivnit technické i produktové rozhodování."],
];

export default function CareersPage() {
  return (
    <main>
      <Header />
      <section className="subpage-hero section-shell career-hero">
        <div>
          <p className="eyebrow"><span /> Kariéra v GraviSoft</p>
          <h1>Tvořte technologie,<br />které mají <em>dopad.</em></h1>
          <p>Hledáme zvídavé lidi, kteří chtějí přemýšlet nad problémem, převzít odpovědnost a posouvat AI z prezentací do praxe.</p>
          <a className="button button-primary" href="#pozice">Prohlédnout pozice <span>↓</span></a>
        </div>
        <div className="career-orbit" aria-hidden="true"><i /><i /><i /><span>GRAVI<br />SOFT</span></div>
      </section>

      <section className="values-section section-shell">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Proč k nám</p><h2>Malý tým.<br /><em>Velký prostor tvořit.</em></h2></div>
          <p>Nejsme korporát. Každý člen týmu vidí kontext, komunikuje napřímo a může ovlivnit, jak výsledek funguje.</p>
        </div>
        <div className="values-grid">
          {values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="positions-section" id="pozice">
        <div className="section-shell">
          <div className="positions-head"><p className="eyebrow"><span /> Otevřené pozice</p><h2>Možná hledáme právě vás.</h2></div>
          <article className="position-card">
            <div className="position-main"><span>Engineering · AI</span><h3>AI Developer</h3><p>Budete se podílet na vývoji AI funkcí, automatizací a moderních webových aplikací. Hledáme zkušenost s Pythonem, chuť pracovat s daty a schopnost dotahovat nápad do použitelného řešení.</p></div>
            <div className="position-meta"><span>Forma spolupráce<strong>Dle dohody</strong></span><span>Místo<strong>Remote / hybrid</strong></span><a className="button button-primary" href="mailto:toman@gravisoft.cz?subject=AI Developer — mám zájem">Mám zájem <b>↗</b></a></div>
          </article>
          <div className="open-application"><div><strong>Nenašli jste svou roli?</strong><span>Pokud vám dává smysl, co stavíme, napište nám i tak.</span></div><a href="mailto:toman@gravisoft.cz?subject=Spontánní kandidatura">Ozvat se napřímo <span>↗</span></a></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
