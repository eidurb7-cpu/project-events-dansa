import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const NAVIGATION_EVENT = "dansa:navigate"
const normalize = (path: string) => path.replace(/\/+$/, "") || "/"
const newKey = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`

export function useSiteNavigation() {
  const [route, setRoute] = useState(() => ({
    path: normalize(location.pathname),
    key: history.state?.dansaKey ?? "initial",
  }))
  const positions = useRef(new Map<string, number>())
  const currentKey = useRef(route.key)
  const pending = useRef<{
    top: number
    hash: string
  } | null>(null)

  useEffect(() => {
    const previousRestoration = history.scrollRestoration
    history.scrollRestoration = "manual"
    const initialKey = history.state?.dansaKey ?? newKey()
    history.replaceState({ ...history.state, dansaKey: initialKey }, "")
    currentKey.current = initialKey

    const update = (key: string, top: number) => {
      currentKey.current = key
      pending.current = { top, hash: location.hash }
      setRoute({ path: normalize(location.pathname), key })
      window.dispatchEvent(new Event(NAVIGATION_EVENT))
    }
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      )
        return
      let url: URL
      try {
        url = new URL(link.href, location.href)
      } catch {
        return
      }
      if (
        url.origin !== location.origin ||
        !["http:", "https:"].includes(url.protocol)
      )
        return
      if (
        url.pathname === location.pathname &&
        url.search === location.search &&
        url.hash
      )
        return
      event.preventDefault()
      positions.current.set(currentKey.current, window.scrollY)
      const key = newKey()
      history.pushState(
        { dansaKey: key },
        "",
        url.pathname + url.search + url.hash,
      )
      update(key, 0)
    }
    const onPopState = () => {
      positions.current.set(currentKey.current, window.scrollY)
      let key = history.state?.dansaKey
      if (!key || key === currentKey.current) {
        key = newKey()
        history.replaceState({ ...history.state, dansaKey: key }, "")
      }
      update(key, positions.current.get(key) ?? 0)
    }
    document.addEventListener("click", onClick)
    window.addEventListener("popstate", onPopState)
    return () => {
      history.scrollRestoration = previousRestoration
      document.removeEventListener("click", onClick)
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

  useLayoutEffect(() => {
    const destination = pending.current
    if (!destination) return
    pending.current = null
    let anchorId = destination.hash.slice(1)
    try {
      anchorId = decodeURIComponent(anchorId)
    } catch {
      /* Keep malformed fragments harmless. */
    }
    const anchor = anchorId ? document.getElementById(anchorId) : null
    const focusTarget =
      anchor ??
      document.querySelector<HTMLElement>("main h1") ??
      document.querySelector<HTMLElement>("main")
    if (focusTarget) {
      focusTarget.setAttribute("tabindex", "-1")
      focusTarget.focus({ preventScroll: true })
    }
    if (anchor) anchor.scrollIntoView({ behavior: "instant", block: "start" })
    else window.scrollTo({ top: destination.top, behavior: "instant" })
  }, [route])

  return route.path
}
