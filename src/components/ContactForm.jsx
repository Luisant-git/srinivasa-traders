import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const ContactForm = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitStatus('success')
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
          setSubmitStatus('error')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const sectionStyle = {
    padding: '80px 20px',
    background: 'linear-gradient(to right,rgb(218, 230, 243), #fff)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#1f2937',
  }

  const headingStyle = {
    fontSize: '2.75rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#1e3a8a',
  }

  const textStyle = {
    color: '#555',
    marginBottom: '24px',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  }

  const orangeText = {
    color: '#f97316',
    fontWeight: 'bold',
  }

  const iconColor = '#1e3a8a'

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#374151',
    fontSize: '1rem',
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    outline: 'none',
    marginBottom: '20px',
    fontSize: '1rem',
  }

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#ffffff',
    padding: '16px',
    width: '100%',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
  }

  const successStyle = {
    padding: '12px',
    backgroundColor: '#dcfce7',
    color: '#166534',
    borderRadius: '8px',
    marginBottom: '20px',
  }

  const errorStyle = {
    padding: '12px',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    borderRadius: '8px',
    marginBottom: '20px',
  }

  const infoBlockStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '20px',
  }

  const layoutStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'flex-start',
  }

  const halfColumnStyle = {
    flex: '1 1 400px',
  }

  return (
    <section style={sectionStyle}>
      <div style={layoutStyle}>
        {/* Contact Info Section */}
        <div style={halfColumnStyle}>
          <h2 style={headingStyle}>Contact <span style={orangeText}>Us</span></h2>
          <p style={textStyle}>
            Have questions about our <span style={orangeText}>products</span> or <span style={orangeText}>services</span>? Fill out the form and our team will get back to you shortly.
          </p>

          <div>
            <div style={infoBlockStyle}>
              <FaMapMarkerAlt size={20} color={iconColor} />
              <div>
                <strong>Registered Office</strong>
                <p style={textStyle}>No 1 11th Cross Ponnagar, Trichy, Tamilnadu, India</p>
              </div>
            </div>

            <div style={infoBlockStyle}>
              <FaMapMarkerAlt size={20} color={iconColor} />
              <div>
                <strong>Works</strong>
                <p style={textStyle}>D-101, SIDCO Industrial Estate, Thuvakudi – Trichy – India</p>
              </div>
            </div>

            <div style={infoBlockStyle}>
              <FaPhone size={20} color={iconColor} />
              <p style={textStyle}>+91 XXXXXXXXXX</p>
            </div>

            <div style={infoBlockStyle}>
              <FaEnvelope size={20} color={iconColor} />
              <p style={textStyle}>info@srinivasatraders.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div style={halfColumnStyle}>
          <form ref={form} onSubmit={sendEmail} style={formContainerStyle}>
            {submitStatus === 'success' && <div style={successStyle}>Thank you! Your message has been sent.</div>}
            {submitStatus === 'error' && (
              <div style={errorStyle}>There was an error sending your message. Please try again.</div>
            )}

            <div>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input type="text" id="name" name="user_name" required style={inputStyle} />
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" id="email" name="user_email" required style={inputStyle} />
            </div>

            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input type="text" id="subject" name="subject" required style={inputStyle} />
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" name="message" rows="5" required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} style={buttonStyle}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
