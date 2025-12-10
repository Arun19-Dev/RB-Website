// Validation utility functions for RoadBuddy forms

export const validators = {
  // Email validation
  email: (value) => {
    if (!value) return { valid: false, error: 'Email is required' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { valid: false, error: 'Please enter a valid email address' };
    }
    return { valid: true, error: null };
  },

  // Phone number validation (10 digits)
  phone: (value) => {
    if (!value) return { valid: false, error: 'Phone number is required' };
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return { valid: false, error: 'Please enter a valid 10-digit Indian mobile number' };
    }
    return { valid: true, error: null };
  },

  // Name validation (letters, periods, and spaces only)
  name: (value) => {
    if (!value) return { valid: false, error: 'Name is required' };
    if (value.trim().length < 2) {
      return { valid: false, error: 'Name must be at least 2 characters long' };
    }
    const nameRegex = /^[a-zA-Z\s.]+$/;
    if (!nameRegex.test(value)) {
      return { valid: false, error: 'Name can only contain letters, periods, and spaces' };
    }
    return { valid: true, error: null };
  },

  // Workshop/Business name validation (letters, numbers, periods, spaces, and symbols)
  workshopName: (value) => {
    if (!value) return { valid: false, error: 'Workshop name is required' };
    if (value.trim().length < 2) {
      return { valid: false, error: 'Workshop name must be at least 2 characters long' };
    }
    // Allow letters, numbers, spaces, periods, and common symbols
    const workshopRegex = /^[a-zA-Z0-9\s.&@#\-_(),]+$/;
    if (!workshopRegex.test(value)) {
      return { valid: false, error: 'Workshop name contains invalid characters' };
    }
    return { valid: true, error: null };
  },

  // Aadhar number validation (12 digits)
  aadhar: (value) => {
    if (!value) return { valid: false, error: 'Aadhar number is required' };
    const aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(value.replace(/\s/g, ''))) {
      return { valid: false, error: 'Aadhar number must be exactly 12 digits' };
    }
    return { valid: true, error: null };
  },

  // IFSC code validation (11 characters: 4 letters, 0, 6 alphanumeric)
  ifsc: (value) => {
    if (!value) return { valid: false, error: 'IFSC code is required' };
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifscRegex.test(value.toUpperCase())) {
      return { valid: false, error: 'Please enter a valid IFSC code (e.g., SBIN0001234)' };
    }
    return { valid: true, error: null };
  },

  // UPI ID validation (format: username@provider)
  upi: (value) => {
    if (!value) return { valid: false, error: 'UPI ID is required' };
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    if (!upiRegex.test(value)) {
      return { valid: false, error: 'Please enter a valid UPI ID (e.g., name@paytm)' };
    }
    return { valid: true, error: null };
  },

  // Bank account number validation (9-18 digits)
  bankAccount: (value) => {
    if (!value) return { valid: false, error: 'Bank account number is required' };
    const accountRegex = /^\d{9,18}$/;
    if (!accountRegex.test(value.replace(/\s/g, ''))) {
      return { valid: false, error: 'Bank account number must be 9-18 digits' };
    }
    return { valid: true, error: null };
  },

  // GST number validation (15 characters, optional)
  gst: (value) => {
    if (!value) return { valid: true, error: null }; // Optional field
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstRegex.test(value.toUpperCase())) {
      return { valid: false, error: 'Please enter a valid GST number (15 characters)' };
    }
    return { valid: true, error: null };
  },

  // Required field validation
  required: (value, fieldName = 'This field') => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return { valid: false, error: `${fieldName} is required` };
    }
    return { valid: true, error: null };
  },

  // File validation
  file: (file, options = {}) => {
    const {
      required = true,
      maxSize = 5 * 1024 * 1024, // 5MB default
      allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'],
      fieldName = 'File'
    } = options;

    if (!file) {
      if (required) {
        return { valid: false, error: `${fieldName} is required` };
      }
      return { valid: true, error: null };
    }

    // Check file size
    if (file.size > maxSize) {
      return { valid: false, error: `${fieldName} must be less than ${maxSize / (1024 * 1024)}MB` };
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: `${fieldName} must be a JPG, PNG, or PDF file` };
    }

    return { valid: true, error: null };
  },

  // Date of birth validation (must be 18+ years old, proper format)
  dateOfBirth: (value) => {
    if (!value) return { valid: false, error: 'Date of birth is required' };
    
    // Check if date format is valid (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
      return { valid: false, error: 'Please enter date in YYYY-MM-DD format' };
    }
    
    const dob = new Date(value);
    
    // Check if date is valid
    if (isNaN(dob.getTime())) {
      return { valid: false, error: 'Please enter a valid date' };
    }
    
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      return { valid: false, error: 'You must be at least 18 years old' };
    }

    if (age > 100) {
      return { valid: false, error: 'Please enter a valid date of birth' };
    }

    return { valid: true, error: null };
  },

  // Array validation (at least one item selected)
  arrayNotEmpty: (value, fieldName = 'This field') => {
    if (!Array.isArray(value) || value.length === 0) {
      return { valid: false, error: `Please select at least one ${fieldName}` };
    }
    return { valid: true, error: null };
  },

  // Time validation
  time: (value, fieldName = 'Time') => {
    if (!value) return { valid: false, error: `${fieldName} is required` };
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(value)) {
      return { valid: false, error: `Please enter a valid ${fieldName.toLowerCase()} (HH:MM)` };
    }
    return { valid: true, error: null };
  },

  // Address validation (can contain any text, numbers, symbols)
  address: (value) => {
    if (!value) return { valid: false, error: 'Address is required' };
    if (value.trim().length < 10) {
      return { valid: false, error: 'Please enter a complete address (minimum 10 characters)' };
    }
    return { valid: true, error: null };
  }
};

// Helper function to validate entire form
export const validateForm = (formData, validationRules) => {
  const errors = {};
  let isValid = true;

  Object.keys(validationRules).forEach(field => {
    const rules = validationRules[field];
    const value = formData[field];

    for (const rule of rules) {
      const result = rule(value);
      if (!result.valid) {
        errors[field] = result.error;
        isValid = false;
        break; // Stop at first error for this field
      }
    }
  });

  return { isValid, errors };
};

// Format phone number for display
export const formatPhone = (value) => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 10) {
    return cleaned;
  }
  return cleaned.slice(0, 10);
};

// Format Aadhar number for display
export const formatAadhar = (value) => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 4) return cleaned;
  if (cleaned.length <= 8) return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
  return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8, 12)}`;
};

// Format IFSC code for display
export const formatIFSC = (value) => {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 11);
};
