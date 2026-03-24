'use client'

import { motion } from 'framer-motion'
import Container from '../shared/Container'
import { Award, Zap, ShieldCheck } from 'lucide-react'

export default function AboutStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
                A Journey of <span className="text-gold">Excellence</span> and Trust.
              </h2>
              <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                <p>
                  Founded a decade ago with a single mission—to redefine the construction landscape in Islamabad—Khans Builders has grown into a premier development firm trusted by hundreds of families.
                </p>
                <p>
                  We don’t just build structures; we construct environments where businesses thrive and families create lasting memories. Our approach combines traditional architectural wisdom with modern engineering precision.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest text-gray-900">Certified</h4>
                <p className="text-xs text-gray-400 font-bold uppercase">ISO 9001 Standards</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest text-gray-900">Efficient</h4>
                <p className="text-xs text-gray-400 font-bold uppercase">On-Time Delivery</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest text-gray-900">Secure</h4>
                <p className="text-xs text-gray-400 font-bold uppercase">100% Legal Entities</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="/realImages/b-1.jpeg" alt="Khans Builder Headquarters" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <span className="text-gold text-xs font-black uppercase tracking-[0.5em] mb-2">Our Foundation</span>
                <p className="text-white text-3xl font-black">Quality is not an option, <br /> it's our promise.</p>
              </div>
            </motion.div>
            
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </Container>
    </section>
  )
}
