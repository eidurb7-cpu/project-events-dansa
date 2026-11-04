import { ContactForm } from "./ContactForm"
import { CONTACT_EMAIL } from "./contactDetails"
import { GalleryHighlights } from "./GalleryHighlights"

import { CompanyOverview, Impressum } from "./CompanyInformation"

import { usePageFilter } from "./usePageFilter"

import { SiteImage } from "./SiteImage"

import { ArtistPortfolio } from "./ArtistPortfolio"

import { useSiteNavigation, NAVIGATION_EVENT } from "./useSiteNavigation"

import {
  FAQBlock,
  HowItWorks,
} from "./PageSections"

import { GalleryViewer } from "./GalleryViewer"

import { ArtistOverview } from "./ArtistOverview"

import { LanguageContext, useTranslation, type Language } from "./i18n"

import {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { artistStories, type ArtistStory } from "./stories"

import { ArtistFeature } from "./ArtistFeature"

import { usePageMetadata } from "./usePageMetadata"

const A = "/assets/"

type Artist = {
  slug: string

  name: string

  role: string

  teamRole: string

  handle: string

  instagram: string

  image: string

  bookingEmail?: string

  soundcloud?: string
}

const artists: Artist[] = [
  {
    slug: "larry",

    name: "Larry",

    role: "DJ",

    teamRole: "Event Organizer & Technical Production Lead",

    handle: "@larriloca",

    instagram: "https://www.instagram.com/larriloca/",

    image: "larry-new.webp",
  },

  {
    slug: "julius",

    name: "Julius",

    role: "DJ",

    teamRole: "Event Organizer & Technical Production Lead",

    handle: "@julius_marcele",

    instagram: "https://www.instagram.com/julius_marcele/",

    image: "f4d1f.png",
  },

  {
    slug: "dj-eddy",

    name: "DJ Eddy",

    role: "DJ & Dancer",

    teamRole: "Event Organizer / Tech Development",

    handle: "@eddy.the.deejay",

    instagram: "https://www.instagram.com/eddy.the.deejay/",

    bookingEmail: "djeddybookings@gmail.com",

    soundcloud: "https://soundcloud.com/eddythedeejay",

    image: "38559.png",
  },

  {
    slug: "ice-boy",

    name: "Ice Boy",

    role: "Music Artist / Performer",

    teamRole: "Event Organizer / Creative Direction",

    handle: "@iceboyafrica",

    instagram: "https://www.instagram.com/iceboyafrica/",

    image: "b0060.png",
  },

  {
    slug: "d-ukingo",

    name: "D Ukingo",

    role: "Musician & Dancer",

    teamRole: "Event Organizer / Community & Culture",

    handle: "@d_ukingo",

    instagram: "https://www.instagram.com/d_ukingo/",

    image: "966c6.png",
  },
]

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
    <a href={to} className={className} {...props}>
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

  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const overflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    const background = [
      ...document.querySelectorAll<HTMLElement>("main, footer"),
    ]

    const inertStates = background.map((element) => element.inert)

    background.forEach((element) => {
      element.inert = true
    })

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)

        menuButton.current?.focus()
      }

      if (event.key === "Tab") {
        const controls = [
          ...document.querySelectorAll<HTMLElement>(
            ".header a[href], .header button:not([disabled])",
          ),
        ].filter((element) => element.getClientRects().length > 0)

        const first = controls[0]

        const last = controls[controls.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()

          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()

          first?.focus()
        }
      }
    }

    const media = matchMedia("(min-width: 981px)")

    const closeOnResize = () => {
      if (media.matches) setOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)

    media.addEventListener("change", closeOnResize)

    return () => {
      document.body.style.overflow = overflow

      background.forEach((element, index) => {
        element.inert = inertStates[index]
      })

      window.removeEventListener("keydown", closeOnEscape)

      media.removeEventListener("change", closeOnResize)
    }
  }, [open])

  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setOpen(false)

      setPath(location.pathname)
    }

    addEventListener("popstate", handleNavigation)

    addEventListener(NAVIGATION_EVENT, handleNavigation)

    return () => {
      removeEventListener("popstate", handleNavigation)

      removeEventListener(NAVIGATION_EVENT, handleNavigation)
    }
  }, [])

  const nav = [
    [t("Home"), "/"],

    [t("The Team"), "/lineup"],

    [t("Gallery"), "/gallery"],

    [t("Stories"), "/stories"],

    [t("About"), "/about"],
  ]

  return (
    <header className="header">
      <Link to="/" className="logo" aria-label={t("DANSA home")}>
        DANSA
        <Equalizer />
      </Link>
      <button
        ref={menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label={t("Toggle menu")}
      >
        {open ? t("CLOSE") : t("MENU")}
      </button>
      <nav
        id="primary-navigation"
        className={open ? "nav open" : "nav"}
        aria-label={t("Main navigation")}
      >
        {nav.map(([label, destination]) => (
          <Link
            key={destination}
            to={destination}
            className={`navlink ${
              path === destination ||
              (destination !== "/" && path.startsWith(destination + "/")) ||
              (destination === "/lineup" && path.startsWith("/artists/"))
                ? "active"
                : ""
            }`}
            aria-current={path === destination ? "page" : undefined}
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
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">{CONTACT_EMAIL}</a>
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
          <Link to="/lineup">{t("The Team")}</Link>
          <Link to="/gallery">{t("Gallery")}</Link>
          <Link to="/stories">{t("Stories")}</Link>
        </div>
        <div>
          <p className="eyebrow">Dansa</p>
          <Link to="/about">{t("About DANSA")}</Link>
          <Link to="/work-with-us">{t("Work With Us")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
          <Link to="/impressum">Impressum</Link>
        </div>
      </div>
      <Link to="/" className="footer-logo">
        DANSA
      </Link>
      <div className="copyright">
        <span>© 2026 DANSA</span>
        <Link to="/impressum">Impressum / {language === "de" ? "Anbieterinformationen" : "Legal notice"}</Link>
        <span>{t("MUSIC. CULTURE. TOGETHERNESS.")}</span>
      </div>
    </footer>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  const t = useTranslation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("Skip to content")}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}

function Home() {
  const t = useTranslation()

  usePageMetadata(
    "DANSA | Music, culture & togetherness",

    t(
      "DANSA brings people together through sound, movement and shared energy.",
    ),
  )

  return (
    <Shell>
      <section className="hero">
        <div className="hero-title-row">
          <div className="hero-word">DANSA</div>
          <Equalizer large />
        </div>
        <div className="hero-grid">
          <SiteImage
            src={A + "b41fd.png"}
            alt={t("Crowd dancing together")}
            fetchPriority="high"
          />
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
            <Link to="/gallery" className="button light">
              {t("Explore the gallery ↗")}
            </Link>
          </div>
        </div>
      </section>
      <GalleryHighlights />
      <section className="split">
        <SiteImage
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
      <section className="blue-block">
        <div>
          <p className="eyebrow">{t("DANSA selects")}</p>
          <h2>
            {t("The Dansa")}
            <br />
            {t("selects.")}
          </h2>
          <p>{t("A collection of sounds and stories that keep us moving.")}</p>
          <Link to="/stories" className="text-link light-link">
            {t("Browse the journal")} ↗
          </Link>
        </div>
        <SiteImage src={A + "fa084.png"} alt={t("Hands selecting a record")} />
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
      <StoriesPreview />
      <Cta />
    </Shell>
  )
}

function ArtistTile({ artist }: { artist: Artist }) {
  const t = useTranslation()

  return (
    <article className="artist-tile">
      <Link to={"/artists/" + artist.slug}>
        <SiteImage
          src={A + artist.image}
          alt={artist.name}
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </Link>
      <h3>{artist.name}</h3>
      <p>{t(artist.role)}</p>
      <p className="blue">{t(artist.teamRole)}</p>
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

  const [filter, setFilter] = usePageFilter(
    ["all", "production", "creative"] as const,

    "all",
  )

  const visible = artists.filter(
    (artist) =>
      filter === "all" ||
      (filter === "production"
        ? ["larry", "julius", "dj-eddy"].includes(artist.slug)
        : ["ice-boy", "d-ukingo"].includes(artist.slug)),
  )

  usePageMetadata(
    t("The team") + " | DANSA",

    t("Meet the people building DANSA and bringing each event to life."),
  )

  return (
    <Shell>
      <PageHero
        eyebrow={t("The people behind the energy")}
        title={t("The team")}
        text={t(
          "Organizers, sound and lighting specialists, and creative minds. Meet the team bringing DANSA together.",
        )}
      />
      <section className="lineup-directory">
        <div className="section-head">
          <h2>{t("People behind the rhythm.")}</h2>
          <p role="status" className="sr-only">
            {visible.length} / {artists.length} {t("team members shown")}
          </p>
        </div>
        <div
          className="site-filters"
          role="group"
          aria-label={t("Filter the team")}
        >
          {[
            ["all", "Everyone"],

            ["production", "Organization & Production"],

            ["creative", "Creative & Community"],
          ].map(([value, label]) => (
            <button
              type="button"
              key={value}
              aria-pressed={filter === value}
              onClick={() => setFilter(value as typeof filter)}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <div className="lineup-grid three">
          {visible.map((artist) => (
            <ArtistTile artist={artist} key={artist.slug} />
          ))}
        </div>
      </section>
      <StoriesPreview />
      <Cta />
    </Shell>
  )
}

function ArtistPage({ artist }: { artist: Artist }) {
  const story = artistStories.find((item) => item.artist === artist.slug)

  return (
    <Shell>
      {story?.kind === "biography" ? (
        <ArtistFeature artist={artist} story={story} />
      ) : (
        <ArtistOverview artist={artist} story={story} />
      )}
      <StoriesPreview exclude={artist.slug} />
    </Shell>
  )
}

function StoryCards({ stories }: { stories: ArtistStory[] }) {
  const { language } = useContext(LanguageContext)

  const t = useTranslation()

  return (
    <div className="story-grid">
      {stories.map((story) => {
        const artist = artists.find((person) => person.slug === story.artist)

        if (!artist) return null

        return (
          <article className="story-card" key={story.artist}>
            <Link to={`/stories/${story.artist}`} className="story-image">
              <SiteImage
                src={A + artist.image}
                alt={artist.name}
                loading="lazy"
              />
            </Link>
            <p className="eyebrow blue">
              {artist.name} / {t(artist.role)}
            </p>
            <h3>
              <Link to={`/stories/${story.artist}`}>
                {story.title[language]}
              </Link>
            </h3>
            <p>{story.intro[language]}</p>
            <Link to={`/stories/${story.artist}`} className="text-link">
              {t("Read story")} ↗
            </Link>
          </article>
        )
      })}
    </div>
  )
}

function StoriesPreview({ exclude }: { exclude?: string } = {}) {
  const t = useTranslation()

  return (
    <section className="lavender stories-preview">
      <div className="section-head">
        <div>
          <p className="eyebrow blue">{t("From the DANSA journal")}</p>
          <h2>{t("Different roles. Shared rhythm.")}</h2>
        </div>
        <Link to="/stories" className="text-link">
          {t("All stories")} ↗
        </Link>
      </div>
      <StoryCards
        stories={[
          artistStories[0],

          artistStories[2],

          artistStories[3],

          artistStories[1],

          artistStories[4],
        ]

          .filter((story) => story.artist !== exclude)

          .slice(0, 3)}
      />
    </section>
  )
}

function ArtistStoryPreview({ artist }: { artist: Artist }) {
  const { language } = useContext(LanguageContext)

  const t = useTranslation()

  const story = artistStories.find((item) => item.artist === artist.slug)

  if (!story) return null

  return (
    <section className="dark artist-story-preview">
      <div>
        <p className="eyebrow">
          {t(
            story.kind === "biography"
              ? "Artist history"
              : "About the creative discipline",
          )}
        </p>
        <h2>{story.title[language]}</h2>
      </div>
      <div>
        <p className="lead">{story.intro[language]}</p>
        <p>{story.sections[0].text[language]}</p>
        <Link to={`/stories/${artist.slug}`} className="text-link light-link">
          {t("Read story")} ↗
        </Link>
      </div>
    </section>
  )
}

function Stories() {
  const t = useTranslation()

  usePageMetadata(
    `${t("Stories")} | DANSA`,

    t("Different roles. Shared rhythm."),
  )

  const [filter, setFilter] = usePageFilter(
    ["all", "dj", "performance"] as const,

    "all",
  )

  const stories =
    filter === "all"
      ? artistStories
      : artistStories.filter((story) => story.category === filter)

  return (
    <Shell>
      <PageHero
        className="stories-hero"
        eyebrow={t("From the DANSA journal")}
        title={t("Different roles. Shared rhythm.")}
        text={t(
          "Music, craft and the people behind DANSA.",
        )}
      />
      <section>
        <div
          className="story-filters"
          role="group"
          aria-label={t("Filter stories")}
        >
          {([
            ["all", "All stories"],

            ["dj", "DJs"],

            ["performance", "Live & movement"],
          ] as const).map(([value, label]) => (
            <button
              type="button"
              key={value}
              aria-pressed={filter === value}
              onClick={() => setFilter(value as typeof filter)}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <StoryCards stories={stories} />
      </section>
      <Cta />
    </Shell>
  )
}

function StoryPage({ story }: { story: ArtistStory }) {
  const { language } = useContext(LanguageContext)

  const t = useTranslation()

  usePageMetadata(`${story.title[language]} | DANSA`, story.intro[language])

  const artist = artists.find((person) => person.slug === story.artist)

  if (!artist) return <NotFound />

  return (
    <Shell>
      <section className="story-hero">
        <div>
          <Link to="/stories" className="eyebrow blue">
            ← {t("Back to stories")}
          </Link>
          <p className="eyebrow blue">
            {artist.name} / {t(artist.role)}
          </p>
          <h1>{story.title[language]}</h1>
          <p className="lead">{story.intro[language]}</p>
        </div>
        <SiteImage
          src={A + artist.image}
          alt={artist.name}
          fetchPriority="high"
        />
      </section>
      <section className="story-body">
        <aside>
          <p className="eyebrow blue">{t("Artist stories")}</p>
          <p>
            {story.sourceNote?.[language] ?? t(artist.teamRole)}
          </p>
          <Link to={`/artists/${artist.slug}`} className="text-link">
            {t("Artist profile")} ↗
          </Link>
          <nav className="story-contents" aria-label={t("On this page")}>
            {story.sections.map((part, index) => (
              <a key={index} href={`#chapter-${index + 1}`}>
                0{index + 1} / {part.title[language]}
              </a>
            ))}
            {story.releases && (
              <a href="#selected-releases">
                {story.musicHeading?.[language] ?? t("Selected releases")}
              </a>
            )}
            {story.sources && <a href="#story-sources">{t("Sources")}</a>}
          </nav>
        </aside>
        <article>
          {story.sections.map((part, index) => (
            <div
              className="story-chapter"
              id={`chapter-${index + 1}`}
              key={index}
            >
              <p className="eyebrow blue">0{index + 1}</p>
              <h2>{part.title[language]}</h2>
              <p>{part.text[language]}</p>
            </div>
          ))}
          {story.releases && (
            <div className="story-releases" id="selected-releases">
              <h2>
                {story.musicHeading?.[language] ?? t("Selected releases")}
              </h2>
              <p>{t("Explore the music behind the story.")}</p>
              <ul>
                {story.releases.map((release) => (
                  <li key={release.title}>
                    <a href={release.href} target="_blank" rel="noreferrer">
                      <span>{release.year}</span>
                      <strong>{release.title}</strong>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {story.sources && (
            <div className="story-sources" id="story-sources">
              <h3>{t("Sources")}</h3>
              <p>
                {t(
                  story.kind === "artist-site"
                    ? "Sources for this artist profile and event archive."
                    : "Release dates and credits follow the linked platform records.",
                )}
              </p>
              <ul>
                {story.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="story-artist-link lavender">
            <p className="eyebrow blue">{t("Direct from the artist")}</p>
            <h3>{t("Explore the artist’s world.")}</h3>
            <p>
              {t(
                "For music, releases and first-hand updates, follow the artist’s own channel.",
              )}
            </p>
            <a
              href={artist.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {artist.handle} ↗
            </a>
            {artist.bookingEmail && (
              <p className="story-booking-link">
                <a href={`mailto:${artist.bookingEmail}`} className="text-link">
                  {t("Booking enquiries")}: {artist.bookingEmail} ↗
                </a>
              </p>
            )}
            {artist.soundcloud && (
              <p className="story-booking-link">
                <a
                  href={artist.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {t("Listen on SoundCloud")} ↗
                </a>
              </p>
            )}
          </div>
        </article>
      </section>
      {story.kind === "artist-site" && (
        <ArtistPortfolio story={story} showMixes={false} />
      )}
      <section className="dark">
        <div className="section-head">
          <h2>{t("More stories")}</h2>
          <Link to="/stories" className="text-link light-link">
            {t("All stories")} ↗
          </Link>
        </div>
        <StoryCards
          stories={artistStories

            .filter((item) => item.artist !== story.artist)

            .slice(0, 3)}
        />
      </section>
    </Shell>
  )
}

function PageHero({
  className = "",

  eyebrow,

  title,

  text,
}: {
  className?: string

  eyebrow: string

  title: React.ReactNode

  text: string
}) {
  return (
    <section className={`page-hero ${className}`}>
      <p className="eyebrow blue">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

function Gallery() {
  const t = useTranslation()

  usePageMetadata(t("Gallery") + " | DANSA", t("The feeling in pictures"))

  return (
    <Shell>
      <section className="page-hero gallery-page-title">
        <h1>{t("Gallery")}</h1>
        <p>{t("Mood photography. Not documentation of DANSA events.")}</p>
      </section>
      <section className="gallery-section">
        <GalleryViewer />
      </section>
    </Shell>
  )
}

function About() {
  const t = useTranslation()

  usePageMetadata(
    t("About DANSA") + " | DANSA",

    t("Independent spirit. Shared energy."),
  )

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
        <SiteImage
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
          <Link to="/gallery" className="text-link">
            {t("Explore the gallery ↗")}
          </Link>
        </div>
      </section>
      <CompanyOverview />
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
              ? "DANSA wird von seinem Organisations-, Technik- und Kreativteam gestaltet. Gemeinsam entwickeln sie Musik, Atmosphäre und Veranstaltungen."
              : "DANSA is shaped by its organizers, technical specialists and creative team. Together, they develop the music, atmosphere and events."}
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
              <SiteImage src={A + artist.image} alt={artist.name} />
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
          <SiteImage src={A + "911fb.png"} alt="" />
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
        <h2>{t("Meet the team.")}</h2>
        {artists.map((a) => (
          <Link to={"/artists/" + a.slug} className="about-person" key={a.slug}>
            <SiteImage src={A + a.image} alt="" />
            <span>
              <b>{a.name}</b>
              <small>
                {t(a.role)}
                <br />
                {t(a.teamRole)}
              </small>
            </span>
            <i>↗</i>
          </Link>
        ))}
        <Link to="/lineup" className="text-link">
          {t("Meet the full team ↗")}
        </Link>
      </section>
      <HowItWorks />
      <FAQBlock kind="about" />
      <section className="gallery-cta">
        <p className="eyebrow">{t("Come through. Or create with us.")}</p>
        <h2>{t("Let’s share the energy.")}</h2>
        <p>
          {t(
            "Explore our gallery, or start a conversation about a future collaboration.",
          )}
        </p>
        <div className="button-row">
          <Link to="/gallery" className="button light">
            {t("Explore the gallery ↗")}
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

  usePageMetadata(
    `${t(collaborate ? "Work With Us" : "Contact")} | DANSA`,

    t("Good conversations start here"),
  )

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
      <section className="contact-direct" aria-label={t("Contact")}>
        <div><p className="eyebrow blue">{t("Email DANSA")}</p><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
        <Link to="/impressum" className="text-link">Impressum / {t("Legal notice")} <span aria-hidden="true">↗</span></Link>
      </section>
      {collaborate ? (
        <>
          <section className="work-intro">
            <SiteImage
              src={A + "e9707.png"}
              alt={t("DJ booth and dancefloor")}
            />
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

                t("Send us a message below, or email the team directly."),
              ],

              [
                t("Booking"),

                t("A proposed event or artist-related inquiry."),

                t("Choose Booking, or use an artist’s direct contact below."),
              ],

              [
                t("Collaboration"),

                t("Ideas for venues, artists, promoters and brands."),

                t("Tell us what you would like to build together."),
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
                  "Include the subject of your enquiry and any relevant context so the team can respond.",
                )}
          </p>
        </div>
        <div>
          <h2>
            {collaborate ? t("Let’s make it happen.") : t("Drop us a note.")}
          </h2>
          <p>
            {t("Tell us what you have in mind. Fields marked * are required.")}
          </p>
          <ContactForm collaborate={collaborate} />
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
              {t("Meet the team ↗")}
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
      <FAQBlock kind="contact" />
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
        <h2>{t("Good people. Shared energy.")}</h2>
      </div>
      <div>
        <Link to="/gallery" className="button light">
          {t("Explore the gallery ↗")}
        </Link>
      </div>
    </section>
  )
}

function NotFound() {
  const t = useTranslation()

  usePageMetadata(
    `${t("Page not found")} | DANSA`,

    t("That page is not part of the DANSA site."),
  )

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
  const path = useSiteNavigation()

  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("dansa-language") === "de" ? "de" : "en"
    } catch {
      return "en"
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("dansa-language", language)
    } catch {
      /* Storage may be disabled. */
    }

    document.documentElement.lang = language
  }, [language])

  const artist = artists.find((a) => path === `/artists/${a.slug}`)

  const story = artistStories.find((item) => path === `/stories/${item.artist}`)

  let page: React.ReactNode

  if (artist) page = <ArtistPage artist={artist} />
  else if (story) page = <StoryPage story={story} />
  else if (path === "/stories") page = <Stories />
  else if (path === "/") page = <Home />
  else if (path === "/events" || path.startsWith("/events/")) page = <Gallery />
  else if (path === "/lineup") page = <Lineup />
  else if (path === "/gallery") page = <Gallery />
  else if (path === "/about") page = <About />
  else if (path === "/impressum")
    page = (
      <Shell>
        <Impressum />
      </Shell>
    )
  else if (path === "/work-with-us") page = <ContactPage collaborate />
  else if (path === "/contact") page = <ContactPage />
  else page = <NotFound />

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Fragment key={path}>{page}</Fragment>
    </LanguageContext.Provider>
  )
}
