'use client'

import { motion } from 'framer-motion'
import Container from '../shared/Container'
import { Shield, Sparkles, Gem, Users } from 'lucide-react'

const VALUES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "100% Integrity",
    desc: "We adhere strictly to legal frameworks and ethical construction practices, ensuring 100% security for your investment."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Modern Innovation",
    desc: "Implementing the latest building technologies and smart home solutions to enhance your quality of life."
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Uncompromising Quality",
    desc: "From premium materials to master-class finishing, we deliver nothing short of architectural perfection."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Centricity",
    desc: "Our projects are founded on the specific needs of our clients, delivering personalized value and long-term trust."
  }
]

export default function CoreValues() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-6 uppercase">Our Core Values</h2>
          <div className="h-1 w-20 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                {val.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase leading-tight">{val.title}</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
