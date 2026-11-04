import { djEddyStory } from "./djEddyStory"
export type LocalizedCopy = {
  en: string
  de: string
}

export type ArtistStory = {
  artist: string
  category: "dj" | "performance"
  kind?: "biography" | "artist-site"
  sourceNote?: LocalizedCopy
  genres?: string[]
  musicHeading?: LocalizedCopy
  appearances?: {
    title: string
    date: string
    venue: string
    image: string
    description: LocalizedCopy
    alt: LocalizedCopy
    hours?: string
  }[]
  sources?: {
    label: string
    href: string
  }[]
  releases?: {
    title: string
    year: string
    href: string
  }[]
  title: LocalizedCopy
  intro: LocalizedCopy
  sections: {
    title: LocalizedCopy
    text: LocalizedCopy
  }[]
}

// Role-based editorials remain separate from researched biographies.
// Biography entries include public sources and selected release links.
export const artistStories: ArtistStory[] = [
  {
    "artist": "larry",
    "category": "dj",
    "title": {
      "en": "Larry: behind the decks and behind the scenes.",
      "de": "Larry: an den Decks und hinter den Kulissen."
    },
    "intro": {
      "en": "Larry brings two sides of DANSA together: the DJ behind the music and the organizer behind the experience. Alongside his artist identity, he shares responsibility for event organization, sound and lighting.",
      "de": "Larry verbindet zwei Seiten von DANSA: den DJ hinter der Musik und den Organisator hinter dem Erlebnis. Neben seiner Rolle als Artist übernimmt er Verantwortung für Veranstaltungsorganisation, Ton und Licht."
    },
    "sections": [
      {
        "title": {
          "en": "Music at the centre.",
          "de": "Die Musik im Mittelpunkt."
        },
        "text": {
          "en": "Larry’s place in DANSA starts with music. As a DJ, he is part of the team’s musical identity; as an organizer, he helps connect that identity to the setting around it. The decks are one part of a wider role.",
          "de": "Larrys Rolle bei DANSA beginnt mit Musik. Als DJ ist er Teil der musikalischen Identität des Teams. Als Organisator verbindet er diese Identität mit dem Rahmen einer Veranstaltung. Die Decks sind ein Teil seiner Arbeit."
        }
      },
      {
        "title": {
          "en": "The work around the music.",
          "de": "Die Arbeit rund um die Musik."
        },
        "text": {
          "en": "Larry and Julius are DANSA’s Event Organizers & Technical Production Leads. Their responsibilities bring event planning, sound and lighting into the same conversation. For Larry, that places the work behind a gathering alongside the music people come to hear.",
          "de": "Larry und Julius übernehmen bei DANSA die Veranstaltungsorganisation und technische Produktionsleitung. Ihre Aufgaben verbinden Planung, Ton und Licht. Damit steht für Larry die Arbeit hinter einer Veranstaltung neben der Musik, für die die Menschen zusammenkommen."
        }
      }
    ]
  },
  {
    "artist": "julius",
    "category": "dj",
    "title": {
      "en": "Julius: shaping the room, sharing the rhythm.",
      "de": "Julius: den Raum gestalten, den Rhythmus teilen."
    },
    "intro": {
      "en": "Julius is both a DJ and an Event Organizer & Technical Production Lead at DANSA. His role connects the music with the practical work of bringing sound, lighting and a shared space together.",
      "de": "Julius ist DJ und übernimmt bei DANSA Veranstaltungsorganisation und technische Produktionsleitung. Seine Rolle verbindet Musik mit der praktischen Arbeit an Ton, Licht und einem gemeinsamen Raum."
    },
    "sections": [
      {
        "title": {
          "en": "More than a set.",
          "de": "Mehr als ein Set."
        },
        "text": {
          "en": "A DJ set is one part of the experience Julius helps shape at DANSA. His entertainment title sits alongside an organizing role, keeping the music connected to the decisions that make a gathering possible.",
          "de": "Ein DJ-Set ist ein Teil des Erlebnisses, das Julius bei DANSA mitgestaltet. Neben seiner Rolle als DJ trägt er organisatorische Verantwortung. So bleibt die Musik mit den Entscheidungen verbunden, die eine Veranstaltung möglich machen."
        }
      },
      {
        "title": {
          "en": "Sound, light and shared responsibility.",
          "de": "Ton, Licht und gemeinsame Verantwortung."
        },
        "text": {
          "en": "Together with Larry, Julius shares responsibility for event organization and technical production. Sound and lighting belong to that work, alongside coordinating the setting for the music. It is a role that reaches from preparation to the dancefloor.",
          "de": "Gemeinsam mit Larry verantwortet Julius die Organisation und technische Produktion. Dazu gehören Ton und Licht sowie die Abstimmung des Rahmens für die Musik. Seine Rolle reicht damit von der Vorbereitung bis zur Tanzfläche."
        }
      }
    ]
  },
  djEddyStory,
  {
    "artist": "ice-boy",
    "category": "performance",
    "kind": "biography",
    "title": {
      "en": "Ice Boy Africa: a voice, a catalogue, a creative direction.",
      "de": "Ice Boy Africa: Stimme, Songs und kreative Richtung."
    },
    "intro": {
      "en": "Ice Boy Africa is a Tanzanian singer, rapper and content creator. From Paradise City to collaborations with Baraka Da Prince and Bill nass, his music sits alongside his roles in event organization and Creative Direction at DANSA.",
      "de": "Ice Boy Africa ist ein tansanischer Sänger, Rapper und Content Creator. Von Paradise City bis zu Songs mit Baraka Da Prince und Bill nass steht seine Musik neben seinen Aufgaben in der Eventorganisation und kreativen Leitung von DANSA."
    },
    "sections": [
      {
        "title": {
          "en": "Discover the artist through the songs.",
          "de": "Den Artist durch seine Songs kennenlernen."
        },
        "text": {
          "en": "Paradise City arrived in 2022, followed by Sisi in 2023 and Kilimanjaro in 2024. Together, these releases offer a route through Ice Boy’s work, with each song providing its own starting point. His Audiomack catalogue also includes Good Days EP, A17 AFRO EP and 3SUM EP.",
          "de": "Auf Paradise City von 2022 folgten Sisi im Jahr 2023 und Kilimanjaro 2024. Diese Veröffentlichungen eröffnen verschiedene Zugänge zu Ice Boys Musik. Sein Audiomack-Katalog enthält außerdem Good Days EP, A17 AFRO EP und 3SUM EP."
        }
      },
      {
        "title": {
          "en": "Songs with other voices.",
          "de": "Songs mit anderen Stimmen."
        },
        "text": {
          "en": "His 2025 releases include Thamani with Baraka Da Prince, credited to producer Goodluck Gozbert, and Up featuring Bill nass. Stress adds another solo release to that year’s catalogue. The selected tracks below bring those songs and collaborators into one place.",
          "de": "Zu seinen Veröffentlichungen von 2025 gehören Thamani mit Baraka Da Prince, produziert von Goodluck Gozbert, und Up mit Bill nass. Stress ergänzt den Katalog dieses Jahres um eine weitere Soloveröffentlichung. Die Titelauswahl unten führt diese Songs und Mitwirkenden zusammen."
        }
      },
      {
        "title": {
          "en": "An artist within the team.",
          "de": "Ein Artist im Team."
        },
        "text": {
          "en": "At DANSA, Ice Boy keeps his identity as a music artist and performer while contributing to Creative Direction. His place in the team brings an artist’s perspective into the wider project. Follow @iceboyafrica for his own music, content and updates.",
          "de": "Bei DANSA bleibt Ice Boy Musikartist und Performer und übernimmt zugleich Aufgaben in der kreativen Leitung. So bringt er eine künstlerische Perspektive in das gemeinsame Projekt ein. Auf @iceboyafrica teilt er seine Musik, Inhalte und Neuigkeiten."
        }
      }
    ],
    sources: [
      {
        label: "Mtikiso Media — Ice Boy Africa biography",
        href: "https://mtikisomedia.com/artist/ice-boy/",
      },
      {
        label: "Audiomack — Ice Boy artist profile and projects",
        href: "https://audiomack.com/imani-chaula",
      },
      {
        label: "Apple Music — Ice Boy singles and release years",
        href: "https://music.apple.com/us/artist/ice-boy/1638588258",
      },
      {
        label: "Apple Music — Kilimanjaro, 1 November 2024",
        href: "https://music.apple.com/tz/song/1776381067",
      },
      {
        label: "Audiomack — Thamani, credits and release date",
        href: "https://audiomack.com/imani-chaula/song/thamani",
      },
      {
        label: "Apple Music — Up (feat. Bill nass), 25 April 2025",
        href: "https://music.apple.com/tz/song/1809055251",
      },
    ],
    releases: [
      {
        title: "Paradise City",
        year: "2022",
        href: "https://music.apple.com/us/album/paradise-city-single/1638588348",
      },
      {
        title: "Sisi",
        year: "2023",
        href: "https://music.apple.com/us/album/sisi-single/1715784970",
      },
      {
        title: "Kilimanjaro",
        year: "2024",
        href: "https://music.apple.com/tz/song/1776381067",
      },
      {
        title: "Thamani (feat. Baraka Da Prince)",
        year: "2025",
        href: "https://audiomack.com/imani-chaula/song/thamani",
      },
      {
        title: "Stress",
        year: "2025",
        href: "https://music.apple.com/us/album/stress-single/1806309107",
      },
      {
        title: "Up (feat. Bill nass)",
        year: "2025",
        href: "https://music.apple.com/tz/song/1809055251",
      },
    ],
  },
  {
    "artist": "d-ukingo",
    "category": "performance",
    "title": {
      "en": "D Ukingo: where music becomes movement.",
      "de": "D Ukingo: wo Musik zu Bewegung wird."
    },
    "intro": {
      "en": "D Ukingo brings music and dance to DANSA, alongside event organization and his team role in Community & Culture. His profile connects artistic expression with the people who make a shared musical experience possible.",
      "de": "D Ukingo verbindet bei DANSA Musik und Tanz mit seinen Aufgaben in der Eventorganisation und im Bereich Community & Kultur. Sein Profil bringt künstlerischen Ausdruck und die Menschen hinter einem gemeinsamen Musikerlebnis zusammen."
    },
    "sections": [
      {
        "title": {
          "en": "A musician and a dancer.",
          "de": "Musiker und Tänzer."
        },
        "text": {
          "en": "For D Ukingo, music and movement sit side by side. His musician-and-dancer identity adds a performance perspective to a team that also includes DJs, organizers and technical specialists. It gives DANSA another way to bring sound into the room.",
          "de": "Bei D Ukingo stehen Musik und Bewegung nebeneinander. Als Musiker und Tänzer ergänzt er ein Team aus DJs, Organisatoren und technischen Spezialisten um eine Performance-Perspektive. Damit eröffnet sich für DANSA ein weiterer Zugang zur Musik."
        }
      },
      {
        "title": {
          "en": "Culture is something people share.",
          "de": "Kultur entsteht im Miteinander."
        },
        "text": {
          "en": "His Community & Culture role places the social side of DANSA alongside his artistic work. Music and dance offer ways to participate, meet and express something together. That connection between performance and community is the focus of his place in the team.",
          "de": "Seine Aufgabe im Bereich Community & Kultur ergänzt die künstlerische Arbeit um die soziale Seite von DANSA. Musik und Tanz schaffen Möglichkeiten, mitzumachen, sich zu begegnen und gemeinsam etwas auszudrücken. Diese Verbindung steht im Mittelpunkt seiner Rolle im Team."
        }
      }
    ]
  },
]
