import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const publicDirectory = path.resolve(import.meta.dirname, "../public")
const icon = await fs.readFile(path.join(publicDirectory, "favicon.svg"))
for (const [filename, size] of [["favicon-96.png", 96], ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  await sharp(icon).resize(size, size).png().toFile(path.join(publicDirectory, filename))
}
await sharp(path.join(publicDirectory, "social-card.svg")).png().toFile(path.join(publicDirectory, "social-card.png"))
const png = await sharp(icon).resize(32, 32).png().toBuffer()
const header = Buffer.alloc(22)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)
header[6] = 32
header[7] = 32
header.writeUInt16LE(1, 10)
header.writeUInt16LE(32, 12)
header.writeUInt32LE(png.length, 14)
header.writeUInt32LE(22, 18)
await fs.writeFile(path.join(publicDirectory, "favicon.ico"), Buffer.concat([header, png]))
