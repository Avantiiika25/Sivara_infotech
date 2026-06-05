
import { toast } from 'sonner';

export const FormSubmissionHandler = {
  validate: (formData, requiredFields) => {
    const errors = {};
    
    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].toString().trim() === '') {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (formData.phone && !/^[0-9+\s-()]{10,}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  submit: async (formData, formType) => {
    try {
      const timestamp = new Date().toISOString();
      const submissionKey = `${formType}_${timestamp}`;
      
      const submission = {
        ...formData,
        timestamp,
        formType,
        status: 'pending',
        followUpStatus: 'New'
      };

      // 1. Backup to LocalStorage
      localStorage.setItem(submissionKey, JSON.stringify(submission));
      const allSubmissions = FormSubmissionHandler.getAllSubmissions(formType);
      allSubmissions.push(submission);
      localStorage.setItem(`${formType}_all`, JSON.stringify(allSubmissions));

      // 2. Mock EmailJS / Google Sheets Integration
      // In a real scenario, we would use emailjs.send() and axios.post() here.
      // Since no real backend/keys are provided, we simulate the network delay.
      await new Promise(resolve => setTimeout(resolve, 1500));

      return {
        success: true,
        message: formType === 'crm_demo' 
          ? 'Thank you! Your demo request has been received. Our team will contact you shortly.'
          : 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.',
        submissionId: submissionKey
      };
    } catch (error) {
      console.error('Submission Error:', error);
      return {
        success: false,
        message: 'Failed to submit form. Please try again or contact us directly.',
        error: error.message
      };
    }
  },

  getAllSubmissions: (formType) => {
    try {
      const stored = localStorage.getItem(`${formType}_all`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  clearForm: (formRef) => {
    if (formRef && formRef.current) {
      formRef.current.reset();
    }
  }
};
