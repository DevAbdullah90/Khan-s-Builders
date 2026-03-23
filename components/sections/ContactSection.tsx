'use client'

import { motion } from 'framer-motion'
import { 
  ChevronDown,
  Send,
  MapPin,
  Phone} from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="bg-white pt-20 pb-40 relative overflow-visible">
      {/* Centered Wide Container for the main visual */}
      <div className="px-4 md:px-10 lg:px-12 max-w-[1700px] mx-auto relative overflow-visible">
        
        {/* The Wide & Tall Immersive Background Box */}
        <div className="relative w-full h-[650px] md:h-[850px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl">
          <Image 
            src="/images/contact-bg.jpg" 
            alt="Wide Luxury Project Visual" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle Overlay Gradients */}
          <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/90 via-[#050b18]/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/60 via-[#050b18]/20 to-transparent z-10" />

          {/* Top-Left Content: Panoramic Branding */}
          <div className="relative z-20 p-10 md:p-24 text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-16 bg-gold" />
                <span className="text-gold font-black text-sm uppercase tracking-[0.5em]">Direct Inquiry Channel</span>
              </div>
              <h2 className="text-5xl md:text-[90px] font-black leading-[0.85] tracking-tighter mb-12">
                LET'S <br />
                <span className="text-gold">CONSTRUCT.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-90 border-t border-white/10 pt-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gold">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-white/50">Studio</span>
                  </div>
                  <p className="font-bold text-xl uppercase tracking-tighter">Main Samanabad, Lahore</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gold">
                    <Phone className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-white/50">Line 01</span>
                  </div>
                  <p className="font-bold text-xl uppercase tracking-tighter">0300 0000000</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The "Coming Out From Bottom Right" Floating Form Card */}
        <div className="absolute right-4 md:right-16 lg:right-24 bottom-[-50px] z-30 w-full max-w-[650px] px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25, stiffness: 80, delay: 0.1 }}
            className="bg-white rounded-[40px] md:rounded-[70px] p-10 md:p-16 shadow-[0_80px_150px_rgba(0,0,0,0.3)] border border-slate-50 relative overflow-visible"
          >
            {/* Form Heading Section */}
            <div className="mb-12">
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Project Inquiry</h3>
              <p className="text-xs font-black text-slate-400 mt-3 uppercase tracking-[0.3em] italic">Confidential & Direct</p>
            </div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">FullName</label>
                  <input type="text" placeholder="Abdullah Khan" className="w-full bg-slate-50 border-b-4 border-slate-100 p-6 outline-hidden focus:border-gold transition-all font-bold text-xl text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ph. Number</label>
                  <input type="tel" placeholder="+92 --- ---" className="w-full bg-slate-50 border-b-4 border-slate-100 p-6 outline-hidden focus:border-gold transition-all font-bold text-xl text-slate-900" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Project Category</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-b-4 border-slate-100 p-6 outline-hidden focus:border-gold appearance-none font-bold text-xl text-slate-900">
                    <option>High-End Residential</option>
                    <option>Commercial Multi-Story</option>
                    <option>Industrial Infrastructure</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Vision Summary</label>
                <textarea rows={1} placeholder="Tell us about the project..." className="w-full bg-slate-50 border-b-4 border-slate-100 p-6 outline-hidden focus:border-gold transition-all font-bold text-xl text-slate-900 resize-none" />
              </div>

              <div className="pt-6">
                <button className="w-full h-22 bg-[#050b18] text-white rounded-[35px] font-black uppercase tracking-[0.5em] text-sm shadow-2xl hover:bg-gold hover:text-[#050b18] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-6 group">
                  Send Inquiry
                  <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
