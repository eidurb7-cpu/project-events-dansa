import { useTranslation } from "./i18n"
import { faqs } from "./pageContent"

export function DiscoverRoutes() {
  const t = useTranslation()
  const routes = [
    [
      "/events",
      "Plan a night",
      "Explore the event concepts and check what is confirmed.",
    ],
    [
      "/lineup",
      "Meet the people",
      "Five profiles. Different disciplines. One shared line-up.",
    ],
    [
      "/gallery",
      "Feel the atmosphere",
      "Explore the visual world that inspires DANSA.",
    ],
  ]
  return (
    <section className="site-discover">
      <h2>{t("Find your way into DANSA.")}</h2>
      <div>
        {routes.map(([href, title, description], index) => (
          <a key={href} href={href}>
            <span className="eyebrow blue">
              0{index + 1} <span aria-hidden="true">↗</span>
            </span>
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export function FAQBlock({ kind }: { kind: keyof typeof faqs }) {
  const t = useTranslation()
  return (
    <section className="site-faq">
      <div>
        <p className="eyebrow blue">{t("Good to know")}</p>
        <h2>{t("A few answers before you go further.")}</h2>
      </div>
      <div>
        {faqs[kind].map(([question, answer]) => (
          <details key={question}>
            <summary>{t(question)}</summary>
            <p>{t(answer)}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks() {
  const t = useTranslation()
  const steps = [
    [
      "Begin with the music",
      "A sound, a format and a reason to bring people together.",
    ],
    [
      "Shape the setting",
      "Consider the artists, the space and how people will experience it.",
    ],
    [
      "Share the details",
      "Publish dates, access information and tickets when the plans are confirmed.",
    ],
  ]
  return (
    <section className="site-process dark">
      <h2>{t("From idea to gathering.")}</h2>
      <ol>
        {steps.map(([title, description], index) => (
          <li key={title}>
            <span aria-hidden="true">0{index + 1}</span>
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function EnquiryGuide() {
  const t = useTranslation()
  return (
    <section className="enquiry-guide lavender">
      <h2>{t("A useful introduction")}</h2>
      <div>
        {[
          ["Who you are", "Your name, project or organization."],
          [
            "What you have in mind",
            "The idea, question or artist you want to reach.",
          ],
          [
            "The practical details",
            "A proposed place, format and timing, if you know them.",
          ],
        ].map(([title, text], index) => (
          <article key={title}>
            <p className="eyebrow blue">0{index + 1}</p>
            <h3>{t(title)}</h3>
            <p>{t(text)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
