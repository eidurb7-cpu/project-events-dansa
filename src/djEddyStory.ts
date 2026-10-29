import type { ArtistStory } from "./stories"

// Adapted from the artist-site project supplied by the user:
// About.tsx, MusicStyles.tsx, PastPerformances.tsx, DJMixes.tsx,
// Booking.tsx, SocialLinks.tsx and the original FLEX Samstag flyer.
export const djEddyStory: ArtistStory = {
  artist: "dj-eddy",
  category: "dj",
  kind: "artist-site",
  title: {
    en: "DJ Eddy: open format, from Bavaria to the dancefloor.",
    de: "DJ Eddy: Open Format, von Bayern auf die Tanzfläche.",
  },
  intro: {
    en: "Based in Bavaria, Germany, DJ Eddy plays open format across Afrobeats, Amapiano, Hip-Hop, R&B, Latin and Dancehall. His artist-site portfolio spans club nights, boat parties and private events, with music chosen to suit the room.",
    de: "DJ Eddy ist in Bayern zu Hause und spielt Open Format mit Afrobeats, Amapiano, Hip-Hop, R&B, Latin und Dancehall. Sein Künstlerportfolio umfasst Clubnächte, Bootspartys und private Events – mit einer Musikauswahl, die sich am jeweiligen Raum orientiert.",
  },
  sourceNote: {
    en: "Based on DJ Eddy’s artist profile, music selections and event archive, supplied by the DANSA team.",
    de: "Auf Grundlage von DJ Eddys Künstlerprofil, Musikauswahl und Eventarchiv, bereitgestellt vom DANSA-Team.",
  },
  genres: ["Afrobeats", "Amapiano", "Hip-Hop", "R&B", "Latin", "Dancehall"],
  musicHeading: { en: "Selected mixes", de: "Ausgewählte Mixes" },
  sections: [
    {
      title: {
        en: "Bavaria as a base. The room as a starting point.",
        de: "Bayern als Basis. Der Raum als Ausgangspunkt.",
      },
      text: {
        en: "DJ Eddy’s own artist profile places him in Bavaria and describes a range that includes club nights, private celebrations and campus events. His approach centres on clean transitions and sets shaped around the audience, whether the slot is a warmup, a support appearance or a full night. That gives his work a practical focus: connect the music to the people in front of the decks.",
        de: "DJ Eddys eigenes Künstlerprofil nennt Bayern als Standort und beschreibt ein Spektrum aus Clubnächten, privaten Feiern und Campus-Events. Im Mittelpunkt stehen saubere Übergänge und Sets, die sich am Publikum orientieren – ob beim Warmup, als Support oder über eine ganze Nacht. Die Musik soll eine Verbindung zu den Menschen vor den Decks schaffen.",
      },
    },
    {
      title: {
        en: "Moving between styles without losing the thread.",
        de: "Zwischen Stilen wechseln, ohne den Faden zu verlieren.",
      },
      text: {
        en: "His music-style selection brings together Latin, Hip-Hop, R&B, Afrobeats, Dancehall and Amapiano. Rather than treating them as isolated playlists, the artist-site copy presents them as different ways to build movement and atmosphere. Latin adds rhythmic momentum, R&B offers a smoother mood, and Afro-led selections connect percussion, groove and dancefloor energy.",
        de: "Seine Stilauswahl verbindet Latin, Hip-Hop, R&B, Afrobeats, Dancehall und Amapiano. Das Künstlerprojekt beschreibt diese Richtungen als verschiedene Zugänge zu Bewegung und Atmosphäre. Latin bringt rhythmischen Schwung, R&B eine ruhigere Stimmung und Afro-geprägte Selektionen verbinden Percussion, Groove und Energie auf der Tanzfläche.",
      },
    },
    {
      title: {
        en: "An event-archive story: FLEX Samstag in Frankfurt.",
        de: "Eine Geschichte aus dem Eventarchiv: FLEX Samstag in Frankfurt.",
      },
      text: {
        en: "The supplied event archive features FLEX Samstag at Main Suites Hotel in Frankfurt am Main, listed for 4 July 2026. The original flyer names Eddy the DJ alongside DJ Swiper. It is a specific reference within his own portfolio, separate from DANSA’s event concepts. The wider artist-site references also include Nuremberg, Würzburg, Bamberg, Stuttgart, Augsburg, Mainz, Heidelberg and Schweinfurt.",
        de: "Das bereitgestellte Eventarchiv zeigt FLEX Samstag im Main Suites Hotel in Frankfurt am Main, gelistet für den 4. Juli 2026. Der Originalflyer nennt Eddy the DJ gemeinsam mit DJ Swiper. Diese Referenz gehört zu seinem eigenen Portfolio und ist von den DANSA-Eventkonzepten getrennt. Weitere Ortsreferenzen des Künstlerprojekts sind Nürnberg, Würzburg, Bamberg, Stuttgart, Augsburg, Mainz, Heidelberg und Schweinfurt.",
      },
    },
    {
      title: {
        en: "Hear the selection before the booking.",
        de: "Die Musikauswahl vor dem Booking kennenlernen.",
      },
      text: {
        en: "His mix section features Afro Pulse Vol. 1 and Afro x Amapiano as listening selections. They offer a way to explore the musical range described in his profile before starting a booking conversation. For availability, formats and practical arrangements, the supplied artist site lists djeddybookings@gmail.com as his direct booking address and @eddy.the.deejay as his Instagram.",
        de: "Seine Mix-Sektion stellt Afro Pulse Vol. 1 und Afro x Amapiano als Hörbeispiele vor. Sie geben einen Zugang zum musikalischen Spektrum seines Profils, bevor eine Buchungsanfrage entsteht. Für Verfügbarkeit, Formate und organisatorische Fragen nennt das bereitgestellte Künstlerprojekt djeddybookings@gmail.com als direkte Booking-Adresse und @eddy.the.deejay als Instagram-Profil.",
      },
    },
  ],
  appearance: {
    title: "FLEX Samstag",
    date: "2026-07-04",
    venue: "Main Suites Hotel / Frankfurt am Main",
    image: "dj-eddy-flex-samstag.png",
    description: {
      en: "Eddy the DJ / DJ Swiper. A reference from DJ Eddy’s own artist-site archive, not a DANSA event listing.",
      de: "Eddy the DJ / DJ Swiper. Eine Referenz aus DJ Eddys eigenem Künstlerarchiv, keine DANSA-Eventankündigung.",
    },
  },
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
