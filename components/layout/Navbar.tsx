import Link from 'next/link'
import Container from '../shared/Container'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function Navbar() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-6">
      <Container>
        <div className="flex justify-between items-center bg-black/20 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10 group-hover:bg-gold transition-colors duration-300">
              <span className="text-gold group-hover:text-white font-bold text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white leading-none">KHANS BUILDERS</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium"> & DEVELOPERS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-3 text-white">
              <div className="p-2 rounded-full bg-gold/10 text-gold border border-gold/20">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">03364477446</span>
            </div>
            <Button className="bg-gold text-white hover:bg-gold/90 h-11 px-6 font-semibold hidden md:flex">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
