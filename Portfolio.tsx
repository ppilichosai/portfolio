import Image from "next/image";
import { site, roles, edu, certs, tags } from "@/content/site";
import type { T } from "@/content/en";

const sr = { position: "absolute", left: -9999 } as const;
const Cred = ({ y, t, i, d }: { y: number; t: string; i: string; d: string }) => (
  <li>
    <article className="cred">
      <div className="seal" aria-hidden="true"><span>{y}</span></div>
      <div><h4>{t}</h4><p>{i}</p><p>{d}</p></div>
    </article>
  </li>
);

export default function Portfolio({ t }: { t: T }) {
  const idx = t.lang === "en" ? 0 : 1;
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header>
        <div className="bar">
          <a className="brand" href="#top">{site.shortName}</a>
          <nav aria-label="Primary"><ul>{t.nav.map((n) => <li key={n.h}><a href={n.h}>{n.l}</a></li>)}</ul></nav>
          <a className="lang" href={t.switchHref} hrefLang={t.switchHref === "/" ? "en" : "el"} title={t.switchTitle}>{t.switchLabel}</a>
        </div>
      </header>
      <main id="main">
        <div className="hero-wrap">
          <div className="hero" id="top">
            <div>
              <p className="status r"><span className="dot" aria-hidden="true" />{t.status}</p>
              <h1 className="r" style={{ ["--d" as string]: ".12s" }}>{t.h1}</h1>
              <p className="lead r" style={{ ["--d" as string]: ".24s" }}>{t.lead}</p>
              <div className="cta r" style={{ ["--d" as string]: ".36s" }}>
                <a className="btn p" href={site.linkedin} target="_blank" rel="noopener noreferrer">{t.cta1}<span style={sr}>{t.newTab}</span></a>
                <a className="btn" href="#experience">{t.cta2}</a>
              </div>
            </div>
            <aside className="glance r" style={{ ["--d" as string]: ".48s" }} aria-label={t.glanceLabel}>
              <Image className="pic" src="/profile.jpg" width={132} height={132} alt={t.photoAlt} priority />
              <h2 style={{ fontSize: "1.3rem", margin: ".9rem 0 0" }}>{site.name}</h2>
              <dl>{t.glance.map((g) => <div key={g.k}><dt>{g.k}</dt><dd>{g.v}</dd></div>)}</dl>
            </aside>
          </div>
        </div>

        <section id="about"><h2>{t.aboutT}</h2>
          <div className="about">
            <div>{t.about.map((p) => <p key={p}>{p}</p>)}</div>
            <div><h3>{t.sectorsT}</h3><ul className="tags">{t.sectors.map((s) => <li key={s}>{s}</li>)}</ul></div>
          </div>
        </section>

        <div className="band"><section id="expertise"><h2>{t.expertT}</h2><p className="intro">{t.expertIntro}</p>
          <ul className="grid4">{t.expertise.map((e) => <li key={e.t}><h3>{e.t}</h3><p>{e.d}</p></li>)}</ul>
        </section></div>

        <section id="experience"><h2>{t.expT}</h2><p className="intro">{t.expIntro}</p>
          <ul className="rows">{roles.map((r, i) => (
            <li key={r.org}>
              <div><h3>{r.org}</h3><p className="when">{r.when[idx]}</p></div>
              <div><p><strong>{r.role}</strong></p><p>{t.roleDesc[i]}</p></div>
            </li>))}
          </ul>
          <p className="note">{t.earlier}</p>
        </section>

        <div className="band"><section id="work"><h2>{t.workT}</h2><p className="intro">{t.workIntro}</p>
          <ul className="cards">{t.work.map((w) => (
            <li key={w.t}><article className="card"><small>{w.a}</small><h3>{w.t}</h3><ul>{w.p.map((p) => <li key={p}>{p}</li>)}</ul></article></li>))}
          </ul>
          <p className="note">{t.workNote}</p>
        </section></div>

        <div className="band"><section id="education"><h2>{t.credT}</h2><p className="intro">{t.credIntro}</p>
          <h3 className="sub">{t.eduT}</h3><ul className="cgrid">{edu.map((c, i) => <Cred key={c.t} {...c} d={t.eduD[i]} />)}</ul>
          <h3 className="sub">{t.certT}</h3><ul className="cgrid">{certs.map((c, i) => <Cred key={c.t} {...c} d={t.certD[i]} />)}</ul>
          <h3 className="sub">{t.learnT}</h3><p className="intro" style={{ fontSize: "1rem", margin: ".75rem 0 0" }}>{t.learn}</p>
          <ul className="tags">{tags.map((g) => <li key={g}>{g}</li>)}</ul>
          <p className="note">{t.langs}</p>
        </section></div>

        <section id="contact"><h2>{t.contactT}</h2><p className="intro">{t.contactIntro}</p>
          <div className="cta" style={{ marginTop: 0 }}>
            <a className="btn p" href={site.linkedin} target="_blank" rel="noopener noreferrer">{t.liBtn}<span style={sr}>{t.newTab}</span></a>
            <a className="btn" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="btn" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            {site.cvUrl ? <a className="btn" href={site.cvUrl} download>{t.cv}</a> : <span className="ph" role="note">{t.cvNote}</span>}
          </div>
          <p className="note">{t.based}</p>
        </section>
      </main>
      <footer><div><p style={{ margin: 0 }}>© {new Date().getFullYear()} {site.name}. {t.footer}</p><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></footer>
    </>
  );
}
