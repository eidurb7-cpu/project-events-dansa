import { LanguageContext, useTranslation, type Language } from "./i18n"
import { FormEvent, useContext, useEffect, useState } from "react"

const A = "/assets/"

type Artist = {
  slug: string

  name: string

  role: string

  handle: string

  instagram: string

  image: string
}

const artists: Artist[] = [
  {
    slug: "larry",

    name: "Larry",

    role: "DJ",

    handle: "@larriloca",

    instagram: "https://www.instagram.com/larriloca/",

    image: "larry-new.webp",
  },

  {
    slug: "julius",

    name: "Julius",

    role: "DJ",

    handle: "@julius_marcele",

    instagram: "https://www.instagram.com/julius_marcele/",

    image: "f4d1f.png",
  },

  {
    slug: "dj-eddy",

    name: "DJ Eddy",

    role: "DJ & Dancer",

    handle: "@eddythedeejay",

    instagram: "https://www.instagram.com/eddythedeejay/",

    image: "38559.png",
  },

  {
    slug: "ice-boy",

    name: "Ice Boy",

    role: "Music Artist / Performer",

    handle: "@iceboyafrica",

    instagram: "https://www.instagram.com/iceboyafrica/",

    image: "b0060.png",
  },

  {
    slug: "d-ukingo",

    name: "D Ukingo",

    role: "Musician & Dancer",

    handle: "@d_ukingo",

    instagram: "https://www.instagram.com/d_ukingo/",

    image: "966c6.png",
  },
]

const events = [
  { title: "Open Air, Open Hearts", image: "ba6fb.png" },

  { title: "The Late Connection", image: "821cb.png" },

  { title: "Sunday, No Rush", image: "e5851.png" },
]

function go(path: string) {
  history.pushState({}, "", path)

  window.dispatchEvent(new PopStateEvent("popstate"))

  window.scrollTo({ top: 0, behavior: "smooth" })
}

function Link({
  to,

  children,

  className = "",

  ...props
}: {
  to: string

  children: React.ReactNode

  className?: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <a
      href={to}
      className={className}
      {...props}
      onClick={(e) => {
        e.preventDefault()

        go(to)
      }}
    >
      {children}
    </a>
  )
}

function Equalizer({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`equalizer ${large ? "equalizer-large" : ""}`}
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((bar) => (
        <i key={bar} />
      ))}
    </span>
  )
}

function Header() {
  const t = useTranslation()

  const { language, setLanguage } = useContext(LanguageContext)

  const [open, setOpen] = useState(false)

  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setOpen(false)

      setPath(location.pathname)
    }

    addEventListener("popstate", handleNavigation)

    return () => removeEventListener("popstate", handleNavigation)
  }, [])

  const nav =
    language === "de"
      ? [
          ["Start", "/"],

          ["Events", "/events"],

          ["Line-up", "/lineup"],

          ["Galerie", "/gallery"],

          ["Über uns", "/about"],
        ]
      : [
          [t("Home"), "/"],

          ["Events", "/events"],

          [t("The Lineup"), "/lineup"],

          [t("Gallery"), "/gallery"],

          [t("About"), "/about"],
        ]

  return (
    <header className="header">
      <Link to="/" className="logo" aria-label={t("DANSA home")}>
        DANSA
        <Equalizer />
      </Link>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label={t("Toggle menu")}
      >
        {open ? t("CLOSE") : t("MENU")}
      </button>
      <nav
        className={open ? "nav open" : "nav"}
        aria-label={t("Main navigation")}
      >
        {nav.map(([label, destination]) => (
          <Link
            key={destination}
            to={destination}
            className={`navlink ${path === destination ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <div className="language-switch" aria-label={t("Language")}>
          <button
            type="button"
            lang="en"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <span>/</span>
          <button
            type="button"
            lang="de"
            className={language === "de" ? "active" : ""}
            onClick={() => setLanguage("de")}
            aria-pressed={language === "de"}
          >
            DE
          </button>
        </div>
        <Link to="/contact" className="button light">
          {language === "de" ? "Kontakt" : t("Come through")} <span>↗</span>
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  const t = useTranslation()

  const { language } = useContext(LanguageContext)

  return (
    <footer>
      <div className="footer-top">
        <div>
          <p className="eyebrow">
            {language === "de" ? "Kontakt" : t("Get in touch")}
          </p>
          <Link to="/contact">
            {language === "de" ? "DANSA kontaktieren" : t("Contact DANSA")} ↗
          </Link>
          <p>
            {language === "de"
              ? "Unabhängig im Geist. Durch Musik verbunden. Von DANSA veranstaltet."
              : t(
                  "Independent in spirit. Connected by music. Hosted by DANSA.",
                )}
          </p>
        </div>
        <div>
          <p className="eyebrow">{t("Explore")}</p>
          <Link to="/events">Events</Link>
          <Link to="/lineup">{t("The Lineup")}</Link>
          <Link to="/gallery">{t("Gallery")}</Link>
        </div>
        <div>
          <p className="eyebrow">Dansa</p>
          <Link to="/about">{t("About DANSA")}</Link>
          <Link to="/work-with-us">{t("Work With Us")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
        </div>
      </div>
      <Link to="/" className="footer-logo">
        DANSA
      </Link>
      <div className="copyright">
        <span>© 2026 DANSA</span>
        <span>{t("MUSIC. CULTURE. TOGETHERNESS.")}</span>
      </div>
    </footer>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function EventCard({ event }: { event: typeof events[number] }) {
  const t = useTranslation()

  return (
    <article className="card">
      <Link to="/events/the-late-connection">
        <img src={A + event.image} alt="" />
      </Link>
      <p className="eyebrow blue">{t("Event details · TBA")}</p>
      <h3>{event.title}</h3>
      <p>{t("Date, time and location to be announced.")}</p>
      <Link to="/events/the-late-connection" className="text-link">
        {t("View event ↗")}
      </Link>
    </article>
  )
}

function Home() {
  const t = useTranslation()

  return (
    <Shell>
      <section className="hero">
        <div className="hero-title-row">
          <div className="hero-word">DANSA</div>
          <Equalizer large />
        </div>
        <div className="hero-grid">
          <img src={A + "b41fd.png"} alt={t("Crowd dancing together")} />
          <div>
            <h1>
              {t("Good music.")}
              <br />
              {t("Good people.")}
              <br />
              {t("Real moments.")}
            </h1>
            <p>
              {t(
                "DANSA brings people together through sound, movement and shared energy.",
              )}
            </p>
            <Link to="/events" className="button light">
              {t("See what’s next ↗")}
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="section-head">
          <div>
            <p className="eyebrow blue">{t("Upcoming parties")}</p>
            <h2>{t("What’s happenings")}</h2>
          </div>
          <Link to="/events" className="text-link">
            {t("All events ↗")}
          </Link>
        </div>
        <div className="cards">
          {events.map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </section>
      <section className="split">
        <img
          className="dansa-people-photo"
          src={A + "dansa-two-people.webp"}
          alt={t("Two people enjoying an evening together")}
        />
        <div>
          <p className="eyebrow blue">{t("This is DANSA")}</p>
          <h2>
            {t("Our own parties.")}
            <br />
            {t("Our own energy.")}
          </h2>
          <p>
            {t(
              "We create room for music, movement and people to meet as they are. No posturing. Just good people and a shared rhythm.",
            )}
          </p>
          <Link to="/about" className="text-link">
            {t("About DANSA ↗")}
          </Link>
        </div>
      </section>
      <section className="dark statement">
        <p className="eyebrow">{t("Our principles")}</p>
        <h2>{t("Our kind of good.")}</h2>
        <div className="rules">
          <b>{t("Open air")}</b>
          <b>{t("After dark")}</b>
          <b>{t("The lineup")}</b>
        </div>
      </section>
      <section className="blue-block">
        <div>
          <p className="eyebrow">{t("DANSA selects")}</p>
          <h2>
            {t("The Dansa")}
            <br />
            {t("selects.")}
          </h2>
          <p>{t("A collection of sounds and stories that keep us moving.")}</p>
        </div>
        <img src={A + "fa084.png"} alt={t("Hands selecting a record")} />
      </section>
      <section>
        <p className="eyebrow blue">{t("Meet the team")}</p>
        <h2>{t("People behind the rhythm.")}</h2>
        <div className="artist-strip">
          {artists.map((a) => (
            <ArtistTile artist={a} key={a.slug} />
          ))}
        </div>
      </section>
      <Cta />
    </Shell>
  )
}

function Events() {
  const t = useTranslation()

  return (
    <Shell>
      <PageHero
        eyebrow={t("Presenting parties, hosted by DANSA.")}
        title={
          <>
            {t("Your next")}
            <br />
            {t("good plan.")}
          </>
        }
        text={t(
          "Open air. After dark. A room full of possibility. Explore the kinds of parties and music moments worth building.",
        )}
      />
      <section className="lavender band">
        <p className="eyebrow blue">{t("Next DANSA party")}</p>
        <h2>{t("Good things are coming.")}</h2>
        <p>
          {t(
            "Next-event announcement: TBA. Dates, venue and ticket availability will be shared when confirmed.",
          )}
        </p>
      </section>
      <section>
        <div className="section-head">
          <h2>{t("Upcoming")}</h2>
          <span className="pill">{t("All details TBA")}</span>
        </div>
        <div className="cards">
          {events.map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </section>
      <section className="dark split-copy">
        <h2>{t("The night goes on.")}</h2>
        <div>
          <p>{t("Our first real recaps belong here.")}</p>
          <p>
            {t(
              "No past DANSA nights are documented here yet. Photos, films and memories will arrive after our events.",
            )}
          </p>
        </div>
      </section>
      <Cta />
    </Shell>
  )
}

function EventDetail() {
  const t = useTranslation()

  return (
    <Shell>
      <section className="hero page-title">
        <p className="eyebrow">{t("DANSA presents")}</p>
        <h1>The Late Connection</h1>
        <p>{t("All event details remain unconfirmed.")}</p>
      </section>
      <section className="event-feature">
        <img src={A + "47fec.png"} alt={t("DJ booth and dancefloor")} />
        <aside className="ticket">
          <p className="eyebrow blue">Tickets</p>
          <h2>{t("Tickets not yet released")}</h2>
          <p>
            {t(
              "Ticket links will appear here after event details are confirmed.",
            )}
          </p>
          <button disabled>{t("Not on sale")}</button>
        </aside>
      </section>
      <section className="details-grid">
        <div>
          <p className="eyebrow blue">{t("The idea")}</p>
          <h2>{t("One room. A late connection.")}</h2>
          <p>
            {t("A gathering shaped by good music and the people in the room.")}
          </p>
        </div>
        <dl>
          <div>
            <dt>{t("Date")}</dt>
            <dd>{t("TBA")}</dd>
          </div>
          <div>
            <dt>{t("Time")}</dt>
            <dd>{t("TBA")}</dd>
          </div>
          <div>
            <dt>{t("Venue")}</dt>
            <dd>{t("TBA")}</dd>
          </div>
        </dl>
      </section>
      <section className="dark details-grid">
        <div>
          <p className="eyebrow">{t("Location")}</p>
          <h2>{t("Location to follow.")}</h2>
        </div>
        <div>
          <h2>{t("A few good things to know.")}</h2>
          <p>
            {t(
              "Entry, dress code, accessibility and ticket information will be added when confirmed.",
            )}
          </p>
        </div>
      </section>
      <section className="lavender">
        <h2>{t("Other good ideas.")}</h2>
        <div className="cards">
          {events

            .filter((e) => e.title !== "The Late Connection")

            .map((e) => (
              <EventCard key={e.title} event={e} />
            ))}
        </div>
      </section>
    </Shell>
  )
}

function ArtistTile({ artist }: { artist: Artist }) {
  const t = useTranslation()

  return (
    <article className="artist-tile">
      <Link to={"/artists/" + artist.slug}>
        <img src={A + artist.image} alt={artist.name} />
      </Link>
      <h3>{artist.name}</h3>
      <p>{t(artist.role)}</p>
      <a
        href={artist.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        {artist.handle} ↗
      </a>
      <Link to={"/artists/" + artist.slug} className="text-link block">
        {t("View profile ↗")}
      </Link>
    </article>
  )
}

function Lineup() {
  const t = useTranslation()

  return (
    <Shell>
      <PageHero
        eyebrow={t("The people behind the energy")}
        title={t("The lineup")}
        text={t(
          "DJs. Performing artists. One independent spirit. Meet the five people in the DANSA lineup.",
        )}
      />
      <section>
        <p className="eyebrow blue">{t("DJs in the DANSA family")}</p>
        <h2>{t("The DJs.")}</h2>
        <div className="lineup-grid three">
          {artists.slice(0, 3).map((a) => (
            <ArtistTile artist={a} key={a.slug} />
          ))}
        </div>
      </section>
      <section className="rule-top">
        <p className="eyebrow blue">{t("DJ / live in the moment")}</p>
        <h2>{t("The performers.")}</h2>
        <div className="lineup-grid two">
          {artists.slice(3).map((a) => (
            <ArtistTile artist={a} key={a.slug} />
          ))}
        </div>
      </section>
      <Cta />
    </Shell>
  )
}

function ArtistPage({ artist }: { artist: Artist }) {
  const t = useTranslation()

  return (
    <Shell>
      <section className="hero page-title">
        <Link to="/lineup" className="eyebrow">
          {t("← Back to the lineup")}
        </Link>
        <p className="eyebrow">{t("DANSA / Artist profile")}</p>
        <h1>{artist.name}</h1>
        <p>{t(artist.role)}</p>
      </section>
      <section className="artist-profile">
        <img src={A + artist.image} alt={artist.name} />
        <div>
          <p className="eyebrow blue">{t("In the DANSA lineup")}</p>
          <h2>{artist.name}</h2>
          <p>
            {t("{name} is {role} and a member of the DANSA lineup.", {
              name: artist.name,
              role: t(artist.role),
            })}
          </p>
          <hr />
          <p className="eyebrow blue">
            {t("Connect with")} {artist.name}
          </p>
          <a
            href={artist.instagram}
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            {artist.handle} ↗
          </a>
          <small>{t("Direct artist contact via their own Instagram.")}</small>
        </div>
      </section>
      <section className="lavender follow">
        <p className="eyebrow blue">{t("Direct from the artist")}</p>
        <h2>
          {t("Follow")} {artist.name}.
        </h2>
        <a href={artist.instagram} target="_blank" rel="noreferrer">
          {t("Follow")} {artist.handle} {t("on Instagram.")}
        </a>
      </section>
      <section>
        <p className="eyebrow blue">{t("More from the lineup")}</p>
        <h2>{t("Meet the others.")}</h2>
        <div className="mini-lineup">
          {artists

            .filter((a) => a.slug !== artist.slug)

            .map((a) => (
              <div key={a.slug}>
                <h3>{a.name}</h3>
                <p>{t(a.role)}</p>
                <a href={a.instagram} target="_blank" rel="noreferrer">
                  {a.handle} ↗
                </a>
                <Link to={"/artists/" + a.slug} className="text-link block">
                  {t("View profile ↗")}
                </Link>
              </div>
            ))}
        </div>
      </section>
    </Shell>
  )
}

function PageHero({
  eyebrow,

  title,

  text,
}: {
  eyebrow: string

  title: React.ReactNode

  text: string
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow blue">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

function Gallery() {
  const t = useTranslation()

  const images = [
    ["803c5.png", t("Out in the city")],

    ["911fb.png", t("Lost in the right place")],

    ["b482f.png", t("In the details")],

    ["8fc69.png", t("A little longer together")],

    ["78e18.png", t("The room, the rhythm")],

    ["e4088.png", t("One more conversation")],

    ["49fa8.png", t("Less scrolling. More feeling.")],
  ]

  return (
    <Shell>
      <PageHero
        eyebrow={t("The feeling in pictures")}
        title={
          <>
            {t("Crowds.")}
            <br />
            {t("City nights.")}
            <br />
            {t("Real energy.")}
          </>
        }
        text={t(
          "From the street to the dancefloor. A visual mood of the people, details and after-hours feeling that inspire DANSA.",
        )}
      />
      <section className="gallery-section">
        <div className="gallery-note">
          <b>{t("Mood gallery — actual DANSA recaps coming soon")}</b>
          <span>
            {t(
              "These images set the mood. They are not documentation of past DANSA events.",
            )}
          </span>
        </div>
        <div className="gallery-tabs">
          <b>{t("All")}</b>
          <span>{t("Photos")}</span>
          <span>Video</span>
        </div>
        <div className="gallery">
          {images.map(([image, caption]) => (
            <figure key={image}>
              <img src={A + image} alt="" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="dark gallery-film">
        <div>
          <p className="eyebrow">{t("The moving picture")}</p>
          <h2>{t("Some nights stay with you.")}</h2>
          <p>
            {t(
              "Our actual films and event recaps will live here. Nothing has been released yet.",
            )}
          </p>
        </div>
        <div className="video-placeholder">
          <p className="eyebrow">{t("DANSA / Future recap")}</p>
          <h2>{t("Play it back.")}</h2>
          <p>{t("Video recap coming after the night")}</p>
        </div>
      </section>
      <section className="gallery-cta">
        <p className="eyebrow">{t("Don’t just look. Come through.")}</p>
        <h2>{t("Be in the next moment.")}</h2>
        <p>
          {t(
            "Next DANSA party announcement soon. Until then, explore the event ideas.",
          )}
        </p>
        <Link to="/events" className="button light">
          {t("Explore events ↗")}
        </Link>
      </section>
    </Shell>
  )
}

function About() {
  const t = useTranslation()

  const { language } = useContext(LanguageContext)

  return (
    <Shell>
      <section className="about-hero">
        <p className="eyebrow">{t("Independent spirit. Shared energy.")}</p>
        <h1>
          {t("Our own parties.")}
          <br />
          {t("Our own energy.")}
        </h1>
        <p>
          {t(
            "DANSA is an independent event and party brand created by DJs and performing artists. We organize and host our own parties and live music events.",
          )}
        </p>
      </section>
      <section className="about-photo">
        <img
          src={A + "0af90.png"}
          alt={t("Friends walking through the city")}
        />
        <p className="eyebrow blue">
          {t("The city is a feeling / mood photography")}
        </p>
      </section>
      <section className="about-statement">
        <div>
          <p className="eyebrow blue">{t("This is DANSA")}</p>
          <h2>{t("Good music. Good people. Real moments.")}</h2>
        </div>
        <div>
          <p className="lead">
            {t(
              "We bring music and people into the same room. We shape the sound, the atmosphere and the experience around our own events.",
            )}
          </p>
          <p>
            {t(
              "From open-air sessions to late-night dancefloors and shared listening, the intention is simple: something independent, human and unmistakably DANSA.",
            )}
          </p>
          <Link to="/events" className="text-link">
            {t("Explore our events ↗")}
          </Link>
        </div>
      </section>
      <section className="organizer-story">
        <div className="organizer-copy">
          <p className="eyebrow blue">
            {language === "de"
              ? "Die Menschen hinter DANSA"
              : "The people behind DANSA"}
          </p>
          <h2>
            {language === "de"
              ? "In Berlin zu Hause. International verbunden."
              : "At home in Berlin. Connected internationally."}
          </h2>
        </div>
        <div className="organizer-copy">
          <p className="lead">
            {language === "de"
              ? "DANSA wird von den fünf DJs, Performern und Organisatoren im Line-up gestaltet. Sie entwickeln gemeinsam die Musik, die Atmosphäre und die Veranstaltungen."
              : "DANSA is shaped by the five DJs, performers and organizers in the lineup. Together, they develop the music, atmosphere and events."}
          </p>
          <p>
            {language === "de"
              ? "Die Geschichte beginnt mit einer einfachen Idee: Menschen durch Musik zusammenzubringen und eigene Räume für echte Begegnungen zu schaffen. Berlin ist unser Hauptsitz und kreativer Ausgangspunkt – DANSA denkt jedoch über eine Stadt hinaus und baut Verbindungen zu anderen Städten, Ländern und internationalen Communities auf."
              : "The story starts with a simple idea: bring people together through music and create our own spaces for real connection. Berlin is our headquarters and creative starting point, but DANSA looks beyond one city—building relationships with other cities, countries and international communities."}
          </p>
        </div>
        <div className="organizer-faces">
          {artists.map((artist) => (
            <Link to={`/artists/${artist.slug}`} key={artist.slug}>
              <img src={A + artist.image} alt={artist.name} />
              <span>{artist.name}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="dark ethos">
        <p className="eyebrow">{t("What makes the room")}</p>
        <h2>{t("More than the music.")}</h2>
        <div className="value-grid">
          {[
            [
              "01",

              t("Music"),

              t(
                "The sound comes first. DJs and performers are at the heart of how we think about every party.",
              ),
            ],

            [
              "02",

              t("People"),

              t(
                "Come with friends or come as yourself. Respect and looking out for each other shape the atmosphere.",
              ),
            ],

            [
              "03",

              t("Experience"),

              t(
                "The room, the rhythm, the small details. We care about how it feels to be there.",
              ),
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-formats">
        <div>
          <img src={A + "911fb.png"} alt="" />
          <p className="eyebrow blue">{t("A mood for the moment")}</p>
        </div>
        <div>
          <p className="eyebrow blue">
            {t("Many ways in. One shared energy.")}
          </p>
          <h2>{t("Our kind of good.")}</h2>
          {[
            [
              t("Open air"),

              t("Open-air sessions, sunset gatherings and space to move."),
            ],

            [
              t("After dark"),

              t("DJ-led nights and dancefloors built around shared energy."),
            ],

            [
              t("Live & listening"),

              t(
                "Performing artists and music-led experiences that bring people together.",
              ),
            ],
          ].map(([t, d]) => (
            <div className="format-row" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="lavender about-lineup">
        <p className="eyebrow blue">
          {t("Five people. One independent spirit.")}
        </p>
        <h2>{t("Meet the lineup.")}</h2>
        {artists.map((a) => (
          <Link to={"/artists/" + a.slug} className="about-person" key={a.slug}>
            <img src={A + a.image} alt="" />
            <span>
              <b>{a.name}</b>
              <small>{t(a.role)}</small>
            </span>
            <i>↗</i>
          </Link>
        ))}
        <Link to="/lineup" className="text-link">
          {t("View the full lineup ↗")}
        </Link>
      </section>
      <section className="gallery-cta">
        <p className="eyebrow">{t("Come through. Or create with us.")}</p>
        <h2>{t("Let’s share the energy.")}</h2>
        <p>
          {t(
            "Explore our event previews, or start a conversation about a future collaboration.",
          )}
        </p>
        <div className="button-row">
          <Link to="/events" className="button light">
            {t("Explore events ↗")}
          </Link>
          <Link to="/work-with-us" className="button outline">
            {t("Work with us ↗")}
          </Link>
        </div>
      </section>
    </Shell>
  )
}

function ContactPage({ collaborate = false }: { collaborate?: boolean }) {
  const t = useTranslation()

  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()

    setSent(true)
  }

  return (
    <Shell>
      <section className="about-hero">
        <p className="eyebrow">
          {collaborate
            ? t("For venues, promoters, artists & brands")
            : t("Good conversations start here")}
        </p>
        <h1>
          {collaborate ? (
            <>
              {t("Make something")}
              <br />
              {t("people feel.")}
            </>
          ) : (
            <>
              {t("Say hello.")}
              <br />
              {t("Come through.")}
            </>
          )}
        </h1>
        <p>
          {collaborate
            ? t(
                "DANSA hosts its own parties and music events. Have a space, a sound or an idea that could belong in the next one? Let’s talk.",
              )
            : t(
                "A question about DANSA, an event idea or something you’d like us to know? You’re in the right place.",
              )}
        </p>
      </section>
      {collaborate ? (
        <>
          <section className="work-intro">
            <img src={A + "e9707.png"} alt={t("DJ booth and dancefloor")} />
            <div>
              <p className="eyebrow blue">{t("Independent by nature")}</p>
              <h2>{t("Your idea. Our shared energy.")}</h2>
              <p>
                {t(
                  "We’re open to conversations about future collaborations that add something real to the parties we host.",
                )}
              </p>
              <a href="#inquiry" className="text-link">
                {t("Start a conversation ↗")}
              </a>
            </div>
          </section>
          <section className="dark opportunities">
            <p className="eyebrow">
              {t("Possibilities, not a partner roster")}
            </p>
            <h2>{t("Good things start together.")}</h2>
            {[
              [
                "01",

                t("Venues"),

                t(
                  "A room, courtyard or open-air space with character. Share what makes your place feel different.",
                ),
              ],

              [
                "02",

                t("Promoters"),

                t(
                  "A shared vision for an independent event. Tell us the idea and how you see us working together.",
                ),
              ],

              [
                "03",

                t("Artists"),

                t(
                  "Music and performance that could add to a DANSA night. Introduce your work in your own words.",
                ),
              ],

              [
                "04",

                t("Brands"),

                t(
                  "Thoughtful ways to contribute to the experience. Start with the connection, not just the logo.",
                ),
              ],
            ].map(([n, t, d]) => (
              <div className="opportunity" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className="contact-routes">
          <p className="eyebrow blue">{t("What brings you here?")}</p>
          <div>
            {[
              [
                t("General"),

                t("Questions about DANSA and the parties we host."),

                t("Choose General in the inquiry form."),
              ],

              [
                t("Booking"),

                t("A proposed event or artist-related inquiry."),

                t("Choose Booking, or use an artist’s direct Instagram below."),
              ],

              [
                t("Event support"),

                t(
                  "Questions about event details, access or ticket availability.",
                ),

                t("Confirmed information will be added to each event page."),
              ],
            ].map(([t, d, n]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
                <small>{n}</small>
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="form-wrap" id="inquiry">
        <div>
          <p className="eyebrow blue">
            {collaborate
              ? t("A little context goes a long way")
              : t("A note before you write")}
          </p>
          <h2>
            {collaborate
              ? t("Start with the idea.")
              : t("Let’s keep it clear.")}
          </h2>
          <p>
            {collaborate
              ? t(
                  "You don’t need a finished proposal. A clear introduction is a good place to begin.",
                )
              : t(
                  "Include the subject of your inquiry and any relevant context. For an event question, mention the event preview you’re asking about.",
                )}
          </p>
          {!collaborate && (
            <div className="event-note">
              <b>{t("Next event")}</b>
              <strong>{t("Announcement coming soon.")}</strong>
              <span>
                {t("No date, venue or ticket release is confirmed yet.")}
              </span>
            </div>
          )}
        </div>
        <div>
          <h2>
            {collaborate ? t("Let’s make it happen.") : t("Drop us a note.")}
          </h2>
          <p>
            {t("Tell us what you have in mind. Fields marked * are required.")}
          </p>
          {sent ? (
            <div className="form-note">
              <h3>{t("Form checked.")}</h3>
              <p>
                {t(
                  "Your entries are valid, but nothing was transmitted or stored. Connect a form service or backend before launch.",
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field-pair">
                <label>
                  {t("Name *")}
                  <input name="name" placeholder={t("Your name")} required />
                </label>
                <label>
                  {t("Email *")}
                  <input
                    name="email"
                    type="email"
                    placeholder={t("Your email address")}
                    required
                  />
                </label>
              </div>
              {collaborate && (
                <label>
                  {t("Organization")}
                  <input
                    name="organization"
                    placeholder={t("Venue, project or organization (optional)")}
                  />
                </label>
              )}
              <label>
                {collaborate ? t("Collaboration type *") : t("Inquiry type *")}
                <select name="type" required>
                  <option value="">
                    {t("Select")}{" "}
                    {collaborate
                      ? t("venue / promoter / artist / brand")
                      : t("general / booking / event support")}
                  </option>
                  {(collaborate
                    ? ["Venue", "Promoter", "Artist", "Brand"]
                    : ["General", "Booking", "Event support"]
                  )

                    .map((x) => (
                      <option key={x} value={x}>
                        {t(x)}
                      </option>
                    ))}
                </select>
              </label>
              <label>
                {t("Message *")}
                <textarea
                  name="message"
                  rows={6}
                  placeholder={
                    collaborate
                      ? t(
                          "Your idea, possible format and what you could bring.",
                        )
                      : t("What would you like to ask us?")
                  }
                  required
                />
              </label>
              <label className="consent">
                <input type="checkbox" required />{" "}
                {t(
                  "I consent to my details being used to respond to this inquiry. *",
                )}
              </label>
              <button className="button blue-button" type="submit">
                {collaborate
                  ? t("Send collaboration inquiry ↗")
                  : t("Send inquiry ↗")}
              </button>
              <p className="fine">
                {t("Submissions are not sent or stored yet.")}
              </p>
            </form>
          )}
        </div>
      </section>
      {!collaborate && (
        <section className="dark artist-directory">
          <div>
            <p className="eyebrow">{t("Looking for an artist?")}</p>
            <h2>{t("Go straight to the source.")}</h2>
            <p>
              {t(
                "Each artist has their own Instagram. These are direct artist contact routes, not DANSA event-support channels.",
              )}
            </p>
            <Link to="/lineup" className="text-link light-link">
              {t("Meet the lineup ↗")}
            </Link>
          </div>
          <div>
            {artists.map((a) => (
              <div className="artist-contact" key={a.slug}>
                <span>
                  <b>{a.name}</b>
                  <a href={a.instagram} target="_blank" rel="noreferrer">
                    {a.handle} ↗
                  </a>
                </span>
                <small>Instagram</small>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="lavender route-cta">
        <p className="eyebrow blue">
          {collaborate
            ? t("Looking for something else?")
            : t("Venue / promoter / artist / brand")}
        </p>
        <h2>
          {collaborate
            ? t("Just want to get in touch?")
            : t("Have an idea for a DANSA night?")}
        </h2>
        <p>
          {collaborate
            ? t(
                "For general questions or event-support inquiries, head to Contact.",
              )
            : t(
                "Our collaboration page is the place to tell us what you have in mind.",
              )}
        </p>
        <Link
          to={collaborate ? "/contact" : "/work-with-us"}
          className="text-link"
        >
          {collaborate ? t("Contact DANSA ↗") : t("Work with us ↗")}
        </Link>
      </section>
    </Shell>
  )
}

function Cta() {
  const t = useTranslation()

  return (
    <section className="cta">
      <div>
        <p className="eyebrow">{t("The next idea takes shape")}</p>
        <h2>{t("Good people. Shared energy.")}</h2>
      </div>
      <div>
        <p>
          {t(
            "Explore what DANSA is planning. Event times and ticket links will be announced only when confirmed.",
          )}
        </p>
        <Link to="/events" className="button light">
          {t("Explore events ↗")}
        </Link>
      </div>
    </section>
  )
}

function NotFound() {
  const t = useTranslation()

  return (
    <Shell>
      <PageHero
        eyebrow="404"
        title={t("Page not found")}
        text={t("That page is not part of the DANSA site.")}
      />
      <section>
        <Link to="/" className="button blue-button">
          {t("Back home")}
        </Link>
      </section>
    </Shell>
  )
}

export default function App() {
  const [path, setPath] = useState(location.pathname)

  const [language, setLanguage] = useState<Language>(
    () => {
      try {
        return localStorage.getItem("dansa-language") === "de" ? "de" : "en"
      } catch {
        return "en"
      }
    },
  )

  useEffect(() => {
    const update = () => setPath(location.pathname)

    addEventListener("popstate", update)

    return () => removeEventListener("popstate", update)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("dansa-language", language)
    } catch {
      /* Storage may be disabled. */
    }

    document.documentElement.lang = language
  }, [language])

  const artist = artists.find((a) => path === `/artists/${a.slug}`)

  let page: React.ReactNode

  if (artist) page = <ArtistPage artist={artist} />
  else if (path === "/") page = <Home />
  else if (path === "/events") page = <Events />
  else if (path === "/events/the-late-connection") page = <EventDetail />
  else if (path === "/lineup") page = <Lineup />
  else if (path === "/gallery") page = <Gallery />
  else if (path === "/about") page = <About />
  else if (path === "/work-with-us") page = <ContactPage collaborate />
  else if (path === "/contact") page = <ContactPage />
  else page = <NotFound />

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {page}
    </LanguageContext.Provider>
  )
}
