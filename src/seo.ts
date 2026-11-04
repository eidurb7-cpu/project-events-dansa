import { artistStories } from "./stories"

export const SITE_URL = "https://www.dansa.city"
export const SITE_NAME = "DANSA"
export const SOCIAL_IMAGE = `${SITE_URL}/social-card.png`
export const SITE_DESCRIPTION = "DANSA is an independent music and event collective based in Berlin. Meet the DJs, artists and organizers, explore the gallery and connect with the team."

const people = [
  { slug: "larry", name: "Larry", description: "DJ, event organizer and technical production lead at DANSA. Discover Larry's role in music, event organization, sound and lighting." },
  { slug: "julius", name: "Julius", description: "DJ, event organizer and technical production lead at DANSA. Meet Julius and explore his work across music, sound, lighting and event organization." },
  { slug: "dj-eddy", name: "DJ Eddy", description: "Bavaria-based open-format DJ, dancer, event organizer and Lead in Tech & Sound at DANSA. Explore DJ Eddy's mixes, event archive and booking contacts." },
  { slug: "ice-boy", name: "Ice Boy Africa", description: "Tanzanian singer, rapper and DANSA event organizer contributing to creative direction. Discover Ice Boy Africa's music, collaborations and artist story." },
  { slug: "d-ukingo", name: "D Ukingo", description: "Musician, dancer and DANSA event organizer contributing to community and culture. Meet D Ukingo and discover the connection between music and movement." },
]

export const sitePages: { path: string; title: string; description: string; noindex?: boolean }[] = [
  { path: "/", title: "DANSA | Music, Culture & Events in Berlin", description: SITE_DESCRIPTION },
  { path: "/lineup", title: "The Team | DANSA DJs, Artists & Event Organizers", description: "Meet the DANSA team: Larry, Julius, DJ Eddy, Ice Boy Africa and D Ukingo. DJs, artists and event organizers bringing music, culture and people together." },
  { path: "/gallery", title: "Gallery | DANSA Music & Nightlife Inspiration", description: "Explore DANSA's visual mood gallery: dancefloors, people, music and shared energy. A selection of nightlife photography that inspires the collective." },
  { path: "/stories", title: "Artist Stories | The People Behind DANSA", description: "Read the individual stories of Larry, Julius, DJ Eddy, Ice Boy Africa and D Ukingo. Discover their music, creative work and roles within DANSA." },
  { path: "/about", title: "About DANSA | Independent Music & Event Collective", description: "Get to know DANSA, an independent music and event collective with Berlin as its creative starting point. Meet the people and purpose behind the project." },
  { path: "/contact", title: "Contact DANSA | Music, Booking & General Enquiries", description: "Contact the DANSA team at dansamusicworldwide@gmail.com for music, booking and general enquiries, or send a message through the contact form." },
  { path: "/work-with-us", title: "Work With DANSA | Venue, Artist & Brand Collaborations", description: "Have an idea for DANSA? Get in touch about venue, promoter, artist and brand collaborations. Start a conversation with the team at dansa.city." },
  ...people.map(person => ({ path: `/artists/${person.slug}`, title: `${person.name} | Artist & Event Organizer at DANSA`, description: person.description })),
  ...artistStories.map(story => ({ path: `/stories/${story.artist}`, title: `${story.title.en.replace(/\.$/, "")} | DANSA`, description: story.intro.en })),
]

const germanPages: Record<string, { title: string; description: string }> = {
  "/": { title: "DANSA | Musik, Kultur & Events in Berlin", description: "DANSA ist ein unabhängiges Musik- und Eventkollektiv aus Berlin. Lerne unsere DJs, Artists und Eventorganisatoren kennen und entdecke die Galerie." },
  "/lineup": { title: "Das Team | DANSA DJs, Artists & Eventorganisation", description: "Lerne Larry, Julius, DJ Eddy, Ice Boy Africa und D Ukingo kennen: das Team hinter Musik, Kultur und Veranstaltungsorganisation bei DANSA." },
  "/gallery": { title: "Galerie | Musik & Nachtleben bei DANSA", description: "Entdecke die visuelle Welt von DANSA: Menschen, Tanzflächen und gemeinsame Energie. Eine Auswahl inspirierender Nachtleben-Fotografie." },
  "/stories": { title: "Artist-Geschichten | Die Menschen hinter DANSA", description: "Lies die Geschichten von Larry, Julius, DJ Eddy, Ice Boy Africa und D Ukingo. Entdecke ihre Musik, kreative Arbeit und Aufgaben bei DANSA." },
  "/about": { title: "Über DANSA | Unabhängiges Musik- & Eventkollektiv", description: "Lerne DANSA kennen: ein unabhängiges Musik- und Eventkollektiv mit Berlin als kreativem Ausgangspunkt. Unser Team, unsere Idee und unsere Kultur." },
  "/contact": { title: "Kontakt | DANSA Musik, Booking & Anfragen", description: "Kontaktiere DANSA unter dansamusicworldwide@gmail.com. Für Musik, Booking und allgemeine Fragen erreichst du unser Team auch über das Kontaktformular." },
  "/work-with-us": { title: "Mit DANSA zusammenarbeiten | Artists, Venues & Marken", description: "Eine Idee für DANSA? Sprich mit uns über Kooperationen mit Veranstaltungsorten, Promotern, Artists und Marken. Starte das Gespräch auf dansa.city." },
  "/artists/larry": { title: "Larry | DJ & Eventorganisator bei DANSA", description: "Larry ist DJ, Eventorganisator und technischer Produktionsleiter bei DANSA. Entdecke seine Aufgaben rund um Musik, Veranstaltungsorganisation, Ton und Licht." },
  "/artists/julius": { title: "Julius | DJ & Eventorganisator bei DANSA", description: "Julius ist DJ, Eventorganisator und technischer Produktionsleiter bei DANSA. Lerne seine Arbeit rund um Musik, Ton, Licht und Veranstaltungsorganisation kennen." },
  "/artists/dj-eddy": { title: "DJ Eddy | DJ, Eventorganisation & Lead in Tech & Sound", description: "DJ Eddy ist Open-Format-DJ aus Bayern, Tänzer, Eventorganisator und Lead in Tech & Sound bei DANSA. Entdecke seine Mixes, sein Eventarchiv und Booking-Kontakte." },
  "/artists/ice-boy": { title: "Ice Boy Africa | Artist & Eventorganisator bei DANSA", description: "Ice Boy Africa ist tansanischer Sänger, Rapper und Eventorganisator in der kreativen Leitung von DANSA. Entdecke seine Musik und Kooperationen." },
  "/artists/d-ukingo": { title: "D Ukingo | Musiker, Tänzer & Eventorganisator bei DANSA", description: "D Ukingo ist Musiker, Tänzer und Eventorganisator für Community & Kultur bei DANSA. Lerne seine Verbindung von Musik, Bewegung und Gemeinschaft kennen." },
  ...Object.fromEntries(artistStories.map(story => [`/stories/${story.artist}`, { title: `${story.title.de.replace(/\.$/, "")} | DANSA`, description: story.intro.de }])),
}

export function getPageSeo(pathname: string, language: "en" | "de" = "en") {
  const path = pathname.replace(/\/+$/, "") || "/"
  const canonicalPath = path === "/events" || path.startsWith("/events/") ? "/gallery" : path
  const page = sitePages.find(page => page.path === canonicalPath)
  return {
    ...(page ?? { path: canonicalPath, title: language === "de" ? "Seite nicht gefunden | DANSA" : "Page Not Found | DANSA", description: language === "de" ? "Diese Seite wurde nicht gefunden. Entdecke das Team, die Galerie und die Geschichten von DANSA." : "This page could not be found. Explore the DANSA team, gallery and artist stories.", noindex: true }),
    ...(language === "de" ? germanPages[canonicalPath] : {}),
    canonical: `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`,
  }
}
