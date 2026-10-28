import { createContext, useContext } from "react"

export type Language = "en" | "de"
export const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
}>({ language: "en", setLanguage: () => undefined })

const german: Record<string, string> = {
  Home: "Start",
  "The Lineup": "Das Line-up",
  Gallery: "Galerie",
  About: "Über uns",
  "DANSA home": "DANSA Startseite",
  "Toggle menu": "Menü öffnen oder schließen",
  CLOSE: "SCHLIESSEN",
  MENU: "MENÜ",
  "Main navigation": "Hauptnavigation",
  Language: "Sprache",
  "Come through": "Komm vorbei",
  "Get in touch": "Kontakt aufnehmen",
  "Contact DANSA": "DANSA kontaktieren",
  "Independent in spirit. Connected by music. Hosted by DANSA.":
    "Unabhängig im Geist. Durch Musik verbunden. Von DANSA veranstaltet.",
  Explore: "Entdecken",
  "About DANSA": "Über DANSA",
  "Work With Us": "Mit uns zusammenarbeiten",
  Contact: "Kontakt",
  "MUSIC. CULTURE. TOGETHERNESS.": "MUSIK. KULTUR. MITEINANDER.",
  "Event details · TBA": "Eventdetails · Folgen bald",
  "Date, time and location to be announced.":
    "Datum, Uhrzeit und Ort werden noch bekannt gegeben.",
  "View event ↗": "Event ansehen ↗",
  "Crowd dancing together": "Menschen tanzen gemeinsam",
  "Good music.": "Gute Musik.",
  "Good people.": "Gute Menschen.",
  "Real moments.": "Echte Momente.",
  "DANSA brings people together through sound, movement and shared energy.":
    "DANSA bringt Menschen durch Musik, Bewegung und gemeinsame Energie zusammen.",
  "See what’s next ↗": "Entdecke, was kommt ↗",
  "Upcoming parties": "Kommende Partys",
  "What’s happenings": "Was als Nächstes ansteht",
  "All events ↗": "Alle Events ↗",
  "Two people enjoying an evening together":
    "Zwei Menschen genießen einen gemeinsamen Abend",
  "This is DANSA": "Das ist DANSA",
  "Our own parties.": "Unsere eigenen Partys.",
  "Our own energy.": "Unsere eigene Energie.",
  "We create room for music, movement and people to meet as they are. No posturing. Just good people and a shared rhythm.":
    "Wir schaffen Raum für Musik, Bewegung und Begegnungen, bei denen alle sie selbst sein können. Ohne Show. Einfach gute Menschen und ein gemeinsamer Rhythmus.",
  "About DANSA ↗": "Über DANSA ↗",
  "Our principles": "Unsere Prinzipien",
  "Our kind of good.": "So fühlt es sich für uns gut an.",
  "Open air": "Unter freiem Himmel",
  "After dark": "Nach Einbruch der Dunkelheit",
  "The lineup": "Das Line-up",
  "DANSA selects": "DANSA empfiehlt",
  "The Dansa": "Die DANSA",
  "selects.": "Auswahl.",
  "A collection of sounds and stories that keep us moving.":
    "Eine Sammlung von Sounds und Geschichten, die uns bewegen.",
  "Hands selecting a record": "Hände bei der Auswahl einer Schallplatte",
  "Meet the team": "Lerne das Team kennen",
  "People behind the rhythm.": "Die Menschen hinter dem Rhythmus.",
  "Presenting parties, hosted by DANSA.":
    "Unsere Partys. Veranstaltet von DANSA.",
  "Your next": "Dein nächster",
  "good plan.": "guter Plan.",
  "Open air. After dark. A room full of possibility. Explore the kinds of parties and music moments worth building.":
    "Unter freiem Himmel. Bis tief in die Nacht. Ein Raum voller Möglichkeiten. Entdecke unsere Ideen für Partys und gemeinsame Musikmomente.",
  "Next DANSA party": "Die nächste DANSA-Party",
  "Good things are coming.": "Freu dich auf das, was kommt.",
  "Next-event announcement: TBA. Dates, venue and ticket availability will be shared when confirmed.":
    "Das nächste Event wird bald angekündigt. Datum, Veranstaltungsort und Tickets werden veröffentlicht, sobald alles bestätigt ist.",
  Upcoming: "Demnächst",
  "All details TBA": "Alle Details folgen bald",
  "The night goes on.": "Die Nacht geht weiter.",
  "Our first real recaps belong here.":
    "Hier werden unsere ersten echten Rückblicke zu sehen sein.",
  "No past DANSA nights are documented here yet. Photos, films and memories will arrive after our events.":
    "Hier sind noch keine vergangenen DANSA-Nächte dokumentiert. Fotos, Filme und Erinnerungen folgen nach unseren Events.",
  "DANSA presents": "DANSA präsentiert",
  "All event details remain unconfirmed.":
    "Alle Eventdetails sind noch unbestätigt.",
  "DJ booth and dancefloor": "DJ-Pult und Tanzfläche",
  "Tickets not yet released": "Tickets noch nicht verfügbar",
  "Ticket links will appear here after event details are confirmed.":
    "Ticketlinks findest du hier, sobald die Eventdetails bestätigt sind.",
  "Not on sale": "Noch nicht im Verkauf",
  "The idea": "Die Idee",
  "One room. A late connection.": "Ein Raum. Eine Begegnung zu später Stunde.",
  "A gathering shaped by good music and the people in the room.":
    "Ein Treffen, geprägt von guter Musik und den Menschen im Raum.",
  Date: "Datum",
  TBA: "Wird noch bekannt gegeben",
  Time: "Uhrzeit",
  Venue: "Veranstaltungsort",
  Location: "Ort",
  "Location to follow.": "Der Ort wird noch bekannt gegeben.",
  "A few good things to know.": "Gut zu wissen.",
  "Entry, dress code, accessibility and ticket information will be added when confirmed.":
    "Informationen zu Einlass, Dresscode, Barrierefreiheit und Tickets folgen, sobald sie bestätigt sind.",
  "Other good ideas.": "Weitere gute Ideen.",
  "View profile ↗": "Profil ansehen ↗",
  "The people behind the energy": "Die Menschen hinter der Energie",
  "DJs. Performing artists. One independent spirit. Meet the five people in the DANSA lineup.":
    "DJs. Live-Acts. Ein unabhängiger Geist. Lerne die fünf Menschen im DANSA-Line-up kennen.",
  "DJs in the DANSA family": "DJs der DANSA-Familie",
  "The DJs.": "Die DJs.",
  "DJ / live in the moment": "DJ / ganz im Moment",
  "The performers.": "Die Live-Acts.",
  "← Back to the lineup": "← Zurück zum Line-up",
  "DANSA / Artist profile": "DANSA / Künstlerprofil",
  "In the DANSA lineup": "Im DANSA-Line-up",
  "DJ & Dancer": "DJ & Tänzer",
  "Music Artist / Performer": "Musiker / Performer",
  "Musician & Dancer": "Musiker & Tänzer",
  "{name} is {role} and a member of the DANSA lineup.":
    "{name} ist {role} und Teil des DANSA-Line-ups.",
  "Connect with": "Kontakt zu",
  "Direct artist contact via their own Instagram.":
    "Direkter Kontakt über das eigene Instagram-Profil.",
  "Direct from the artist": "Direkt von den Artists",
  Follow: "Folge",
  "on Instagram.": "auf Instagram.",
  "More from the lineup": "Mehr aus dem Line-up",
  "Meet the others.": "Lerne die anderen kennen.",
  "Out in the city": "Unterwegs in der Stadt",
  "Lost in the right place": "Genau am richtigen Ort",
  "In the details": "In den Details",
  "A little longer together": "Noch ein bisschen länger zusammen",
  "The room, the rhythm": "Der Raum, der Rhythmus",
  "One more conversation": "Noch ein Gespräch",
  "Less scrolling. More feeling.": "Weniger scrollen. Mehr fühlen.",
  "The feeling in pictures": "Das Gefühl in Bildern",
  "Crowds.": "Menschen.",
  "City nights.": "Stadtnächte.",
  "Real energy.": "Echte Energie.",
  "From the street to the dancefloor. A visual mood of the people, details and after-hours feeling that inspire DANSA.":
    "Von der Straße auf die Tanzfläche. Bilder von Menschen, Details und dem Gefühl später Stunden, die DANSA inspirieren.",
  "Mood gallery — actual DANSA recaps coming soon":
    "Mood-Galerie — echte DANSA-Rückblicke folgen bald",
  "These images set the mood. They are not documentation of past DANSA events.":
    "Diese Bilder vermitteln eine Stimmung. Sie dokumentieren keine vergangenen DANSA-Events.",
  All: "Alle",
  Photos: "Fotos",
  "The moving picture": "Bewegte Bilder",
  "Some nights stay with you.": "Manche Nächte bleiben.",
  "Our actual films and event recaps will live here. Nothing has been released yet.":
    "Hier findest du künftig unsere Filme und Eventrückblicke. Bisher wurde noch nichts veröffentlicht.",
  "DANSA / Future recap": "DANSA / Künftiger Rückblick",
  "Play it back.": "Noch einmal erleben.",
  "Video recap coming after the night":
    "Der Videorückblick folgt nach dem Event",
  "Don’t just look. Come through.": "Schau nicht nur zu. Komm vorbei.",
  "Be in the next moment.": "Sei beim nächsten Moment dabei.",
  "Next DANSA party announcement soon. Until then, explore the event ideas.":
    "Die nächste DANSA-Party wird bald angekündigt. Entdecke bis dahin unsere Eventideen.",
  "Explore events ↗": "Events entdecken ↗",
  "Independent spirit. Shared energy.":
    "Unabhängiger Geist. Gemeinsame Energie.",
  "DANSA is an independent event and party brand created by DJs and performing artists. We organize and host our own parties and live music events.":
    "DANSA ist eine unabhängige Event- und Partymarke, gegründet von DJs und Live-Artists. Wir organisieren und veranstalten unsere eigenen Partys und Livemusik-Events.",
  "Friends walking through the city": "Freunde unterwegs in der Stadt",
  "The city is a feeling / mood photography":
    "Die Stadt ist ein Gefühl / Mood-Fotografie",
  "Good music. Good people. Real moments.":
    "Gute Musik. Gute Menschen. Echte Momente.",
  "We bring music and people into the same room. We shape the sound, the atmosphere and the experience around our own events.":
    "Wir bringen Musik und Menschen in einem Raum zusammen. Wir gestalten den Sound, die Atmosphäre und das Erlebnis unserer eigenen Events.",
  "From open-air sessions to late-night dancefloors and shared listening, the intention is simple: something independent, human and unmistakably DANSA.":
    "Von Open-Air-Sessions über lange Nächte auf der Tanzfläche bis zum gemeinsamen Musikhören: Wir schaffen etwas Unabhängiges, Menschliches und unverwechselbar DANSA.",
  "Explore our events ↗": "Unsere Events entdecken ↗",
  "What makes the room": "Was den Raum ausmacht",
  "More than the music.": "Mehr als Musik.",
  Music: "Musik",
  "The sound comes first. DJs and performers are at the heart of how we think about every party.":
    "Der Sound kommt zuerst. DJs und Live-Acts stehen im Mittelpunkt jeder Party, die wir planen.",
  People: "Menschen",
  "Come with friends or come as yourself. Respect and looking out for each other shape the atmosphere.":
    "Komm mit Freunden oder allein. Respekt und gegenseitige Rücksicht prägen die Atmosphäre.",
  Experience: "Erlebnis",
  "The room, the rhythm, the small details. We care about how it feels to be there.":
    "Der Raum, der Rhythmus, die kleinen Details. Uns ist wichtig, wie es sich anfühlt, dabei zu sein.",
  "A mood for the moment": "Eine Stimmung für den Moment",
  "Many ways in. One shared energy.": "Viele Wege. Eine gemeinsame Energie.",
  "Open-air sessions, sunset gatherings and space to move.":
    "Open-Air-Sessions, Treffen bei Sonnenuntergang und Platz zum Tanzen.",
  "DJ-led nights and dancefloors built around shared energy.":
    "Nächte mit DJs und Tanzflächen voller gemeinsamer Energie.",
  "Live & listening": "Live & gemeinsam hören",
  "Performing artists and music-led experiences that bring people together.":
    "Live-Acts und musikalische Erlebnisse, die Menschen zusammenbringen.",
  "Five people. One independent spirit.":
    "Fünf Menschen. Ein unabhängiger Geist.",
  "Meet the lineup.": "Lerne das Line-up kennen.",
  "View the full lineup ↗": "Das gesamte Line-up ansehen ↗",
  "Come through. Or create with us.": "Komm vorbei. Oder gestalte mit uns.",
  "Let’s share the energy.": "Teilen wir die Energie.",
  "Explore our event previews, or start a conversation about a future collaboration.":
    "Entdecke unsere Eventvorschauen oder sprich mit uns über eine künftige Zusammenarbeit.",
  "Work with us ↗": "Mit uns zusammenarbeiten ↗",
  "For venues, promoters, artists & brands":
    "Für Veranstaltungsorte, Veranstalter, Artists & Marken",
  "Good conversations start here": "Gute Gespräche beginnen hier",
  "Make something": "Schaffe etwas,",
  "people feel.": "das Menschen fühlen.",
  "Say hello.": "Sag Hallo.",
  "Come through.": "Komm vorbei.",
  "DANSA hosts its own parties and music events. Have a space, a sound or an idea that could belong in the next one? Let’s talk.":
    "DANSA veranstaltet eigene Partys und Musikevents. Hast du einen Raum, einen Sound oder eine Idee für das nächste Event? Lass uns reden.",
  "A question about DANSA, an event idea or something you’d like us to know? You’re in the right place.":
    "Eine Frage zu DANSA, eine Eventidee oder etwas, das du uns sagen möchtest? Hier bist du richtig.",
  "Independent by nature": "Unabhängig aus Überzeugung",
  "Your idea. Our shared energy.": "Deine Idee. Unsere gemeinsame Energie.",
  "We’re open to conversations about future collaborations that add something real to the parties we host.":
    "Wir freuen uns über Ideen für künftige Kooperationen, die unsere Partys bereichern.",
  "Start a conversation ↗": "Lass uns sprechen ↗",
  "Possibilities, not a partner roster": "Möglichkeiten für die Zusammenarbeit",
  "Good things start together.": "Gutes beginnt gemeinsam.",
  Venues: "Veranstaltungsorte",
  "A room, courtyard or open-air space with character. Share what makes your place feel different.":
    "Ein Raum, Innenhof oder Open-Air-Gelände mit Charakter. Erzähl uns, was deinen Ort besonders macht.",
  Promoters: "Veranstalter",
  "A shared vision for an independent event. Tell us the idea and how you see us working together.":
    "Eine gemeinsame Vision für ein unabhängiges Event. Erzähl uns von deiner Idee und wie du dir die Zusammenarbeit vorstellst.",
  Artists: "Artists",
  "Music and performance that could add to a DANSA night. Introduce your work in your own words.":
    "Musik und Performance, die eine DANSA-Nacht bereichern könnten. Stell deine Arbeit in deinen eigenen Worten vor.",
  Brands: "Marken",
  "Thoughtful ways to contribute to the experience. Start with the connection, not just the logo.":
    "Durchdachte Beiträge zum Erlebnis. Im Mittelpunkt steht die Verbindung, nicht nur das Logo.",
  "What brings you here?": "Was führt dich zu uns?",
  General: "Allgemein",
  "Questions about DANSA and the parties we host.":
    "Fragen zu DANSA und unseren Partys.",
  "Choose General in the inquiry form.":
    "Wähle im Formular die Option Allgemein.",
  Booking: "Buchung",
  "A proposed event or artist-related inquiry.":
    "Ein Eventvorschlag oder eine Anfrage zu einem Artist.",
  "Choose Booking, or use an artist’s direct Instagram below.":
    "Wähle Buchung oder kontaktiere einen Artist direkt über Instagram weiter unten.",
  "Event support": "Fragen zum Event",
  "Questions about event details, access or ticket availability.":
    "Fragen zu Eventdetails, Zugang oder verfügbaren Tickets.",
  "Confirmed information will be added to each event page.":
    "Bestätigte Informationen werden auf der jeweiligen Eventseite ergänzt.",
  "A little context goes a long way": "Etwas Hintergrund hilft uns weiter",
  "A note before you write": "Ein Hinweis vor deiner Nachricht",
  "Start with the idea.": "Beginne mit deiner Idee.",
  "Let’s keep it clear.": "Sag uns, worum es geht.",
  "You don’t need a finished proposal. A clear introduction is a good place to begin.":
    "Du brauchst kein fertiges Konzept. Eine klare Vorstellung deiner Idee ist ein guter Anfang.",
  "Include the subject of your inquiry and any relevant context. For an event question, mention the event preview you’re asking about.":
    "Nenne das Thema deiner Anfrage und wichtige Hintergrundinformationen. Gib bei Eventfragen an, auf welche Eventvorschau du dich beziehst.",
  "Next event": "Nächstes Event",
  "Announcement coming soon.": "Ankündigung folgt bald.",
  "No date, venue or ticket release is confirmed yet.":
    "Datum, Veranstaltungsort und Ticketverkauf sind noch nicht bestätigt.",
  "Let’s make it happen.": "Machen wir es möglich.",
  "Drop us a note.": "Schreib uns.",
  "Tell us what you have in mind. Fields marked * are required.":
    "Erzähl uns, was du vorhast. Mit * markierte Felder sind Pflichtfelder.",
  "Form checked.": "Formular geprüft.",
  "Your entries are valid, but nothing was transmitted or stored. Connect a form service or backend before launch.":
    "Deine Angaben sind gültig, wurden aber nicht gesendet oder gespeichert. Vor dem Start muss ein Formulardienst oder Backend angebunden werden.",
  "Name *": "Name *",
  "Your name": "Dein Name",
  "Email *": "E-Mail *",
  "Your email address": "Deine E-Mail-Adresse",
  Organization: "Organisation",
  "Venue, project or organization (optional)":
    "Veranstaltungsort, Projekt oder Organisation (optional)",
  "Collaboration type *": "Art der Zusammenarbeit *",
  "Inquiry type *": "Art der Anfrage *",
  Select: "Bitte wählen",
  "venue / promoter / artist / brand":
    "Veranstaltungsort / Veranstalter / Artist / Marke",
  "general / booking / event support": "Allgemein / Buchung / Fragen zum Event",
  Promoter: "Veranstalter",
  Artist: "Artist",
  Brand: "Marke",
  "Message *": "Nachricht *",
  "Your idea, possible format and what you could bring.":
    "Deine Idee, ein mögliches Format und dein Beitrag.",
  "What would you like to ask us?": "Was möchtest du uns fragen?",
  "I consent to my details being used to respond to this inquiry. *":
    "Ich stimme zu, dass meine Angaben zur Beantwortung dieser Anfrage verwendet werden. *",
  "Send collaboration inquiry ↗": "Kooperationsanfrage senden ↗",
  "Send inquiry ↗": "Anfrage senden ↗",
  "Submissions are not sent or stored yet.":
    "Anfragen werden derzeit noch nicht gesendet oder gespeichert.",
  "Looking for an artist?": "Suchst du einen Artist?",
  "Go straight to the source.": "Nimm direkt Kontakt auf.",
  "Each artist has their own Instagram. These are direct artist contact routes, not DANSA event-support channels.":
    "Jeder Artist hat ein eigenes Instagram-Profil. Diese Kontakte sind für direkte Anfragen an die Artists gedacht, nicht für Fragen zu DANSA-Events.",
  "Meet the lineup ↗": "Line-up kennenlernen ↗",
  "Looking for something else?": "Suchst du etwas anderes?",
  "Venue / promoter / artist / brand":
    "Veranstaltungsort / Veranstalter / Artist / Marke",
  "Just want to get in touch?": "Du möchtest einfach Kontakt aufnehmen?",
  "Have an idea for a DANSA night?": "Hast du eine Idee für eine DANSA-Nacht?",
  "For general questions or event-support inquiries, head to Contact.":
    "Für allgemeine Fragen oder Fragen zu Events nutze unsere Kontaktseite.",
  "Our collaboration page is the place to tell us what you have in mind.":
    "Auf unserer Kooperationsseite kannst du uns deine Idee vorstellen.",
  "Contact DANSA ↗": "DANSA kontaktieren ↗",
  "The next idea takes shape": "Die nächste Idee nimmt Gestalt an",
  "Good people. Shared energy.": "Gute Menschen. Gemeinsame Energie.",
  "Explore what DANSA is planning. Event times and ticket links will be announced only when confirmed.":
    "Entdecke, was DANSA plant. Eventzeiten und Ticketlinks werden veröffentlicht, sobald sie bestätigt sind.",
  "Page not found": "Seite nicht gefunden",
  "That page is not part of the DANSA site.":
    "Diese Seite gehört nicht zur DANSA-Website.",
  "Back home": "Zur Startseite",
  Stories: "Geschichten",
  "From the DANSA journal": "Aus dem DANSA-Journal",
  "Different roles. Shared rhythm.":
    "Verschiedene Rollen. Gemeinsamer Rhythmus.",
  "Meet the creative disciplines behind the line-up: selecting records, live performance and movement. These editorial introductions explore the roles that bring DANSA together.":
    "Lerne die kreativen Disziplinen hinter dem Line-up kennen: Musikauswahl, Live-Performance und Bewegung. Diese redaktionellen Einführungen erkunden die Rollen, die DANSA zusammenbringen.",
  "Read the stories": "Geschichten lesen",
  "Read story": "Geschichte lesen",
  "All stories": "Alle Geschichten",
  "Live & movement": "Live & Bewegung",
  "Artist stories": "Geschichten über die Artists",
  "About the creative discipline": "Über die kreative Disziplin",
  "An editorial introduction based on this artist’s role in the DANSA line-up.":
    "Eine redaktionelle Einführung auf Grundlage der Rolle dieses Artists im DANSA-Line-up.",
  "Explore the artist’s world.": "Entdecke die Welt des Artists.",
  "For music, releases and first-hand updates, follow the artist’s own channel.":
    "Musik, Veröffentlichungen und Neuigkeiten aus erster Hand findest du auf dem eigenen Kanal des Artists.",
  "Artist profile": "Künstlerprofil",
  "More stories": "Weitere Geschichten",
  "Back to stories": "Zurück zu den Geschichten",
  "Filter stories": "Geschichten filtern",
  DJs: "DJs",
  "Singer. Rapper. Songwriter.": "Sänger. Rapper. Songwriter.",
  "Meet the Tanzanian artist behind Paradise City, Kilimanjaro and Thamani. Explore his music, collaborators and the story so far.":
    "Lerne den tansanischen Artist hinter Paradise City, Kilimanjaro und Thamani kennen. Entdecke seine Musik, Kooperationen und seinen bisherigen Weg.",
  "Listen to the music": "Musik entdecken",
  "Read his story": "Seine Geschichte",
  Tanzania: "Tansania",
  Origin: "Herkunft",
  Disciplines: "Disziplinen",
  "Vocals & songwriting": "Gesang & Songwriting",
  "In the line-up": "Im Line-up",
  "Start with these three": "Drei Songs zum Einstieg",
  "Solo single": "Solo-Single",
  "With Baraka Da Prince": "Mit Baraka Da Prince",
  "With Bill nass": "Mit Bill nass",
  "Listen on": "Anhören auf",
  "A brief history": "Ein kurzer Rückblick",
  "Audiomack profile": "Audiomack-Profil",
  "A public profile since January 2019.":
    "Ein öffentliches Profil seit Januar 2019.",
  "A single in the recorded catalogue.":
    "Eine Single im veröffentlichten Katalog.",
  "With Chino Kidd and Dj ALLY B.": "Mit Chino Kidd und Dj ALLY B.",
  "Released on 1 November 2024.": "Veröffentlicht am 1. November 2024.",
  Collaborations: "Kooperationen",
  "Thamani with Baraka Da Prince. Up with Bill nass.":
    "Thamani mit Baraka Da Prince. Up mit Bill nass.",
  "View release or profile": "Veröffentlichung oder Profil ansehen",
  "On this artist page": "Auf dieser Künstlerseite",
  "On this page": "Auf dieser Seite",
  "The story": "Die Geschichte",
  Timeline: "Zeitstrahl",
  Credits: "Mitwirkende",
  "A Tanzanian voice, told through the music.":
    "Eine Stimme aus Tansania, erzählt durch Musik.",
  "Ice Boy Africa is a singer, rapper and content creator from Tanzania. His Audiomack profile identifies him as an artist and songwriter, with projects including Good Days EP, A17 AFRO EP and 3SUM EP.":
    "Ice Boy Africa ist Sänger, Rapper und Content Creator aus Tansania. Sein Audiomack-Profil beschreibt ihn als Artist und Songwriter. Zu den dort aufgeführten Projekten zählen Good Days EP, A17 AFRO EP und 3SUM EP.",
  "The singles offer a route through the years: Paradise City in 2022, Sisi in 2023, then Baby and Kilimanjaro in 2024. In 2025, releases include Stress and collaborations with Baraka Da Prince and Bill nass.":
    "Die Singles führen durch die Jahre: Paradise City 2022, Sisi 2023, dann Baby und Kilimanjaro 2024. Zu den Veröffentlichungen 2025 gehören Stress und Kooperationen mit Baraka Da Prince und Bill nass.",
  "Read the full artist story": "Die ganze Künstlergeschichte lesen",
  "Collaborations & credits": "Kooperationen & Mitwirkende",
  "The people behind the releases.":
    "Die Menschen hinter den Veröffentlichungen.",
  "Featured artist": "Gastartist",
  Producer: "Produzent",
  "Follow Ice Boy Africa": "Folge Ice Boy Africa",
  "Listen, connect and keep up with the artist.":
    "Musik hören, Kontakt aufnehmen und Neuigkeiten entdecken.",
  "Artist enquiries": "Künstleranfragen",
  "Artist enquiries go directly to Ice Boy via Instagram.":
    "Künstleranfragen gehen über Instagram direkt an Ice Boy.",
  "Sources & release credits": "Quellen & Credits der Veröffentlichungen",
  "Artist history": "Künstlergeschichte",
  "A career story drawn from published artist profiles and music release records. Sources are linked below.":
    "Eine Geschichte seines musikalischen Wegs anhand veröffentlichter Künstlerprofile und Musikveröffentlichungen. Die Quellen sind unten verlinkt.",
  "Selected releases": "Ausgewählte Veröffentlichungen",
  "Explore the music behind the story.":
    "Entdecke die Musik hinter der Geschichte.",
  Sources: "Quellen",
  "Release dates and credits follow the linked platform records.":
    "Veröffentlichungsdaten und Credits entsprechen den verlinkten Plattformangaben.",
}

export function useTranslation() {
  const { language } = useContext(LanguageContext)
  return (text: string, values?: Record<string, string>) => {
    const translated = language === "de" ? (german[text] ?? text) : text
    return translated.replace(
      /\{(\w+)\}/g,
      (match, key) => values?.[key] ?? match,
    )
  }
}
