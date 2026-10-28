import { useContext } from "react"
import { LanguageContext, useTranslation } from "./i18n"
import type { ArtistStory } from "./stories"
import { usePageMetadata } from "./usePageMetadata"

type Artist = {
  slug: string
  name: string
  role: string
  instagram: string
  handle: string
  image: string
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
    `${artist.name} / ${t(artist.role)} / DANSA`,
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
            {story ? story.title[language] : t("People behind the rhythm.")}
          </p>
          <div className="feature-actions">
            <a
              href={artist.instagram}
              target="_blank"
              rel="noreferrer"
              className="button blue-button"
            >
              {t("Direct contact")} ↗
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
          <img
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
      <section className="artist-overview-story">
        <div>
          <p className="eyebrow blue">{t("Explore the role")}</p>
          <h2>{t("From the line-up to the story.")}</h2>
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
          <p>{t("Direct artist contact via their own Instagram.")}</p>
        </div>
      </section>
    </>
  )
}
