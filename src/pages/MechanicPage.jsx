import React, { useState } from "react";
import { Link } from "react-router-dom";
import MechanicRegistrationForm from "../components/MechanicRegistrationForm";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const MechanicPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showAppPopup, setShowAppPopup] = useState(false);

  const handleAppStoreClick = () => {
    setShowAppPopup(true);
  };

  const closePopup = () => {
    setShowAppPopup(false);
  };

  const benefits = [
    {
      icon: "🛡️",
      title: "Job Protection",
      description: "Insurance coverage for every service",
      details: "Full liability protection when working on client vehicles",
    },
    {
      icon: "💰",
      title: "Variable Earnings",
      description: "Pay based on service type and complexity",
      details: "₹150-300 per call - simple repairs to complex diagnostics",
    },
    {
      icon: "📱",
      title: "Flexible Schedule",
      description: "Choose when you want to work",
      details: "Accept jobs that fit your availability through our platform",
    },
    {
      icon: "📍",
      title: "Local Service Calls",
      description: "Work in your familiar areas",
      details: "Service customers in Tamil Nadu regions you know best",
    },
    {
      icon: "�",
      title: "Skill Development",
      description: "Access to latest diagnostic tools",
      details: "Training on new vehicle technologies and repair techniques",
    },
    {
      icon: "🎯",
      title: "Professional Growth",
      description: "Build your reputation and client base",
      details: "Quality ratings system helps you earn premium rates",
    },
  ];

  const requirements = [
    {
      category: "Personal & Workshop Details",
      items: [
        "Full name and workshop/business name",
        "Workshop type (two-wheeler, four-wheeler, or both)",
        "Contact number and email address",
        "Aadhar number and GST number (if available)",
        "Complete workshop address",
      ],
    },
    {
      category: "Work & Service Details",
      items: [
        "Years of experience (0-1, 2-5, 6-10, 11-15, 15+ years)",
        "Services offered (maintenance, repairs, electrical, etc.)",
        "Vehicle types (hatchbacks, sedan, SUV, luxury, commercial)",
        "Service hours and working days preferences",
        "24x7 availability and travel to customer location",
      ],
    },
    {
      category: "Document Upload",
      items: [
        "Passport size photo (clear image)",
        "Aadhar card (front & back sides)",
        "Mechanic certification (if available)",
        "Workshop photo (clear exterior/interior view)",
      ],
    },
    {
      category: "Payment Details",
      items: [
        "UPI ID or bank account number",
        "IFSC code for bank transfers",
        "Account holder name verification",
        "Payment method setup for earnings",
      ],
    },
    {
      category: "Registration & Declaration",
      items: [
        "₹99 registration fee payment",
        "Terms and conditions agreement",
        "e-Signature for application",
        "Professional service commitment",
      ],
    },
  ];

  const specializations = [
    "Engine Repair",
    "Transmission",
    "Brake Systems",
    "Electrical/Electronics",
    "Air Conditioning",
    "Suspension",
    "Hybrid/Electric Vehicles",
    "Diesel Engines",
  ];

  const certificationOptions = [
    "ASE A1 - Engine Repair",
    "ASE A2 - Automatic Transmission",
    "ASE A3 - Manual Drive Train",
    "ASE A4 - Suspension & Steering",
    "ASE A5 - Brakes",
    "ASE A6 - Electrical/Electronic",
    "ASE A7 - Heating & AC",
    "ASE A8 - Engine Performance",
    "State Inspection License",
    "Manufacturer Certifications",
  ];

  const testimonials = [
    {
      name: "Murugan S",
      role: "Senior Auto Mechanic",
      tenure: "Joining Soon",
      quote:
        "RoadBuddy-ல் join பண்ணுறதுக்கு excited ஆ இருக்கேன். Chennai-ல் customers-க்கு quality service கொடுக்க முடியும், அதுவும் good earnings-ம் இருக்கு. Insurance coverage-ம் நல்லா இருக்கு.",
      rating: 5,
    },
    {
      name: "Karthik Raj",
      role: "Automotive Technician",
      tenure: "Pre-Launch Member",
      quote:
        "15 வருஷமா mechanic work பண்றேன். RoadBuddy platform-ல் work flexible ஆ இருக்கு, earnings-ம் நல்லா இருக்கு. Coimbatore area-ல் customers-க்கு best service provide பண்ண ready ஆ இருக்கேன்.",
      rating: 5,
    },
    {
      name: "Ravi Shankar",
      role: "Mobile Mechanic Specialist",
      tenure: "Ready to Launch",
      quote:
        "Madurai-ல் mechanic shop வச்சு work பண்ணிட்டிருந்தேன். இப்ப RoadBuddy-ல் mobile service கொடுத்து ₹200-300 per service earn பண்ண முடியும். Technology support-ம் nalla இருக்கு.",
      rating: 5,
    },
  ];

  const serviceTypes = [
    {
      icon: "🔧",
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair",
      details: "Engine performance, diagnostics, timing, and major repairs",
    },
    {
      icon: "🛞",
      title: "Brake Systems",
      description: "Brake repair and maintenance",
      details: "Brake pads, rotors, calipers, and hydraulic systems",
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      description: "Modern vehicle electronics",
      details: "Battery, alternator, wiring, and electronic diagnostics",
    },
    {
      icon: "❄️",
      title: "AC & Climate",
      description: "HVAC system repair",
      details: "Air conditioning, heating, and climate control systems",
    },
    {
      icon: "🔄",
      title: "Transmission",
      description: "Automatic and manual transmission service",
      details: "Transmission repair, fluid changes, and diagnostics",
    },
    {
      icon: "🪜",
      title: "Suspension & Steering",
      description: "Alignment and suspension repair",
      details: "Shocks, struts, alignment, and steering components",
    },
    {
      icon: "🔋",
      title: "Battery & Electrical",
      description: "Battery testing and electrical repairs",
      details: "Battery replacement, charging systems, and electrical issues",
    },
    {
      icon: "🚗",
      title: "General Maintenance",
      description: "Oil changes, filters, and routine service",
      details: "Preventive maintenance, fluid changes, and inspections",
    },
  ];

  const faqs = [
    {
      question: "What documents do I need to apply?",
      answer:
        "You'll need a valid Aadhar Card, PAN Card, driving license, and recent passport-size photos. Background verification will be conducted during the application process.",
    },
    {
      question: "Do I need my own tools?",
      answer:
        "Yes, you must have all your own tools and equipment. RoadBuddy is a platform that connects you with customers - we don't provide tools, vehicles, or equipment. You're responsible for bringing everything needed to complete the service.",
    },
    {
      question: "What is the work schedule like?",
      answer:
        "You set your own schedule! Accept service requests that fit your availability through our app. Work as much or as little as you want.",
    },
    {
      question: "How much can I earn?",
      answer:
        "You earn ₹150-300 per service call based on complexity and type. RoadBuddy takes a small platform commission for connecting you with customers, and you keep the majority of the payment.",
    },
    {
      question: "What does RoadBuddy provide?",
      answer:
        "RoadBuddy provides the platform technology, customer connections, payment processing, and insurance coverage. We handle customer acquisition, booking system, and payment collection - you focus on providing quality service.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with GIF */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">
                Master Your <span className="text-yellow-400">Craft</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Join RoadBuddy's elite team of certified mechanics and take your
                automotive career to the next level with cutting-edge technology
                and great benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("application-form")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("benefits")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Benefits
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <ImageWithSkeleton
                  src="/MechanicPage.gif"
                  alt="RoadBuddy Mechanic at Work"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-yellow-400/50 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RoadBuddy
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network of skilled mechanics and start earning with
              flexible, well-paying service opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">{benefit.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {benefit.description}
                  </p>

                  <p className="text-gray-600">{benefit.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Service{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your areas of expertise and serve customers in your
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-sm text-blue-600">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Mechanic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for skilled professionals who take pride in their
              work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Mechanics Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from skilled mechanics across Tamil Nadu who are joining our
              founding team to provide quality automotive services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    With RoadBuddy: {testimonial.tenure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanic App Download */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Download{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RB Fix
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get the official RoadBuddy mechanic app to manage your service
              requests, track earnings, and stay connected with our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* App Store Button */}
              <button onClick={handleAppStoreClick} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center space-x-4 w-full">
                  <div className="bg-black rounded-xl p-3">
                    <img
                      src="/app-store.svg"
                      alt="App Store"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Download on the</div>
                    <div className="text-xl font-bold text-gray-900">
                      App Store
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">
                      RB Fix
                    </div>
                  </div>
                </div>
              </button>


      {/* App Popup */}
      {showAppPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              RB Fix App – Coming Soon 🚀
            </h3>
            <p className="text-gray-700 mb-6">
              The RoadBuddy mechanic app will be available soon on the App Store and
              Google Play. Complete your registration now to get early access.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  closePopup();
                  document
                    .getElementById("application-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Go to Application
              </button>
              <button
                onClick={closePopup}
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


              {/* Google Play Button */}
              <button onClick={handleAppStoreClick} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center space-x-4 w-full">
                  <div className="bg-black rounded-xl p-3">
                    <img
                      src="/google-play.svg"
                      alt="Google Play"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Get it on</div>
                    <div className="text-xl font-bold text-gray-900">
                      Google Play
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">
                      RB Fix
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">
                  Coming Soon:
                </span>{" "}
                Available for download when we launch our mechanic platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete our comprehensive 5-step application process designed for
              skilled mechanics joining our founding team
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              🔧 Start Mechanic Application
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Application takes approximately 10-15 minutes to complete
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about joining our mechanic team
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What documents do I need to apply?
              </h3>
              <p className="text-gray-600">
                You'll need your Aadhar card, PAN card (optional), recent photo,
                relevant certifications, and proof of experience. All documents
                can be uploaded during the application process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does the application process take?
              </h3>
              <p className="text-gray-600">
                The online application takes 10-15 minutes to complete. After
                submission, our team will review your application and contact
                you within 48-72 hours for the next steps.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are the earning opportunities?
              </h3>
              <p className="text-gray-600">
                Mechanics earn ₹150-300 per service call based on complexity and
                location. RoadBuddy takes a small platform commission for
                providing customer connections and payment processing, while you
                keep the majority of the service fee. Additional bonuses
                available for quality ratings.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need my own tools?
              </h3>
              <p className="text-gray-600">
                Yes, you must have all your own tools and equipment. RoadBuddy
                is a platform that connects you with customers - we don't
                provide tools, vehicles, or diagnostic equipment. You're
                responsible for bringing everything needed to complete the
                service professionally.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What does RoadBuddy provide?
              </h3>
              <p className="text-gray-600">
                RoadBuddy provides the platform technology, customer
                connections, payment processing, and insurance coverage. We
                handle customer acquisition, booking system, and payment
                collection - you focus on providing quality service with your
                own tools and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be among the first professional mechanics to join RoadBuddy's
              founding team. Our comprehensive application process ensures we
              build a team of the highest quality mechanics ready for launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <Link
                to="/contact"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
                }
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Have Questions?</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanic Registration Form Modal */}
      <MechanicRegistrationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
      
    </div>
  );
};

export default MechanicPage;
