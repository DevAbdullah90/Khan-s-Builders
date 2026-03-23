'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface ProjectUnitsProps {
  paymentPlans?: any[]
}

export default function ProjectUnits({ paymentPlans }: ProjectUnitsProps) {
  if (!paymentPlans || paymentPlans.length === 0) return null

  return (
    <div className="py-12 border-t border-gray-100">
      <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Choose Your Unit</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paymentPlans.map((plan, idx) => {
          const imageUrl = typeof plan === 'string' ? plan : urlFor(plan).url()
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-4/5 rounded-[2rem] overflow-hidden border border-gray-100 shadow-uxl group cursor-pointer"
            >
              <Image 
                src={imageUrl} 
                alt={`Payment Plan ${idx + 1}`} 
                fill 
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div
                  className="bg-gold text-black font-black uppercase tracking-widest text-[10px] py-4 px-8 rounded-xl w-fit shadow-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                >
                  Shops Payment Plan
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
