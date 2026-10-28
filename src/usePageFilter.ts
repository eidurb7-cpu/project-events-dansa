import { useCallback, useEffect, useState } from "react"

export function usePageFilter<T extends string>(
  allowed: readonly T[],
  initial: T,
) {
  const allowedKey = allowed.join("|")
  const read = useCallback(() => {
    const value = new URLSearchParams(location.search).get("filter") as T
    return allowedKey.split("|").includes(value) ? value : initial
  }, [allowedKey, initial])
  const [filter, setFilter] = useState<T>(read)
  useEffect(() => {
    const update = () => setFilter(read())
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [read])
  const select = (value: T) => {
    const url = new URL(location.href)
    if (value === initial) url.searchParams.delete("filter")
    else url.searchParams.set("filter", value)
    history.replaceState(
      history.state,
      "",
      url.pathname + url.search + url.hash,
    )
    setFilter(value)
  }
  return [filter, select] as const
}
