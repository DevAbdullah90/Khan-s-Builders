import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homepage"][0]`
export const aboutPageQuery = groq`*[_type == "about"][0]`
export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc)`
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]`
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const announcementsQuery = groq`*[_type == "announcement" && active == true] | order(priority desc)`
export const galleryQuery = groq`*[_type == "gallery"] | order(order asc, _createdAt desc)`
export const featuredGalleryQuery = groq`*[_type == "gallery" && isFeatured == true][0...3] | order(order asc, _createdAt desc)`
