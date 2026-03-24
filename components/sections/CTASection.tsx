'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Container from '../shared/Container'
import { Button } from '../ui/button'

export default function CTASection() {
  const pathname = usePathname()
  
  if (pathname.startsWith('/studio')) return null
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-64 bg-gold/5 blur-[120px] rounded-full -translate-y-32" />
      
      {/* Wave Transition into Dark Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-[#050b18] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white border border-slate-100 p-12 md:p-24 rounded-[48px] shadow-2xl shadow-slate-200/50 overflow-hidden relative group">
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors duration-700" />
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] uppercase text-gold bg-gold/5 border border-gold/10 rounded-full"
            >
              Start Your Masterpiece
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter"
            >
              Ready to bring your <br />
              <span className="text-gold italic font-serif">vision</span> to life?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Whether it's a luxury residence or a landmark commercial project, 
              we combine precision engineering with visionary design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <Button size="lg" className="bg-[#050b18] text-white hover:bg-gold hover:text-[#050b18] hover:scale-105 transition-all text-base px-12 h-16 rounded-2xl font-black shadow-xl shadow-slate-200 group/btn" asChild>
                <Link href="/contact" className="flex items-center gap-3">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <a 
                href="tel:03000000000" 
                className="flex items-center gap-4 text-slate-900 hover:text-gold transition-colors font-black group/phone"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover/phone:border-gold group-hover/phone:bg-gold/5 transition-all shadow-sm">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase text-slate-400 tracking-widest font-black mb-1">Speak with Experts</p>
                  <p className="text-xl">0300 0000000</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
