import { useContext, useEffect } from "react"
import { LanguageContext } from "./i18n"
import { getPageSeo, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "./seo"

export function usePageMetadata(title: string, description: string) {
  const { language } = useContext(LanguageContext)
  useEffect(() => {
    const seo = getPageSeo(location.pathname, language)
    const pageTitle = seo.title
    const pageDescription = seo.description
    const previousTitle = document.title
    const restore: (() => void)[] = []
    const setMeta = (key: string, value: string, property = false) => {
      const attribute = property ? "property" : "name"
      const existing = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      const meta = existing ?? document.createElement("meta")
      const previous = meta.content
      meta.setAttribute(attribute, key)
      meta.content = value
      if (!existing) document.head.append(meta)
      restore.push(() => { if (existing) meta.content = previous; else meta.remove() })
    }
    document.title = pageTitle
    setMeta("description", pageDescription)
    setMeta("robots", seo.noindex ? "noindex, follow" : "index, follow")
    for (const [key, value] of [["og:title", pageTitle], ["og:description", pageDescription], ["og:url", seo.canonical], ["og:site_name", SITE_NAME], ["og:type", "website"], ["og:image", SOCIAL_IMAGE]]) setMeta(key, value, true)
    for (const [key, value] of [["twitter:title", pageTitle], ["twitter:description", pageDescription], ["twitter:card", "summary_large_image"], ["twitter:image", SOCIAL_IMAGE]]) setMeta(key, value)

    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const canonical = existingCanonical ?? document.createElement("link")
    const previousCanonical = canonical.href
    canonical.rel = "canonical"
    canonical.href = seo.canonical
    if (!existingCanonical) document.head.append(canonical)
    restore.push(() => { if (existingCanonical) canonical.href = previousCanonical; else canonical.remove() })

    const existingSchema = document.getElementById("site-structured-data")
    const schema = existingSchema ?? document.createElement("script")
    const previousSchema = schema.textContent
    schema.id = "site-structured-data"
    schema.setAttribute("type", "application/ld+json")
    schema.textContent = JSON.stringify(seo.path === "/"
      ? { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, alternateName: "DANSA City", url: `${SITE_URL}/`, inLanguage: language }
      : { "@context": "https://schema.org", "@type": "WebPage", name: pageTitle, description: pageDescription, url: seo.canonical, inLanguage: language, isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` } })
    if (!existingSchema) document.head.append(schema)
    restore.push(() => { if (existingSchema) schema.textContent = previousSchema; else schema.remove() })

    return () => {
      document.title = previousTitle
      restore.forEach(reset => reset())
    }
  }, [title, description, language])
}
