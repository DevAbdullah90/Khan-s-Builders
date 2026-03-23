'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[4rem] shadow-xl border border-gray-100 relative group overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-gold/10 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Our Mission</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                To engineer premium living and business spaces that set new benchmarks in quality, transparency, and architectural innovation across Pakistan's real-estate sector.
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#050b18] p-12 md:p-16 rounded-[4rem] shadow-xl relative group overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Our Vision</h3>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                To be the most trusted and influential developers in the region, known for creating sustainable legacies and transforming skylines through visionary design.
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
