import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homepage"][0]`
export const aboutPageQuery = groq`*[_type == "about"][0]`
export const projectsQuery = groq`*[_type == "projects"] | order(publishedAt desc)`
export const projectBySlugQuery = groq`*[_type == "projects" && slug.current == $slug][0]`
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const announcementsQuery = groq`*[_type == "announcement" && active == true] | order(priority desc)`
