'use client'

import React from 'react'
import Link from 'next/link'
import Container from '../shared/Container'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Globe
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050b18] text-white overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1 w-full bg-linear-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="pt-24 pb-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* Branding - 4 cols */}
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-6">
                <Link href="/" className="inline-block">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gold rounded-2xl rotate-6 absolute inset-0 opacity-20" />
                      <div className="w-14 h-14 bg-gold flex items-center justify-center rounded-2xl relative z-10 shadow-lg shadow-gold/20">
                        <span className="text-3xl font-black text-[#050b18]">K</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tighter leading-none">
                        KHANS <span className="text-gold">BUILDERS</span>
                      </h3>
                      <p className="text-xs tracking-[0.4em] font-bold text-gray-500 mt-1.5 uppercase">
                        & Developers
                      </p>
                    </div>
                  </div>
                </Link>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                  Crafting legacies through monumental construction. Since our inception, we've delivered excellence across Pakistan's most prestigious skylines.
                </p>
              </div>

              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-[#050b18] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links - 2 cols each */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gold mb-10">Navigation</h4>
              <ul className="space-y-5">
                {['Home', 'About Us', 'Projects', 'Gallery', 'Our Process', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-all flex items-center group text-sm font-bold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gold mb-10">Expertise</h4>
              <ul className="space-y-5">
                {[
                  'Residential',
                  'Commercial',
                  'Industrial',
                  'Interiors',
                  'Consultancy',
                  'Renovation'
                ].map((item) => (
                  <li key={item} className="text-gray-400 text-sm font-bold hover:text-white cursor-pointer transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 text-gold opacity-30 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - 4 cols */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />

              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gold mb-8">Corporate Office</h4>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1.5">Visit Us</p>
                    <p className="text-sm font-bold leading-relaxed">
                      Main Samanabad, <br /> Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1.5">Call Anytime</p>
                    <p className="text-sm font-bold">0336 4477446</p>
                    <p className="text-[10px] text-gold mt-1">Available for Site Visits</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1.5">Email Inquiries</p>
                    <p className="text-sm font-bold">info@khansbuilders.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-xs text-gray-500 font-medium">
                © {currentYear} <span className="text-gold font-black">KHANS BUILDERS & DEVELOPERS</span>. All rights reserved.
              </p>
              <div className="h-1 w-1 bg-gray-700 rounded-full hidden md:block" />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Globe className="w-3 h-3 text-gold" />
                <span>Operating across Major Cities of Pakistan</span>
              </div>
            </div>

            <div className="flex gap-10">
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gold hover:text-white transition-colors">Design: KB</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
