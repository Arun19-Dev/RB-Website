import React from "react";
import { Link } from "react-router-dom";

const SimpleHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-400 font-semibold mb-6">
                <span>🌟 Travel Partner</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-heading">
                On or Off the road,
                <span className="block text-yellow-400">you're never alone</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl mb-4 font-semibold text-yellow-300">
                Your Buddy Is Just A Tap Away.
              </p>
              
              <p className="text-xl lg:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl">
                Road Buddy – Travel Partner is your trusted companion on every
                journey, committed to making travel safer, smoother, and
                stress-free. Connect with reliable mechanics and professional drivers
                through our intuitive mobile app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>📞 Get Help Now</span>
                  <span>→</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400">📱</span>
                  </div>
                  <div>
                    <span className="font-semibold">Easy Mobile App</span>
                    <p className="text-gray-300 text-xs">Download & Connect</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400">👥</span>
                  </div>
                  <div>
                    <span className="font-semibold">Verified Professionals</span>
                    <p className="text-gray-300 text-xs">Licensed & Insured</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400">🛡️</span>
                  </div>
                  <div>
                    <span className="font-semibold">Safe & Reliable</span>
                    <p className="text-gray-300 text-xs">24/7 Fast Response</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image/GIF - Enhanced Size */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/RB Files/HomePage.gif"
                  alt="RoadBuddy Services in Action"
                  className="w-full max-w-2xl rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                
                {/* Floating service cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🔧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Quick Mechanic</h4>
                      <p className="text-gray-600 text-xs">Available 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Professional Driver</h4>
                      <p className="text-gray-600 text-xs">Verified & Trusted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold mb-4">
              <span>Our Professional Services</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
              Connect with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you need a skilled mechanic or a professional driver, 
              our verified experts are ready to assist you anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mechanics Service */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-8 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-4xl">�</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Expert Mechanics
                </h3>
                <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                  Professional automotive mechanics available 24/7 for all your vehicle 
                  repair and maintenance needs. From roadside assistance to complex repairs.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Emergency Roadside Repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Regular Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Diagnostic Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Mobile Workshop</span>
                  </div>
                </div>
                
                <Link 
                  to="/mechanics" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Find Mechanic</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Drivers Service */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-2xl mb-8 mx-auto group-hover:bg-yellow-200 transition-colors duration-300">
                  <span className="text-4xl">🚗</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Professional Drivers
                </h3>
                <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                  Certified and experienced drivers ready to help with vehicle 
                  transportation, emergency driving, and safe journey assistance.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Emergency Transportation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Vehicle Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Long Distance Travel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Safe Journey Support</span>
                  </div>
                </div>
                
                <Link 
                  to="/drivers" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Find Driver</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">15-min Response</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Professional Mechanics
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Certified mechanics for repairs, maintenance, and diagnostics
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Certified Experts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Mobile Service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Quality Guaranteed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Insurance & Protection
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive coverage and protection for all our services
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Fully Insured</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Damage Protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Peace of Mind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Need Help Right Now?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait when you're in trouble. Our team is standing by 24/7 to
              provide immediate assistance wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Call Now: (555) 123-4567
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleHome;
