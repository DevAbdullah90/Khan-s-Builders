'use client'

import { motion } from 'framer-motion'
import Container from '../shared/Container'
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Leaf 
} from 'lucide-react'

const STRENGTHS = [
  {
    title: 'Quality Assurance',
    description: 'Premium materials and expert craftsmanship ensure lasting value in every project we undertake.',
    icon: ShieldCheck,
  },
  {
    title: 'Award-Winning Designs',
    description: 'Innovative architectural designs recognized for excellence and aesthetic appeal.',
    icon: Award,
  },
  {
    title: 'Customer First',
    description: 'Transparent communication and dedicated support throughout your property journey.',
    icon: Users,
  },
  {
    title: 'On-Time Delivery',
    description: 'Proven track record of completing projects within committed timelines.',
    icon: Clock,
  },
  {
    title: 'Strategic Locations',
    description: 'Prime locations carefully selected for maximum appreciation and convenience.',
    icon: MapPin,
  },
  {
    title: 'Sustainable Building',
    description: 'Eco-friendly construction practices for a greener, healthier future.',
    icon: Leaf,
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 rounded-full"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Core <span className="text-gold">Strengths</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Two decades of excellence in real estate development, delivering exceptional 
            value and trusted partnerships through our unwavering commitment to quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRENGTHS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors" />
              
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
