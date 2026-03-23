export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface HomePage {
  hero: {
    title: string
    subtitle: string
    backgroundImage: SanityImage
  }
  services: {
    title: string
    description: string
    icon: string
  }[]
  featuredProjects: Project[]
}

export interface AboutPage {
  companyInfo: string
  mission: string
  team: {
    name: string
    role: string
    image: SanityImage
  }[]
}

export interface Project {
  _id: string
  title: string
  subheading?: string
  slug: { current: string }
  featured?: boolean
  images: (SanityImage | string)[]
  description: string
  status: 'Completed' | 'In Progress' | 'Planned'
  location: string
  client?: string
  completionDate?: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  socialLinks: {
    platform: string
    url: string
  }[]
}

export interface SiteSettings {
  navLinks: {
    label: string
    href: string
  }[]
  footerText: string
  logo: SanityImage
}
