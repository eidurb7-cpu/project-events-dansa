import { useContext } from "react"
import { LanguageContext } from "./i18n"
import { SiteImage } from "./SiteImage"
import { galleryPhotos } from "./galleryPhotos"

const highlights = [8, 9, 4, 20].map((index) => galleryPhotos[index])

export function GalleryHighlights() {
  const { language } = useContext(LanguageContext)
  const de = language === "de"
  return (
    <section
      className="gallery-highlights"
      aria-labelledby="gallery-highlights-title"
    >
      <div className="section-head">
        <div>
          <p className="eyebrow blue">
            {de ? "Galerie / Highlights" : "Gallery / Highlights"}
          </p>
          <h2 id="gallery-highlights-title">
            {de ? "Spür die Energie." : "Feel the energy."}
          </h2>
        </div>
        <p className="highlight-intro">
          {de
            ? "Menschen, Bewegung und Nächte voller Gefühl. Ein Einblick in die visuelle Welt von DANSA."
            : "People, movement and nights full of feeling. A glimpse into the visual world of DANSA."}
        </p>
      </div>
      <div className="highlight-grid">
        {highlights.map((photo, index) => (
          <a
            key={photo.image}
            href="/gallery"
            className={`highlight-photo highlight-photo-${index + 1}`}
            aria-label={de ? "Galerie ansehen" : "Explore the gallery"}
          >
            <SiteImage
              src={`/assets/${photo.image}`}
              alt={photo.caption}
              sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw"
            />
            <span className="highlight-photo-index" aria-hidden="true">
                0{index + 1} / IN FRAME
            </span>
          </a>
        ))}
      </div>
      <div className="highlight-bottom">
        <p>
          {de
            ? "Unsere Mood-Auswahl: Bilder, die uns inspirieren."
            : "Our mood selection: images that inspire us."}
        </p>
        <a href="/gallery" className="button blue-button">
          {de ? "Mehr Bilder" : "More photos"} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
