import fs from "node:fs/promises"
import path from "node:path"
import { createHash } from "node:crypto"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const assetDirectory = path.join(root, "public/assets")
const outputDirectory = path.join(assetDirectory, "optimized")
const manifestPath = path.join(root, "src/imageManifest.json")
const previous = JSON.parse(
  await fs.readFile(manifestPath, "utf8").catch(() => "{}"),
)
const manifest = {}
await fs.mkdir(outputDirectory, { recursive: true })

for (const filename of (await fs.readdir(assetDirectory)).sort()) {
  if (!/\.(png|jpe?g|webp)$/i.test(filename)) continue
  const input = await fs.readFile(path.join(assetDirectory, filename))
  // Include encoder settings so a future encoding change invalidates the cache.
  const hash = createHash("sha256")
    .update("webp-q82-480-960-1440-v1")
    .update(input)
    .digest("hex")
  const key = `/assets/${filename}`
  const existing = previous[key]
  if (
    existing?.hash === hash &&
    (
      await Promise.all(
        existing.variants.map((variant) =>
          fs.access(path.join(root, "public", variant.src))
            .then(() => true)
            .catch(() => false),
        ),
      )
    ).every(Boolean)
  ) {
    manifest[key] = existing
    continue
  }
  const metadata = await sharp(input).metadata()
  const widths = [
    ...new Set(
      [480, 960, 1440].map((width) => Math.min(width, metadata.width)),
    ),
  ].sort((a, b) => a - b)
  const variants = []
  for (const width of widths) {
    const outputName = `${path.parse(filename).name}-${width}-${hash.slice(0, 10)}.webp`
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(outputDirectory, outputName))
    variants.push({ width, src: `/assets/optimized/${outputName}` })
  }
  manifest[key] = {
    hash,
    width: metadata.width,
    height: metadata.height,
    variants,
  }
}

const currentFiles = new Set(
  Object.values(manifest).flatMap((image) =>
    image.variants.map((variant) => variant.src),
  ),
)
for (const image of Object.values(previous)) {
  for (const variant of image.variants) {
    if (currentFiles.has(variant.src)) continue
    const oldFile = path.resolve(root, "public", `.${variant.src}`)
    // Only remove obsolete generated files; original assets stay intact.
    if (
      oldFile.startsWith(outputDirectory + path.sep) &&
      oldFile.endsWith(".webp")
    ) {
      await fs.unlink(oldFile).catch((error) => {
        if (error.code !== "ENOENT") throw error
      })
    }
  }
}
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
console.log(
  `Responsive images ready: ${Object.keys(manifest).length} source files.`,
)
