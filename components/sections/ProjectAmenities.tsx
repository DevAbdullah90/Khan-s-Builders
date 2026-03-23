'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface ProjectAmenitiesProps {
  amenities: string[]
}

export default function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  if (!amenities || amenities.length === 0) return null

  return (
    <div className="py-12 border-t border-gray-100">
      <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Amenities & Features</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((amenity, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gold/5 transition-colors group"
          >
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
              <Check className="w-3 h-3 text-gold group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">{amenity}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
