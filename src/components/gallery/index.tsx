import path from 'path'
import { promises as fs } from 'fs'

import FetchImages from './fetchImages'

export default async function Gallery() {
  const imageDirectory = path.join(process.cwd(), 'public/photos')
  const imageFilenames = await fs.readdir(imageDirectory)

  return <FetchImages images={imageFilenames} />
}
