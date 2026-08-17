import { Footer, Header, sitePath } from "./site-components";

const services = [
  {
    number: "01",
    title: "Datová analytika & BI",
    text: "Propojíme roztříštěná data do přehledů, které ukazují, co se ve firmě skutečně děje — a kde vzniká prostor pro růst.",
    tags: ["Dashboardy", "Reporting", "Datové toky"],
  },
  {
    number: "02",
    title: "Automatizace procesů",
    text: "Odstraníme opakující se administrativu, propojíme systémy a zrychlíme workflow bez zbytečných zásahů vašeho týmu.",
    tags: ["Integrace", "Workflow", "Úspora času"],
  },
  {
    number: "03",
    title: "AI integrace",
    text: "Zapojíme AI tam, kde přinese měřitelný efekt — od práce s dokumenty po doporučování, predikce a personalizaci.",
    tags: ["Predikce", "LLM", "Personalizace"],
  },
  {
    number: "04",
    title: "AI governance",
    text: "Pomůžeme vám zavádět AI odpovědně, s jasnými pravidly, řízením rizik a ohledem na evropskou legislativu.",
    tags: ["AI Act", "Rizika", "Compliance"],
  },
];

const process = [
  ["01", "Diagnostika", "Pochopíme procesy, data i cíl. Najdeme místo s největším dopadem."],
  ["02", "Návrh", "Připravíme srozumitelný plán řešení, rozsah a očekávaný přínos."],
  ["03", "Realizace", "Řešení vyvineme, napojíme na vaše systémy a ověříme v provozu."],
  ["04", "Rozvoj", "Měříme výsledky a systém rozšiřujeme podle potřeb vašeho byznysu."],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Data · Automatizace · AI</p>
          <h1>Software, který promění data v <em>náskok.</em></h1>
          <p className="hero-lead">
            Navrhujeme datová, automatizační a AI řešení, která snižují náklady,
            zrychlují rozhodování a připraví vaši firmu na růst.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt">Probrat váš projekt <span>↗</span></a>
            <a className="button button-ghost" href={sitePath("/pripadove-studie/")}>Prohlédnout výsledky <span>→</span></a>
          </div>
          <p className="micro-proof"><span className="status-dot" /> Nezávazná úvodní konzultace · odpověď do 24 hodin</p>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="Ukázka datového dashboardu">
          <div className="visual-glow" />
          <div className="dashboard-card">
            <div className="dashboard-head">
              <div>
                <span className="card-kicker">Výkon procesů</span>
                <strong>Firemní přehled</strong>
              </div>
              <span className="live-pill"><i /> LIVE</span>
            </div>
            <div className="metric-row">
              <div><span>Efektivita</span><strong>+40 %</strong><small>po automatizaci</small></div>
              <div><span>Manuální práce</span><strong>−50 %</strong><small>v klíčovém procesu</small></div>
            </div>
            <div className="chart-block">
              <div className="chart-label"><span>Vývoj výkonu</span><span>Posledních 6 měsíců</span></div>
              <div className="bars" aria-hidden="true">
                {[42, 50, 47, 63, 72, 86, 82, 96].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="chart-line" aria-hidden="true"><span /><span /><span /><span /><span /></div>
            </div>
            <div className="signal-row">
              <span className="signal-icon">✦</span>
              <div><strong>AI doporučení</strong><small>Optimalizovat plánování kapacit</small></div>
              <b>Aktivní</b>
            </div>
          </div>
          <div className="orbit-badge"><span>24/7</span><small>data v pohybu</small></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-shell trust-inner">
          <p>Řešení stavíme kolem vašeho byznysu, ne kolem módních technologií.</p>
          <div><span>Strategie</span><i /> <span>Vývoj</span><i /> <span>Integrace</span><i /> <span>Rozvoj</span></div>
        </div>
      </section>

      <section className="services-section section-shell" id="sluzby">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Co umíme</p>
            <h2>Technologie s jasným<br /><em>obchodním přínosem.</em></h2>
          </div>
          <p>Od prvního auditu po dlouhodobý rozvoj. Vybíráme jen takové nástroje, které řeší konkrétní problém a obstojí v reálném provozu.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-mark" aria-hidden="true"><i /><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="reference">
        <div className="section-shell case-wrap">
          <div className="case-intro">
            <p className="eyebrow eyebrow-light"><span /> Vybraná realizace</p>
            <h2>Když AI nekomplikuje.<br /><em>Pomáhá rozhodnout.</em></h2>
            <p>Pro rezervační platformu GetPuxi jsme navrhli systém, který pracuje s historií rezervací, vytížením provozu i zákaznickými preferencemi.</p>
            <a className="text-link" href={sitePath("/pripadove-studie/")}>Celá případová studie <span>↗</span></a>
          </div>
          <div className="case-panel">
            <div className="case-panel-head"><span>GETPUXI</span><small>AI optimalizace rezervací</small></div>
            <div className="case-metrics">
              <div><strong>75 %+</strong><span>zákazníků volí doporučené termíny</span></div>
              <div><strong>~1 h</strong><span>úspora času na každých 5 rezervací</span></div>
              <div><strong>↓</strong><span>méně prostojů mezi službami</span></div>
            </div>
            <div className="booking-flow" aria-hidden="true">
              <div className="booking-column"><span>09:00</span><b /><span>10:00</span><b /><span>11:00</span></div>
              <div className="booking-events"><i className="event one">Střih · 09:00</i><i className="event two">Barvení · 10:15</i><i className="event three">Doporučeno AI</i></div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="proces">
        <div className="section-heading process-heading">
          <div><p className="eyebrow"><span /> Jak pracujeme</p><h2>Od nejasného problému<br />k <em>funkčnímu řešení.</em></h2></div>
          <p>Spolupráce má jasné kroky, průběžné výstupy a žádné technologické divadlo.</p>
        </div>
        <div className="process-list">
          {process.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>→</i></article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="kontakt">
        <div className="section-shell cta-wrap">
          <div>
            <p className="eyebrow eyebrow-light"><span /> První krok</p>
            <h2>Najděme příležitost,<br />která má <em>největší dopad.</em></h2>
          </div>
          <div className="cta-copy">
            <p>Během krátké úvodní konzultace probereme váš proces, data nebo nápad. Dostanete konkrétní pohled na to, kde začít.</p>
            <a className="button button-light" href="mailto:toman@gravisoft.cz?subject=Nezávazná konzultace">Domluvit konzultaci <span>↗</span></a>
            <small>Nezávazně · zpravidla odpovíme do 24 hodin</small>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
