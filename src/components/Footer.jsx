import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import apiService from "../services/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
  Wrench,
  Users,
  Award,
} from "lucide-react";
import { toast } from "react-toastify";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const footerLinks = {
    services: [
      { label: "Emergency Roadside", path: "/services" },
      { label: "Vehicle Towing", path: "/services" },
      { label: "Flat Tire Service", path: "/services" },
      { label: "Battery Jump Start", path: "/services" },
      { label: "Lockout Service", path: "/services" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/about" },
      { label: "Careers", path: "/contact" },
      { label: "Blog", path: "/" },
      { label: "Press", path: "/" },
    ],
    support: [
      { label: "Help Center", path: "/contact" },
      { label: "Contact Us", path: "/contact" },
      { label: "Live Chat", path: "/" },
      { label: "Report Issue", path: "/report-issue" },
      { label: "Terms of Service", path: "/terms-of-service" },
    ],
  };

  const stats = [
    { icon: Car, value: "50K+", label: "Vehicles Helped" },
    { icon: Wrench, value: "1K+", label: "Certified Mechanics" },
    { icon: Users, value: "100K+", label: "Happy Customers" },
    { icon: Award, value: "24/7", label: "Available Service" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Stats Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/RB_Logo.png"
                alt="RoadBuddy Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">RoadBuddy</h3>
                <p className="text-gray-400 text-sm">Your Road Companion</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              RoadBuddy is your trusted partner for all road assistance needs.
              We connect you with certified mechanics and professional drivers
              to ensure you're never stranded on the road.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-primary-400" />
                <span>+91 877 862 8539</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-primary-400" />
                <span>help@roadbuddy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-primary-400" />
                <span>
                  9/336, Pasumpon Nagar, Vadugapalayam, Pollachi, Coimbatore -
                  642005
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/16nNJqofAy/"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://x.com/RoadbuddyTP?t=ixoLTzLdxfMGIDw7i_E2YQ&s=09"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/roadbuddy.travelpartner?igsh=aXBweWFnenN4NzVm"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/roadbuddytravelpartner"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className=" flex flex-wrap Footer__stay__part items-center space-x-4">
              <span className="text-gray-400">Stay updated:</span>
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!newsletterEmail) return;
                  
                  try {
                    await apiService.subscribeNewsletter(newsletterEmail);
                    setNewsletterStatus("success");
                    toast.success("Subscribed successfully!");
                    setNewsletterEmail("");
                    setTimeout(() => setNewsletterStatus(""), 2000);
                  } catch (error) {
                    setNewsletterStatus("error");
                    toast.error("Subscription failed. Please try again Later.");
                    setTimeout(() => setNewsletterStatus(""), 3000);
                  }
                }}
                className="flex"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-2 footer__input__stary bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-primary-400 text-white"
                />
                <button 
                  type="submit"
                  className={`px-6 py-2 rounded-r-md mx-auto footer__button__stary transition-colors duration-200 ${
                    newsletterStatus === 'success' ? 'bg-green-600' :
                    newsletterStatus === 'error' ? 'bg-red-600' :
                    'bg-primary-600 hover:bg-primary-700'
                  }`}
                >
                  {newsletterStatus === 'success' ? '✓ Subscribed' :
                   newsletterStatus === 'error' ? 'Failed' :
                   'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} RoadBuddy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/"
                className="text-gray-400 text-center hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 text-center hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-gray-400 text-center hover:text-primary-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer> 
  );
};

export default Footer;
