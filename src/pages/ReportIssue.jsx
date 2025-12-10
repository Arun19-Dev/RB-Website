import React, { useState } from 'react';
import { AlertCircle, Send, CheckCircle2 } from 'lucide-react';
import apiService from '../services/api';
import { toast } from 'react-toastify';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueType: '',
    priority: 'medium',
    subject: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const issueTypes = [
    'Technical Issue',
    'Service Quality',
    'Payment Problem',
    'Driver/Mechanic Behavior',
    'App/Website Bug',
    'Safety Concern',
    'Other',
  ];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Phone number must be exactly 10 digits';
        }
        break;

      case 'issueType':
        if (!value) {
          error = 'Please select an issue type';
        }
        break;

      case 'subject':
        if (!value.trim()) {
          error = 'Subject is required';
        } else if (value.trim().length < 5) {
          error = 'Subject must be at least 5 characters';
        }
        break;

      case 'description':
        if (!value.trim()) {
          error = 'Description is required';
        } else if (value.trim().length < 20) {
          error = 'Description must be at least 20 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone, only allow digits and limit to 10
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: digitsOnly
      }));
      
      // Validate on change
      const error = validateField(name, digitsOnly);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Validate on change
      const error = validateField(name, value);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    Object.keys(formData).forEach(key => {
      if (key !== 'priority') { // priority always has a value
        const error = validateField(key, formData[key]);
        if (error) {
          errors[key] = error;
        }
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm()) {
      toast.error('❌ Please fix all errors before submitting');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await apiService.submitIssueReport(formData);

      toast.success(`✅ ${response.message}`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        issueType: '',
        priority: 'medium',
        subject: '',
        description: '',
      });
      setFieldErrors({});
    } catch (error) {
      console.error('Error submitting issue report:', error);
      const errorMessage = error.message || 'Failed to submit report. Please try again.';
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <AlertCircle size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Report an <span className="text-yellow-400">Issue</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              We take your concerns seriously. Help us improve by reporting any issues you've experienced with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Submit Your Report
              </h2>
              <p className="text-gray-600">
                Please provide as much detail as possible to help us address your concern quickly and effectively.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      fieldErrors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      fieldErrors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      fieldErrors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="10-digit mobile number"
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Issue Type *
                  </label>
                  <select
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      fieldErrors.issueType ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                    }`}
                  >
                    <option value="">Select issue type</option>
                    {issueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.issueType && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.issueType}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority Level *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['low', 'medium', 'high'].map((priority) => (
                    <label
                      key={priority}
                      className={`flex items-center justify-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.priority === priority
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={priority}
                        checked={formData.priority === priority}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-semibold capitalize">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    fieldErrors.subject ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                  }`}
                  placeholder="Brief summary of the issue"
                />
                {fieldErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                    fieldErrors.description ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500'
                  }`}
                  placeholder="Please provide detailed information about the issue..."
                ></textarea>
                {fieldErrors.description && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.description}</p>
                )}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All reports are reviewed within 24-48 hours. For urgent safety concerns, please call our emergency hotline: <strong>+91 877 862 8539</strong>
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Submit Report</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Hotline</h3>
              <p className="text-gray-600 mb-2">24/7 Support</p>
              <a href="tel:+918778628539" className="text-red-600 font-semibold hover:text-red-700">
                +91 877 862 8539
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-2">Response within 24 hours</p>
              <a href="mailto:help@roadbuddy.com" className="text-blue-600 font-semibold hover:text-blue-700">
                help@roadbuddy.com
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-2">Coming Soon</p>
              <span className="text-gray-400 font-semibold">
                Available Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportIssue;
