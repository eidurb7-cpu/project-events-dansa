import { useContext } from "react"
import { LanguageContext, useTranslation } from "./i18n"
import type { ArtistStory } from "./stories"
import { SiteImage } from "./SiteImage"

export function ArtistPortfolio({
  story,
  showMixes = true,
}: {
  story: ArtistStory
  showMixes?: boolean
}) {
  const { language } = useContext(LanguageContext)
  const t = useTranslation()
  const appearance = story.appearance
  return (
    <>
      {story.genres && (
        <section className="artist-genres dark">
          <p className="eyebrow">{t("Music styles")}</p>
          <h2>{t("Open format. A clear identity.")}</h2>
          <ul>
            {story.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </section>
      )}
      {showMixes && story.releases && (
        <section className="artist-mixes">
          <div className="section-head">
            <h2>{story.musicHeading?.[language] ?? t("Selected releases")}</h2>
            <p>{t("Listen on SoundCloud")}</p>
          </div>
          <div>
            {story.releases.map((mix, index) => (
              <article key={mix.href}>
                <p className="eyebrow blue">
                  0{index + 1} / {mix.year}
                </p>
                <h3>{mix.title}</h3>
                <a
                  className="text-link"
                  href={mix.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("Listen on SoundCloud")} ↗
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
      {appearance && (
        <section className="artist-archive">
          <figure>
            <SiteImage
              src={`/assets/${appearance.image}`}
              alt={`${appearance.title} / Eddy the DJ / DJ Swiper`}
              sizes="(max-width: 760px) 100vw, 40vw"
            />
          </figure>
          <div>
            <p className="eyebrow blue">
              {t("From the artist’s event archive")}
            </p>
            <h2>{appearance.title}</h2>
            <time dateTime={appearance.date}>
              {new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              }).format(new Date(`${appearance.date}T12:00:00Z`))}
            </time>
            <p className="lead">{appearance.venue}</p>
            <p>{appearance.description[language]}</p>
            <a
              href={`/assets/${appearance.image}`}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {t("View original flyer")} ↗
            </a>
          </div>
        </section>
      )}
    </>
  )
}
