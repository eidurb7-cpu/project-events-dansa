import { useTranslation } from "./i18n"
import type { ArtistStory } from "./stories"
import { usePageMetadata } from "./usePageMetadata"

type FeaturedArtist = {
  name: string
  slug: string
  image: string
  handle: string
  instagram: string
}

const milestones = [
  {
    year: "2019",
    title: "Audiomack profile",
    detail: "A public profile since January 2019.",
    href: "https://audiomack.com/imani-chaula",
  },
  {
    year: "2022",
    title: "Paradise City",
    detail: "A single in the recorded catalogue.",
    href: "https://music.apple.com/us/album/paradise-city-single/1638588348",
  },
  {
    year: "2023",
    title: "Sisi",
    detail: "With Chino Kidd and Dj ALLY B.",
    href: "https://music.apple.com/us/album/sisi-single/1715784970",
  },
  {
    year: "2024",
    title: "Kilimanjaro",
    detail: "Released on 1 November 2024.",
    href: "https://music.apple.com/tz/song/1776381067",
  },
  {
    year: "2025",
    title: "Collaborations",
    detail: "Thamani with Baraka Da Prince. Up with Bill nass.",
    href: "https://music.apple.com/tz/song/1809055251",
  },
]

const featuredTracks = [
  {
    title: "Kilimanjaro",
    match: "Kilimanjaro",
    credit: "Solo single",
    platform: "Apple Music",
  },
  {
    title: "Thamani",
    match: "Thamani (feat. Baraka Da Prince)",
    credit: "With Baraka Da Prince",
    platform: "Audiomack",
  },
  {
    title: "Up",
    match: "Up (feat. Bill nass)",
    credit: "With Bill nass",
    platform: "Apple Music",
  },
]

const credits = [
  {
    name: "Baraka Da Prince",
    role: "Featured artist",
    track: "Thamani",
    href: "https://audiomack.com/imani-chaula/song/thamani",
  },
  {
    name: "Bill nass",
    role: "Featured artist",
    track: "Up",
    href: "https://music.apple.com/tz/song/1809055251",
  },
  {
    name: "Goodluck Gozbert",
    role: "Producer",
    track: "Thamani",
    href: "https://audiomack.com/imani-chaula/song/thamani",
  },
]

function Outbound({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

export function ArtistFeature({
  artist,
  story,
}: {
  artist: FeaturedArtist
  story: ArtistStory
}) {
  const t = useTranslation()
  usePageMetadata(
    "Ice Boy Africa | DANSA",
    t(
      "Meet the Tanzanian artist behind Paradise City, Kilimanjaro and Thamani. Explore his music, collaborators and the story so far.",
    ),
  )
  return (
    <>
      <section className="feature-hero">
        <div className="feature-intro">
          <h1>
            Ice Boy
            <br />
            Africa
          </h1>
          <p className="feature-subtitle">{t("Singer. Rapper. Songwriter.")}</p>
          <p className="feature-deck">
            {t(
              "Meet the Tanzanian artist behind Paradise City, Kilimanjaro and Thamani. Explore his music, collaborators and the story so far.",
            )}
          </p>
          <div className="feature-actions">
            <a href="#artist-music" className="button blue-button">
              {t("Listen to the music")} <span aria-hidden="true">↘</span>
            </a>
            <a href="#artist-story" className="button feature-outline">
              {t("Read his story")} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <figure className="feature-portrait">
          <img
            src={`/assets/${artist.image}`}
            alt="Ice Boy Africa"
            fetchPriority="high"
          />
          <figcaption>
            Ice Boy Africa <span>/ {t("Tanzania")}</span>
          </figcaption>
        </figure>
      </section>

      <dl className="feature-facts">
        <div>
          <dt>{t("Origin")}</dt>
          <dd>{t("Tanzania")}</dd>
        </div>
        <div>
          <dt>{t("Disciplines")}</dt>
          <dd>{t("Vocals & songwriting")}</dd>
        </div>
        <div>
          <dt>{t("In the line-up")}</dt>
          <dd>{t("Music Artist / Performer")}</dd>
        </div>
      </dl>

      <section className="feature-music" id="artist-music">
        <h2 className="feature-section-label">{t("Start with these three")}</h2>
        <div className="feature-tracks">
          {featuredTracks.map((track, index) => {
            const release = story.releases?.find(
              (item) => item.title === track.match,
            )
            if (!release) return null
            return (
              <article key={track.match}>
                <span className="feature-track-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{track.title}</h3>
                <p>{t(track.credit)}</p>
                <p className="feature-track-year">{release.year}</p>
                <Outbound href={release.href}>
                  {t("Listen on")} {track.platform}
                </Outbound>
              </article>
            )
          })}
        </div>
      </section>

      <section className="feature-timeline" id="artist-timeline">
        <h2 className="feature-section-label">{t("A brief history")}</h2>
        <ol>
          {milestones.map((milestone) => (
            <li key={milestone.year}>
              <span className="feature-year">{milestone.year}</span>
              <h3>{t(milestone.title)}</h3>
              <p>{t(milestone.detail)}</p>
              <Outbound href={milestone.href}>
                {t("View release or profile")}
              </Outbound>
            </li>
          ))}
        </ol>
      </section>

      <section className="feature-story" id="artist-story">
        <nav aria-label={t("On this artist page")}>
          <a href="#artist-story">{t("The story")}</a>
          <a href="#artist-timeline">{t("Timeline")}</a>
          <a href="#artist-music">{t("Music")}</a>
          <a href="#artist-credits">{t("Credits")}</a>
        </nav>
        <div>
          <h2>{t("The story")}</h2>
          <p className="lead">
            {t("A Tanzanian voice, told through the music.")}
          </p>
          <p>
            {t(
              "Ice Boy Africa is a singer, rapper and content creator from Tanzania. His Audiomack profile identifies him as an artist and songwriter, with projects including Good Days EP, A17 AFRO EP and 3SUM EP.",
            )}
          </p>
          <p>
            {t(
              "The singles offer a route through the years: Paradise City in 2022, Sisi in 2023, then Baby and Kilimanjaro in 2024. In 2025, releases include Stress and collaborations with Baraka Da Prince and Bill nass.",
            )}
          </p>
          <a href={`/stories/${artist.slug}`} className="text-link">
            {t("Read the full artist story")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="feature-credits" id="artist-credits">
        <h2>{t("Collaborations & credits")}</h2>
        <p>{t("The people behind the releases.")}</p>
        <div>
          {credits.map((credit) => (
            <article key={credit.name}>
              <p className="eyebrow blue">
                {t(credit.role)} / {credit.track}
              </p>
              <h3>
                <Outbound href={credit.href}>{credit.name}</Outbound>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-follow">
        <div>
          <h2>{t("Follow Ice Boy Africa")}</h2>
          <p>{t("Listen, connect and keep up with the artist.")}</p>
        </div>
        <div className="feature-channels">
          <Outbound href={artist.instagram}>Instagram</Outbound>
          <Outbound href="https://music.apple.com/us/artist/ice-boy/1638588258">
            Apple Music
          </Outbound>
          <Outbound href="https://audiomack.com/imani-chaula">
            Audiomack
          </Outbound>
          <Outbound href={artist.instagram}>{t("Artist enquiries")}</Outbound>
          <p>{t("Artist enquiries go directly to Ice Boy via Instagram.")}</p>
        </div>
      </section>

      <section className="feature-reference-section">
        <details className="feature-references">
          <summary>{t("Sources & release credits")}</summary>
          <p>
            {t("Release dates and credits follow the linked platform records.")}
          </p>
          <ul>
            {story.sources?.map((source) => (
              <li key={source.href}>
                <Outbound href={source.href}>{source.label}</Outbound>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </>
  )
}
