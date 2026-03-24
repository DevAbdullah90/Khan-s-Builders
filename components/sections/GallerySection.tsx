'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '../shared/Container'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function GallerySection() {
  return (
    <section className="py-32 bg-white text-gray-900 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Main Visual Composition */}
          <div className="lg:w-3/5 relative">
            {/* Primary Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative aspect-4/5 w-full rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-black/5 z-10"
            >
              <img
                src="/realImages/b-4.jpeg"
                alt="Khan's Builder Masterpiece"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>

            {/* Overlapping Detail Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              className="absolute -bottom-16 -right-16 md:-right-24 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-uxl border-8 border-white z-30"
            >
              <img
                src="/realImages/b-5.jpeg"
                alt="Architectural Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Label */}
            <motion.div 
               initial={{ opacity: 0, rotate: -90 }}
               whileInView={{ opacity: 1, rotate: -90 }}
               viewport={{ once: true }}
               className="absolute top-1/2 -left-24 text-[10px] font-black uppercase tracking-[0.5em] text-gold/30 -translate-y-1/2 whitespace-nowrap"
            >
              Architecture & Excellence
            </motion.div>
          </div>

          {/* Editorial Content */}
          <div className="lg:w-2/5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[10px] font-bold tracking-[0.3em] uppercase text-gold bg-gold/5 border border-gold/10 rounded-full"
            >
              The Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-10"
            >
              Curation is the New <span className="text-gold italic">Luxury.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-12 leading-relaxed font-medium"
            >
              At Khan's Builders, we don't just develop properties. We curate lifestyles. Every line, every texture, and every space is designed to evoke a sense of timeless elegance and unparalleled comfort.
            </motion.p>
            
            {/* Third Supporting Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full h-48 rounded-3xl overflow-hidden mb-12 shadow-sm grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img 
                src="/realImages/b-6.jpeg" 
                alt="Interior Design" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gold rounded-full px-12 h-16 text-sm font-bold uppercase tracking-widest transition-all duration-300 group shadow-xl shadow-black/5" asChild>
                <Link href="/gallery">
                  View Full Portfolio <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Scroll Text Background */}
      <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15rem] font-black uppercase italic leading-none">KHANS BUILDERS & DEVELOPERS KHANS BUILDERS & DEVELOPERS</span>
      </div>
    </section>
  )
}
