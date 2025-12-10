import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    {
      number: "1,000+",
      label: "Happy Customers",
      icon: "👥",
    },
    {
      number: "500+",
      label: "Verified Mechanics",
      icon: "🔧",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "�",
    },
    {
      number: "15 min",
      label: "Average Response",
      icon: "⏰",
    },
  ];

  const values = [
    {
      icon: "👥",
      title: "Verified Professionals",
      description:
        "All mechanics and drivers are thoroughly verified and vetted for your safety",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description:
        "Your safety and security is our top priority in every service interaction",
    },
    {
      icon: "⚡",
      title: "24/7 Available",
      description:
        "Round the clock assistance whenever you need, wherever you are",
    },
    {
      icon: "⭐",
      title: "Service Excellence",
      description:
        "We partner exclusively with professionals who uphold our high standards",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "RoadBuddy Founded",
      description:
        "Started as a self-funded company with a vision to revolutionize roadside assistance",
    },
    {
      year: "2025",
      title: "First Beta Launch",
      description: "Launched our beta version with core emergency services",
    },
    {
      year: "2026",
      title: "Service Expansion",
      description:
        "Expanded to comprehensive automotive services and partner network",
    },
    {
      year: "Future",
      title: "Pan-India Coverage",
      description: "Planning to expand services across major cities in India",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">
              About <span className="text-yellow-400">RoadBuddy</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Your trusted travel partner committed to making every journey
              safer, smoother, and stress-free. We connect you with verified
              professionals whenever and wherever you need assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-heading">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Road Buddy – Travel Partner is your trusted companion on every
                journey, committed to making travel safer, smoother, and
                stress-free. Our platform connects individual users with
                reliable mechanics and professional drivers—whether you're on
                the road or planning ahead.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether your vehicle needs attention mid-journey or you require
                a professional driver for a few hours or an entire day, Road
                Buddy delivers prompt, dependable, and cost-effective
                solutions—easily accessible through our intuitive mobile app.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-heading">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To become the most trusted travel partner platform, known for
                connecting people with verified professionals who uphold our
                high standards of conduct, reliability, and service excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where no one has to worry about being
                stranded or traveling alone, knowing that RoadBuddy is just a
                tap away with verified professionals ready to assist.{" "}
                <strong>
                  With Road Buddy, you're never alone on the road.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single service vehicle to a full-service roadside
              assistance company
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 max-w-lg mx-auto lg:mx-0">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Experience the RoadBuddy Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who trust RoadBuddy as their
              reliable travel partner. Download our app and connect with
              verified professionals whenever you need assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
