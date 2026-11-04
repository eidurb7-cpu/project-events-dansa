import { useContext } from "react"

import { LanguageContext } from "./i18n"


export function CompanyOverview() {
  const { language } = useContext(LanguageContext)

  const de = language === "de"

  return (
    <section className="company-overview lavender">
      <div className="section-head">
        <div>
          <p className="eyebrow blue">
            {de ? "DANSA im Profil" : "DANSA at a glance"}
          </p>
          <h2>
            {de
              ? "Musik verbindet. Wir bringen sie zusammen."
              : "Music connects. We bring it together."}
          </h2>
        </div>
      </div>
      <p className="lead">
        {de
          ? "DANSA ist eine unabhängige Event- und Musikmarke mit Berlin als kreativem Ausgangspunkt. Unser Team verbindet Veranstaltungsorganisation, technische Produktion und künstlerische Perspektiven, um eigene Musikveranstaltungen zu entwickeln."
          : "DANSA is an independent event and music brand with Berlin as its creative starting point. Our team brings together event organization, technical production and artistic perspectives to develop our own music gatherings."}
      </p>
      <div className="company-pillars">
        <article>
          <p className="eyebrow blue">
            01 / {de ? "Veranstaltungen" : "Events"}
          </p>
          <h3>{de ? "Ideen mit Identität" : "Events with identity"}</h3>
          <p>
            {de
              ? "Von Open-Air-Konzepten bis zur gemeinsamen Tanzfläche: Musik, Atmosphäre und Begegnung stehen im Mittelpunkt."
              : "From open-air concepts to shared dancefloors, our focus is music, atmosphere and bringing people together."}
          </p>
        </article>
        <article>
          <p className="eyebrow blue">
            02 / {de ? "Produktion" : "Production"}
          </p>
          <h3>
            {de
              ? "Ein Team. Gemeinsame Verantwortung."
              : "One team. Shared responsibility."}
          </h3>
          <p>
            {de
              ? "Organisation, Ton, Licht, kreative Leitung und digitale Entwicklung haben klare Verantwortungsbereiche in unserem Team."
              : "Organization, sound, lighting, creative direction and digital development each have a place in our team."}
          </p>
        </article>
        <article>
          <p className="eyebrow blue">
            03 / {de ? "Zusammenarbeit" : "Partnerships"}
          </p>
          <h3>
            {de ? "Gemeinsam etwas schaffen" : "Build something together"}
          </h3>
          <p>
            {de
              ? "Wir freuen uns über Ideen von Veranstaltungsorten, Promotern, Künstlern und Marken, die unsere Leidenschaft für Musik und Community teilen."
              : "We welcome ideas from venues, promoters, artists and brands who share our interest in music and community."}
          </p>
          <a href="/work-with-us" className="text-link">
            {de ? "Zusammenarbeit anfragen" : "Discuss a collaboration"} ↗
          </a>
        </article>
      </div>
      <div className="company-links">
        <a href="/contact" className="button blue-button">
          {de ? "Geschäftliche Anfragen" : "Business enquiries"} ↗
        </a>
      </div>
    </section>
  )
}
