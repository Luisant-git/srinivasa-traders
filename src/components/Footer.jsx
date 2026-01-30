import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#0f172a', // dark navy
    color: '#f1f5f9', // slate-100
    padding: '3rem 1rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const linkStyle = {
    color: '#facc15', // yellow-400
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const textMuted = {
    color: '#94a3b8', // slate-400
  };

  const socialIconStyle = {
    color: '#94a3b8',
    marginRight: '1rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const contactRow = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  };

  const bottomBar = {
    borderTop: '1px solid #1e293b', // slate-800
    marginTop: '2rem',
    paddingTop: '1rem',
    textAlign: 'center',
    color: '#64748b', // slate-500
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Section */}
        <div>
          <h3 style={headingStyle}>Srinivasa Traders</h3>
          <p style={{ marginBottom: '1rem', ...textMuted }}>
            A 40-year-old import-export company specializing in special alloys and rare earth materials, committed to innovative product design and quality.
          </p>
          <div style={{ display: 'flex' }}>
            <a href="#" style={socialIconStyle}><FaLinkedin size={20} /></a>
            <a href="#" style={socialIconStyle}><FaTwitter size={20} /></a>
            <a href="#" style={socialIconStyle}><FaFacebook size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2' }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About Us</a></li>
            <li><a href="/products" style={linkStyle}>Products</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={headingStyle}>Contact Us</h4>
          <div>
            <div style={contactRow}>
              <FaMapMarkerAlt />
              <div>
                <p>No 1 11th Cross Ponnagar</p>
                <p>Trichy, Tamilnadu, India</p>
              </div>
            </div>
            <div style={contactRow}>
              <FaPhone />
              <span>+91 XXXXXXXXXX</span>
            </div>
            <div style={contactRow}>
              <FaEnvelope />
              <span>info@srinivasatraders.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div style={bottomBar}>
        <p>&copy; {new Date().getFullYear()} Srinivasa Traders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
