import { SiteImage } from "./SiteImage"
import { useContext } from "react"
import { LanguageContext, useTranslation } from "./i18n"
import type { ArtistStory } from "./stories"
import { usePageMetadata } from "./usePageMetadata"
import { ArtistPortfolio } from "./ArtistPortfolio"

type Artist = {
  slug: string
  name: string
  role: string
  instagram: string
  handle: string
  image: string
  bookingEmail?: string
}

export function ArtistOverview({
  artist,
  story,
}: {
  artist: Artist
  story?: ArtistStory
}) {
  const t = useTranslation()
  const { language } = useContext(LanguageContext)
  usePageMetadata(
    `${artist.name} | DANSA`,
    story?.kind === "artist-site"
      ? story.intro[language]
      : `${artist.name} / ${t(artist.role)} / DANSA`,
  )
  return (
    <>
      <section className="feature-hero artist-overview">
        <div className="feature-intro">
          <a href="/lineup" className="eyebrow blue">
            {t("← Back to the lineup")}
          </a>
          <h1>{artist.name}</h1>
          <p className="feature-subtitle">{t(artist.role)}</p>
          <p className="feature-deck">
            {story?.kind === "artist-site"
              ? story.intro[language]
              : story
                ? story.title[language]
                : t("People behind the rhythm.")}
          </p>
          <div className="feature-actions">
            <a
              href={
                artist.bookingEmail
                  ? `mailto:${artist.bookingEmail}`
                  : artist.instagram
              }
              target={artist.bookingEmail ? undefined : "_blank"}
              rel={artist.bookingEmail ? undefined : "noreferrer"}
              className="button blue-button"
            >
              {t(artist.bookingEmail ? "Booking enquiries" : "Direct contact")}{" "}
              ↗
            </a>
            {story && (
              <a
                href={`/stories/${artist.slug}`}
                className="button feature-outline"
              >
                {t("Read story")} ↗
              </a>
            )}
          </div>
        </div>
        <figure className="feature-portrait">
          <SiteImage
            src={`/assets/${artist.image}`}
            alt={artist.name}
            fetchPriority="high"
          />
          <figcaption>
            {artist.name}
            <span>/ {t(artist.role)}</span>
          </figcaption>
        </figure>
      </section>
      {story?.kind === "artist-site" && <ArtistPortfolio story={story} />}
      <section className="artist-overview-story">
        <div>
          <p className="eyebrow blue">
            {t(story?.kind ? "Artist history" : "Explore the role")}
          </p>
          <h2>
            {story?.kind === "artist-site"
              ? story.title[language]
              : t("From the line-up to the story.")}
          </h2>
        </div>
        <div>
          {story && (
            <>
              <p className="lead">{story.intro[language]}</p>
              <p>{story.sections[0].text[language]}</p>
              <a href={`/stories/${artist.slug}`} className="text-link">
                {t("Read the full artist story")} ↗
              </a>
            </>
          )}
        </div>
      </section>
      <section className="feature-follow">
        <div>
          <h2>
            {t("Connect with")} {artist.name}
          </h2>
          <p>
            {t(
              "Artist updates and enquiries belong on the artist’s own channel.",
            )}
          </p>
        </div>
        <div className="artist-overview-contact">
          <a href={artist.instagram} target="_blank" rel="noreferrer">
            {artist.handle} ↗
          </a>
          {artist.bookingEmail && (
            <a
              className="artist-booking-email"
              href={`mailto:${artist.bookingEmail}`}
            >
              {artist.bookingEmail} ↗
            </a>
          )}
          <p>{t("Direct artist contact via their own Instagram.")}</p>
        </div>
      </section>
    </>
  )
}
