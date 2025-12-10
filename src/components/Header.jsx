import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import ImageWithSkeleton from "./ImageWithSkeleton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/drivers", label: "For Drivers" },
    { path: "/mechanics", label: "For Mechanics" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      // If already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the new page
      navigate(path);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
            >
              <Phone size={14} />
              <span>+91 877 862 8539</span>
            </a>
            <a
              href="mailto:help@roadbuddy.com"
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
            >
              <Mail size={14} />
              <span>help@roadbuddy.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setShowPopup(true)}
              className="hover:text-blue-300 transition-colors cursor-pointer"
            >
              <span>24/7 Emergency Road Assistance</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex ms-5 items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-10 w-10">
                <ImageWithSkeleton
                  src="/RB_Logo.png"
                  alt="RoadBuddy Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-700">
                  RoadBuddy
                </h1>
                <p className="text-xs text-gray-600">Your Road Companion</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`font-medium transition-colors duration-200 relative group cursor-pointer ${
                    location.pathname === link.path
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-200 ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                    {location.pathname !== "/contact" ? (
       
   <button
    onClick={() => navigate("/contact")}
    className="btn-primary "
  >
    Get Help Now
  </button>
) : (
     <a href="#Contact__Top" className="">
          <button className="btn-primary">
            Get Help Now
          </button>
  </a>
)}

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      handleNavClick(link.path);
                      setIsMenuOpen(false);
                    }}
                    className={`font-medium py-2 px-4 rounded-md transition-colors text-left ${
                      location.pathname === link.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-primary mt-4"
                >
                  Get Help Now
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  This feature is under development. Keep joined to stay
                  updated.
                </p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
