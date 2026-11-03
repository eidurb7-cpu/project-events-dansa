import { CONTACT_EMAIL } from "./contactDetails"
import { useContext } from "react"

import { LanguageContext } from "./i18n"

import { usePageMetadata } from "./usePageMetadata"

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
        <a href="/impressum" className="text-link">
          Impressum ↗
        </a>
      </div>
    </section>
  )
}

export function Impressum() {
  const { language } = useContext(LanguageContext)

  const de = language === "de"

  usePageMetadata(
    "Impressum | DANSA",

    de
      ? "Anbieterinformationen und Kontakt zu DANSA."
      : "DANSA provider information and contact details.",
  )

  const pending = de ? "Noch zu ergänzen" : "To be provided"

  const fields = [
    [
      de
        ? "Betreiber / vollständiger rechtlicher Name"
        : "Operator / full legal name",

      pending,
    ],

    [de ? "Rechtsform" : "Legal form", pending],

    [
      de
        ? "Vertretungsberechtigte Person, falls zutreffend"
        : "Authorized representative, if applicable",

      pending,
    ],

    [de ? "Ladungsfähige Anschrift" : "Full business address", pending],

    [
      de ? "Geschäftliche E-Mail-Adresse" : "Business email address",
      CONTACT_EMAIL,
    ],

    [
      de
        ? "Telefon / weiterer direkter Kontaktweg"
        : "Telephone / additional direct contact",

      pending,
    ],

    [
      de
        ? "Register und Registernummer, falls zutreffend"
        : "Register and registration number, if applicable",

      pending,
    ],
  ]

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow blue">
          {de ? "Rechtliche Informationen" : "Legal information"}
        </p>
        <h1>Impressum</h1>
        <p>
          {de
            ? "Anbieterinformationen gemäß § 5 DDG"
            : "Provider information under Section 5 DDG"}
        </p>
      </section>
      <section className="legal-information">
        <aside className="legal-draft" role="note">
          <p className="eyebrow blue">
            {de
              ? "Entwurf / Angaben unvollständig"
              : "Draft / Details incomplete"}
          </p>
          <p>
            {de
              ? "Die rechtlichen Betreiberangaben müssen vor Veröffentlichung vervollständigt werden. DANSA ist hier als Markenname genannt; ein rechtlicher Betreiber ist noch nicht angegeben."
              : "The legal operator details must be completed before publication. DANSA is identified here as a brand name; its legal operator has not yet been provided."}
          </p>
        </aside>
        <div>
          <h2>{de ? "Anbieter & Kontakt" : "Provider & contact"}</h2>
          <dl className="legal-details">
            {fields.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  {value === CONTACT_EMAIL ? (
                    <a className="text-link" href={`mailto:${value}`}>
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="legal-context">
          <h3>{de ? "Über diese Website" : "About this website"}</h3>
          <p>
            {de
              ? "DANSA stellt sein Team, seine Musik und Veranstaltungskonzepte vor. Verbindliche Veranstaltungsdaten, Orte und Ticketinformationen werden auf den jeweiligen Veranstaltungsseiten veröffentlicht, sobald sie bestätigt sind."
              : "DANSA presents its team, music and event concepts. Confirmed dates, venues and ticket information are published on the relevant event pages when available."}
          </p>
          <a href="/contact" className="text-link">
            {de ? "Zur Kontaktseite" : "Visit the contact page"} ↗
          </a>
        </div>
      </section>
    </>
  )
}
