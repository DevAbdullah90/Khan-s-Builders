'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, FileText, Share2, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectSidebarProps {
  projectDetails: any
  whatsappNumber?: string
}

export default function ProjectSidebar({ projectDetails, whatsappNumber = '03000000000' }: ProjectSidebarProps) {
  const details = [
    { label: 'Starting Price', value: projectDetails?.startingPrice || 'Contact for Price', color: 'text-gold' },
    { label: 'Area Range', value: projectDetails?.areaRange || 'Various Sizes', icon: '📏' },
    { label: 'Completion', value: projectDetails?.completion || 'Ongoing', icon: '🕒' },
    { label: 'Total Units', value: projectDetails?.totalUnits || 'Multiple Units', icon: '🏢' },
  ]

  return (
    <aside className="lg:sticky lg:top-32 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50"
      >
        <h3 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Project Details</h3>
        
        <div className="space-y-6 mb-8">
          {details.map((detail, idx) => (
            <div key={idx} className="flex justify-between items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{detail.label}</span>
              <span className={`text-right font-bold text-sm ${detail.color || 'text-gray-900'}`}>{detail.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full h-14 bg-gold text-white hover:bg-gold/90 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-gold/20 flex items-center justify-center gap-3"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          >
            <Phone className="w-4 h-4" />
            Book Now via WhatsApp
          </Button>

          <Button variant="outline" className="w-full h-14 border-gray-200 text-gray-400 hover:text-gold hover:border-gold rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
            <FileText className="w-4 h-4 mr-3" />
            Request Brochure
          </Button>

          <Button variant="outline" className="w-full h-14 border-gray-200 text-gray-400 hover:text-gold hover:border-gold rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
            <Share2 className="w-4 h-4 mr-3" />
            Share Project
          </Button>
        </div>

        <div className="mt-8 text-center bg-gray-50 rounded-2xl p-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 flex items-center justify-center gap-2">
            <HelpCircle className="w-3 h-3" />
            Have questions? Call us at
          </p>
          <a href={`tel:${whatsappNumber}`} className="text-gold font-black text-lg tracking-tight hover:scale-105 transition-transform inline-block">
            {whatsappNumber}
          </a>
        </div>
      </motion.div>
    </aside>
  )
}
