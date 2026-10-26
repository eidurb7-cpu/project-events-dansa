import { FormEvent, useEffect, useState } from "react"

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
    image: "6a5f9.png",
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
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        go(to)
      }}
    >
      {children}
    </a>
  )
}

function Header() {
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
  const nav = [
    ["Events", "/events"],
    ["The Lineup", "/lineup"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
  ]
  return (
    <header className="header">
      <Link to="/" className="logo">
        DANSA
      </Link>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {nav.map(([label, destination]) => (
          <Link
            key={destination}
            to={destination}
            className={`navlink ${path === destination ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="button light">
          Come through <span>↗</span>
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <p className="eyebrow">Get in touch</p>
          <Link to="/contact">Contact DANSA ↗</Link>
          <p>Independent in spirit. Connected by music. Hosted by DANSA.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <Link to="/events">Events</Link>
          <Link to="/lineup">The Lineup</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <p className="eyebrow">Dansa</p>
          <Link to="/about">About DANSA</Link>
          <Link to="/work-with-us">Work With Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Link to="/" className="footer-logo">
        DANSA
      </Link>
      <div className="copyright">
        <span>© 2026 DANSA</span>
        <span>MUSIC. CULTURE. TOGETHERNESS.</span>
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
  return (
    <article className="card">
      <Link to="/events/the-late-connection">
        <img src={A + event.image} alt="" />
      </Link>
      <p className="eyebrow blue">Event details · TBA</p>
      <h3>{event.title}</h3>
      <p>Date, time and location to be announced.</p>
      <Link to="/events/the-late-connection" className="text-link">
        View event ↗
      </Link>
    </article>
  )
}

function Home() {
  return (
    <Shell>
      <section className="hero">
        <div className="hero-word">DANSA</div>
        <div className="hero-grid">
          <img src={A + "b41fd.png"} alt="Crowd dancing together" />
          <div>
            <h1>
              Good music.
              <br />
              Good people.
              <br />
              Real moments.
            </h1>
            <p>
              DANSA brings people together through sound, movement and shared
              energy.
            </p>
            <Link to="/events" className="button light">
              See what’s next ↗
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="section-head">
          <div>
            <p className="eyebrow blue">Upcoming parties</p>
            <h2>What’s happenings</h2>
          </div>
          <Link to="/events" className="text-link">
            All events ↗
          </Link>
        </div>
        <div className="cards">
          {events.map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </section>
      <section className="split">
        <img src={A + "e62c1.png"} alt="Friends together in the city" />
        <div>
          <p className="eyebrow blue">This is DANSA</p>
          <h2>
            Our own parties.
            <br />
            Our own energy.
          </h2>
          <p>
            We create room for music, movement and people to meet as they are.
            No posturing. Just good people and a shared rhythm.
          </p>
          <Link to="/about" className="text-link">
            About DANSA ↗
          </Link>
        </div>
      </section>
      <section className="dark statement">
        <p className="eyebrow">Our principles</p>
        <h2>Our kind of good.</h2>
        <div className="rules">
          <b>Open air</b>
          <b>After dark</b>
          <b>The lineup</b>
        </div>
      </section>
      <section className="blue-block">
        <div>
          <p className="eyebrow">DANSA selects</p>
          <h2>
            The Dansa
            <br />
            selects.
          </h2>
          <p>A collection of sounds and stories that keep us moving.</p>
        </div>
        <img src={A + "fa084.png"} alt="Hands selecting a record" />
      </section>
      <section>
        <p className="eyebrow blue">Meet the team</p>
        <h2>People behind the rhythm.</h2>
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
  return (
    <Shell>
      <PageHero
        eyebrow="Presenting parties, hosted by DANSA."
        title={
          <>
            Your next
            <br />
            good plan.
          </>
        }
        text="Open air. After dark. A room full of possibility. Explore the kinds of parties and music moments worth building."
      />
      <section className="lavender band">
        <p className="eyebrow blue">Next DANSA party</p>
        <h2>Good things are coming.</h2>
        <p>
          Next-event announcement: TBA. Dates, venue and ticket availability
          will be shared when confirmed.
        </p>
      </section>
      <section>
        <div className="section-head">
          <h2>Upcoming</h2>
          <span className="pill">All details TBA</span>
        </div>
        <div className="cards">
          {events.map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </section>
      <section className="dark split-copy">
        <h2>The night goes on.</h2>
        <div>
          <p>Our first real recaps belong here.</p>
          <p>
            No past DANSA nights are documented here yet. Photos, films and
            memories will arrive after our events.
          </p>
        </div>
      </section>
      <Cta />
    </Shell>
  )
}

function EventDetail() {
  return (
    <Shell>
      <section className="hero page-title">
        <p className="eyebrow">DANSA presents</p>
        <h1>The Late Connection</h1>
        <p>All event details remain unconfirmed.</p>
      </section>
      <section className="event-feature">
        <img src={A + "47fec.png"} alt="DJ booth and dancefloor" />
        <aside className="ticket">
          <p className="eyebrow blue">Tickets</p>
          <h2>Tickets not yet released</h2>
          <p>
            Ticket links will appear here after event details are confirmed.
          </p>
          <button disabled>Not on sale</button>
        </aside>
      </section>
      <section className="details-grid">
        <div>
          <p className="eyebrow blue">The idea</p>
          <h2>One room. A late connection.</h2>
          <p>A gathering shaped by good music and the people in the room.</p>
        </div>
        <dl>
          <div>
            <dt>Date</dt>
            <dd>TBA</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>TBA</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>TBA</dd>
          </div>
        </dl>
      </section>
      <section className="dark details-grid">
        <div>
          <p className="eyebrow">Location</p>
          <h2>Location to follow.</h2>
        </div>
        <div>
          <h2>A few good things to know.</h2>
          <p>
            Entry, dress code, accessibility and ticket information will be
            added when confirmed.
          </p>
        </div>
      </section>
      <section className="lavender">
        <h2>Other good ideas.</h2>
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
  return (
    <article className="artist-tile">
      <Link to={"/artists/" + artist.slug}>
        <img src={A + artist.image} alt={artist.name} />
      </Link>
      <h3>{artist.name}</h3>
      <p>{artist.role}</p>
      <a
        href={artist.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        {artist.handle} ↗
      </a>
      <Link to={"/artists/" + artist.slug} className="text-link block">
        View profile ↗
      </Link>
    </article>
  )
}

function Lineup() {
  return (
    <Shell>
      <PageHero
        eyebrow="The people behind the energy"
        title="The lineup"
        text="DJs. Performing artists. One independent spirit. Meet the five people in the DANSA lineup."
      />
      <section>
        <p className="eyebrow blue">DJs in the DANSA family</p>
        <h2>The DJs.</h2>
        <div className="lineup-grid three">
          {artists.slice(0, 3).map((a) => (
            <ArtistTile artist={a} key={a.slug} />
          ))}
        </div>
      </section>
      <section className="rule-top">
        <p className="eyebrow blue">DJ / live in the moment</p>
        <h2>The performers.</h2>
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
  return (
    <Shell>
      <section className="hero page-title">
        <Link to="/lineup" className="eyebrow">
          ← Back to the lineup
        </Link>
        <p className="eyebrow">DANSA / Artist profile</p>
        <h1>{artist.name}</h1>
        <p>{artist.role}</p>
      </section>
      <section className="artist-profile">
        <img src={A + artist.image} alt={artist.name} />
        <div>
          <p className="eyebrow blue">In the DANSA lineup</p>
          <h2>{artist.name}</h2>
          <p>
            {artist.name} is{" "}
            {artist.role.toLowerCase().startsWith("dj")
              ? "a "
              : "a music artist and "}{" "}
            {artist.role.toLowerCase()} and member of the DANSA lineup.
          </p>
          <hr />
          <p className="eyebrow blue">Connect with {artist.name}</p>
          <a
            href={artist.instagram}
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            {artist.handle} ↗
          </a>
          <small>Direct artist contact via their own Instagram.</small>
        </div>
      </section>
      <section className="lavender follow">
        <p className="eyebrow blue">Direct from the artist</p>
        <h2>Follow {artist.name}.</h2>
        <a href={artist.instagram} target="_blank" rel="noreferrer">
          Follow {artist.handle} on Instagram.
        </a>
      </section>
      <section>
        <p className="eyebrow blue">More from the lineup</p>
        <h2>Meet the others.</h2>
        <div className="mini-lineup">
          {artists
            .filter((a) => a.slug !== artist.slug)
            .map((a) => (
              <div key={a.slug}>
                <h3>{a.name}</h3>
                <p>{a.role}</p>
                <a href={a.instagram} target="_blank" rel="noreferrer">
                  {a.handle} ↗
                </a>
                <Link to={"/artists/" + a.slug} className="text-link block">
                  View profile ↗
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
  const images = [
    ["803c5.png", "Out in the city"],
    ["911fb.png", "Lost in the right place"],
    ["b482f.png", "In the details"],
    ["8fc69.png", "A little longer together"],
    ["78e18.png", "The room, the rhythm"],
    ["e4088.png", "One more conversation"],
    ["49fa8.png", "Less scrolling. More feeling."],
  ]
  return (
    <Shell>
      <PageHero
        eyebrow="The feeling in pictures"
        title={
          <>
            Crowds.
            <br />
            City nights.
            <br />
            Real energy.
          </>
        }
        text="From the street to the dancefloor. A visual mood of the people, details and after-hours feeling that inspire DANSA."
      />
      <section className="gallery-section">
        <div className="gallery-note">
          <b>Mood gallery — actual DANSA recaps coming soon</b>
          <span>
            These images set the mood. They are not documentation of past DANSA
            events.
          </span>
        </div>
        <div className="gallery-tabs">
          <b>All</b>
          <span>Photos</span>
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
          <p className="eyebrow">The moving picture</p>
          <h2>Some nights stay with you.</h2>
          <p>
            Our actual films and event recaps will live here. Nothing has been
            released yet.
          </p>
        </div>
        <div className="video-placeholder">
          <p className="eyebrow">DANSA / Future recap</p>
          <h2>Play it back.</h2>
          <p>Video recap coming after the night</p>
        </div>
      </section>
      <section className="gallery-cta">
        <p className="eyebrow">Don’t just look. Come through.</p>
        <h2>Be in the next moment.</h2>
        <p>
          Next DANSA party announcement soon. Until then, explore the event
          ideas.
        </p>
        <Link to="/events" className="button light">
          Explore events ↗
        </Link>
      </section>
    </Shell>
  )
}

function About() {
  return (
    <Shell>
      <section className="about-hero">
        <p className="eyebrow">Independent spirit. Shared energy.</p>
        <h1>
          Our own parties.
          <br />
          Our own energy.
        </h1>
        <p>
          DANSA is an independent event and party brand created by DJs and
          performing artists. We organize and host our own parties and live
          music events.
        </p>
      </section>
      <section className="about-photo">
        <img src={A + "0af90.png"} alt="Friends walking through the city" />
        <p className="eyebrow blue">The city is a feeling / mood photography</p>
      </section>
      <section className="about-statement">
        <div>
          <p className="eyebrow blue">This is DANSA</p>
          <h2>Good music. Good people. Real moments.</h2>
        </div>
        <div>
          <p className="lead">
            We bring music and people into the same room. We shape the sound,
            the atmosphere and the experience around our own events.
          </p>
          <p>
            From open-air sessions to late-night dancefloors and shared
            listening, the intention is simple: something independent, human and
            unmistakably DANSA.
          </p>
          <Link to="/events" className="text-link">
            Explore our events ↗
          </Link>
        </div>
      </section>
      <section className="dark ethos">
        <p className="eyebrow">What makes the room</p>
        <h2>More than the music.</h2>
        <div className="value-grid">
          {[
            [
              "01",
              "Music",
              "The sound comes first. DJs and performers are at the heart of how we think about every party.",
            ],
            [
              "02",
              "People",
              "Come with friends or come as yourself. Respect and looking out for each other shape the atmosphere.",
            ],
            [
              "03",
              "Experience",
              "The room, the rhythm, the small details. We care about how it feels to be there.",
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
          <p className="eyebrow blue">A mood for the moment</p>
        </div>
        <div>
          <p className="eyebrow blue">Many ways in. One shared energy.</p>
          <h2>Our kind of good.</h2>
          {[
            [
              "Open air",
              "Open-air sessions, sunset gatherings and space to move.",
            ],
            [
              "After dark",
              "DJ-led nights and dancefloors built around shared energy.",
            ],
            [
              "Live & listening",
              "Performing artists and music-led experiences that bring people together.",
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
        <p className="eyebrow blue">Five people. One independent spirit.</p>
        <h2>Meet the lineup.</h2>
        {artists.map((a) => (
          <Link to={"/artists/" + a.slug} className="about-person" key={a.slug}>
            <img src={A + a.image} alt="" />
            <span>
              <b>{a.name}</b>
              <small>{a.role}</small>
            </span>
            <i>↗</i>
          </Link>
        ))}
        <Link to="/lineup" className="text-link">
          View the full lineup ↗
        </Link>
      </section>
      <section className="gallery-cta">
        <p className="eyebrow">Come through. Or create with us.</p>
        <h2>Let’s share the energy.</h2>
        <p>
          Explore our event previews, or start a conversation about a future
          collaboration.
        </p>
        <div className="button-row">
          <Link to="/events" className="button light">
            Explore events ↗
          </Link>
          <Link to="/work-with-us" className="button outline">
            Work with us ↗
          </Link>
        </div>
      </section>
    </Shell>
  )
}

function ContactPage({ collaborate = false }: { collaborate?: boolean }) {
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
            ? "For venues, promoters, artists & brands"
            : "Good conversations start here"}
        </p>
        <h1>
          {collaborate ? (
            <>
              Make something
              <br />
              people feel.
            </>
          ) : (
            <>
              Say hello.
              <br />
              Come through.
            </>
          )}
        </h1>
        <p>
          {collaborate
            ? "DANSA hosts its own parties and music events. Have a space, a sound or an idea that could belong in the next one? Let’s talk."
            : "A question about DANSA, an event idea or something you’d like us to know? You’re in the right place."}
        </p>
      </section>
      {collaborate ? (
        <>
          <section className="work-intro">
            <img src={A + "e9707.png"} alt="DJ booth and dancefloor" />
            <div>
              <p className="eyebrow blue">Independent by nature</p>
              <h2>Your idea. Our shared energy.</h2>
              <p>
                We’re open to conversations about future collaborations that add
                something real to the parties we host.
              </p>
              <a href="#inquiry" className="text-link">
                Start a conversation ↗
              </a>
            </div>
          </section>
          <section className="dark opportunities">
            <p className="eyebrow">Possibilities, not a partner roster</p>
            <h2>Good things start together.</h2>
            {[
              [
                "01",
                "Venues",
                "A room, courtyard or open-air space with character. Share what makes your place feel different.",
              ],
              [
                "02",
                "Promoters",
                "A shared vision for an independent event. Tell us the idea and how you see us working together.",
              ],
              [
                "03",
                "Artists",
                "Music and performance that could add to a DANSA night. Introduce your work in your own words.",
              ],
              [
                "04",
                "Brands",
                "Thoughtful ways to contribute to the experience. Start with the connection, not just the logo.",
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
          <p className="eyebrow blue">What brings you here?</p>
          <div>
            {[
              [
                "General",
                "Questions about DANSA and the parties we host.",
                "Choose General in the inquiry form.",
              ],
              [
                "Booking",
                "A proposed event or artist-related inquiry.",
                "Choose Booking, or use an artist’s direct Instagram below.",
              ],
              [
                "Event support",
                "Questions about event details, access or ticket availability.",
                "Confirmed information will be added to each event page.",
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
              ? "A little context goes a long way"
              : "A note before you write"}
          </p>
          <h2>
            {collaborate ? "Start with the idea." : "Let’s keep it clear."}
          </h2>
          <p>
            {collaborate
              ? "You don’t need a finished proposal. A clear introduction is a good place to begin."
              : "Include the subject of your inquiry and any relevant context. For an event question, mention the event preview you’re asking about."}
          </p>
          {!collaborate && (
            <div className="event-note">
              <b>Next event</b>
              <strong>Announcement coming soon.</strong>
              <span>No date, venue or ticket release is confirmed yet.</span>
            </div>
          )}
        </div>
        <div>
          <h2>{collaborate ? "Let’s make it happen." : "Drop us a note."}</h2>
          <p>Tell us what you have in mind. Fields marked * are required.</p>
          {sent ? (
            <div className="form-note">
              <h3>Form checked.</h3>
              <p>
                Your entries are valid, but nothing was transmitted or stored.
                Connect a form service or backend before launch.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field-pair">
                <label>
                  Name *<input name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email *
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </label>
              </div>
              {collaborate && (
                <label>
                  Organization
                  <input
                    name="organization"
                    placeholder="Venue, project or organization (optional)"
                  />
                </label>
              )}
              <label>
                {collaborate ? "Collaboration type *" : "Inquiry type *"}
                <select name="type" required>
                  <option value="">
                    Select{" "}
                    {collaborate
                      ? "venue / promoter / artist / brand"
                      : "general / booking / event support"}
                  </option>
                  {(collaborate
                    ? ["Venue", "Promoter", "Artist", "Brand"]
                    : ["General", "Booking", "Event support"]
                  ).map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>
                Message *
                <textarea
                  name="message"
                  rows={6}
                  placeholder={
                    collaborate
                      ? "Your idea, possible format and what you could bring."
                      : "What would you like to ask us?"
                  }
                  required
                />
              </label>
              <label className="consent">
                <input type="checkbox" required /> I consent to my details being
                used to respond to this inquiry. *
              </label>
              <button className="button blue-button" type="submit">
                {collaborate
                  ? "Send collaboration inquiry ↗"
                  : "Send inquiry ↗"}
              </button>
              <p className="fine">Submissions are not sent or stored yet.</p>
            </form>
          )}
        </div>
      </section>
      {!collaborate && (
        <section className="dark artist-directory">
          <div>
            <p className="eyebrow">Looking for an artist?</p>
            <h2>Go straight to the source.</h2>
            <p>
              Each artist has their own Instagram. These are direct artist
              contact routes, not DANSA event-support channels.
            </p>
            <Link to="/lineup" className="text-link light-link">
              Meet the lineup ↗
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
            ? "Looking for something else?"
            : "Venue / promoter / artist / brand"}
        </p>
        <h2>
          {collaborate
            ? "Just want to get in touch?"
            : "Have an idea for a DANSA night?"}
        </h2>
        <p>
          {collaborate
            ? "For general questions or event-support inquiries, head to Contact."
            : "Our collaboration page is the place to tell us what you have in mind."}
        </p>
        <Link
          to={collaborate ? "/contact" : "/work-with-us"}
          className="text-link"
        >
          {collaborate ? "Contact DANSA ↗" : "Work with us ↗"}
        </Link>
      </section>
    </Shell>
  )
}

function Cta() {
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">The next idea takes shape</p>
        <h2>Good people. Shared energy.</h2>
      </div>
      <div>
        <p>
          Explore what DANSA is planning. Event times and ticket links will be
          announced only when confirmed.
        </p>
        <Link to="/events" className="button light">
          Explore events ↗
        </Link>
      </div>
    </section>
  )
}

function NotFound() {
  return (
    <Shell>
      <PageHero
        eyebrow="404"
        title="Page not found"
        text="That page is not part of the DANSA site."
      />
      <section>
        <Link to="/" className="button blue-button">
          Back home
        </Link>
      </section>
    </Shell>
  )
}

export default function App() {
  const [path, setPath] = useState(location.pathname)
  useEffect(() => {
    const update = () => setPath(location.pathname)
    addEventListener("popstate", update)
    return () => removeEventListener("popstate", update)
  }, [])
  const artist = artists.find((a) => path === `/artists/${a.slug}`)
  if (artist) return <ArtistPage artist={artist} />
  if (path === "/") return <Home />
  if (path === "/events") return <Events />
  if (path === "/events/the-late-connection") return <EventDetail />
  if (path === "/lineup") return <Lineup />
  if (path === "/gallery") return <Gallery />
  if (path === "/about") return <About />
  if (path === "/work-with-us") return <ContactPage collaborate />
  if (path === "/contact") return <ContactPage />
  return <NotFound />
}
