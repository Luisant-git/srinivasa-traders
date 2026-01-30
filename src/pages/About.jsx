import React from 'react'
import { motion } from 'framer-motion'
import AboutSection from '../components/AboutSection'
import Management from '../components/Management'

const About = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Srinivasa Traders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            A 40-year legacy of excellence in special alloys and rare earth materials trading.
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <Management />
    </div>
  )
}

export default About