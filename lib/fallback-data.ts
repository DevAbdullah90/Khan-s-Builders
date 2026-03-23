import { Project } from '@/types'

export const FALLBACK_PROJECT: Project = {
  _id: 'fallback-1',
  title: 'Town Icon',
  subheading: 'Premium Mixed-Use Development',
  slug: { current: 'town-icon' },
  status: 'New Selling',
  location: 'Rehman Baba Rd, University Town, Peshawar',
  description: 'Town Icon is a premier mixed-use development located in the heart of University Town, Peshawar. Offering a seamless blend of luxury apartments and branded commercial outlets, it sets a new standard for modern living and business excellence.',
  images: [
    '/images/p-1.avif',
    '/images/p-2.jpg',
    '/images/p-3.jpg',
    '/images/p4.jpg',
  ],
  highlights: [
    'Prime location on Rehman Baba Rd, University Town',
    'Luxury Apartments (1-4 Beds)',
    'Premium Commercial Spaces',
    'Secure Gated Community Features',
    'State-of-the-art Amenities'
  ],
  amenities: [
    'Double Basement Car Parking',
    'High-Speed Elevator',
    'Emergency Stairs',
    'Stand-By Power Backup System',
    'Garbage Shoots',
    'Mosque',
    'Community Center',
    'Commercial Outlet',
    'Branded Shops',
    'Second to Eight Floor Apartments',
    '24/7 Security System',
    '24/7 CCTV Cameras'
  ],
  projectDetails: {
    startingPrice: '25% Down Payment',
    areaRange: 'Various Sizes Available',
    completion: '48 Months',
    totalUnits: 'Apartments, Shops (1 Bed, 2 Bed, 3 Bed, 4 Bed)'
  },
  paymentPlans: [
    '/images/projects/commercial-plan.png',
    '/images/projects/residential-plan.png'
  ],
  whatsappNumber: '03000000000'
}

export const FALLBACK_PROJECTS: Project[] = [
  FALLBACK_PROJECT,
  {
    ...FALLBACK_PROJECT,
    _id: 'fallback-2',
    title: 'University Commercial',
    slug: { current: 'university-commercial' },
    status: 'In Progress',
    description: 'A dedicated commercial hub with high-end shops and corporate offices in heart of Peshawar.',
    images: ['/images/p-2.jpg']
  },
  {
    ...FALLBACK_PROJECT,
    _id: 'fallback-3',
    title: 'Baba Heights',
    slug: { current: 'baba-heights' },
    status: 'Planned',
    description: 'Luxury residential tower with futuristic design and smart home integration systems.',
    images: ['/images/p-3.jpg']
  }
]
