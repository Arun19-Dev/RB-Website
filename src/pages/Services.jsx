import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [showAppPopup, setShowAppPopup] = useState(false);

  const services = [
    {
      icon: "🔧",
      title: "Mechanic",
      color: "#3B82F6",
    },
    {
      icon: "🚗",
      title: "Driver",
      color: "#7C3AED",
    },
    {
      icon: "🛞",
      title: "Tyre Care",
      color: "#F97316",
    },
    {
      icon: "🚛",
      title: "Tow Help",
      color: "#DC2626",
    },
    {
      icon: "🛋️",
      title: "Self Drive",
      color: "#EC4899",
    },
    {
      icon: "🔋",
      title: "Battery",
      color: "#10B981",
    },
    {
      icon: "⛽",
      title: "Fuel",
      color: "#F59E0B",
    },
    {
      icon: "⚕️",
      title: "Doctor on Call",
      color: "#6366F1",
    },
  ];

  const discoverItems = [
    {
      title: "Special Offers",
      icon: "🏷️",
      color: "#F59E0B",
    },
    {
      title: "Partner Services",
      icon: "🤝",
      color: "#8B5CF6",
    },
  ];

  const whyChoose = [
    {
      title: "24/7 Support",
      desc: "We are available round the clock for your roadside needs.",
      icon: "🛟",
      color: "#3B82F6",
    },
    {
      title: "Verified Professionals",
      desc: "All our partners are background checked and verified.",
      icon: "✅",
      color: "#10B981",
    },
    {
      title: "Fast Response",
      desc: "Get help within minutes, wherever you are.",
      icon: "⚡",
      color: "#F59E0B",
    },
  ];

  const handleAppStoreClick = () => {
    setShowAppPopup(true);
  };

  const closePopup = () => {
    setShowAppPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive roadside assistance and transportation solutions
              designed to keep you moving safely and efficiently.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">
                  Download RoadBuddy App
                </h3>
                <p className="text-white/80">
                  For customers seeking roadside assistance and transportation
                </p>
              </div>
              <button
                onClick={handleAppStoreClick}
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <img src="/app-store.svg" alt="App Store" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
              <button
                onClick={handleAppStoreClick}
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <img
                  src="/google-play.svg"
                  alt="Google Play"
                  className="w-8 h-8"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services available at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Discover
              </span>
            </h2>
          </div>

          <div className="flex justify-center space-x-8">
            {discoverItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center w-48 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RoadBuddy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RoadBuddy
              </span>
              ?
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Experience RoadBuddy?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of travelers who trust RoadBuddy for their roadside
              assistance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Launch Soon Popup */}
      {showAppPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              App Launch Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you the best RoadBuddy experience on
              mobile. Stay tuned for updates!
            </p>
            <button
              onClick={closePopup}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
