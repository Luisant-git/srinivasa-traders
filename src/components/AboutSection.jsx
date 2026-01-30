import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      style={{
        padding: '6rem 1rem',
        backgroundColor: '#f1f5f9', // Same as Hero section background
        color: '#1e293b',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '3rem',
        }}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              color: '#1e3a8a',
              marginBottom: '0.5rem',
            }}
          >
            About Srinivasa Traders
            <span
              style={{
                content: '""',
                position: 'absolute',
                bottom: '-0.5rem',
                left: 0,
                width: '3rem',
                height: '0.25rem',
                backgroundColor: '#f59e0b',
                borderRadius: '4px',
              }}
            />
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#475569',
            }}
          >
            Srinivasa Traders has been a cornerstone in India's import-export industry for over 40 years. Our focus lies
            in supplying premium-grade special alloys and rare earth materials to foundries and industrial giants across
            the country.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#475569',
            }}
          >
            Driven by innovation and a deep understanding of metallurgy, we pride ourselves on delivering high-quality
            materials, backed by rigorous testing and a legacy of trust.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Feature text="Internationally certified materials, tested and approved globally" />
            <Feature text="Sourcing partnerships with USA, Japan, Vietnam, and China" />
            <Feature text="A legacy of consistent quality and timely deliveries" />
          </div>

          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              width: 'fit-content',
              marginTop: '1.5rem',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            Explore Our Products →
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: 1,
            borderRadius: '1rem',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          }}
        >
         <img
  src="https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1703574258-normal-are-rare-earth-metals-important.png"
  alt="Factory Interior"
  style={{
    width: '100vw',       // Full viewport width
    height: '40vh',       // Large height to give it a landscape feel
    objectFit: 'cover',   // Ensures image covers the area without distortion
    display: 'block',
    margin: 0,
    padding: 0,
  }}
/>

          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '1.5rem',
              backgroundColor: '#f59e0b',
              color: '#1e293b',
              padding: '1rem 1.5rem',
              borderRadius: '0.75rem',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            40+ Years Strong
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Feature = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
    <div
      style={{
        backgroundColor: '#fef3c7',
        color: '#d97706',
        borderRadius: '9999px',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg
        style={{ width: '1.25rem', height: '1.25rem' }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <p
      style={{
        margin: 0,
        fontSize: '1rem',
        color: '#334155',
        fontWeight: '500',
      }}
    >
      {text}
    </p>
  </div>
)

export default About
