export type LocalizedCopy = {
  en: string
  de: string
}

export type ArtistStory = {
  artist: string
  category: "dj" | "performance"
  title: LocalizedCopy
  intro: LocalizedCopy
  sections: {
    title: LocalizedCopy
    text: LocalizedCopy
  }[]
}

// Editorial introductions based on the roles listed in the DANSA line-up.
// These describe the creative disciplines, rather than unverified biographies.
export const artistStories: ArtistStory[] = [
  {
    artist: "larry",
    category: "dj",
    title: {
      en: "The art of the next track.",
      de: "Die Kunst des nächsten Tracks.",
    },
    intro: {
      en: "Larry is one of the DJs in the DANSA line-up. His place in the collective opens a conversation about one of DJ culture’s simplest questions: what should come next?",
      de: "Larry gehört zu den DJs im DANSA-Line-up. Seine Rolle im Kollektiv führt zu einer der einfachsten Fragen der DJ-Kultur: Was kommt als Nächstes?",
    },
    sections: [
      {
        title: {
          en: "A selection is a conversation.",
          de: "Eine Auswahl ist ein Gespräch.",
        },
        text: {
          en: "A track never arrives in isolation. It follows a mood, a tempo and a room full of people. DJing can turn that sequence into a conversation: familiar sounds invite people in, while an unexpected turn gives them something new to meet. The connection lives in the space between those choices.",
          de: "Ein Track steht nie für sich allein. Er folgt auf eine Stimmung, ein Tempo und einen Raum voller Menschen. DJing kann aus dieser Abfolge ein Gespräch machen: Vertraute Sounds laden ein, eine überraschende Wendung eröffnet etwas Neues. Die Verbindung entsteht zwischen diesen Entscheidungen.",
        },
      },
      {
        title: {
          en: "The booth belongs to the room.",
          de: "Das Pult gehört zum Raum.",
        },
        text: {
          en: "For DANSA, the DJ booth is part of the gathering. It gives the night a musical point of focus without taking the people out of the picture. Larry’s DJ role sits within that shared setting, alongside the other selectors, musicians and dancers in the line-up.",
          de: "Für DANSA ist das DJ-Pult Teil des gemeinsamen Erlebnisses. Es gibt der Nacht einen musikalischen Mittelpunkt, ohne die Menschen aus dem Blick zu verlieren. Larrys Rolle als DJ steht in diesem gemeinsamen Rahmen – neben den anderen DJs, Musikern und Tänzern im Line-up.",
        },
      },
    ],
  },
  {
    artist: "julius",
    category: "dj",
    title: {
      en: "A night is more than its peak.",
      de: "Eine Nacht ist mehr als ihr Höhepunkt.",
    },
    intro: {
      en: "Julius is a DJ in the DANSA line-up. This introduction looks at the shape of a DJ-led night, from its first invitation to the moments that make people stay.",
      de: "Julius ist DJ im DANSA-Line-up. Diese Einführung betrachtet den Verlauf einer Nacht mit DJs: von der ersten Einladung bis zu den Momenten, die Menschen bleiben lassen.",
    },
    sections: [
      {
        title: {
          en: "Leave space for the beginning.",
          de: "Lass dem Anfang Raum.",
        },
        text: {
          en: "Before a dancefloor fills, a room is still finding its rhythm. People arrive, greet friends and decide where to stand. Music can give those small moments a shared atmosphere. Thinking about a night as a whole means valuing that beginning as much as its busiest hour.",
          de: "Bevor sich eine Tanzfläche füllt, findet ein Raum erst seinen Rhythmus. Menschen kommen an, begrüßen Freunde und suchen ihren Platz. Musik kann diesen kleinen Momenten eine gemeinsame Atmosphäre geben. Eine Nacht als Ganzes zu betrachten heißt, ihren Anfang genauso zu schätzen wie ihre vollste Stunde.",
        },
      },
      {
        title: {
          en: "Different selectors, a shared space.",
          de: "Verschiedene DJs, ein gemeinsamer Raum.",
        },
        text: {
          en: "A collective makes room for more than one perspective behind the decks. With Julius, Larry and DJ Eddy listed as DJs, DANSA’s line-up brings several people into that conversation. Their individual channels are the place to discover what each artist chooses to share about their music.",
          de: "Ein Kollektiv bietet Platz für mehr als eine Perspektive an den Decks. Mit Julius, Larry und DJ Eddy als DJs bringt das DANSA-Line-up mehrere Menschen in dieses Gespräch. Auf ihren eigenen Kanälen lässt sich entdecken, was die einzelnen Artists über ihre Musik teilen.",
        },
      },
    ],
  },
  {
    artist: "dj-eddy",
    category: "dj",
    title: {
      en: "Where the decks meet the dancefloor.",
      de: "Wo die Decks auf die Tanzfläche treffen.",
    },
    intro: {
      en: "DJ Eddy is listed as both a DJ and a dancer. Those two roles offer a way into the relationship between the sound coming from the speakers and the movement it inspires.",
      de: "DJ Eddy ist als DJ und Tänzer Teil des Line-ups. Diese beiden Rollen eröffnen einen Blick auf die Beziehung zwischen dem Sound aus den Lautsprechern und der Bewegung, die er auslöst.",
    },
    sections: [
      {
        title: {
          en: "Rhythm has a physical side.",
          de: "Rhythmus ist auch körperlich.",
        },
        text: {
          en: "A beat can be counted, mixed and arranged. It can also be felt in a shoulder, a footstep or a room moving together. DJing and dance approach the same rhythm from different directions: one works with the musical sequence, the other gives that sequence a physical response.",
          de: "Ein Beat lässt sich zählen, mixen und arrangieren. Er lässt sich aber auch in einer Schulter, einem Schritt oder einem gemeinsam tanzenden Raum spüren. DJing und Tanz nähern sich demselben Rhythmus aus verschiedenen Richtungen: Das eine arbeitet mit der musikalischen Abfolge, das andere antwortet darauf mit Bewegung.",
        },
      },
      {
        title: {
          en: "More than one way to take part.",
          de: "Mehr als eine Art, dabei zu sein.",
        },
        text: {
          en: "Having dance alongside DJing in the DANSA line-up leaves space for both listening and movement. DJ Eddy’s two listed disciplines make that connection visible. A party can be a place to watch, to listen, to move and to find your own way into the moment.",
          de: "Tanz und DJing gemeinsam im DANSA-Line-up geben sowohl dem Zuhören als auch der Bewegung Raum. DJ Eddys zwei Disziplinen machen diese Verbindung sichtbar. Eine Party kann ein Ort zum Zuschauen, Zuhören und Tanzen sein – und dafür, den eigenen Zugang zum Moment zu finden.",
        },
      },
    ],
  },
  {
    artist: "ice-boy",
    category: "performance",
    title: {
      en: "The presence of a live performer.",
      de: "Die Präsenz eines Live-Performers.",
    },
    intro: {
      en: "Ice Boy is a music artist and performer in the DANSA line-up. His role brings live performance into a collective that also includes DJs, musicians and dancers.",
      de: "Ice Boy ist Musiker und Performer im DANSA-Line-up. Seine Rolle bringt Live-Performance in ein Kollektiv, zu dem auch DJs, Musiker und Tänzer gehören.",
    },
    sections: [
      {
        title: {
          en: "A person at the centre of the sound.",
          de: "Ein Mensch im Mittelpunkt des Sounds.",
        },
        text: {
          en: "Live performance changes the relationship between music and a room. Attention can settle on a gesture, a pause or the way an artist holds a moment. The audience becomes part of that exchange through listening and response. That human presence is one reason live music belongs in the conversation about a good night.",
          de: "Live-Performance verändert die Beziehung zwischen Musik und Raum. Eine Geste, eine Pause oder die Art, wie ein Artist einen Moment trägt, kann die Aufmerksamkeit bündeln. Durch Zuhören und Reaktion wird das Publikum Teil dieses Austauschs. Diese menschliche Präsenz ist ein Grund, warum Livemusik zu einer guten Nacht gehört.",
        },
      },
      {
        title: {
          en: "Keep the artist’s own voice close.",
          de: "Bleib nah an der eigenen Stimme des Artists.",
        },
        text: {
          en: "A role in a line-up is only an introduction. Ice Boy’s own channel is the direct place to explore the music and updates he shares. For DANSA, including a performer alongside selectors opens up possibilities for different kinds of musical encounters; individual event formats will be announced when confirmed.",
          de: "Eine Rolle im Line-up ist erst der Anfang. Ice Boys eigener Kanal ist der direkte Ort, um seine Musik und Neuigkeiten zu entdecken. Für DANSA eröffnet ein Performer neben DJs verschiedene Möglichkeiten musikalischer Begegnungen. Die Formate einzelner Events werden nach ihrer Bestätigung bekannt gegeben.",
        },
      },
    ],
  },
  {
    artist: "d-ukingo",
    category: "performance",
    title: {
      en: "Music with room to move.",
      de: "Musik mit Raum für Bewegung.",
    },
    intro: {
      en: "D Ukingo is listed as a musician and dancer in the DANSA line-up. Music and movement meet in those two disciplines, offering another perspective on what a shared musical experience can be.",
      de: "D Ukingo ist als Musiker und Tänzer Teil des DANSA-Line-ups. In diesen beiden Disziplinen treffen Musik und Bewegung aufeinander und eröffnen eine weitere Perspektive auf gemeinsame musikalische Erlebnisse.",
    },
    sections: [
      {
        title: {
          en: "Two disciplines, one exchange.",
          de: "Zwei Disziplinen, ein Austausch.",
        },
        text: {
          en: "Music gives movement a structure, while movement can make a musical detail visible. A pause, a repeated phrase or a change in pace can take on a different meaning when someone responds with their whole body. Bringing musicians and dancers into the same line-up gives both forms of expression space.",
          de: "Musik gibt Bewegung eine Struktur, während Bewegung ein musikalisches Detail sichtbar machen kann. Eine Pause, eine wiederholte Phrase oder ein Tempowechsel bekommt eine andere Bedeutung, wenn jemand mit dem ganzen Körper darauf antwortet. Musiker und Tänzer in einem Line-up geben beiden Ausdrucksformen Raum.",
        },
      },
      {
        title: {
          en: "A wider idea of the line-up.",
          de: "Ein offeneres Verständnis vom Line-up.",
        },
        text: {
          en: "DANSA’s five-person line-up is not limited to a single role. D Ukingo’s musician-and-dancer listing sits alongside DJing and live performance. Together, those disciplines create room to think beyond a list of names and towards the different ways people can connect through music.",
          de: "Das fünfköpfige DANSA-Line-up ist nicht auf eine Rolle beschränkt. D Ukingos Verbindung aus Musik und Tanz steht neben DJing und Live-Performance. Gemeinsam eröffnen diese Disziplinen einen Blick über eine reine Namensliste hinaus – auf die verschiedenen Wege, wie Musik Menschen verbindet.",
        },
      },
    ],
  },
]
