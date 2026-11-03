import {
  profile,
  featured,
  topics,
  stats,
  highlights,
  skills,
  experience,
  education,
} from './data'
import { TopicIcon, PhoneIcon, LinkedinIcon, MailIcon, PinIcon, NetworkArt } from './icons'
import photo from './assets/profile.png'
import './App.css'

const links = ['about', 'skills', 'experience', 'education', 'contact']

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="hero" id="top">
        <div className="nav">
          <a href="#top" className="brand">
            <span className="brand-mark">{profile.initials}</span>
            {profile.name}
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l} href={`#${l}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
            <a href={`tel:${profile.phone}`} aria-label="Phone">
              <PhoneIcon />
            </a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="welcome" aria-hidden="true">
            WELCOME
          </div>
          <img className="portrait" src={photo} alt={profile.name} />

          <p className="hero-intro">
            {profile.intro} <a href="#about">Learn more here.</a>
          </p>

          <div className="hero-copy">
            <h1>I'M {profile.name.toUpperCase()}</h1>
            <p>{profile.tagline}</p>
            <div className="cta">
              <a className="pill yellow" href="#experience">
                View my experience
              </a>
              <a className="pill white" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-side">
            <a className="featured" href={featured.link}>
              <span className="featured-title">{featured.title}</span>
              <span className="featured-sub">{featured.subtitle}</span>
            </a>
            <span className="featured-label">{featured.label}</span>
            <div className="based">
              <PinIcon />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <svg className="hero-curve" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 C 420 150, 1000 170, 1440 150 L1440 160 L0 160 Z" fill="#fff" />
        </svg>
      </header>

      <main>
        <section className="explore">
          <h2>What systems do I design?</h2>
          <div className="topics">
            {topics.map((t) => (
              <a key={t.label} className="topic" href={t.href ?? '#skills'}>
                <span className="topic-icon">
                  <TopicIcon name={t.icon} />
                  {t.isNew && <span className="dot" />}
                </span>
                <span className="topic-label">{t.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="discover">
          <div className="discover-art">
            <NetworkArt />
          </div>
          <div className="discover-copy">
            <h2>
              <span>DESIGN</span>
              <span className="indent">SAFER</span>
              <span className="gold">SPACES</span>
            </h2>
            <p>
              Five years of ELV, Fire Alarm, and MEP Electrical design across the UAE and India —
              drawings that are accurate, coordinated with every service, and ready to build.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <a className="pill outline" href="#experience">
              Explore experience <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <Section id="about" title="About me">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="grid highlights">
            {highlights.map((h) => (
              <div key={h.title} className="card">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <h3>{s.group}</h3>
                <div className="chips">
                  {s.items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.org}>
                <div className="period">
                  {e.period} · {e.location}
                </div>
                <h3>
                  {e.role} <span className="org">· {e.org}</span>
                </h3>
                <ul className="points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.degree}>
                <div className="period">Graduated {e.period}</div>
                <h3>{e.degree}</h3>
                <p>
                  {e.school}
                  <br />
                  {e.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Let's talk">
          <p>Looking for an ELV or MEP design engineer for your next project? Get in touch.</p>
          <div className="cta">
            <a className="pill yellow" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="pill outline" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <a className="pill outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
