
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FormSubmissionHandler } from '@/utils/FormSubmissionHandler';
import { Send, Loader2 } from 'lucide-react';

function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budgetRange: '',
    projectDetails: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requiredFields = ['fullName', 'email', 'phone', 'projectDetails'];
    const validation = FormSubmissionHandler.validate(formData, requiredFields);

    if (!validation.isValid) {
      Object.values(validation.errors).forEach(error => toast.error(error));
      setIsSubmitting(false);
      return;
    }

    const result = await FormSubmissionHandler.submit(formData, 'contact');

    if (result.success) {
      toast.success(result.message);
      setFormData({
        fullName: '', email: '', phone: '', company: '', service: '', budgetRange: '', projectDetails: '', subscribe: false
      });
    } else {
      toast.error(result.message);
    }
    setIsSubmitting(false);
  };

  const inputClasses = "w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses} placeholder="John Doe" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@company.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+91 98765 43210" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Your Company Ltd." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
          <select name="service" value={formData.service} onChange={handleChange} className={`${inputClasses} appearance-none bg-white`}>
            <option value="">Select a service...</option>
            <option value="360-tours">360° Virtual Tours</option>
            <option value="crm">Plot Management CRM</option>
            <option value="drone">Drone Cinematics</option>
            <option value="maps">Interactive Smart Maps</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Budget Range</label>
          <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} className={`${inputClasses} appearance-none bg-white`}>
            <option value="">Select budget...</option>
            <option value="under-50k">Under ₹50,000</option>
            <option value="50k-2lakh">₹50,000 - ₹2,00,000</option>
            <option value="over-2lakh">Over ₹2,00,000</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Project Details *</label>
        <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} rows="4" className={inputClasses} placeholder="Tell us about your project requirements..." required />
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/50" />
        <label htmlFor="subscribe" className="text-sm text-foreground font-medium cursor-pointer">Subscribe to updates and newsletters</label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-md transition-all active:scale-[0.98]">
        {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</> : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
      </Button>
    </form>
  );
}

export default ContactForm;
