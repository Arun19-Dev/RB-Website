// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// API Service for RoadBuddy Backend
class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // Helper method for handling responses
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
      
      // Handle FastAPI validation errors (array format)
      if (Array.isArray(error.detail)) {
        const errorMessages = error.detail.map(err => {
          const field = err.loc?.slice(1).join(' > ') || 'Field';
          return `${field}: ${err.msg}`;
        }).join('; ');
        throw new Error(errorMessages);
      }
      
      // Handle string or object errors
      const errorMessage = typeof error.detail === 'string' 
        ? error.detail 
        : error.message || `HTTP error! status: ${response.status}`;
      
      throw new Error(errorMessage);
    }
    return response.json();
  }

  // Contact Form Submission
  async submitContactForm(formData) {
    const { name, email, phone, serviceType, urgency, message } = formData;
    
    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || firstName;

    const payload = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone || '',
      email: email,
      subject: null,
      service_type: serviceType || null,
      urgency: urgency || null,
      message: message
    };

    const response = await fetch(`${this.baseURL}/contact_form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return this.handleResponse(response);
  }

  // Newsletter Subscription
  async subscribeNewsletter(email) {
    const response = await fetch(`${this.baseURL}/subscribe?email=${encodeURIComponent(email)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse(response);
  }

  // Driver Registration
  async registerDriver(formData) {
    const payload = new FormData();

    // Map frontend fields to backend fields
    payload.append('full_name', formData.fullName);
    payload.append('date_of_birth', formData.dateOfBirth);
    payload.append('gender', formData.gender);
    payload.append('contact_number', formData.contactNumber);
    if (formData.email) payload.append('email', formData.email);
    payload.append('address', formData.address);
    payload.append('emergency_contact_name', formData.emergencyContactName);
    payload.append('emergency_contact_number', formData.emergencyContactNumber);
    
    // Driving details
    payload.append('license_type', formData.licenseType);
    payload.append('experience_level', formData.drivingExperience);
    payload.append('vehicle_expertise', JSON.stringify(formData.vehicleExpertise));
    payload.append('languages', formData.languages);
    payload.append('preferred_working_time', formData.workTime);
    payload.append('avail_on_short_notice', formData.shortNotice === 'yes');
    
    // Documents
    if (formData.photo) payload.append('passport_size_photo', formData.photo);
    if (formData.aadharFront) payload.append('aadhar_front_photo', formData.aadharFront);
    if (formData.aadharBack) payload.append('aadhar_back_photo', formData.aadharBack);
    if (formData.licenseFront) payload.append('driving_license_front_photo', formData.licenseFront);
    if (formData.licenseBack) payload.append('driving_license_back_photo', formData.licenseBack);
    if (formData.panCard) payload.append('pan_card_photo', formData.panCard);
    if (formData.policeVerification) payload.append('police_verification_certificate', formData.policeVerification);
    
    // Payment details
    payload.append('upi_id', formData.upiId);
    if (formData.bankAccount) payload.append('bank_account_number', formData.bankAccount);
    if (formData.ifscCode) payload.append('ifsc_code', formData.ifscCode);
    if (formData.accountHolderName) payload.append('account_holder_name', formData.accountHolderName);
    
    // Declaration
    payload.append('is_terms_accepted', formData.agreeTerms);
    payload.append('esignature', formData.eSignature);

    const response = await fetch(`${this.baseURL}/register-driver`, {
      method: 'POST',
      body: payload,
    });

    return this.handleResponse(response);
  }

  // Mechanic Registration
  async registerMechanic(formData) {
    const payload = new FormData();

    // Personal & Workshop Details
    payload.append('full_name', formData.fullName);
    payload.append('business_name', formData.workshopName);
    payload.append('workshop_type', formData.workshopType);
    payload.append('contact_number', formData.contactNumber);
    payload.append('email', formData.email || '');  // Always send email, even if empty
    payload.append('aadhar_number', formData.aadharNumber);
    if (formData.gstNumber) payload.append('gst_number', formData.gstNumber);
    payload.append('address', formData.address);
    
    // Work & Service Details
    payload.append('experience', formData.yearsOfExperience);
    
    // Services offered - send as array
    formData.servicesOffered.forEach(service => {
      payload.append('services_offered', service);
    });
    
    payload.append('opening_time', formData.openingTime);
    payload.append('closing_time', formData.closingTime);
    
    // Working days - always send, even if empty array
    if (formData.workingDays && formData.workingDays.length > 0) {
      formData.workingDays.forEach(day => {
        payload.append('working_days', day);
      });
    }
    // Note: Backend should handle empty working_days when available_24x7 is true
    
    payload.append('workshop_location', formData.workshopLocation);
    payload.append('is_travel_willing', formData.travelToCustomer);
    
    // New fields
    if (formData.vehicleTypes && formData.vehicleTypes.length > 0) {
      payload.append('vehicle_types', JSON.stringify(formData.vehicleTypes));
    }
    payload.append('available_24x7', formData.available24x7);
    if (formData.serviceRadius) {
      payload.append('service_radius', formData.serviceRadius);
    }
    
    // Documents
    if (formData.photo) payload.append('passport_size_photo', formData.photo);
    if (formData.aadharFront) payload.append('aadhar_front_photo', formData.aadharFront);
    if (formData.aadharBack) payload.append('aadhar_back_photo', formData.aadharBack);
    if (formData.mechanicCertification) payload.append('mechanic_registration_certificate', formData.mechanicCertification);
    if (formData.workshopPhoto) payload.append('workshop_photo', formData.workshopPhoto);
    
    // Payment details
    if (formData.upiId) payload.append('upi_id', formData.upiId);
    payload.append('bank_account_number', formData.bankAccount);
    payload.append('bank_name', formData.bankName || formData.accountHolderName);
    payload.append('ifsc_code', formData.ifscCode);
    payload.append('account_holder_name', formData.accountHolderName);
    
    // Declaration
    payload.append('is_terms_accepted', formData.agreeTerms);
    payload.append('esignature', formData.eSignature);

    const response = await fetch(`${this.baseURL}/register-mechanic`, {
      method: 'POST',
      body: payload,
    });

    return this.handleResponse(response);
  }

  // Submit Issue Report
  async submitIssueReport(formData) {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      issue_type: formData.issueType,
      priority: formData.priority,
      subject: formData.subject,
      description: formData.description,
    };

    const response = await fetch(`${this.baseURL}/api/issue-reports/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return this.handleResponse(response);
  }
}

// Export singleton instance
const apiService = new APIService(API_BASE_URL);
export default apiService;
