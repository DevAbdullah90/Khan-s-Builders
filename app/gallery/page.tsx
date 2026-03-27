import React from 'react'
import { client } from '@/sanity/lib/client'
import { galleryQuery } from '@/sanity/lib/queries'
import GalleryClient from './GalleryClient'

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const items = await client.fetch(galleryQuery)

  return <GalleryClient items={items} />
}
