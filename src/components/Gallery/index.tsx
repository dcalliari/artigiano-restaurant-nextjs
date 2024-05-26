import { FetchImages } from './FetchImages'
import { promises as fs } from 'fs'

import path from 'path'

export async function Gallery() {
  const imageDirectory = path.join(process.cwd(), 'public/photos')
  const imageFilenames = await fs.readdir(imageDirectory)

  return <FetchImages images={imageFilenames} />
}
