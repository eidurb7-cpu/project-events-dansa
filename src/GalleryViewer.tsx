import { galleryPhotos } from "./galleryPhotos"
import { SiteImage } from "./SiteImage"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "./i18n"

const photos = galleryPhotos

export function GalleryViewer() {
  const t = useTranslation()
  const [selected, setSelected] = useState<string | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const visible = photos
  const active = visible.find((photo) => photo.image === selected)
  const index = visible.findIndex((photo) => photo.image === selected)
  const move = (direction: number) =>
    setSelected(
      visible[(index + direction + visible.length) % visible.length].image,
    )
  useEffect(() => {
    if (selected === null) {
      dialog.current?.close()
      return
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    if (!dialog.current?.open) dialog.current?.showModal()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selected])
  return (
    <>
      <p className="sr-only" role="status">
        {visible.length} / {photos.length} {t("photos shown")}
      </p>
      <div className="gallery">
        {visible.map((photo) => (
          <figure key={photo.image}>
            <button
              className="gallery-open"
              type="button"
              aria-label={`${t("Open photo")}: ${t(photo.caption)}`}
              onClick={() => setSelected(photo.image)}
            >
              <SiteImage
                src={`/assets/${photo.image}`}
                alt={t(photo.caption)}
                loading="lazy"
              />
            </button>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={t("Photo viewer")}
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            move(1)
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            move(-1)
          }
        }}
      >
        <button
          type="button"
          className="gallery-close"
          onClick={() => setSelected(null)}
          aria-label={t("Close photo")}
        >
          ✕
        </button>
        {active && (
          <figure>
            <SiteImage
              src={`/assets/${active.image}`}
              alt={t(active.caption)}
              loading="eager"
              sizes="94vw"
            />
            <figcaption>
              {t(active.caption)}{" "}
              <span>
                {index + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
        )}
        <div className="gallery-dialog-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={t("Previous photo")}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={t("Next photo")}
          >
            →
          </button>
        </div>
      </dialog>
    </>
  )
}
