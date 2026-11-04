import type { ArtistStory } from "./stories"

// Adapted from the artist-site project supplied by the user:
// About.tsx, MusicStyles.tsx, PastPerformances.tsx, DJMixes.tsx,
// Booking.tsx, SocialLinks.tsx and the original FLEX Samstag flyer.
export const djEddyStory: ArtistStory = {
  artist: "dj-eddy",
  category: "dj",
  kind: "artist-site",
  title: {
    "en": "DJ Eddy: open format, on the decks and online.",
    "de": "DJ Eddy: Open Format, an den Decks und digital."
  },
  intro: {
    "en": "Based in Bavaria, DJ Eddy moves between Afrobeats, Amapiano, Hip-Hop, R&B, Latin and Dancehall. At DANSA, he brings that open-format identity to his work as a DJ, dancer, event organizer and Head of Tech & Sound.",
    "de": "DJ Eddy ist in Bayern zu Hause und verbindet Afrobeats, Amapiano, Hip-Hop, R&B, Latin und Dancehall. Bei DANSA ist er DJ, Tänzer und Eventorganisator und leitet den Bereich Technik & Sound."
  },
  sourceNote: {
    en: "Based on DJ Eddy’s artist profile, music selections and event archive, supplied by the DANSA team.",
    de: "Auf Grundlage von DJ Eddys Künstlerprofil, Musikauswahl und Eventarchiv, bereitgestellt vom DANSA-Team.",
  },
  genres: ["Afrobeats", "Amapiano", "Hip-Hop", "R&B", "Latin", "Dancehall"],
  musicHeading: { en: "Selected mixes", de: "Ausgewählte Mixes" },
  sections: [
    {
      "title": {
        "en": "Different sounds. One dancefloor.",
        "de": "Verschiedene Sounds. Eine Tanzfläche."
      },
      "text": {
        "en": "Open format gives Eddy room to move across styles. Afrobeats and Amapiano sit alongside Hip-Hop, R&B, Latin and Dancehall, with the selection shaped around the audience. His work spans club nights, boat parties and private events, with clean transitions connecting the changes in sound.",
        "de": "Open Format gibt Eddy Raum für unterschiedliche Stile. Afrobeats und Amapiano treffen auf Hip-Hop, R&B, Latin und Dancehall. Die Auswahl orientiert sich am Publikum. Seine Arbeit umfasst Clubnächte, Bootspartys und private Events, mit sauberen Übergängen zwischen den Sounds."
      }
    },
    {
      "title": {
        "en": "The music has its own record.",
        "de": "Die Musik zum Kennenlernen."
      },
      "text": {
        "en": "Afro Pulse Vol. 1 and Afro x Amapiano offer a first listen to Eddy’s selections. His event archive includes Mirage Lounge, FLEX Samstag in Frankfurt and appearances at Mississippi Queen in Nuremberg. The mixes and original flyers below show that side of his work.",
        "de": "Afro Pulse Vol. 1 und Afro x Amapiano geben einen ersten Einblick in Eddys Musikauswahl. Sein Eventarchiv umfasst Mirage Lounge, FLEX Samstag in Frankfurt und Auftritte auf der Mississippi Queen in Nürnberg. Die Mixes und Originalflyer unten zeigen diese Seite seiner Arbeit."
      }
    },
    {
      "title": {
        "en": "Leading tech and sound at DANSA.",
        "de": "Technik und Sound bei DANSA leiten."
      },
      "text": {
        "en": "As DANSA’s Head of Tech & Sound, Eddy leads the team’s technology and sound responsibilities, including its digital development. He also shares in event organization while keeping his identity as a DJ and dancer. His role connects the music, the technical production and the website.",
        "de": "Als Leiter des Bereichs Technik & Sound verantwortet Eddy die Technologie und den Sound von DANSA, einschließlich der digitalen Entwicklung. Er übernimmt auch Aufgaben in der Eventorganisation und bleibt zugleich DJ und Tänzer. Seine Rolle verbindet Musik, technische Produktion und Website."
      }
    },
    {
      "title": {
        "en": "Start with a listen. Then get in touch.",
        "de": "Erst reinhören. Dann Kontakt aufnehmen."
      },
      "text": {
        "en": "For Eddy’s own bookings, use djeddybookings@gmail.com or @eddy.the.deejay. For DANSA collaborations, contact the team at dansamusicworldwide@gmail.com. The two routes keep artist enquiries and conversations about the wider project easy to direct.",
        "de": "Für Eddys eigene Bookings stehen djeddybookings@gmail.com und @eddy.the.deejay zur Verfügung. Für Kooperationen mit DANSA erreichst du das Team unter dansamusicworldwide@gmail.com. So finden Anfragen zum Artist und zum gemeinsamen Projekt den passenden Kontakt."
      }
    }
  ],
  appearances: [
    {
      title: "DJ Eddy at Mirage Lounge",
      date: "2026-05-09",
      venue: "Mirage Lounge",
      image: "dj-eddy-mirage-lounge-may-2026.png",
      hours: "21:00",
      alt: {
        en: "Gold Mirage Lounge flyer featuring DJ Eddy, Saturday 9 May from 21:00, with R&B, Hip-Hop, Latin and Dancehall",
        de: "Goldener Mirage-Lounge-Flyer mit DJ Eddy, Samstag, 9. Mai, ab 21:00 Uhr, mit R&B, Hip-Hop, Latin und Dancehall",
      },
      description: {
        en: "The Mirage Lounge flyer features DJ Eddy for Saturday 9 May, starting at 21:00, with R&B, Hip-Hop, Latin and Dancehall. The original gold artwork is preserved as a past appearance in his artist archive.",
        de: "Der Mirage-Lounge-Flyer zeigt DJ Eddy für Samstag, den 9. Mai, ab 21:00 Uhr, mit R&B, Hip-Hop, Latin und Dancehall. Das goldene Originalmotiv dokumentiert einen vergangenen Auftritt in seinem Künstlerarchiv.",
      },
    },
    {
      alt: {
        en: "FLEX Samstag flyer featuring Eddy the DJ and DJ Swiper, 4 July 2026 in Frankfurt",
        de: "FLEX-Samstag-Flyer mit Eddy the DJ und DJ Swiper am 4. Juli 2026 in Frankfurt",
      },
      title: "FLEX Samstag",
      date: "2026-07-04",
      venue: "Main Suites Hotel / Frankfurt am Main",
      image: "dj-eddy-flex-samstag.png",
      description: {
        en: "Eddy the DJ / DJ Swiper. A reference from DJ Eddy’s own artist-site archive, not a DANSA event listing.",
        de: "Eddy the DJ / DJ Swiper. Eine Referenz aus DJ Eddys eigenem Künstlerarchiv, keine DANSA-Eventankündigung.",
      },
    },
    {
      title: "The Hottest Single Boat Party",
      date: "2026-05-30",
      venue: "Mississippi Queen / Donaustraße 40, 90451 Nürnberg",
      image: "dj-eddy-single-boat-party-may-2026.png",
      hours: "22:00–05:00",
      alt: {
        en: "The Hottest Single Boat Party flyer featuring DJ Eddy, Saturday 30 May at Mississippi Queen in Nuremberg",
        de: "Flyer zu The Hottest Single Boat Party mit DJ Eddy, Samstag, 30. Mai, auf der Mississippi Queen in Nürnberg",
      },
      description: {
        en: "The supplied flyer features DJ Eddy for the Single Boat Party at Mississippi Queen, with doors from 22:00 to 05:00 and a special ladies night. A past appearance from his artist archive.",
        de: "Der bereitgestellte Flyer kündigt DJ Eddy für die Single Boat Party auf der Mississippi Queen an, mit Öffnungszeiten von 22:00 bis 05:00 Uhr und einer Special Ladies Night. Ein vergangener Auftritt aus seinem Künstlerarchiv.",
      },
    },
    {
      title: "The Hottest All Black Boat Party",
      date: "2026-10-03",
      venue: "Mississippi Queen / Donaustraße 40, 90451 Nürnberg",
      image: "dj-eddy-all-black-boat-party-october-2026.png",
      hours: "22:00",
      alt: {
        en: "The Hottest All Black Boat Party flyer featuring DJ Eddy, Saturday 3 October at Mississippi Queen in Nuremberg",
        de: "Flyer zu The Hottest All Black Boat Party mit DJ Eddy, Samstag, 3. Oktober, auf der Mississippi Queen in Nürnberg",
      },
      description: {
        en: "DJ Eddy is featured on the All Black Boat Party flyer for Mississippi Queen, with a 22:00 start. The original artwork is preserved here as a past appearance in his artist archive.",
        de: "DJ Eddy ist auf dem Flyer zur All Black Boat Party auf der Mississippi Queen zu sehen. Beginn war laut Flyer um 22:00 Uhr. Das Originalmotiv dokumentiert hier einen vergangenen Auftritt in seinem Künstlerarchiv.",
      },
    },
  ].sort((a, b) => b.date.localeCompare(a.date)),
  releases: [
    {
      title: "Afro Pulse Vol. 1",
      year: "2026",
      href: "https://soundcloud.com/eddythedeejay/afro-pulse-vol-1-dj-eddy",
    },
    {
      title: "Afro x Amapiano",
      year: "2026",
      href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2300156963&auto_play=false",
    },
  ],
  sources: [
    {
      label: "Mirage Lounge - supplied flyer",
      href: "/assets/dj-eddy-mirage-lounge-may-2026.png",
    },
    {
      label: "Single Boat Party — supplied flyer",
      href: "/assets/dj-eddy-single-boat-party-may-2026.png",
    },
    {
      label: "All Black Boat Party — supplied flyer",
      href: "/assets/dj-eddy-all-black-boat-party-october-2026.png",
    },
    {
      label: "DJ Eddy — Instagram",
      href: "https://www.instagram.com/eddy.the.deejay/",
    },
    {
      label: "DJ Eddy — SoundCloud profile",
      href: "https://soundcloud.com/eddythedeejay",
    },
    {
      label: "FLEX Samstag — original artist-site flyer",
      href: "/assets/dj-eddy-flex-samstag.png",
    },
  ],
}
