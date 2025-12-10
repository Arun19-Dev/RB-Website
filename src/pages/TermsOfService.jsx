import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using RoadBuddy's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: '2. Service Description',
      content: `RoadBuddy is a platform that connects users with certified mechanics and professional drivers for roadside assistance and transportation services. We act as an intermediary and do not directly provide mechanical or driving services.`
    },
    {
      title: '3. User Responsibilities',
      content: `Users must:
      • Provide accurate and complete information during registration
      • Maintain the confidentiality of their account credentials
      • Use the service only for lawful purposes
      • Treat service providers with respect and professionalism
      • Pay all applicable fees in a timely manner`
    },
    {
      title: '4. Service Provider Requirements',
      content: `Mechanics and drivers must:
      • Possess valid licenses and certifications
      • Maintain appropriate insurance coverage
      • Provide professional and quality service
      • Follow all safety protocols and regulations
      • Complete background verification processes`
    },
    {
      title: '5. Payment Terms',
      content: `• All fees are clearly displayed before service confirmation
      • Payment must be made through approved methods on our platform
      • Refunds are subject to our refund policy
      • Service providers receive payment after service completion and verification
      • RoadBuddy charges a platform commission for connecting users with service providers`
    },
    {
      title: '6. Cancellation Policy',
      content: `• Users may cancel requests before service provider assignment without penalty
      • Cancellations after assignment may incur fees
      • Service providers must honor confirmed bookings or face penalties
      • Emergency cancellations will be reviewed on a case-by-case basis`
    },
    {
      title: '7. Liability and Insurance',
      content: `• RoadBuddy provides insurance coverage for services booked through our platform
      • Coverage details are specified in individual service agreements
      • Users and service providers must report incidents immediately
      • RoadBuddy is not liable for services performed outside our platform
      • Maximum liability is limited to the service fee paid`
    },
    {
      title: '8. Privacy and Data Protection',
      content: `• We collect and process personal data as described in our Privacy Policy
      • User data is protected with industry-standard security measures
      • Data is shared with service providers only as necessary for service delivery
      • Users have rights to access, modify, and delete their personal information`
    },
    {
      title: '9. Intellectual Property',
      content: `• All content, trademarks, and intellectual property on RoadBuddy belong to us
      • Users may not reproduce, distribute, or create derivative works without permission
      • Service providers retain rights to their professional credentials and certifications
      • User-generated content may be used for platform improvement and marketing`
    },
    {
      title: '10. Dispute Resolution',
      content: `• Disputes should first be reported through our platform
      • We provide mediation services for user-provider conflicts
      • Unresolved disputes may be subject to arbitration
      • Legal jurisdiction is Tamil Nadu, India
      • Users agree to attempt good-faith resolution before legal action`
    },
    {
      title: '11. Service Modifications',
      content: `• RoadBuddy reserves the right to modify or discontinue services
      • Users will be notified of significant changes
      • Continued use after changes constitutes acceptance
      • We may update pricing with reasonable notice`
    },
    {
      title: '12. Account Termination',
      content: `• We may suspend or terminate accounts for violations of these terms
      • Users may close their accounts at any time
      • Outstanding payments must be settled before account closure
      • Terminated users may not create new accounts without permission`
    },
    {
      title: '13. Prohibited Activities',
      content: `Users must not:
      • Engage in fraudulent activities
      • Harass or threaten service providers or other users
      • Attempt to circumvent platform fees
      • Use the service for illegal purposes
      • Interfere with platform operations or security`
    },
    {
      title: '14. Force Majeure',
      content: `RoadBuddy is not liable for service delays or failures due to circumstances beyond our control, including natural disasters, strikes, government actions, or technical failures.`
    },
    {
      title: '15. Contact Information',
      content: `For questions about these Terms of Service:
      • Email: help@roadbuddy.com
      • Phone: +91 877 862 8539
      • Address: 9/336, Pasumpon Nagar, Vadugapalayam, Pollachi, Coimbatore - 642005`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <FileText size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="text-yellow-400">Service</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using RoadBuddy services
            </p>
            <p className="text-sm opacity-75">
              Last Updated: December 10, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">
                Important Notice
              </h3>
              <p className="text-yellow-800">
                By using RoadBuddy's platform and services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms, you should not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {section.title.replace(/^\d+\.\s/, '')}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-11">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Highlights
            </h2>
            <p className="text-gray-600">
              Important points to remember
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Your Safety First
              </h3>
              <p className="text-gray-600 text-center">
                All service providers undergo background verification and are fully insured for your protection.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Fair Practices
              </h3>
              <p className="text-gray-600 text-center">
                Transparent pricing, clear policies, and fair treatment for all users and service providers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Your Rights
              </h3>
              <p className="text-gray-600 text-center">
                You have the right to quality service, privacy protection, and fair dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Agreement Acknowledgment
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            By continuing to use RoadBuddy's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and RoadBuddy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/report-issue"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
