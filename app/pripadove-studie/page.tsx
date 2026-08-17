import type { Metadata } from "next";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: "Případová studie GetPuxi | GraviSoft",
  description: "Jak GraviSoft pomohl platformě GetPuxi využít AI pro chytřejší plánování rezervací a omezení prostojů.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Header />
      <section className="subpage-hero section-shell case-hero">
        <div>
          <p className="eyebrow"><span /> Případová studie · GetPuxi</p>
          <h1>Chytřejší rezervace.<br /><em>Méně prostojů.</em></h1>
          <p>AI doporučení, která pomáhají zákazníkům vybrat vhodnější termín a salonům lépe využít kapacitu.</p>
        </div>
        <div className="hero-side-note">
          <span>Segment</span><strong>Beauty & wellness</strong>
          <span>Řešení</span><strong>AI optimalizace rezervací</strong>
        </div>
      </section>

      <section className="case-summary section-shell">
        <div className="summary-lead">
          <p className="eyebrow"><span /> Kontext</p>
          <h2>Každá mezera v kalendáři znamená nevyužitou kapacitu.</h2>
        </div>
        <div className="summary-copy">
          <p>GetPuxi je platforma pro správu rezervací a každodenního provozu salonů. S růstem počtu rezervací vznikla příležitost využít dostupná data nejen k evidenci, ale i k aktivnímu plánování.</p>
          <p>Cílem nebylo přidat AI jen jako funkci navíc. Potřebovali jsme vytvořit doporučení, kterému zákazník rozumí, snadno ho použije a které zároveň zlepšuje vytížení salonu.</p>
        </div>
      </section>

      <section className="challenge-band">
        <div className="section-shell challenge-grid">
          <article><span>01 · Výzva</span><h2>Neefektivně rozložené termíny</h2><p>Volné mezery mezi rezervacemi snižovaly využití kapacit a komplikovaly plánování pracovního dne.</p></article>
          <article><span>02 · Řešení</span><h2>Doporučení založené na datech</h2><p>Systém vyhodnocuje historii, vytížení provozu i zákaznické preference a nabídne vhodnější termíny v pravý okamžik.</p></article>
          <article><span>03 · Dopad</span><h2>Plynulejší provoz bez tlaku</h2><p>Zákazník si stále vybírá sám. AI pouze zvýrazní variantu, která je výhodná pro něj i pro provozovnu.</p></article>
        </div>
      </section>

      <section className="results-section section-shell">
        <div className="results-copy">
          <p className="eyebrow"><span /> Výsledky</p>
          <h2>Funkce, kterou lidé skutečně používají.</h2>
          <p>Doporučování jsme zasadili přímo do rezervačního toku. Bez nové složité obrazovky, bez nutnosti učit zákazníky nový postup.</p>
          <a className="button button-primary" href="https://www.getpuxi.cz">Navštívit GetPuxi <span>↗</span></a>
        </div>
        <div className="results-grid">
          <div><strong>75 %+</strong><span>zákazníků využívá doporučené termíny</span></div>
          <div><strong>~1 hodina</strong><span>ušetřeného času každých 5 rezervací</span></div>
          <div><strong>Méně mezer</strong><span>plynulejší návaznost rezervací během dne</span></div>
          <div><strong>Bez tření</strong><span>doporučení je přirozenou součástí rezervace</span></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-shell cta-wrap">
          <div><p className="eyebrow eyebrow-light"><span /> Vaše příležitost</p><h2>Kde by data mohla<br /><em>pomoci vám?</em></h2></div>
          <div className="cta-copy"><p>Probereme váš proces a řekneme si otevřeně, zda v něm automatizace nebo AI dává smysl.</p><a className="button button-light" href="mailto:toman@gravisoft.cz?subject=Konzultace projektu">Probrat projekt <span>↗</span></a></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
