'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'

const TEAM_MEMBERS = [
  {
    name: "Abdullah Khan",
    role: "Founding Partner & CEO",
    bio: "Visionary leader with 15+ years in high-end real-estate development and strategic master planning.",
    image: "/images/p-1.avif"
  },
  {
    name: "Engr. Zafar Iqbal",
    role: "Director Operations",
    bio: "Pioneer in modern engineering and infrastructure management, overseeing the structural integrity of every landmark.",
    image: "/images/p-2.jpg"
  },
  {
    name: "Sarah Sheikh",
    role: "Head Architect",
    bio: "Master of minimalist and sustainable architecture, bringing a unique aesthetic to Khans' signature projects.",
    image: "/images/p-3.jpg"
  },
  {
    name: "M. Ahmed",
    role: "Project Director",
    bio: "Execution expert dedicated to on-time delivery and uncompromising quality standards across all sites.",
    image: "/images/p4.jpg"
  }
]

export default function TeamShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="space-y-32">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Large Portrait Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-3/4 rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-px left-px right-px h-1/2 bg-linear-to-t from-[#050b18] to-transparent" />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-left space-y-8">
                <div>
                  <span className="text-gold text-xs font-black uppercase tracking-[0.5em] mb-4 block">Leadership</span>
                  <h3 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none mb-4">{member.name}</h3>
                  <p className="text-xl font-bold text-gold italic">{member.role}</p>
                </div>
                
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  {member.bio}
                </p>

                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-white transition-all pointer-events-auto"
                  >
                    <span className="font-bold">in</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-white transition-all pointer-events-auto"
                  >
                    <span className="font-bold">tw</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
