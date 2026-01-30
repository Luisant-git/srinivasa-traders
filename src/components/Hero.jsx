import React from 'react'
import { motion } from 'framer-motion'
import backgroundImage from '../assets/images/background.jpeg';
const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111827',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10
      }}></div>
      
      {/* Background Image */}
      <div style={{
         position: 'absolute',
         inset: 0,
         backgroundImage: `url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         animation: 'zoomInOut 30s ease-in-out infinite'
      }}></div>
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        textAlign: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            <span style={{ color: '#f59e0b' }}>Step up</span> in value.<br />
            <span style={{ color: '#f59e0b' }}>Step down</span> in cost.
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            marginBottom: '2rem',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: 0.9
          }}>
            Specializing in special alloys and rare earth materials for over 40 years.
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <a 
              href="/products" 
              style={{
                backgroundColor: '#f59e0b',
                color: '#111827',
                fontWeight: 700,
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 300ms',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d97706';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f59e0b';
              }}
            >
              Our Products
            </a>
            
            <a 
              href="/contact" 
              style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                fontWeight: 700,
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 300ms'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Inline style tag for animations */}
      <style>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
            line-height: 1;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          
          .hero-cta-container {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero