import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "#111827" : "rgba(17, 24, 39, 0.8)", // dark bg
        boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
        padding: isScrolled ? "0.5rem 0" : "1rem 0",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo with Image */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: "0.75rem",
            }}
          >
            {/* Logo Image - Replace with your actual logo path */}
            <img
              src={logo}
              alt="Srinivasa Traders Logo"
              style={{
                height: isScrolled ? "40px" : "50px", // Adjust size when scrolled
                width: "auto",
                transition: "all 0.3s ease",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <span
                style={{
                  fontSize: isScrolled ? "20px" : "20px",
                  fontWeight: "550",
                  fontFamily: "Amiko, sans-serif",
                  color: "#ef782f",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                }}
              >
                SRINIVASA TRADERS
              </span>

              <span
                style={{
                  fontSize: "12px",
                  color: "#1e3a8a",
                  fontFamily: "Amiko, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                  marginTop: "2px",
                }}
              >
                Innovative Alloys, Trusted Quality
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                gap: "2rem",
              }}
            >
              {navLinks.map((link) => (
                <div key={link.name} style={{ position: "relative" }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: "none",
                      color:
                        location.pathname === link.path
                          ? "#f59e0b"
                          : hoveredLink === link.name
                          ? "#f59e0b"
                          : "#ffffff",
                      fontWeight: 500,
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      padding: "0.5rem 0",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </Link>
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeNav"
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#f59e0b",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#f59e0b",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1rem 0",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === link.path ? "#f59e0b" : "#ffffff",
                    fontWeight: 500,
                    fontSize: "1rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    backgroundColor:
                      location.pathname === link.path
                        ? "rgba(245, 158, 11, 0.1)"
                        : "transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
