import React from 'react'
import { motion } from 'framer-motion'

const industrialProducts = [

    {
        id: 1,
        title: 'Tungsten Powders',
        details: 'The WO3 is reduced in a controlled atmosphere in a continuous pusher type furnace and the tungsten metal is produced.',
        specifications: [
          'Average Particle size: 0.50 µ to 20 µfsss',
          'Appearance: Steel Gray Metal Powder',
          'Density: 19.3 gm/cc',
          'Melting Point: 3400°C',
          'Purity: 99.8%'
        ],
        imgSrc: 'https://www.3dnatives.com/en/wp-content/uploads/sites/2/2021/06/Cover_Wolfram.jpeg'
      },
      {
        id: 2,
        title: 'Tungsten Carbide Powder',
        details: 'The Tungsten Metal powder is converted to Tungsten Carbide (WC) by reaction with pure Carbon powder in furnace.',
        specifications: [
          'Average Particle size: 1 µ to 17 µfsss',
          'Appearance: Blackish Grey Powder',
          'Density: 15.7 gm/cc',
          'Melting Point: 2900°C',
          'Purity: 99.8%',
          'Total Carbon: (6.10 - 6.16)%'
        ],
        imgSrc: 'https://theenterpriseworld.com/wp-content/uploads/2022/12/Tungsten-carbide-3-1024x683.jpg'
      },
      {
        id: 3,
        title: 'Molybdenum Powders',
        details: 'High-quality molybdenum powders for various industrial applications.',
        specifications: [
          'Various particle sizes available',
          'High purity levels',
          'Used in electronics and metallurgy',
          'Custom specifications available'
        ],
        imgSrc: 'https://theodoregray.com/periodictable/Samples/042.18/s14s.JPG'
      },
      {
        id: 4,
        title: 'Vanadium Aluminum Pellets',
        details: 'Special alloy pellets for foundry and metallurgical applications.',
        specifications: [
          'Precise composition control',
          'Uniform size distribution',
          'Used in aerospace and automotive industries',
          'Custom formulations available'
        ],
        imgSrc: 'https://highpurityaluminum.com/cdn/shop/products/Pellets.jpg?v=1614782180'
      }
  // ... (keep your existing product data)
];

const IndustrialProductsSection = () => {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#111827',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10
      }}></div>
      
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'zoomInOut 30s ease-in-out infinite'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
        position: 'relative',
        zIndex: 20
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}
        >
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>Our Industrial Solutions</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Premium special alloys and rare earth materials for demanding industrial applications
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
          }
        }}>
          {industrialProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  borderColor: 'rgba(245, 158, 11, 0.5)'
                }
              }}
            >
              <div style={{
                height: '200px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={product.imgSrc} 
                  alt={product.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.8)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    margin: 0,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}>{product.title}</h3>
                </div>
              </div>
              <div style={{
                padding: '24px'
              }}>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '20px',
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}>{product.details}</p>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <h4 style={{
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '12px',
                    fontSize: '16px'
                  }}>Key Specifications:</h4>
                  <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    {product.specifications.map((spec, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <svg style={{
                          width: '16px',
                          height: '16px',
                          marginTop: '2px',
                          marginRight: '8px',
                          color: '#f59e0b',
                          flexShrink: 0
                        }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="/products" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#f59e0b',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none',
                    ':hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  View Details
                  <svg style={{
                    width: '16px',
                    height: '16px',
                    marginLeft: '8px',
                    transition: 'transform 0.3s ease'
                  }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <motion.a
            href="/products"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              backgroundColor: '#f59e0b',
              color: '#111827',
              fontWeight: '600',
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#d97706',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Explore All Products
          </motion.a>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}

export default IndustrialProductsSection