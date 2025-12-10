import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Wrench,
  DollarSign,
  Clock,
  Shield,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Award,
  Tools,
  Car,
  Zap,
} from "lucide-react";

const MechanicPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    specialization: "",
    certification: "",
    availability: "",
    portfolio: "",
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Premium Rates",
      description: "Earn $40-$80 per hour based on expertise",
      highlight: "$40-80/hr",
    },
    {
      icon: Clock,
      title: "Choose Your Hours",
      description: "Set your own schedule and work-life balance",
      highlight: "Flexible",
    },
    {
      icon: Shield,
      title: "Full Protection",
      description: "Comprehensive insurance and liability coverage",
      highlight: "Protected",
    },
    {
      icon: Tools,
      title: "Tool Support",
      description: "Access to professional tools and equipment",
      highlight: "Equipped",
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Engine Diagnostics",
      description: "Advanced diagnostic services for all vehicle types",
    },
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Comprehensive repair services from brakes to transmission",
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Modern vehicle electrical and computer system repairs",
    },
    {
      icon: Tools,
      title: "Preventive Maintenance",
      description: "Oil changes, tune-ups, and routine maintenance services",
    },
  ];

  const requirements = [
    "ASE certification or equivalent",
    "Minimum 5 years experience",
    "Professional tool set",
    "Reliable transportation",
    "Valid business license",
    "Clean background check",
    "Professional appearance",
    "Customer service skills",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mechanic application submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Master Your
                <span className="block text-yellow-400">Craft</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Join RoadBuddy's elite network of certified mechanics and earn
                premium rates while showcasing your expertise to customers who
                value quality.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400">
                    $40-80
                  </div>
                  <div className="text-sm">Per Hour</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400">
                    5,000+
                  </div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("mechanic-form")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Our Team
                </button>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Us</span>
                </a>
              </div>
            </motion.div>

            {/* Hero GIF */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="/MechanicPage.gif"
                  alt="Professional Mechanic at Work"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Work with <span className="text-gradient">RoadBuddy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the premier network of automotive professionals and grow your
              business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto group-hover:bg-primary-600 transition-colors duration-300">
                  <benefit.icon className="h-10 w-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse range of automotive services to match your expertise and
              interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-gradient">Standards</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We maintain the highest standards to ensure quality service and
                professional opportunities for our certified mechanics.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Mechanic Success Metrics
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Average Hourly Rate
                    </span>
                    <span className="text-2xl font-bold text-primary-600">
                      $62.50
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Active Mechanics
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      1,200+
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Customer Rating
                    </span>
                    <div className="flex items-center space-x-2">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      <span className="text-2xl font-bold text-yellow-600">
                        4.95
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Jobs Completed
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      25K+
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Elite Mechanic Program</h3>
                </div>
                <p className="opacity-90 mb-4">
                  Top-performing mechanics earn bonus rates and priority job
                  assignments
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>20% bonus on premium jobs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Exclusive training programs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        id="mechanic-form"
        ref={formRef}
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-gradient">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600">
                Submit your application and start earning premium rates within
                48 hours
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select experience</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10-15">10-15 years</option>
                    <option value="15-20">15-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Specialization *
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select specialization</option>
                    <option value="engine">Engine Repair</option>
                    <option value="transmission">Transmission</option>
                    <option value="electrical">Electrical Systems</option>
                    <option value="brakes">Brake Systems</option>
                    <option value="general">General Repair</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certifications *
                  </label>
                  <input
                    type="text"
                    name="certification"
                    value={formData.certification}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="ASE, Manufacturer certifications, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select availability</option>
                  <option value="full-time">Full-time (40+ hours/week)</option>
                  <option value="part-time">
                    Part-time (20-40 hours/week)
                  </option>
                  <option value="weekends">Weekends only</option>
                  <option value="evenings">Evenings only</option>
                  <option value="flexible">Flexible schedule</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/Work Examples (Optional)
                </label>
                <textarea
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Describe your notable work, specializations, or provide links to examples..."
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <span>Submit Application</span>
                  <ArrowRight size={20} />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your application and get back to you within 24-48
                  hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MechanicPage;
