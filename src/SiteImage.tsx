import type { ImgHTMLAttributes } from "react"
import manifest from "./imageManifest.json"

type OptimizedImage = {
  width: number
  height: number
  variants: {
    width: number
    src: string
  }[]
}

export function SiteImage({
  src,
  loading = "lazy",
  decoding = "async",
  sizes = "(max-width: 760px) 100vw, 50vw",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const optimized = src
    ? (manifest as Record<string, OptimizedImage>)[src]
    : undefined
  return (
    <img
      {...props}
      data-original-src={src}
      src={
        optimized ? optimized.variants[optimized.variants.length - 1].src : src
      }
      srcSet={optimized?.variants
        .map((variant) => `${variant.src} ${variant.width}w`)
        .join(", ")}
      sizes={optimized ? sizes : undefined}
      width={props.width ?? optimized?.width}
      height={props.height ?? optimized?.height}
      loading={props.fetchPriority === "high" ? "eager" : loading}
      decoding={decoding}
    />
  )
}
