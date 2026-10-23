import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import molyPowderImg from '../assets/images/molybdenum-powder.jpg'
import './Products.css'

const industrialProducts = [
  {
    id: 1,
    targetProductId: 1,
    targetCategoryId: 1,
    title: 'Tungsten Powders',
    details: 'The WO3 is reduced in a controlled atmosphere in a continuous pusher type furnace and the tungsten metal is produced.',
    specifications: [
      'Average Particle size: 0.50 µ to 20 µfsss',
      'Appearance: Steel Gray Metal Powder',
      'Density: 19.3 gm/cc',
      'Melting Point: 3400°C',
      'Purity: 99.8%'
    ],
    imgSrc: 'https://tiimg.tistatic.com/fp/1/007/546/99-99-pure-tungsten-metal-powder-540.jpg'
  },
  {
    id: 2,
    targetProductId: 2,
    targetCategoryId: 1,
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
    targetProductId: 4,
    targetCategoryId: 2,
    title: 'Molybdenum Powders',
    details: 'High-quality molybdenum powders for various industrial applications.',
    specifications: [
      'Various particle sizes available',
      'High purity levels',
      'Used in electronics and metallurgy',
      'Custom specifications available'
    ],
    imgSrc: molyPowderImg
  },
  {
    id: 4,
    targetProductId: 7,
    targetCategoryId: 3,
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
]

const IndustrialProductsSection = () => {
  return (
    <section className="home-products-section">
      {/* Background Overlay */}
      <div className="home-products-overlay"></div>
      
      {/* Background Image */}
      <div className="home-products-bg"></div>
      
      <div className="home-products-container">
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="home-products-header"
        >
          <h2 className="home-products-title">Our Industrial Solutions</h2>
          <p className="home-products-subtitle">
            Premium special alloys and rare earth materials for demanding industrial applications
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="home-products-grid">
          {industrialProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="home-product-card"
            >
              <div className="home-product-card-image">
                <img 
                  src={product.imgSrc} 
                  alt={product.title} 
                  loading="lazy"
                />
                <div className="home-product-card-title-overlay">
                  <h3 className="home-product-card-title">{product.title}</h3>
                </div>
              </div>

              <div className="home-product-card-body">
                <p className="home-product-card-desc" title={product.details}>
                  {product.details}
                </p>

                <div className="home-product-specs-box">
                  <h4 className="home-product-specs-title">Key Specifications:</h4>
                  <ul className="home-product-specs-list">
                    {product.specifications.slice(0, 4).map((spec, i) => (
                      <li key={i} className="home-product-spec-item">
                        <svg className="home-product-spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/products" 
                  state={{ productId: product.targetProductId, categoryId: product.targetCategoryId }}
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
                  className="home-product-view-link"
                >
                  <span>View Details</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Explore CTA */}
        <div className="home-products-footer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/products" 
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
              className="home-products-cta-btn"
            >
              Explore All Products
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustrialProductsSection