import React from 'react';

const Management = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#0f172a', // dark navy
    color: 'white',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: 'orange',
    marginBottom: '3rem',
    textAlign: 'center',
    maxWidth: '700px',
    marginInline: 'auto',
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    textAlign: 'center',
  };

  const avatarStyle = {
    width: '6rem',
    height: '6rem',
    margin: '0 auto 1.5rem',
    borderRadius: '50%',
    backgroundColor: '#475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const smallText = {
    color: '#94a3b8',
    marginBottom: '0.75rem',
    fontSize: '0.9rem',
  };

  const highlightSection = {
    marginTop: '4rem',
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '1rem',
    color: 'white',
  };

  const statGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  };

  const statBox = {
    backgroundColor: '#334155',
    padding: '1rem',
    borderRadius: '0.75rem',
  };

  const statNumber = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'orange',
  };

  const statLabel = {
    color: '#cbd5e1',
    fontSize: '0.9rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Management</h2>
        <p style={subtitleStyle}>
          A team of experienced professionals with deep domain expertise.
        </p>

        <div style={cardGridStyle}>
          {/* Managing Director */}
          <div style={cardStyle}>
            <div style={avatarStyle}>
              <svg width="40" height="40" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Managing Director</h3>
            <p style={smallText}>40+ years of experience in special alloys trading</p>
            <p>Leads the company with a vision for quality and innovation in material supply.</p>
          </div>

          {/* Technical Director */}
          <div style={cardStyle}>
            <div style={avatarStyle}>
              <svg width="40" height="40" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Technical Director</h3>
            <p style={smallText}>Materials science expert</p>
            <p>Oversees product quality, specifications, and technical customer support.</p>
          </div>

          {/* Operations Head */}
          <div style={cardStyle}>
            <div style={avatarStyle}>
              <svg width="40" height="40" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Operations Head</h3>
            <p style={smallText}>Logistics and supply chain specialist</p>
            <p>Manages procurement, inventory, and international shipments.</p>
          </div>
        </div>

        <div style={highlightSection}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Workforce</h3>
          <p>
            The company is managed by a team of experienced professionals with deep domain
            expertise and knowledge across departments. The workforce is trained to procure as per
            approved standards and specifications.
          </p>

          <div style={statGrid}>
            <div style={statBox}>
              <p style={statNumber}>40+</p>
              <p style={statLabel}>Years Experience</p>
            </div>
            <div style={statBox}>
              <p style={statNumber}>4</p>
              <p style={statLabel}>Countries Sourced</p>
            </div>
            <div style={statBox}>
              <p style={statNumber}>100+</p>
              <p style={statLabel}>Clients Served</p>
            </div>
            <div style={statBox}>
              <p style={statNumber}>ISO</p>
              <p style={statLabel}>Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
