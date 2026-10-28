import { useEffect } from "react"

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    const existing = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = existing?.content
    const meta = existing ?? document.createElement("meta")
    meta.name = "description"
    meta.content = description
    if (!existing) document.head.append(meta)
    document.title = title
    return () => {
      document.title = previousTitle
      if (existing) existing.content = previousDescription ?? ""
      else meta.remove()
    }
  }, [title, description])
}
