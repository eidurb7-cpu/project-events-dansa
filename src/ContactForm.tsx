import { useContext, useEffect, useRef, useState, type FormEvent } from "react"

import { LanguageContext, useTranslation } from "./i18n"

import { CONTACT_EMAIL, CONTACT_ENDPOINT } from "./contactDetails"

export function ContactForm({
  collaborate = false,
}: {
  collaborate?: boolean
}) {
  const { language } = useContext(LanguageContext)

  const de = language === "de"

  const t = useTranslation()

  const [status, setStatus] =
    useState<"idle" | "sending" | "accepted" | "activation" | "error">("idle")

  const [error, setError] = useState("")

  const result = useRef<HTMLDivElement>(null)

  const inFlight = useRef(false)

  useEffect(() => {
    if (["accepted", "activation", "error"].includes(status))
      result.current?.focus()
  }, [status])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inFlight.current) return

    const form = event.currentTarget

    const values = new FormData(form)

    if (values.get("_honey")) return

    if (
      !String(values.get("name") ?? "").trim() ||
      !String(values.get("message") ?? "").trim()
    ) {
      setError(
        de
          ? "Bitte gib deinen Namen und eine Nachricht ein."
          : "Please enter your name and a message.",
      )

      setStatus("error")

      return
    }

    inFlight.current = true

    setStatus("sending")

    setError("")

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          name: String(values.get("name") ?? "").trim(),

          email: String(values.get("email") ?? "").trim(),

          organization: String(values.get("organization") ?? "").trim(),

          type: String(values.get("type") ?? ""),

          message: String(values.get("message") ?? "").trim(),

          _subject: `DANSA ${
            collaborate ? "collaboration" : "contact"
          }: ${String(values.get("type") ?? "General")}`,

          _replyto: String(values.get("email") ?? "").trim(),

          _template: "table",

          _url: window.location.href,
        }),

        signal: AbortSignal.timeout(20000),
      })

      const data: {
        success?: boolean | string
        message?: string
      } = await response.json()

      if (!response.ok) throw new Error("submission-failed")

      // Activation is a setup step, never confirmation that an enquiry arrived.

      if (/activat|confirm.*email|verify.*email/i.test(data.message ?? "")) {
        setStatus("activation")
      } else if (data.success === true || data.success === "true") {
        setStatus("accepted")

        form.reset()
      } else {
        throw new Error("submission-failed")
      }
    } catch {
      setError(
        de
          ? "Deine Nachricht konnte nicht übermittelt werden. Bitte versuche es erneut oder sende uns eine E-Mail. Deine Eingaben bleiben erhalten."
          : "Your message could not be submitted. Please try again or email us directly. Your entries have been kept.",
      )

      setStatus("error")
    } finally {
      inFlight.current = false
    }
  }

  return (
    <>
      <p className="form-destination">
        {de ? "Deine Anfrage geht an" : "Your enquiry goes to"}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      {status === "accepted" ? (
        <div className="form-note" ref={result} tabIndex={-1} role="status">
          <h3>
            {de ? "Danke für deine Nachricht." : "Thanks for reaching out."}
          </h3>
          <p>
            {de
              ? "Deine Anfrage wurde vom E-Mail-Dienst zur Weiterleitung an DANSA angenommen."
              : "Your enquiry has been accepted by the email service for forwarding to DANSA."}
          </p>
          <button
            type="button"
            className="button blue-button"
            onClick={() => setStatus("idle")}
          >
            {de ? "Weitere Nachricht" : "Send another message"}
          </button>
        </div>
      ) : (
        <form onSubmit={submit} aria-busy={status === "sending"}>
          <fieldset disabled={status === "sending"} className="contact-fields">
            <div className="field-pair">
              <label>
                {t("Name *")}
                <input
                  name="name"
                  autoComplete="name"
                  maxLength={120}
                  placeholder={t("Your name")}
                  required
                  pattern=".*\S.*"
                />
              </label>
              <label>
                {t("Email *")}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  placeholder={t("Your email address")}
                  required
                />
              </label>
            </div>
            {collaborate && (
              <label>
                {t("Organization")}
                <input
                  name="organization"
                  autoComplete="organization"
                  maxLength={160}
                  placeholder={t("Venue, project or organization (optional)")}
                />
              </label>
            )}
            <label>
              {t(collaborate ? "Collaboration type *" : "Inquiry type *")}
              <select name="type" defaultValue="" required>
                <option value="" disabled>
                  {t("Select")}
                </option>
                {(collaborate
                  ? ["Venue", "Promoter", "Artist", "Brand"]
                  : ["General", "Booking", "Collaboration"]
                ).map((type) => (
                  <option key={type} value={type}>
                    {t(type)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t("Message *")}
              <textarea
                name="message"
                rows={6}
                maxLength={10000}
                placeholder={t("What would you like to ask us?")}
                required
              />
            </label>
            <input
              className="contact-honeypot"
              name="_honey"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label className="consent">
              <input type="checkbox" required />
              {de
                ? "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage über FormSubmit an DANSA übermittelt werden. *"
                : "I agree to send my details to DANSA via FormSubmit so the team can respond to my enquiry. *"}
            </label>
            <p className="fine">
              {de ? "Formularversand über" : "Form delivery by"}{" "}
              <a href="https://formsubmit.co/" target="_blank" rel="noreferrer">
                FormSubmit
              </a>
              .{" "}
              {de
                ? "Du kannst uns auch direkt per E-Mail kontaktieren."
                : "You can also contact us directly by email."}
            </p>
            <button className="button blue-button" type="submit">
              {status === "sending"
                ? de
                  ? "Wird gesendet…"
                  : "Sending…"
                : de
                  ? "Nachricht senden"
                  : "Send message"}{" "}
              <span aria-hidden="true">↗</span>
            </button>
          </fieldset>
          {(status === "activation" || status === "error") && (
            <div
              className="form-note contact-result"
              ref={result}
              tabIndex={-1}
              role="alert"
            >
              <h3>
                {status === "activation"
                  ? de
                    ? "E-Mail-Freischaltung erforderlich"
                    : "Email activation required"
                  : de
                    ? "Nachricht nicht gesendet"
                    : "Message not sent"}
              </h3>
              <p>
                {status === "activation"
                  ? de
                    ? "Die DANSA-Inbox muss den Aktivierungslink von FormSubmit bestätigen, bevor dieses Formular E-Mails zustellen kann. Deine Anfrage wurde noch nicht als zugestellt bestätigt. Bitte sende sie vorerst direkt per E-Mail."
                    : "The DANSA inbox must confirm FormSubmit’s activation link before this form can deliver email. Your enquiry has not been confirmed as delivered. Please email us directly for now."
                  : error}
              </p>
              <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
          )}
        </form>
      )}
    </>
  )
}
