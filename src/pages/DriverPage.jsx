import React, { useState } from "react";
import { Link } from "react-router-dom";
import DriverRegistrationForm from "../components/DriverRegistrationForm";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const DriverPage = () => {
  const [showDriverForm, setShowDriverForm] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
      title: "Comprehensive Insurance",
      description: "Per ride coverage for you and clients",
      details: "Fully insured at booking confirmation",
    },
    {
      icon: "💰",
      title: "Competitive Earnings",
      description: "₹99-129 per ride based on distance",
      details: "Direct payments with performance incentives",
    },
    {
      icon: "⏰",
      title: "Flexible Schedule",
      description: "Choose your available hours",
      details: "Work when it suits your lifestyle",
    },
    {
      icon: "🚗",
      title: "Vehicle Operation",
      description: "Drive clients' vehicles safely",
      details: "Professional transportation services",
    },
    {
      icon: "📍",
      title: "Local & Long Distance",
      description: "Drop-off and transport services",
      details: "From local trips to destination transfers",
    },
    {
      icon: "🎯",
      title: "Verified Clients",
      description: "Pre-screened and confirmed bookings",
      details: "Safe and reliable ride opportunities",
    },
  ];

  const requirements = [
    {
      category: "Personal Documents",
      items: [
        "Valid Aadhar Card (original required)",
        "PAN Card (optional but recommended)",
        "Passport size photograph",
        "Emergency contact information",
      ],
    },
    {
      category: "Driving License",
      items: [
        "Valid Indian driving license",
        "Minimum 1-2 years experience",
        "Clean driving record preferred",
        "License expiry date validation",
      ],
    },
    {
      category: "Documents Upload",
      items: [
        "Aadhar Card (front & back)",
        "Driving License (front & back)",
        "Recent passport size photo",
        "Police verification (optional)",
      ],
    },
    {
      category: "Payment Setup",
      items: [
        "Valid UPI ID for payments",
        "Bank account details",
        "IFSC code verification",
        "Account holder name confirmation",
      ],
    },
    {
      category: "Background Checks",
      items: [
        "Behavior and conduct verification",
        "Police complaint history review",
        "Team member suitability assessment",
        "Reference and background validation",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Aspiring Professional Driver",
      tenure: "Joining Soon",
      quote:
        "I'm excited to join RoadBuddy as a professional driver. The comprehensive insurance coverage and focus on safety give me confidence in providing reliable transportation services.",
      rating: 5,
    },
    {
      name: "Lakshmi Priya",
      role: "Future RoadBuddy Driver",
      tenure: "Pre-Launch Member",
      quote:
        "RoadBuddy's approach to professional transportation with insured rides appeals to me. I look forward to providing safe, reliable service once we launch.",
      rating: 5,
    },
    {
      name: "Suresh Babu",
      role: "Professional Driver Applicant",
      tenure: "Team Member",
      quote:
        "The rigorous background checks and professional standards show RoadBuddy's commitment to quality. I'm proud to be part of the founding driver team.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How does the insurance coverage work for drivers?",
      answer:
        "Every ride is fully insured for both the driver and client. RoadBuddy provides comprehensive coverage including personal accident insurance, vehicle damage protection, and liability coverage that activates automatically when you accept a booking.",
    },
    {
      question: "Do I need my own vehicle to join RoadBuddy?",
      answer:
        "No vehicle required! You'll professionally operate clients' vehicles for their transportation needs. This allows you to focus on driving while we handle all vehicle-related logistics and insurance.",
    },
    {
      question: "What are the requirements to become a RoadBuddy driver?",
      answer:
        "You need a valid Indian driving license (minimum 2 years), clean driving record, Aadhar card, PAN card, and must pass our comprehensive background verification. Professional demeanor and customer service skills are essential.",
    },
    {
      question: "Which areas in Tamil Nadu will I be working in?",
      answer:
        "We're initially launching in major Tamil Nadu cities including Chennai, Coimbatore, Madurai, Trichy, and other key districts. Drivers can specify their preferred service areas during registration.",
    },
    {
      question: "How much can I earn as a RoadBuddy driver?",
      answer:
        "Earnings range from ₹99-129 per ride depending on distance and duration. Additional incentives include bonuses for high ratings, frequent service, and peak hour availability. Direct UPI payments ensure quick settlements.",
    },
    {
      question: "What safety measures does RoadBuddy provide?",
      answer:
        "We prioritize safety with GPS tracking, emergency SOS buttons in all partnered vehicles, 24/7 support, and mandatory safety training. All rides are monitored and drivers undergo regular safety assessments.",
    },
    {
      question: "When will RoadBuddy officially launch?",
      answer:
        "We're currently building our founding driver team and preparing for launch in Tamil Nadu. Selected drivers will receive priority access and special founding member benefits when we go live.",
    },
    {
      question: "What happens if there's an accident or vehicle damage?",
      answer:
        "All incidents are covered by our comprehensive insurance. RoadBuddy handles all claims, vehicle repairs, and legal proceedings. Drivers are protected as long as they follow safety protocols and driving guidelines.",
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
                Drive Your{" "}
                <span className="text-yellow-400">Career Forward</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Join RoadBuddy&apos;s founding team of professional drivers and be
                ready to provide exceptional transportation services when we
                launch. Our streamlined application process gets you prepared
                quickly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("benefits")
                      ?.scrollIntoView({ behavior: "smooth" })
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
                  src="/DriverPage.gif"
                  alt="RoadBuddy Driver in Action"
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
              Why Work With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RoadBuddy
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a career path with
              excellent benefits and growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 h-full"
              >
                <div className="text-center h-full flex flex-col">
                  <div className="text-6xl mb-6">{benefit.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {benefit.description}
                  </p>

                  <p className="text-gray-600 flex-grow">{benefit.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Driver{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re looking for dedicated professionals who want to make a
              difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                  index === requirements.length - 1
                    ? "lg:col-start-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {req.category}
                  </h3>
                  <ul className="space-y-3 flex-grow">
                    {req.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-green-500 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Drivers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from drivers who are joining our founding team and preparing
              to provide exceptional transportation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic text-lg">
                  &quot;{testimonial.quote}&quot;
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

      {/* Driver App Download */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Download{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                RB Fleet
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Get the official RoadBuddy driver app to manage your rides, track
              earnings, and stay connected with our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="text-center mb-4 sm:mb-0 sm:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Download RoadBuddy App
                  </h3>
                  <p className="text-gray-600">
                    For customers seeking roadside assistance and transportation
                  </p>
                </div>
                <button
                  onClick={handleAppStoreClick}
                  className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <img
                    src="/app-store.svg"
                    alt="App Store"
                    className="w-8 h-8"
                  />
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

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">
                  Coming Soon:
                </span>{" "}
                Available for download when we launch our driver platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Popup */}
      {showAppPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              RB Fleet App – Coming Soon 🚀
            </h3>
            <p className="text-gray-700 mb-6">
              The RoadBuddy customer and driver apps will be available on the App
              Store and Google Play after our official launch. Enter your details
              in the application form to be notified as soon as the apps go live.
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

      {/* Application Form */}
      <section
        id="application-form"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Apply to Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete our comprehensive 5-step application process designed for
              Tamil Nadu drivers joining our founding team
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowDriverForm(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              🚗 Start Driver Application
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
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be among the first professional drivers to join RoadBuddy&apos;s
              founding team. Our comprehensive application process ensures we
              build a team of the highest quality drivers ready for launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <Link
                to="/contact"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
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

      {/* Driver Registration Form Modal */}
      <DriverRegistrationForm
        isOpen={showDriverForm}
        onClose={() => setShowDriverForm(false)}
      />
    </div>
  );
};

export default DriverPage;
