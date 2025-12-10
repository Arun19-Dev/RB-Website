import React, { useState } from "react";
import apiService from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    urgency: "normal",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiService.submitContactForm(formData);
      setModalMessage("✅ Thank you for contacting us! We will get back to you soon.");
      setShowModal(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
        urgency: "normal",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setModalMessage(`❌ Error: ${error.message}. Please try again.`);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmergencyHelp = () => {
    setModalMessage("🚨 Emergency Help feature will be rolled out soon!");
    setShowModal(true);
  };

  const handleLiveChat = () => {
    setModalMessage("💬 Live Chat Support feature will be rolled out soon!");
    setShowModal(true);
  };

  const handleContactInfo = (action, title) => {
    let message = "";
    switch (action) {
      case "Call Now":
        message = `📞 ${title} feature will be rolled out soon!`;
        break;
      case "Send Email":
        message = `📧 ${title} feature will be rolled out soon!`;
        break;
      case "Get Directions":
        message = `📍 ${title} feature will be rolled out soon!`;
        break;
      default:
        message = "🚀 This feature will be rolled out soon!";
    }
    setModalMessage(message);
    setShowModal(true);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Emergency Hotline",
      detail: "+91 877 862 8539",
      description: "24/7 Emergency roadside assistance",
      action: "Call Now",
    },
    {
      icon: "💬",
      title: "Customer Service",
      detail: "+91 877 862 8540",
      description: "General inquiries and support",
      action: "Call Now",
    },
    {
      icon: "📧",
      title: "Email Support",
      detail: "help@roadbuddy.com",
      description: "Non-urgent matters and feedback",
      action: "Send Email",
    },
    {
      icon: "📍",
      title: "Main Office",
      detail: "9/336, Pasumpon Nagar, Vadugapalayam, Pollachi, Coimbatore - 642005",
      description: "Corporate headquarters",
      action: "Get Directions",
    },
  ];

  const serviceAreas = [
    {
      city: "Tiruppur",
      coverage: "100%",
      avgResponse: "8 mins",
      mechanics: 15,
    },
    {
      city: "Coimbatore",
      coverage: "98%",
      avgResponse: "12 mins",
      mechanics: 12,
    },
    {
      city: "Erode",
      coverage: "95%",
      avgResponse: "15 mins",
      mechanics: 10,
    },
    {
      city: "Salem",
      coverage: "92%",
      avgResponse: "18 mins",
      mechanics: 8,
    },
    {
      city: "Nilgires",
      coverage: "90%",
      avgResponse: "20 mins",
      mechanics: 7,
    },
    // {
    //   city: "Suburb",
    //   coverage: "85%",
    //   avgResponse: "25 mins",
    //   mechanics: 6,
    // },
  ];

  const faqItems = [
    {
      question: "How quickly can you respond to my emergency?",
      answer:
        "Our average response time is 15 minutes in most areas. Emergency services are prioritized and we dispatch the nearest available technician immediately upon receiving your call.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, cash, and mobile payments including Apple Pay and Google Pay. Payment is due upon completion of service.",
    },
    {
      question: "Do you provide services outside the city?",
      answer:
        "Yes, we provide services in surrounding suburbs and rural areas. Response times may be longer in remote locations, but we ensure professional service regardless of location.",
    },
    {
      question: "Are your mechanics certified?",
      answer:
        "All our mechanics are ASE certified with extensive experience in automotive repair. They undergo regular training to stay updated with the latest vehicle technologies.",
    },
    {
      question: "Do you offer any warranties on your services?",
      answer:
        "Yes, we provide a 90-day warranty on all mechanical repairs and a 30-day warranty on roadside assistance services. Customer satisfaction is our top priority.",
    },
  ];

  return (
    <div className="min-h-screen " id="Contact__Top">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Need immediate assistance or have questions? We're here to help
              you 24/7. Contact us for emergency roadside assistance or general
              inquiries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmergencyHelp}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚨 Emergency Help Now
              </button>
              <button
                onClick={handleLiveChat}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                💬 Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Information
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for any type of assistance you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">{info.icon}</div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {info.detail}
                  </p>

                  <p className="text-gray-600 mb-6">{info.description}</p>

                  <button
                    onClick={() => handleContactInfo(info.action, info.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    {info.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-heading">
                Send Us a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Roadside</option>
                      <option value="mechanic">Mobile Mechanic</option>
                      <option value="towing">Vehicle Towing</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="flex space-x-4">
                    {["normal", "urgent", "emergency"].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value={level}
                          checked={formData.urgency === level}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="capitalize text-gray-700">
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Describe your situation or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-heading">
                Service{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Areas
                </span>
              </h2>

              <div className="space-y-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {area.city}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          parseInt(area.coverage) >= 95
                            ? "bg-green-100 text-green-800"
                            : parseInt(area.coverage) >= 90
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {area.coverage} Coverage
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Avg Response:</span>
                        <span className="font-semibold text-blue-600 ml-2">
                          {area.avgResponse}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Mechanics:</span>
                        <span className="font-semibold text-blue-600 ml-2">
                          {area.mechanics}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our customer service team is standing by to help you with any
              questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="#Contact__Top">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Call Customer Service
              </button>
              </a> 
             <a href="#Contact__Top">
               <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                💬 Start Live Chat
              </button>
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl p-6">
              <div className="flex items-center justify-center">
                <div className="text-6xl mb-2">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                Coming Soon!
              </h3>
            </div>

            <div className="p-6 text-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {modalMessage}
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                Got it! 👍
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
