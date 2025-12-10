import React, { useState } from "react";
import "./DriverRegistrationForm.css";
import apiService from "../services/api";
import { validators } from "../utils/validation";
import { toast } from 'react-toastify';
import {
  X,
  Upload,
  User,
  Car,
  FileText,
  CreditCard,
  Check,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Award,
} from "lucide-react";

const DriverRegistrationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactNumber: "",

    // Driving Details
    licenseType: "",
    drivingExperience: "",
    vehicleExpertise: [],
    languages: "",
    workTime: "",
    shortNotice: "",

    // Upload Documents
    photo: null,
    aadharFront: null,
    aadharBack: null,
    licenseFront: null,
    licenseBack: null,
    panCard: null,

    // Payment Details
    upiId: "",
    bankAccount: "",
    ifscCode: "",
    accountHolderName: "",

    // Declaration
    agreeTerms: false,
    eSignature: "",
    paymentCompleted: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const steps = [
    { number: 1, title: "Personal Details", icon: <User size={20} /> },
    { number: 2, title: "Driving Details", icon: <Car size={20} /> },
    { number: 3, title: "Upload Documents", icon: <Upload size={20} /> },
    { number: 4, title: "Payment Details", icon: <CreditCard size={20} /> },
    { number: 5, title: "Declaration", icon: <FileText size={20} /> },
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Puducherry",
  ];

  const indianLanguages = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Odia",
    "Punjabi",
    "Malayalam",
    "Assamese",
    "Maithili",
    "Sanskrit",
  ];

  const vehicleTypes = [
    "Hatchback",
    "Sedan",
    "SUV/MUV",
    "Luxury Cars",
    "Commercial Vehicles",
    "Two-Wheeler",
    "Three-Wheeler",
    "Heavy Vehicles",
  ];

  const preferredAreas = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Tiruppur",
    "Vellore",
    "Erode",
    "Thoothukudi",
    "Tanjore",
    "Kanyakumari",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Real-time validation
    validateField(field, value);
  };

  const validateField = (fieldName, value) => {
    let validation = { valid: true, error: null };

    switch (fieldName) {
      case 'fullName':
      case 'emergencyContactName':
      case 'accountHolderName':
      case 'eSignature':
        validation = validators.name(value);
        break;
      case 'contactNumber':
      case 'emergencyContactNumber':
        validation = validators.phone(value);
        break;
      case 'email':
        if (value) validation = validators.email(value);
        break;
      case 'dateOfBirth':
        validation = validators.dateOfBirth(value);
        break;
      case 'address':
        validation = validators.address(value);
        break;
      case 'upiId':
        validation = validators.upi(value);
        break;
      case 'ifscCode':
        if (value) validation = validators.ifsc(value);
        break;
      case 'bankAccount':
        if (value) validation = validators.bankAccount(value);
        break;
      default:
        break;
    }

    setFieldErrors(prev => ({
      ...prev,
      [fieldName]: validation.error
    }));
  };

  const handleLanguageChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      languages: value,
    }));
  };

  const handleVehicleExpertiseChange = (expertise) => {
    setFormData((prev) => ({
      ...prev,
      vehicleExpertise: prev.vehicleExpertise.includes(expertise)
        ? prev.vehicleExpertise.filter((item) => item !== expertise)
        : [...prev.vehicleExpertise, expertise],
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handlePaymentClick = () => {
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    // Simulate payment processing - will implement Razorpay later
    setFormData((prev) => ({ ...prev, paymentCompleted: true }));
    setShowPaymentModal(false);
    alert("Payment of ₹99 completed successfully! (Demo mode)");
  };

  const validateCurrentStep = () => {
    const errors = {};
    
    if (currentStep === 1) {
      // Personal Details validation
      const nameValidation = validators.name(formData.fullName);
      if (!nameValidation.valid) errors.fullName = nameValidation.error;
      
      const dobValidation = validators.dateOfBirth(formData.dateOfBirth);
      if (!dobValidation.valid) errors.dateOfBirth = dobValidation.error;
      
      if (!formData.gender) errors.gender = 'Gender is required';
      
      const phoneValidation = validators.phone(formData.contactNumber);
      if (!phoneValidation.valid) errors.contactNumber = phoneValidation.error;
      
      if (formData.email) {
        const emailValidation = validators.email(formData.email);
        if (!emailValidation.valid) errors.email = emailValidation.error;
      }
      
      const addressValidation = validators.address(formData.address);
      if (!addressValidation.valid) errors.address = addressValidation.error;
      
      const emergencyNameValidation = validators.name(formData.emergencyContactName);
      if (!emergencyNameValidation.valid) errors.emergencyContactName = emergencyNameValidation.error;
      
      const emergencyPhoneValidation = validators.phone(formData.emergencyContactNumber);
      if (!emergencyPhoneValidation.valid) errors.emergencyContactNumber = emergencyPhoneValidation.error;
      
    } else if (currentStep === 2) {
      // Driving Details validation
      if (!formData.licenseType) errors.licenseType = 'License type is required';
      if (!formData.drivingExperience) errors.drivingExperience = 'Driving experience is required';
      if (formData.vehicleExpertise.length === 0) errors.vehicleExpertise = 'Select at least one vehicle type';
      if (!formData.languages) errors.languages = 'Languages are required';
      if (!formData.workTime) errors.workTime = 'Work time preference is required';
      if (!formData.shortNotice) errors.shortNotice = 'Please select availability';
      
    } else if (currentStep === 3) {
      // Document Upload validation
      if (!formData.photo) errors.photo = 'Passport size photo is required';
      if (!formData.aadharFront) errors.aadharFront = 'Aadhar front photo is required';
      if (!formData.aadharBack) errors.aadharBack = 'Aadhar back photo is required';
      if (!formData.licenseFront) errors.licenseFront = 'License front photo is required';
      if (!formData.licenseBack) errors.licenseBack = 'License back photo is required';
      
    } else if (currentStep === 4) {
      // Payment Details validation
      const upiValidation = validators.upi(formData.upiId);
      if (!upiValidation.valid) errors.upiId = upiValidation.error;
      
      if (formData.bankAccount) {
        const bankValidation = validators.bankAccount(formData.bankAccount);
        if (!bankValidation.valid) errors.bankAccount = bankValidation.error;
      }
      
      if (formData.ifscCode) {
        const ifscValidation = validators.ifsc(formData.ifscCode);
        if (!ifscValidation.valid) errors.ifscCode = ifscValidation.error;
      }
      
      if (formData.accountHolderName) {
        const holderValidation = validators.name(formData.accountHolderName);
        if (!holderValidation.valid) errors.accountHolderName = holderValidation.error;
      }
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Show specific error messages
      const errorFields = Object.keys(errors);
      const errorMessage = errorFields.length > 0 
        ? `Please fill in the following required fields:\n\n${errorFields.map(field => `• ${field.replace(/([A-Z])/g, ' $1').trim()}`).join('\n')}`
        : 'Please fill in all required fields';
      alert(errorMessage);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (
      formData.agreeTerms &&
      formData.paymentCompleted &&
      formData.eSignature
    ) {
      setIsSubmitting(true);
      setSubmitError("");
      
      try {
        const response = await apiService.registerDriver(formData);
        toast.success(`✅ Thank you for enrolling! Registration ID: ${response.driver_id}. We will verify your profile and you will get a confirmation call.`, {
          position: "top-right",
          autoClose: 5000,
        });
        onClose();
      } catch (error) {
        console.error("Driver registration error:", error);
        
        let errorMessage = "Registration failed. Please try again.";
        
        // Check if it's a network error
        if (error.message === "Failed to fetch" || error.message.includes("ERR_CONNECTION_REFUSED")) {
          errorMessage = "Unable to connect to server. Please check your internet connection and try again later.";
        } else if (error.response) {
          // Server responded with an error - parse the backend error
          const backendError = error.response.data;
          if (typeof backendError === 'string') {
            errorMessage = backendError;
          } else if (backendError.detail) {
            // FastAPI validation error format
            if (Array.isArray(backendError.detail)) {
              errorMessage = backendError.detail.map(err => `${err.loc?.join(' → ') || 'Field'}: ${err.msg}`).join('\n');
            } else {
              errorMessage = backendError.detail;
            }
          } else if (backendError.message) {
            errorMessage = backendError.message;
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        setSubmitError(errorMessage);
        toast.error(`❌ Registration Error\n\n${errorMessage}`, {
          position: "top-center",
          autoClose: 8000,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please complete all required fields and payment.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="driver-form-modal">
        <div className="form-header">
          <h2>Driver Enrollment Form</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step ${currentStep === step.number ? "active" : ""} ${
                currentStep > step.number ? "completed" : ""
              }`}
            >
              <div className="step-icon">
                {currentStep > step.number ? <Check size={16} /> : step.icon}
              </div>
              <div className="step-info">
                <span className="step-number">Step {step.number}</span>
                <span className="step-title">{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="form-content">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="form-step">
              <h3>Personal Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    required
                    className={fieldErrors.dateOfBirth ? 'error' : ''}
                  />
                  {fieldErrors.dateOfBirth && (
                    <span className="error-message">{fieldErrors.dateOfBirth}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Contact Number *</label>
                  <input
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      handleInputChange("contactNumber", e.target.value)
                    }
                    placeholder="10-digit mobile number"
                    maxLength="10"
                    required
                    className={fieldErrors.contactNumber ? 'error' : ''}
                  />
                  {fieldErrors.contactNumber && (
                    <span className="error-message">{fieldErrors.contactNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email ID (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className={fieldErrors.email ? 'error' : ''}
                  />
                  {fieldErrors.email && (
                    <span className="error-message">{fieldErrors.email}</span>
                  )}
                </div>
                <div className="form-group full-width">
                  <label>Full Address *</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="Complete address with city and state"
                    rows="3"
                    required
                    className={fieldErrors.address ? 'error' : ''}
                  />
                  {fieldErrors.address && (
                    <span className="error-message">{fieldErrors.address}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Emergency Contact Name *</label>
                  <input
                    type="text"
                    value={formData.emergencyContactName}
                    onChange={(e) =>
                      handleInputChange("emergencyContactName", e.target.value)
                    }
                    placeholder="Emergency contact person"
                    required
                    className={fieldErrors.emergencyContactName ? 'error' : ''}
                  />
                  {fieldErrors.emergencyContactName && (
                    <span className="error-message">{fieldErrors.emergencyContactName}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Emergency Contact Number *</label>
                  <input
                    type="tel"
                    value={formData.emergencyContactNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContactNumber",
                        e.target.value
                      )
                    }
                    placeholder="Emergency contact number"
                    maxLength="10"
                    required
                    className={fieldErrors.emergencyContactNumber ? 'error' : ''}
                  />
                  {fieldErrors.emergencyContactNumber && (
                    <span className="error-message">{fieldErrors.emergencyContactNumber}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Driving Details */}
          {currentStep === 2 && (
            <div className="form-step">
              <h3>Driving Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>License Type *</label>
                  <select
                    value={formData.licenseType}
                    onChange={(e) =>
                      handleInputChange("licenseType", e.target.value)
                    }
                    required
                    className={fieldErrors.licenseType ? 'error' : ''}
                  >
                    <option value="">Select License Type</option>
                    <option value="LMV">LMV (Light Motor Vehicle)</option>
                    <option value="HMV">HMV (Heavy Motor Vehicle)</option>
                    <option value="Others">Others</option>
                  </select>
                  {fieldErrors.licenseType && (
                    <span className="error-message">{fieldErrors.licenseType}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Years of Driving Experience *</label>
                  <select
                    value={formData.drivingExperience}
                    onChange={(e) =>
                      handleInputChange("drivingExperience", e.target.value)
                    }
                    required
                    className={fieldErrors.drivingExperience ? 'error' : ''}
                  >
                    <option value="">Select Experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {fieldErrors.drivingExperience && (
                    <span className="error-message">{fieldErrors.drivingExperience}</span>
                  )}
                </div>
                <div className="form-group full-width">
                  <label>Vehicle Expertise * (Select multiple)</label>
                  <div className={`checkbox-group ${fieldErrors.vehicleExpertise ? 'error-border' : ''}`}>
                    {["Hatchbacks", "Sedan", "SUV", "Luxury", "Commercial"].map(
                      (type) => (
                        <label key={type} className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formData.vehicleExpertise.includes(type)}
                            onChange={() => handleVehicleExpertiseChange(type)}
                          />
                          <span className="checkmark"></span>
                          {type}
                        </label>
                      )
                    )}
                  </div>
                  {fieldErrors.vehicleExpertise && (
                    <span className="error-message">{fieldErrors.vehicleExpertise}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Languages Known *</label>
                  <input
                    type="text"
                    value={formData.languages}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    placeholder="e.g., Hindi, English, Regional languages"
                    required
                    className={fieldErrors.languages ? 'error' : ''}
                  />
                  {fieldErrors.languages && (
                    <span className="error-message">{fieldErrors.languages}</span>
                  )}
                </div>
                <div className="form-group full-width">
                  <label>Preferred Work Time *</label>
                  <div className={`radio-group ${fieldErrors.workTime ? 'error-border' : ''}`}>
                    {[
                      {
                        value: "full-time",
                        label: "Full Time – 24/7 (All Days)",
                      },
                      {
                        value: "part-time",
                        label: "Part Time – 6 PM to 3 AM (All Days)",
                      },
                      {
                        value: "weekends",
                        label: "Weekends – Saturday & Sunday",
                      },
                    ].map((option) => (
                      <label key={option.value} className="radio-label">
                        <input
                          type="radio"
                          name="workTime"
                          value={option.value}
                          checked={formData.workTime === option.value}
                          onChange={(e) =>
                            handleInputChange("workTime", e.target.value)
                          }
                        />
                        <span className="radio-mark"></span>
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {fieldErrors.workTime && (
                    <span className="error-message">{fieldErrors.workTime}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Available on Short Notice *</label>
                  <div className={`radio-group ${fieldErrors.shortNotice ? 'error-border' : ''}`}>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="shortNotice"
                        value="yes"
                        checked={formData.shortNotice === "yes"}
                        onChange={(e) =>
                          handleInputChange("shortNotice", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="shortNotice"
                        value="no"
                        checked={formData.shortNotice === "no"}
                        onChange={(e) =>
                          handleInputChange("shortNotice", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      No
                    </label>
                  </div>
                  {fieldErrors.shortNotice && (
                    <span className="error-message">{fieldErrors.shortNotice}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Upload Documents */}
          {currentStep === 3 && (
            <div className="form-step">
              <h3>Upload Documents</h3>
              <div className="upload-grid">
                <div className="upload-item">
                  <label>Passport Size Photo *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("photo", e.target.files[0])
                      }
                      id="photo"
                    />
                    <label htmlFor="photo" className={`upload-label ${fieldErrors.photo ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.photo ? formData.photo.name : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.photo && (
                    <span className="error-message">{fieldErrors.photo}</span>
                  )}
                </div>
                <div className="upload-item">
                  <label>Aadhar Card (Front) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("aadharFront", e.target.files[0])
                      }
                      id="aadharFront"
                    />
                    <label htmlFor="aadharFront" className={`upload-label ${fieldErrors.aadharFront ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.aadharFront
                        ? formData.aadharFront.name
                        : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.aadharFront && (
                    <span className="error-message">{fieldErrors.aadharFront}</span>
                  )}
                </div>
                <div className="upload-item">
                  <label>Aadhar Card (Back) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("aadharBack", e.target.files[0])
                      }
                      id="aadharBack"
                    />
                    <label htmlFor="aadharBack" className={`upload-label ${fieldErrors.aadharBack ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.aadharBack
                        ? formData.aadharBack.name
                        : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.aadharBack && (
                    <span className="error-message">{fieldErrors.aadharBack}</span>
                  )}
                </div>
                <div className="upload-item">
                  <label>Driving License (Front) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("licenseFront", e.target.files[0])
                      }
                      id="licenseFront"
                    />
                    <label htmlFor="licenseFront" className={`upload-label ${fieldErrors.licenseFront ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.licenseFront
                        ? formData.licenseFront.name
                        : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.licenseFront && (
                    <span className="error-message">{fieldErrors.licenseFront}</span>
                  )}
                </div>
                <div className="upload-item">
                  <label>Driving License (Back) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("licenseBack", e.target.files[0])
                      }
                      id="licenseBack"
                    />
                    <label htmlFor="licenseBack" className={`upload-label ${fieldErrors.licenseBack ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.licenseBack
                        ? formData.licenseBack.name
                        : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.licenseBack && (
                    <span className="error-message">{fieldErrors.licenseBack}</span>
                  )}
                </div>
                <div className="upload-item">
                  <label>PAN Card (Optional)</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("panCard", e.target.files[0])
                      }
                      id="panCard"
                    />
                    <label htmlFor="panCard" className={`upload-label ${fieldErrors.panCard ? 'error' : ''}`}>
                      <Upload size={24} />
                      {formData.panCard ? formData.panCard.name : "Choose File"}
                    </label>
                  </div>
                  {fieldErrors.panCard && (
                    <span className="error-message">{fieldErrors.panCard}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Police Verification Certificate (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(
                          "policeVerification",
                          e.target.files[0]
                        )
                      }
                      id="policeVerification"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="policeVerification"
                      className={`flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-lg hover:border-blue-400 transition-colors cursor-pointer bg-gray-50 hover:bg-blue-50 ${fieldErrors.policeVerification ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <div className="text-center">
                        <Upload
                          size={24}
                          className="mx-auto text-gray-400 mb-2"
                        />
                        <span className="text-sm text-gray-600">
                          {formData.policeVerification
                            ? formData.policeVerification.name
                            : "Choose File"}
                        </span>
                      </div>
                    </label>
                  </div>
                  {fieldErrors.policeVerification && (
                    <span className="error-message">{fieldErrors.policeVerification}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment Details */}
          {currentStep === 4 && (
            <div className="form-step">
              <h3>Payment & Payout Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>UPI ID *</label>
                  <input
                    type="text"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange("upiId", e.target.value)}
                    placeholder="example@upi"
                    required
                    className={fieldErrors.upiId ? 'error' : ''}
                  />
                  {fieldErrors.upiId && (
                    <span className="error-message">{fieldErrors.upiId}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Bank Account Number</label>
                  <input
                    type="number"
                    value={formData.bankAccount}
                    onChange={(e) =>
                      handleInputChange("bankAccount", e.target.value)
                    }
                    placeholder="Bank account number"
                    className={fieldErrors.bankAccount ? 'error' : ''}
                  />
                  {fieldErrors.bankAccount && (
                    <span className="error-message">{fieldErrors.bankAccount}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>IFSC Code</label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) =>
                      handleInputChange("ifscCode", e.target.value)
                    }
                    placeholder="IFSC Code"
                    className={fieldErrors.ifscCode ? 'error' : ''}
                  />
                  {fieldErrors.ifscCode && (
                    <span className="error-message">{fieldErrors.ifscCode}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Account Holder Name</label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) =>
                      handleInputChange("accountHolderName", e.target.value)
                    }
                    placeholder="Account holder name"
                    className={fieldErrors.accountHolderName ? 'error' : ''}
                  />
                  {fieldErrors.accountHolderName && (
                    <span className="error-message">{fieldErrors.accountHolderName}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Declaration */}
          {currentStep === 5 && (
            <div className="form-step">
              <h3>Declaration</h3>

              {/* Payment Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <CreditCard size={24} className="text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Registration Fee Payment
                  </h4>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700">Registration Fee:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ₹99
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    One-time registration fee to join RoadBuddy network
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        paymentMethod === "upi"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-sm font-medium">UPI</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        paymentMethod === "card"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-sm font-medium">Card</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("netbanking")}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        paymentMethod === "netbanking"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-sm font-medium">Net Banking</div>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePaymentClick}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                    formData.paymentCompleted
                      ? "bg-green-100 text-green-700 border-2 border-green-300 cursor-default"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                  }`}
                  disabled={formData.paymentCompleted}
                >
                  {formData.paymentCompleted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Check size={20} />
                      <span>Payment Completed ✓</span>
                    </div>
                  ) : (
                    `Pay ₹99 via ${paymentMethod.toUpperCase()}`
                  )}
                </button>
              </div>

              <div className="declaration-content">
                <div className="declaration-text">
                  <p>
                    I agree to follow Road Buddy's professional conduct
                    standards, accept terms for insurance and liability
                    coverage. Consent to GPS tracking and emergency contact use.
                  </p>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) =>
                        handleInputChange("agreeTerms", e.target.checked)
                      }
                    />
                    <span className="checkmark"></span>I agree to all terms and
                    conditions *
                  </label>
                </div>
                <div className="form-group">
                  <label>e-Signature * (Type your full name)</label>
                  <input
                    type="text"
                    value={formData.eSignature}
                    onChange={(e) =>
                      handleInputChange("eSignature", e.target.value)
                    }
                    placeholder="Type your full name as digital signature"
                    required
                  />
                </div>
                {!formData.paymentCompleted && (
                  <div className="warning-message">
                    <p>⚠️ Please complete payment before submitting</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="form-navigation">
          <button
            type="button"
            className="btn btn-outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <div className="step-indicator">Step {currentStep} of 5</div>
          {currentStep < 5 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={
                isSubmitting ||
                !formData.agreeTerms ||
                !formData.paymentCompleted ||
                !formData.eSignature
              }
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Complete Payment
              </h3>
              <p className="text-gray-600">
                Pay registration fee to complete your enrollment
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Registration Fee</span>
                <span className="text-2xl font-bold text-blue-600">₹99</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">
                Payment Method:{" "}
                <span className="font-semibold capitalize">
                  {paymentMethod}
                </span>
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-yellow-800 text-sm">
                  🚧 <strong>Demo Mode:</strong> Razorpay integration will be
                  implemented later. Click "Pay Now" to simulate payment.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverRegistrationForm;
