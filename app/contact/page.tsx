'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

import ContactHero from '@/components/sections/ContactHero'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <ContactHero />

      {/* Contact & Info Section */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left side: Form */}
            <div className="lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-uxl border border-gray-100"
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-black tracking-tight mb-4">Send a Message</h2>
                  <p className="text-gray-500 font-medium">Field marked with * are mandatory for us to respond.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name *</label>
                      <input type="text" placeholder="John Doe" className="bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address *</label>
                      <input type="email" placeholder="john@example.com" className="bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                    <input type="text" placeholder="Interested in Residential Projects" className="bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message *</label>
                    <textarea rows={5} placeholder="Tell us about your requirements..." className="bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all outline-none resize-none" />
                  </div>
                  <Button size="lg" className="w-full bg-gray-900 text-white hover:bg-gold h-16 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all duration-500">
                    Send Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Right side: Office Info */}
            <div className="lg:w-2/5 flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-10 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <img src="/images/office-hq.png" alt="Khans Builder HQ" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <span className="text-white text-xl font-black">Main Headquarters</span>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest mt-1">Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Office Address</h4>
                      <p className="font-bold text-lg leading-snug">Park View City, Phase 1 <br /> Islamabad, Federal Capital</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Direct Contact</h4>
                      <p className="font-bold text-lg leading-snug">0300 0000000 <br /> 0300 0000001</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Support</h4>
                      <p className="font-bold text-lg leading-snug">info@khansbuilders.com <br /> support@khans.pk</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Office Hours</h4>
                      <p className="font-bold text-lg leading-snug">Mon - Sat: 09:00 - 18:00 <br /> Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight mb-4">Visit Our Office</h2>
            <p className="text-gray-500 font-medium">Find us in the heart of Islamabad's premium residential sector.</p>
          </div>
          
          <div className="relative group rounded-[4rem] overflow-hidden shadow-uxl border-8 border-white h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.0!2d73.1818!3d33.693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df969715d22261%3A0x70af03067098efed!2sPark%20View%20City%20Islamabad!5e0!3m2!1sen!2s!4v1711150000000!5m2!1sen!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* View on Google Maps Button (Optional Overlay) */}
            <div className="absolute top-6 right-6">
              <Link href="https://maps.app.goo.gl/3fX3y" target="_blank">
                <Button size="sm" className="bg-white text-gray-900 hover:bg-gold hover:text-white rounded-full px-6 shadow-xl border-none font-bold text-[10px] uppercase">
                  Navigate Now
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
