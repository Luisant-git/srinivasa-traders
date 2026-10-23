import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import molyPowderImg from '../assets/images/molybdenum-powder.jpg'
import './ProductsPage.css'

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
        image: 'https://tiimg.tistatic.com/fp/1/007/546/99-99-pure-tungsten-metal-powder-540.jpg'
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
        image: 'https://www.reekecarbide.com/d/images/Tungsten-Carbide-Wear-Parts/special-shape-1.jpg'
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
        image: molyPowderImg
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
        image: 'https://cdn.plansee-group.com/is/image/planseemedia/Halbzeuge_Staebe?dynamic=true&hei=800&wid=1600&fit=crop,1&fmt=jpg&qlt=80'
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IZ4os9Gs_cSvT044k3anymj3J2X1INE6eFADF38pbvOcLYnX4yItIN8&s=10'
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
        image: 'https://highpurityaluminum.com/cdn/shop/products/Pellets.jpg?v=1614782180'
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
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(productCategories[0])
  const [activeProduct, setActiveProduct] = useState(productCategories[0].products[0])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    if (location.state?.productId) {
      for (const cat of productCategories) {
        const prod = cat.products.find(p => p.id === location.state.productId)
        if (prod) {
          setActiveCategory(cat)
          setActiveProduct(prod)
          break
        }
      }
    } else if (location.state?.categoryId) {
      const cat = productCategories.find(c => c.id === location.state.categoryId)
      if (cat) {
        setActiveCategory(cat)
        setActiveProduct(cat.products[0])
      }
    }
  }, [location])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveProduct(category.products[0])
  }

  // Helper to extract key specs for quick tags
  const getHighlightBadges = (specs) => {
    return specs.filter(spec => spec.includes(':')).slice(0, 3).map(spec => {
      const [key, value] = spec.split(':').map(s => s.trim())
      return { key, value }
    })
  }

  return (
    <div className="products-page-container">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="products-hero-bg"></div>
        <div className="products-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="products-hero-title"
          >
            Our Industrial Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="products-hero-subtitle"
          >
            High-quality special alloys and rare earth materials for industrial applications
          </motion.p>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="products-main-section">
        <div className="products-content-wrapper">

          {/* User-Friendly Category Navigation Bar */}
          <div className="category-nav-wrapper">
            <div className="category-nav-pills" role="tablist">
              {productCategories.map((category) => {
                const isActive = activeCategory.id === category.id
                return (
                  <button
                    key={category.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category)}
                    className={`category-nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <span>{category.name}</span>
                    <span className="category-count-badge">
                      {category.products.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Master-Detail Layout */}
          <div className="master-detail-layout">

            {/* Master: Left Column (Product Selector) */}
            <aside className="product-selector-column">
              <div className="product-selector-card">
                <div className="product-selector-header">
                  <span className="product-selector-title">{activeCategory.name}</span>
                  <span className="product-selector-count">
                    {activeCategory.products.length} Products
                  </span>
                </div>

                <div className="product-selector-list" role="tablist" aria-orientation="vertical">
                  {activeCategory.products.map((product) => {
                    const isSelected = activeProduct.id === product.id
                    return (
                      <button
                        key={product.id}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveProduct(product)}
                        className={`product-item-btn ${isSelected ? 'active' : ''}`}
                      >
                        <div className="product-item-thumb">
                          <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                        <div className="product-item-info">
                          <div className="product-item-name">{product.name}</div>
                          <div className="product-item-sub">
                            {product.specs[0] || 'View Specifications'}
                          </div>
                        </div>
                        <svg 
                          className="product-item-chevron" 
                          width="18" 
                          height="18" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )
                  })}
                </div>
              </div>
            </aside>

            {/* Detail: Right Column (Selected Product Presentation) */}
            <main className="product-detail-column">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="product-detail-card"
                >
                  {/* Product Header */}
                  <div className="product-detail-header">
                    <div className="product-detail-header-left">
                      <span className="product-category-tag">{activeCategory.name}</span>
                      <h2 className="product-detail-title">{activeProduct.name}</h2>
                    </div>

                    <Link to="/contact" className="product-header-inquire-btn">
                      <span>Inquire About This Product</span>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Overview: Image + Description */}
                  <div className="product-overview-grid">
                    <div className="product-image-container">
                      <img 
                        src={activeProduct.image} 
                        alt={activeProduct.name} 
                        loading="eager"
                      />
                    </div>

                    <div className="product-overview-text">
                      <div>
                        <div className="product-description-label">Product Overview</div>
                        <p className="product-description-paragraph">
                          {activeProduct.description}
                        </p>
                      </div>

                      {/* Quick Highlight Pills */}
                      {getHighlightBadges(activeProduct.specs).length > 0 && (
                        <div className="product-highlight-pills">
                          {getHighlightBadges(activeProduct.specs).map((badge, idx) => (
                            <div key={idx} className="highlight-pill">
                              <span className="highlight-pill-bullet"></span>
                              <strong>{badge.key}:</strong> {badge.value}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Specifications & Applications Grid */}
                  <div className="product-details-grid">
                    {/* Specifications Section */}
                    <div className="section-box">
                      <h3 className="section-box-header">
                        <svg className="section-box-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Specifications
                      </h3>

                      <div className="specs-table">
                        {activeProduct.specs.map((spec, index) => {
                          if (spec.includes(':')) {
                            const [key, ...rest] = spec.split(':')
                            const value = rest.join(':').trim()
                            return (
                              <div key={index} className="spec-row">
                                <span className="spec-key">{key.trim()}</span>
                                <span className="spec-value">{value}</span>
                              </div>
                            )
                          }
                          return (
                            <div key={index} className="spec-bullet-item">
                              <svg className="spec-bullet-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{spec}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Applications Section */}
                    <div className="section-box">
                      <h3 className="section-box-header">
                        <svg className="section-box-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Applications
                      </h3>

                      <div className="applications-list">
                        {activeProduct.applications.map((app, index) => (
                          <div key={index} className="application-item">
                            <svg className="application-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Inquiry CTA Bar */}
                  <div className="product-bottom-cta">
                    <div className="product-bottom-cta-text">
                      <h4>Interested in {activeProduct.name}?</h4>
                      <p>We provide tailored particle sizes, custom bulk quantities, and direct factory pricing.</p>
                    </div>
                    <Link to="/contact" className="product-bottom-cta-btn">
                      Request Quotation
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

        </div>
      </section>
    </div>
  )
}

export default IndustrialProductsPage