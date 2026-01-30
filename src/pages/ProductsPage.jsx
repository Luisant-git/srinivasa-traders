import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const productCategories = [
  {
    id: 1,
    name: 'Tungsten Products',
    products: [
      {
        id: 1,
        name: 'Tungsten Metal Powder',
        description: `Tungsten Metal Powder is produced by reducing tungsten trioxide (WO₃) in a controlled atmosphere using a continuous pusher-type furnace. This process results in a high-purity, steel-gray powder known for its exceptional density, high melting point, and superior thermal and electrical conductivity. 
      Available in a range of particle sizes (0.50 µ to 20 µ FSSS), it is ideal for manufacturing various tungsten-based products including sintered parts, diamond tools, tungsten-copper contacts, and grinding wheels. Tailored ordering options are available to suit specific industrial requirements.`,
        specs: [
          'Average Particle size: from 0.50 µ to 20 µfsss',
          'Appearance: Steel Gray Metal Powder',
          'Density: 19.3 gm/cc',
          'Melting Point: 3400°C (approx)',
          'Purity: 99.8%',
          'Specification of Grain size: FSSS (Microns)',
          'Ordering style: TMP 2-3, 3-5, 4-6, 6-8, 5-10, 8-15, 15-18 Microns'
        ],
        applications: [
          'To manufacture different Tungsten products for various applications',
          'Diamond segments for segmented saw',
          'Scape, grinding wheels',
          'Tungsten copper contacts',
          'Sintered tungsten carbide'
        ],
        image: 'https://www.3dnatives.com/en/wp-content/uploads/sites/2/2021/06/Cover_Wolfram.jpeg'
      },
      {
        id: 2,
  name: 'Tungsten Carbide Powder',
  description: `Tungsten Carbide Powder is produced by reacting high-purity tungsten metal powder with carbon through a controlled carburization process in a furnace. The result is a high-density, blackish-grey powder with excellent hardness and thermal resistance. 
With an average particle size range from 1 to 17 microns (FSSS), this powder is ideal for the production of sintered components and precision tools. It is widely used in the diamond tooling industry for manufacturing scapes, segments, and other wear-resistant applications. Custom grain sizes are available to suit specific manufacturing needs.`,
  specs: [
    'Average Particle size: from 1 µ to 17 µfsss',
    'Appearance: Blackish Grey Powder',
    'Density: 15.7 gm/cc',
    'Melting Point: 2900°C (approx.)',
    'Purity: 99.8%',
    'Total Carbon: (6.10 - 6.16)%',
    'Specification of Grain size: FSSS (Microns)',
    'Ordering style: TCP 2-3, 3-5, 4-6, 6-8, 5-10, 8-15, 15-20 Microns'
  ],
  applications: [
    'Mainly to manufacture sintered products',
    'Various tools for diamond industry such as scape, segments'
  ],
        image: 'https://theenterpriseworld.com/wp-content/uploads/2022/12/Tungsten-carbide-3-1024x683.jpg'
      },
      {
        id: 3,
        name: 'Tungsten Wear Parts',
        description: `Tungsten Wear Parts are engineered for extreme durability and performance in the most demanding mining and excavation environments. These parts offer exceptional wear resistance and are designed to extend the life of equipment used in heavy-duty operations. 
      Commonly utilized in bucket wheel excavators, tunnel boring machines, and rock drilling tools, they are available in custom shapes and sizes to meet specific industrial needs. Ideal for high-impact and abrasive applications in mining and drilling industries.`,
        specs: [
          'High wear resistance',
          'Custom shapes and sizes available',
          'For bucket wheel excavators',
          'Rock drilling inserts',
          'Mining buttons for borewell',
          'Tunnel boring inserts'
        ],
        applications: [
          'Mining equipment',
          'Excavation tools',
          'Drilling applications'
        ],
        image: 'https://www.retopz.com/wp-content/uploads/2024/12/Tungsten-carbide-wear-parts.jpeg'
      }
    ]
  },
  {
    id: 2,
    name: 'Molybdenum Products',
    products: [
      {
        id: 4,
        name: 'Molybdenum Powders',
        description: `Molybdenum Powders are high-purity materials designed for a wide range of industrial applications, particularly in electronics and metallurgy. These powders are available in various particle sizes to meet specific processing requirements and ensure optimal performance. 
      Their excellent thermal stability and high melting point make them ideal for producing high-temperature components and advanced alloy materials. Custom specifications can be tailored to suit specialized manufacturing needs.`,
        specs: [
          'Various particle sizes available',
          'High purity levels',
          'Used in electronics and metallurgy',
          'Custom specifications available'
        ],
        applications: [
          'Electronics industry',
          'Metallurgical applications',
          'High-temperature components'
        ],
        image: 'https://theodoregray.com/periodictable/Samples/042.18/s14s.JPG'
      },
      {
        id: 5,
        name: 'Molybdenum Sintered Products',
        description: `Molybdenum Sintered Products are engineered through advanced powder metallurgy techniques to deliver exceptional performance in high-temperature and high-stress environments. These components offer superior density, thermal conductivity, and a remarkably high melting point, making them ideal for use in demanding industrial applications. 
      They are widely utilized in furnace construction, glass melting, and the semiconductor industry. Custom shapes and sizes are available to meet specific operational requirements.`,
        specs: [
          'High density',
          'Excellent thermal conductivity',
          'High melting point',
          'Custom shapes available'
        ],
        applications: [
          'Furnace components',
          'Glass melting electrodes',
          'Semiconductor industry'
        ],
        image: 'https://www.aemmetal.com/fup/210610/1-210610111125445.jpg'
      },
      {
        id: 6,
        name: 'Molybdenum Wires',
        description: `Molybdenum Wires are precision-engineered for high-performance industrial applications where durability, conductivity, and heat resistance are critical. Manufactured to meet stringent quality standards, these wires offer excellent tensile strength and stability even under extreme temperatures. 
      They are commonly used in lighting, electronics, and heating industries for components such as light bulb filaments, electron tubes, and heating elements. Available in a variety of diameters to suit specific technical needs.`,
        specs: [
          'Various diameters available',
          'High tensile strength',
          'Excellent electrical conductivity',
          'High temperature resistance'
        ],
        applications: [
          'Light bulb filaments',
          'Electron tubes',
          'Heating elements'
        ],
        image: 'https://www.smalloys.com/wp-content/webp-express/webp-images/uploads/2021/09/wire-banner.jpg.webp'
      }
    ]
  },
  {
    id: 3,
    name: 'Other Products',
    products: [
      {
        id: 7,
        name: 'Vanadium Aluminum Pellets',
        description: `Vanadium Aluminum Pellets are specialized alloy materials designed for advanced foundry and metallurgical applications. These high-purity pellets ensure precise composition control and uniform size distribution, making them ideal for critical manufacturing processes. 
      They are widely used in aerospace and automotive industries due to their exceptional strength and performance characteristics. Custom formulations are also available to meet specific technical requirements.`,
        specs: [
          'Precise composition control',
          'Uniform size distribution',
          'Used in aerospace and automotive industries',
          'Custom formulations available'
        ],
        applications: [
          'Aerospace components',
          'Automotive parts',
          'High-strength alloys'
        ],
        image: 'https://image.made-in-china.com/2f0j00rlybanNREoqi/Aluminum-Pellets-APP-512-Sputtering-Target-High-Purity-99-999-in-Stock.webp'
      },
      {
        id: 8,
        name: 'Cobalt Cathodes',
        description: `Cobalt Cathodes are high-purity metal products produced through an electrolytic refining process, ensuring consistent quality and exceptional chemical purity. These cathodes are widely used in demanding industrial sectors including battery manufacturing, aerospace, and chemical processing. 
      Their reliability and versatility make them essential for producing lithium-ion batteries, superalloys, and catalytic materials. Available in various sizes to meet specific application requirements.`,
        specs: [
          'High purity levels',
          'Consistent quality',
          'Various sizes available',
          'Electrolytic process'
        ],
        applications: [
          'Battery production',
          'Superalloys',
          'Catalysts'
        ],
        image: 'https://res.cloudinary.com/benchmarkminerals/images/f_auto,q_auto,w_700,h_400,c_fill,g_auto/v1672357264/www-production/Glencore-Refined-Nickel-at-the-Nikkelverk-Refinery-Norway1/Glencore-Refined-Nickel-at-the-Nikkelverk-Refinery-Norway1.jpg?_i=AA'
      }
    ]
  }
]

const IndustrialProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0])
  const [activeProduct, setActiveProduct] = useState(productCategories[0].products[0])

  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}
          >
            Our Industrial Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              maxWidth: '48rem',
              margin: '0 auto',
              opacity: 0.9
            }}
          >
            High-quality special alloys and rare earth materials for industrial applications
          </motion.p>
        </div>
        {/* Background Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://agmetalminer.com/wp-content/uploads/2025/09/RareEarths.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'zoomInOut 30s   ease-in-out infinite'
        }}></div>
      </section>

      {/* Products Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            '@media (min-width: 1024px)': {
              flexDirection: 'row'
            }
          }}>
            {/* Categories Sidebar */}
            <div style={{
              width: '100%',
              '@media (min-width: 1024px)': {
                width: '25%'
              }
            }}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                position: 'sticky',
                top: '7rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid #e2e8f0'
                }}>Product Categories</h3>
                <ul style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {productCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(category)
                          setActiveProduct(category.products[0])
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.5rem',
                          transition: 'all 0.3s ease',
                          backgroundColor: activeCategory.id === category.id ? '#1e40af' : 'transparent',
                          color: activeCategory.id === category.id ? '#ffffff' : '#334155',
                          fontWeight: activeCategory.id === category.id ? '600' : '500',
                          border: 'none',
                          cursor: 'pointer',
                          ':hover': {
                            backgroundColor: activeCategory.id !== category.id ? '#f1f5f9' : undefined
                          }
                        }}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Content */}
            <div style={{
              width: '100%',
              '@media (min-width: 1024px)': {
                width: '75%'
              }
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #e2e8f0'
                }}>{activeCategory.name}</h2>
                
                {/* Product Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  '@media (min-width: 768px)': {
                    gridTemplateColumns: 'repeat(2, 1fr)'
                  }
                }}>
                  {activeCategory.products.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setActiveProduct(product)}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '0.75rem',
                        border: '1px solid',
                        transition: 'all 0.3s ease',
                        borderColor: activeProduct.id === product.id ? '#1e40af' : '#e2e8f0',
                        backgroundColor: activeProduct.id === product.id ? '#eff6ff' : '#ffffff',
                        boxShadow: activeProduct.id === product.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                        overflow: 'hidden',
                        ':hover': {
                          borderColor: '#93c5fd',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }
                      }}
                    >
                      <div style={{
                        height: '180px',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            ':hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                      </div>
                      <div style={{
                        padding: '1.5rem'
                      }}>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          color: '#1e293b',
                          marginBottom: '0.5rem'
                        }}>{product.name}</h3>
                        <p style={{
                          color: '#64748b',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: '3em'
                        }}>{product.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Product Detail */}
              {activeProduct && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '2rem',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    '@media (min-width: 768px)': {
                      flexDirection: 'row'
                    }
                  }}>
                    <div style={{
                      flex: 1,
                      '@media (min-width: 768px)': {
                        flex: '0 0 40%'
                      }
                    }}>
                      <div style={{
                        height: '300px',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}>
                        <img 
                          src={activeProduct.image} 
                          alt={activeProduct.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>
                    <div style={{
                      flex: 1
                    }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        marginBottom: '1rem'
                      }}>{activeProduct.name}</h3>
                      <p style={{
                        color: '#475569',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                      }}>{activeProduct.description}</p>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '2rem',
                        '@media (min-width: 768px)': {
                          gridTemplateColumns: 'repeat(2, 1fr)'
                        }
                      }}>
                        <div>
                          <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#1e293b',
                            marginBottom: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <svg style={{
                              width: '1.25rem',
                              height: '1.25rem',
                              color: '#1e40af'
                            }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Specifications
                          </h4>
                          <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}>
                            {activeProduct.specs.map((spec, index) => (
                              <li key={index} style={{
                                display: 'flex',
                                alignItems: 'flex-start'
                              }}>
                                <svg style={{
                                  width: '1.25rem',
                                  height: '1.25rem',
                                  color: '#2563eb',
                                  marginTop: '0.125rem',
                                  marginRight: '0.5rem',
                                  flexShrink: 0
                                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span style={{ color: '#475569' }}>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#1e293b',
                            marginBottom: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <svg style={{
                              width: '1.25rem',
                              height: '1.25rem',
                              color: '#1e40af'
                            }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Applications
                          </h4>
                          <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}>
                            {activeProduct.applications.map((app, index) => (
                              <li key={index} style={{
                                display: 'flex',
                                alignItems: 'flex-start'
                              }}>
                                <svg style={{
                                  width: '1.25rem',
                                  height: '1.25rem',
                                  color: '#2563eb',
                                  marginTop: '0.125rem',
                                  marginRight: '0.5rem',
                                  flexShrink: 0
                                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span style={{ color: '#475569' }}>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: '2rem' }}>
                        <motion.a 
                          href="/contact" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1e40af',
                            color: '#ffffff',
                            fontWeight: '600',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Inquire About This Product
                          <svg style={{
                            width: '1rem',
                            height: '1rem',
                            marginLeft: '0.5rem',
                            transition: 'transform 0.3s ease'
                          }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default IndustrialProductsPage