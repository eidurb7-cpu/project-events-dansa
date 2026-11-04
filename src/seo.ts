import { artistStories } from "./stories"

export const SITE_URL = "https://dansa.city"
export const SITE_NAME = "DANSA"
export const SOCIAL_IMAGE = `${SITE_URL}/social-card.png`
export const SITE_DESCRIPTION = "DANSA is an independent music and event collective based in Berlin. Meet the DJs, artists and organizers, explore the gallery and connect with the team."

const people = [
  { slug: "larry", name: "Larry", description: "DJ, event organizer and technical production lead at DANSA. Discover Larry's role in music, event organization, sound and lighting." },
  { slug: "julius", name: "Julius", description: "DJ, event organizer and technical production lead at DANSA. Meet Julius and explore his work across music, sound, lighting and event organization." },
  { slug: "dj-eddy", name: "DJ Eddy", description: "Bavaria-based open-format DJ, dancer and DANSA event organizer responsible for tech development. Explore DJ Eddy's mixes, event archive and booking contacts." },
  { slug: "ice-boy", name: "Ice Boy Africa", description: "Tanzanian singer, rapper and DANSA event organizer contributing to creative direction. Discover Ice Boy Africa's music, collaborations and artist story." },
  { slug: "d-ukingo", name: "D Ukingo", description: "Musician, dancer and DANSA event organizer contributing to community and culture. Meet D Ukingo and discover the connection between music and movement." },
]

export const sitePages = [
  { path: "/", title: "DANSA | Music, Culture & Events in Berlin", description: SITE_DESCRIPTION },
  { path: "/lineup", title: "The Team | DANSA DJs, Artists & Event Organizers", description: "Meet the DANSA team: Larry, Julius, DJ Eddy, Ice Boy Africa and D Ukingo. DJs, artists and event organizers bringing music, culture and people together." },
  { path: "/gallery", title: "Gallery | DANSA Music & Nightlife Inspiration", description: "Explore DANSA's visual mood gallery: dancefloors, people, music and shared energy. A selection of nightlife photography that inspires the collective." },
  { path: "/stories", title: "Artist Stories | The People Behind DANSA", description: "Read the individual stories of Larry, Julius, DJ Eddy, Ice Boy Africa and D Ukingo. Discover their music, creative work and roles within DANSA." },
  { path: "/about", title: "About DANSA | Independent Music & Event Collective", description: "Get to know DANSA, an independent music and event collective with Berlin as its creative starting point. Meet the people and purpose behind the project." },
  { path: "/contact", title: "Contact DANSA | Music, Booking & General Enquiries", description: "Contact the DANSA team at dansamusicworldwide@gmail.com for music, booking and general enquiries, or send a message through the contact form." },
  { path: "/work-with-us", title: "Work With DANSA | Venue, Artist & Brand Collaborations", description: "Have an idea for DANSA? Get in touch about venue, promoter, artist and brand collaborations. Start a conversation with the team at dansa.city." },
  ...people.map(person => ({ path: `/artists/${person.slug}`, title: `${person.name} | Artist & Event Organizer at DANSA`, description: person.description })),
  ...artistStories.map(story => ({ path: `/stories/${story.artist}`, title: `${story.title.en.replace(/\.$/, "")} | DANSA`, description: story.intro.en })),
  { path: "/impressum", title: "Impressum | DANSA Provider Information", description: "DANSA provider information and business email contact. Legal operator details are being completed.", noindex: true },
]

export function getPageSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/"
  const canonicalPath = path === "/events" || path.startsWith("/events/") ? "/gallery" : path
  const page = sitePages.find(page => page.path === canonicalPath)
  return {
    ...(page ?? { path: canonicalPath, title: "Page Not Found | DANSA", description: "This page could not be found. Explore the DANSA team, gallery and artist stories.", noindex: true }),
    canonical: `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`,
  }
}
