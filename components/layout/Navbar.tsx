'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '../shared/Container'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-100 transition-[padding,background-color,backdrop-filter,border-color] duration-500 ease-in-out border-b",
      isScrolled 
        ? "py-2 md:py-3 bg-black/40 backdrop-blur-xl border-white/5" 
        : "py-4 md:py-6 bg-transparent border-transparent"
    )}>
      <Container>
        <div className={cn(
          "flex justify-between items-center transition-all duration-500 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border relative z-50",
          isScrolled 
            ? "bg-black/20 border-white/5 backdrop-blur-md" 
            : "bg-black/20 backdrop-blur-md border-white/10"
        )}>
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10 group-hover:bg-gold transition-colors duration-300">
              <span className="text-gold group-hover:text-white font-bold text-lg md:text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tighter text-white leading-none">KHANS BUILDERS</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-gold font-medium"> & DEVELOPERS</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    isActive ? "text-gold" : "text-white/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden xl:flex items-center gap-3 text-white">
              <div className="p-2 rounded-full bg-gold/10 text-gold border border-gold/20">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">03000000000</span>
            </div>
            
            <Button className="bg-gold text-white hover:bg-gold/90 h-10 md:h-11 px-4 md:px-6 font-semibold hidden sm:flex" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl z-40"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-semibold py-3 border-b border-white/5 transition-colors",
                        isActive ? "text-gold" : "text-white/90 hover:text-gold"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
              
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-full bg-gold/10 text-gold border border-gold/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">03000000000</span>
                </div>
                <Button className="bg-gold text-white hover:bg-gold/90 w-full h-12 font-bold uppercase tracking-wider" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}

