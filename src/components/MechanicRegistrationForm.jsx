import React, { useState } from "react";
import {
  X,
  Upload,
  User,
  Wrench,
  FileText,
  CreditCard,
  Check,
  Phone,
  MapPin,
  Clock,
  Camera,
} from "lucide-react";
import "./MechanicRegistrationForm.css";
import apiService from "../services/api";
import { validators, formatPhone, formatAadhar, formatIFSC } from "../utils/validation";
import { toast } from 'react-toastify';
import LocationPicker from './LocationPicker';

const MechanicRegistrationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal & Workshop Details
    fullName: "",
    workshopName: "",
    workshopType: "two-wheeler",
    contactNumber: "",
    email: "",
    aadharNumber: "",
    gstNumber: "",
    address: "",

    // Work & Service Details
    yearsOfExperience: "",
    servicesOffered: [],
    vehicleTypes: [],
    openingTime: "",
    closingTime: "",
    workingDays: [],
    available24x7: false,
    workshopLocation: "",
    travelToCustomer: false,
    serviceRadius: "",

    // Document Upload
    photo: null,
    aadharFront: null,
    aadharBack: null,
    mechanicCertification: null,
    workshopPhoto: null,

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
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Personal & Workshop Details",
      icon: <User size={20} />,
    },
    { number: 2, title: "Work & Service Details", icon: <Wrench size={20} /> },
    { number: 3, title: "Document Upload", icon: <FileText size={20} /> },
    { number: 4, title: "Payment Details", icon: <CreditCard size={20} /> },
    { number: 5, title: "Payment & Declaration", icon: <Check size={20} /> },
  ];

  const twoWheelerServices = [
    "General Maintenance",
    "Mechanical Repairs",
    "Electrical & Electronics",
    "Tyre & Wheel Services",
    "Body & Paint Services",
    "Cleaning & Detailing",
    "Performance & Custom Work",
  ];

  const fourWheelerServices = [
    "General Maintenance",
    "Mechanical Repairs",
    "Electrical & Electronics",
    "Tyre & Wheel Services",
    "AC Services",
    "Body & Paint Services",
    "Cleaning & Detailing",
    "Performance & Custom Work",
  ];

  const vehicleTypeOptions = [
    "Hatchbacks",
    "Sedan",
    "SUV",
    "Luxury",
    "Commercial",
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Real-time validation
    validateField(name, newValue);
  };

  const validateField = (fieldName, value) => {
    let validation = { valid: true, error: null };

    switch (fieldName) {
      case 'fullName':
      case 'accountHolderName':
        validation = validators.name(value);
        break;
      case 'workshopName':
        validation = validators.workshopName(value);
        break;
      case 'contactNumber':
        validation = validators.phone(value);
        break;
      case 'email':
        if (value) validation = validators.email(value);
        break;
      case 'aadharNumber':
        validation = validators.aadhar(value);
        break;
      case 'gstNumber':
        validation = validators.gst(value);
        break;
      case 'address':
      case 'workshopLocation':
        validation = validators.address(value);
        break;
      case 'openingTime':
      case 'closingTime':
        validation = validators.time(value);
        break;
      case 'upiId':
        validation = validators.upi(value);
        break;
      case 'ifscCode':
        validation = validators.ifsc(value);
        break;
      case 'bankAccount':
        validation = validators.bankAccount(value);
        break;
      case 'eSignature':
        validation = validators.name(value);
        break;
      case 'bankName':
        validation = validators.required(value, 'Bank Name');
        break;
      default:
        break;
    }

    setFieldErrors(prev => ({
      ...prev,
      [fieldName]: validation.error
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    validateField(field, value);
  };

  const handleMultiSelect = (name, value, isChecked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: isChecked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleFileUpload = (field, file) => {
    // Validate file
    const validation = validators.file(file, {
      required: !['mechanicCertification', 'gstNumber'].includes(field),
      fieldName: field.replace(/([A-Z])/g, ' $1').trim()
    });

    if (!validation.valid) {
      setFieldErrors(prev => ({
        ...prev,
        [field]: validation.error
      }));
      return;
    }

    setFieldErrors(prev => ({
      ...prev,
      [field]: null
    }));

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

  const handleLocationSelect = (locationData) => {
    // Update workshop location with the selected address
    setFormData(prev => ({
      ...prev,
      workshopLocation: locationData.address
    }));
    
    // Clear any errors
    setFieldErrors(prev => ({
      ...prev,
      workshopLocation: null
    }));
  };

  const validateCurrentStep = () => {
    const errors = {};
    
    if (currentStep === 1) {
      // Personal & Workshop Details
      const nameValidation = validators.name(formData.fullName);
      if (!nameValidation.valid) errors.fullName = nameValidation.error;
      
      const workshopNameValidation = validators.required(formData.workshopName, 'Workshop Name');
      if (!workshopNameValidation.valid) errors.workshopName = workshopNameValidation.error;
      
      if (!formData.workshopType) errors.workshopType = 'Workshop type is required';
      
      const phoneValidation = validators.phone(formData.contactNumber);
      if (!phoneValidation.valid) errors.contactNumber = phoneValidation.error;
      
      if (formData.email) {
        const emailValidation = validators.email(formData.email);
        if (!emailValidation.valid) errors.email = emailValidation.error;
      }
      
      const aadharValidation = validators.aadhar(formData.aadharNumber);
      if (!aadharValidation.valid) errors.aadharNumber = aadharValidation.error;
      
      if (formData.gstNumber) {
        const gstValidation = validators.gst(formData.gstNumber);
        if (!gstValidation.valid) errors.gstNumber = gstValidation.error;
      }
      
      const addressValidation = validators.address(formData.address);
      if (!addressValidation.valid) errors.address = addressValidation.error;
      
    } else if (currentStep === 2) {
      // Work & Service Details
      if (!formData.yearsOfExperience) errors.yearsOfExperience = 'Years of experience is required';
      if (formData.servicesOffered.length === 0) errors.servicesOffered = 'Select at least one service';
      
      // Validate vehicle types for 4-wheeler mechanics
      if (['four-wheeler', 'both'].includes(formData.workshopType)) {
        if (!formData.vehicleTypes || formData.vehicleTypes.length === 0) {
          errors.vehicleTypes = 'Select at least one vehicle type';
        }
      }
      
      if (!formData.openingTime) {
        errors.openingTime = 'Opening time is required';
      } else {
        const openingTimeValidation = validators.time(formData.openingTime, 'Opening Time');
        if (!openingTimeValidation.valid) errors.openingTime = openingTimeValidation.error;
      }
      
      if (!formData.closingTime) {
        errors.closingTime = 'Closing time is required';
      } else {
        const closingTimeValidation = validators.time(formData.closingTime, 'Closing Time');
        if (!closingTimeValidation.valid) errors.closingTime = closingTimeValidation.error;
      }
      
      // Only validate working days if 24x7 is NOT checked
      if (!formData.available24x7 && formData.workingDays.length === 0) {
        errors.workingDays = 'Select at least one working day or check 24×7 Available';
      }
      
      const locationValidation = validators.address(formData.workshopLocation);
      if (!locationValidation.valid) errors.workshopLocation = locationValidation.error;
      
      // Validate service radius if travel to customer is enabled
      if (formData.travelToCustomer && formData.serviceRadius) {
        const radiusNum = parseInt(formData.serviceRadius);
        if (isNaN(radiusNum) || radiusNum < 1 || radiusNum > 100) {
          errors.serviceRadius = 'Service radius must be a number between 1 and 100';
        }
      }
      
    } else if (currentStep === 3) {
      // Document Upload
      if (!formData.photo) errors.photo = 'Passport size photo is required';
      if (!formData.aadharFront) errors.aadharFront = 'Aadhar front photo is required';
      if (!formData.aadharBack) errors.aadharBack = 'Aadhar back photo is required';
      if (!formData.workshopPhoto) errors.workshopPhoto = 'Workshop photo is required';
      
    } else if (currentStep === 4) {
      // Payment Details
      const upiValidation = validators.upi(formData.upiId);
      if (!upiValidation.valid) errors.upiId = upiValidation.error;
      
      const bankValidation = validators.bankAccount(formData.bankAccount);
      if (!bankValidation.valid) errors.bankAccount = bankValidation.error;
      
      const ifscValidation = validators.ifsc(formData.ifscCode);
      if (!ifscValidation.valid) errors.ifscCode = ifscValidation.error;
      
      const holderValidation = validators.name(formData.accountHolderName);
      if (!holderValidation.valid) errors.accountHolderName = holderValidation.error;
      
    } else if (currentStep === 5) {
      // Payment & Declaration
      if (!formData.paymentCompleted) {
        errors.payment = 'Please complete the payment to proceed';
      }
      
      if (!formData.agreeTerms) {
        errors.agreeTerms = 'You must agree to the terms and conditions';
      }
      
      const eSignatureValidation = validators.name(formData.eSignature);
      if (!eSignatureValidation.valid) errors.eSignature = eSignatureValidation.error;
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    console.log('Next button clicked, current step:', currentStep);
    const isValid = validateCurrentStep();
    console.log('Validation result:', isValid);
    console.log('Field errors:', fieldErrors);
    
    if (isValid) {
      if (currentStep < 5) {
        console.log('Moving to step:', currentStep + 1);
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Show specific error messages using fieldErrors state
      const errorFields = Object.keys(fieldErrors).filter(key => fieldErrors[key]);
      console.log('Error fields:', errorFields);
      
      if (errorFields.length > 0) {
        const errorMessage = `Please fill in the following required fields:\n\n${errorFields.map(field => `• ${field.replace(/([A-Z])/g, ' $1').trim()}`).join('\n')}`;
        alert(errorMessage);
      } else {
        alert('Please fill in all required fields');
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.paymentCompleted) {
      alert("Please complete payment first!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to terms and conditions!");
      return;
    }
    if (!formData.eSignature) {
      alert("Please provide your e-signature!");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await apiService.registerMechanic(formData);
      toast.success(`✅ Mechanic enrollment submitted successfully! Registration ID: ${response.mechanic_id}`, {
        position: "top-right",
        autoClose: 5000,
      });
      onClose();
    } catch (error) {
      console.error("Mechanic registration error:", error);
      
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
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <User className="step-icon" />
        Personal & Workshop Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className={fieldErrors.fullName ? 'error' : ''}
          />
          {fieldErrors.fullName && (
            <span className="error-message">{fieldErrors.fullName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Workshop / Business Name *</label>
          <input
            type="text"
            name="workshopName"
            value={formData.workshopName}
            onChange={handleChange}
            placeholder="Enter workshop name"
            required
            className={fieldErrors.workshopName ? 'error' : ''}
          />
          {fieldErrors.workshopName && (
            <span className="error-message">{fieldErrors.workshopName}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Workshop Type *</label>
          <select
            name="workshopType"
            value={formData.workshopType}
            onChange={handleChange}
            required
            className={fieldErrors.workshopType ? 'error' : ''}
          >
            <option value="two-wheeler">Two-Wheeler</option>
            <option value="four-wheeler">Four-Wheeler</option>
            <option value="both">Both</option>
          </select>
          {fieldErrors.workshopType && (
            <span className="error-message">{fieldErrors.workshopType}</span>
          )}
        </div>

        <div className="form-group">
          <label>Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            maxLength="10"
            required
            className={fieldErrors.contactNumber ? 'error' : ''}
          />
          {fieldErrors.contactNumber && (
            <span className="error-message">{fieldErrors.contactNumber}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address (optional)"
            className={fieldErrors.email ? 'error' : ''}
          />
          {fieldErrors.email && (
            <span className="error-message">{fieldErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Aadhar Number *</label>
          <input
            type="tell"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            placeholder="Enter 12-digit Aadhar number"
             maxLength="12"
            required
            className={fieldErrors.aadharNumber ? 'error' : ''}
          />
          {fieldErrors.aadharNumber && (
            <span className="error-message">{fieldErrors.aadharNumber}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            placeholder="Enter GST number (if available)"
            className={fieldErrors.gstNumber ? 'error' : ''}
          />
          {fieldErrors.gstNumber && (
            <span className="error-message">{fieldErrors.gstNumber}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Full Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter complete address"
          rows="3"
          required
          className={fieldErrors.address ? 'error' : ''}
        />
        {fieldErrors.address && (
          <span className="error-message">{fieldErrors.address}</span>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <Wrench className="step-icon" />
        Work & Service Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>Years of Experience *</label>
          <select
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            className={fieldErrors.yearsOfExperience ? 'error' : ''}
          >
            <option value="">Select experience</option>
            <option value="0-1">0-1 years</option>
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-15">11-15 years</option>
            <option value="15+">15+ years</option>
          </select>
          {fieldErrors.yearsOfExperience && (
            <span className="error-message">{fieldErrors.yearsOfExperience}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Services Offered *</label>
        <div className={`checkbox-grid ${fieldErrors.servicesOffered ? 'error-border' : ''}`}>
          {(formData.workshopType === "four-wheeler"
            ? fourWheelerServices
            : twoWheelerServices
          ).map((service) => (
            <label key={service} className="checkbox-item">
              <input
                type="checkbox"
                checked={formData.servicesOffered.includes(service)}
                onChange={(e) =>
                  handleMultiSelect(
                    "servicesOffered",
                    service,
                    e.target.checked
                  )
                }
              />
              <span className="checkmark"></span>
              {service}
            </label>
          ))}
        </div>
        {fieldErrors.servicesOffered && (
          <span className="error-message">{fieldErrors.servicesOffered}</span>
        )}
      </div>

      {formData.workshopType === "four-wheeler" && (
        <div className="form-group">
          <label>Vehicle Types *</label>
          <div className={`checkbox-grid ${fieldErrors.vehicleTypes ? 'error-border' : ''}`}>
            {vehicleTypeOptions.map((type) => (
              <label key={type} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.vehicleTypes.includes(type)}
                  onChange={(e) =>
                    handleMultiSelect("vehicleTypes", type, e.target.checked)
                  }
                />
                <span className="checkmark"></span>
                {type}
              </label>
            ))}
          </div>
          {fieldErrors.vehicleTypes && (
            <span className="error-message">{fieldErrors.vehicleTypes}</span>
          )}
        </div>
      )}

      <div className="form-group">
        <label>Service Hours</label>
        <div className="form-row">
          <div className="form-group">
            <label>Opening Time</label>
            <input
              type="time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleChange}
              className={fieldErrors.openingTime ? 'error' : ''}
            />
            {fieldErrors.openingTime && (
              <span className="error-message">{fieldErrors.openingTime}</span>
            )}
          </div>
          <div className="form-group">
            <label>Closing Time</label>
            <input
              type="time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleChange}
              className={fieldErrors.closingTime ? 'error' : ''}
            />
            {fieldErrors.closingTime && (
              <span className="error-message">{fieldErrors.closingTime}</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Working Days</label>
        <div className={`checkbox-grid ${fieldErrors.workingDays ? 'error-border' : ''}`}>
          {weekDays.map((day) => (
            <label key={day} className={`checkbox-item ${formData.available24x7 ? 'disabled' : ''}`}>
              <input
                type="checkbox"
                checked={formData.workingDays.includes(day)}
                onChange={(e) =>
                  handleMultiSelect("workingDays", day, e.target.checked)
                }
                disabled={formData.available24x7}
              />
              <span className="checkmark"></span>
              {day}
            </label>
          ))}
        </div>
        {fieldErrors.workingDays && (
          <span className="error-message">{fieldErrors.workingDays}</span>
        )}
      </div>

      <div className="form-group">
        <label className="checkbox-item large">
          <input
            type="checkbox"
            name="available24x7"
            checked={formData.available24x7}
            onChange={(e) => {
              const isChecked = e.target.checked;
              setFormData(prev => ({
                ...prev,
                available24x7: isChecked,
                // Clear working days when 24x7 is enabled
                workingDays: isChecked ? [] : prev.workingDays
              }));
            }}
          />
          <span className="checkmark"></span>
          24×7 Available
        </label>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Workshop Location *</label>
          <div className="location-input-group">
            <input
              type="text"
              name="workshopLocation"
              value={formData.workshopLocation}
              onChange={handleChange}
              placeholder="Click 'Pin Location' to select from map"
              className={fieldErrors.workshopLocation ? 'error' : ''}
            />
            {fieldErrors.workshopLocation && (
              <span className="error-message">{fieldErrors.workshopLocation}</span>
            )}
            <button 
              type="button" 
              className="map-btn"
              onClick={() => setShowLocationPicker(true)}
            >
              <MapPin size={16} />
              Pin Location
            </button>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-item large">
          <input
            type="checkbox"
            name="travelToCustomer"
            checked={formData.travelToCustomer}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          Willing to travel to customer's location
        </label>
      </div>

      {formData.travelToCustomer && (
        <div className="form-group">
          <label>Service Radius (in km)</label>
          <input
            type="number"
            name="serviceRadius"
            value={formData.serviceRadius}
            onChange={handleChange}
            placeholder="Enter service radius"
            min="1"
            max="100"
            className={fieldErrors.serviceRadius ? 'error' : ''}
          />
          {fieldErrors.serviceRadius && (
            <span className="error-message">{fieldErrors.serviceRadius}</span>
          )}
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <FileText className="step-icon" />
        Document Upload
      </h3>

      <div className="upload-grid">
        <div className="upload-item">
          <label>Passport Size Photo *</label>
          <div className="file-upload">
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => handleFileUpload("photo", e.target.files[0])}
            />
            <label htmlFor="photo" className={`upload-btn ${fieldErrors.photo ? 'error-border' : ''}`}>
              <Camera size={20} />
              {formData.photo ? formData.photo.name : "Upload Photo"}
            </label>
            {fieldErrors.photo && (
              <span className="error-message">{fieldErrors.photo}</span>
            )}
          </div>
        </div>

        <div className="upload-item">
          <label>Aadhar Card (Front) *</label>
          <div className="file-upload">
            <input
              type="file"
              id="aadharFront"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("aadharFront", e.target.files[0])
              }
            />
            <label htmlFor="aadharFront" className={`upload-btn ${fieldErrors.aadharFront ? 'error-border' : ''}`}>
              <Upload size={20} />
              {formData.aadharFront
                ? formData.aadharFront.name
                : "Upload Aadhar Front"}
            </label>
            {fieldErrors.aadharFront && (
              <span className="error-message">{fieldErrors.aadharFront}</span>
            )}
          </div>
        </div>

        <div className="upload-item">
          <label>Aadhar Card (Back) *</label>
          <div className="file-upload">
            <input
              type="file"
              id="aadharBack"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("aadharBack", e.target.files[0])
              }
            />
            <label htmlFor="aadharBack" className={`upload-btn ${fieldErrors.aadharBack ? 'error-border' : ''}`}>
              <Upload size={20} />
              {formData.aadharBack
                ? formData.aadharBack.name
                : "Upload Aadhar Back"}
            </label>
            {fieldErrors.aadharBack && (
              <span className="error-message">{fieldErrors.aadharBack}</span>
            )}
          </div>
        </div>

        <div className="upload-item">
          <label>Mechanic Certification</label>
          <div className="file-upload">
            <input
              type="file"
              id="certification"
              accept="image/*,.pdf"
              onChange={(e) =>
                handleFileUpload("mechanicCertification", e.target.files[0])
              }
            />
            <label htmlFor="certification" className={`upload-btn ${fieldErrors.mechanicCertification ? 'error-border' : ''}`}>
              <FileText size={20} />
              {formData.mechanicCertification
                ? formData.mechanicCertification.name
                : "Upload Certificate"}
            </label>
            {fieldErrors.mechanicCertification && (
              <span className="error-message">{fieldErrors.mechanicCertification}</span>
            )}
          </div>
        </div>

        <div className="upload-item">
          <label>Workshop Photo *</label>
          <div className="file-upload">
            <input
              type="file"
              id="workshopPhoto"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("workshopPhoto", e.target.files[0])
              }
            />
            <label htmlFor="workshopPhoto" className={`upload-btn ${fieldErrors.workshopPhoto ? 'error-border' : ''}`}>
              <Camera size={20} />
              {formData.workshopPhoto
                ? formData.workshopPhoto.name
                : "Upload Workshop Photo"}
            </label>
            {fieldErrors.workshopPhoto && (
              <span className="error-message">{fieldErrors.workshopPhoto}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <CreditCard className="step-icon" />
        Payment Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>UPI ID *</label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="Enter UPI ID (e.g., 9876543210@paytm)"
            required
            className={fieldErrors.upiId ? 'error' : ''}
          />
          {fieldErrors.upiId && (
            <span className="error-message">{fieldErrors.upiId}</span>
          )}
        </div>

        <div className="form-group">
          <label>Bank Account Number *</label>
          <input
            type="number"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleChange}
            placeholder="Enter bank account number"
            required
            className={fieldErrors.bankAccount ? 'error' : ''}
          />
          {fieldErrors.bankAccount && (
            <span className="error-message">{fieldErrors.bankAccount}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>IFSC Code *</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            placeholder="Enter IFSC Code"
            required
            className={fieldErrors.ifscCode ? 'error' : ''}
          />
          {fieldErrors.ifscCode && (
            <span className="error-message">{fieldErrors.ifscCode}</span>
          )}
        </div>

        <div className="form-group">
          <label>Account Holder Name *</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            placeholder="Enter account holder name"
            required
            className={fieldErrors.accountHolderName ? 'error' : ''}
          />
          {fieldErrors.accountHolderName && (
            <span className="error-message">{fieldErrors.accountHolderName}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <Check className="step-icon" />
        Payment & Declaration
      </h3>

      {/* Payment Section */}
      <div className="payment-section">
        <div className="payment-header">
          <CreditCard size={24} className="payment-icon" />
          <h4>Registration Fee Payment</h4>
        </div>

        <div className="payment-info">
          <div className="fee-display">
            <span className="fee-label">Registration Fee:</span>
            <span className="fee-amount">₹99</span>
          </div>
          <div className="fee-description">
            One-time registration fee to join RoadBuddy network
          </div>
        </div>

        <div className="payment-methods">
          <label className="payment-method-label">Select Payment Method</label>
          <div className="payment-options">
            <button
              type="button"
              onClick={() => setPaymentMethod("upi")}
              className={`payment-option ${
                paymentMethod === "upi" ? "active" : ""
              }`}
            >
              UPI
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`payment-option ${
                paymentMethod === "card" ? "active" : ""
              }`}
            >
              Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("netbanking")}
              className={`payment-option ${
                paymentMethod === "netbanking" ? "active" : ""
              }`}
            >
              Net Banking
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePaymentClick}
          className={`payment-btn ${
            formData.paymentCompleted ? "completed" : ""
          }`}
          disabled={formData.paymentCompleted}
        >
          {formData.paymentCompleted ? (
            <>
              <Check size={20} />
              Payment Completed ✓
            </>
          ) : (
            `Pay ₹99 via ${paymentMethod.toUpperCase()}`
          )}
        </button>
      </div>

      <div className="declaration-content">
        <div className="declaration-text">
          <p>
            I agree to maintain professional service standards and accept
            responsibility for work performed. I consent to customer feedback
            and understand that this will be used to maintain service quality.
          </p>
        </div>

        <div className="form-group">
          <label className="checkbox-item large">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <span className="checkmark"></span>I agree to all terms and
            conditions
          </label>
        </div>

        <div className="form-group">
          <label>e-Signature *</label>
          <input
            type="text"
            name="eSignature"
            value={formData.eSignature}
            onChange={handleChange}
            placeholder="Type your full name as e-signature"
            required
            className={fieldErrors.eSignature ? 'error' : ''}
          />
          {fieldErrors.eSignature && (
            <span className="error-message">{fieldErrors.eSignature}</span>
          )}
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    return null;
  }


  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="mechanic-form-modal">
        <div className="form-header">
          <h2>Mechanic Registration Form</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="step-indicator">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step-item ${
                currentStep >= step.number ? "active" : ""
              } ${currentStep === step.number ? "current" : ""}`}
            >
              <div className="step-number">
                {currentStep > step.number ? <Check size={16} /> : step.icon}
              </div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}

          <div className="form-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn-secondary"
                onClick={prevStep}
              >
                Previous
              </button>
            )}

            {currentStep < 5 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={
                  isSubmitting ||
                  !formData.paymentCompleted ||
                  !formData.agreeTerms ||
                  !formData.eSignature
                }
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
            )}
          </div>
        </form>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="payment-modal-overlay">
            <div className="payment-modal">
              <div className="payment-modal-header">
                <h3>Complete Payment</h3>
                <button onClick={() => setShowPaymentModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="payment-modal-content">
                <div className="payment-details">
                  <p>
                    Registration Fee: <strong>₹99</strong>
                  </p>
                  <p>
                    Payment Method:{" "}
                    <strong>{paymentMethod.toUpperCase()}</strong>
                  </p>
                </div>

                <div className="payment-note">
                  <p>
                    This is a demo. Razorpay integration will be implemented
                    later.
                  </p>
                </div>

                <div className="payment-modal-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={processPayment}
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Location Picker Modal */}
      <LocationPicker
        isOpen={showLocationPicker}
        onClose={() => setShowLocationPicker(false)}
        onLocationSelect={handleLocationSelect}
        initialLocation={null}
      />
    </div>
  );
};

export default MechanicRegistrationForm;
