
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FormSubmissionHandler } from '@/utils/FormSubmissionHandler';
import { ArrowRight, Loader2 } from 'lucide-react';

function DemoRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', company: '', requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requiredFields = ['fullName', 'email', 'phone'];
    const validation = FormSubmissionHandler.validate(formData, requiredFields);

    if (!validation.isValid) {
      Object.values(validation.errors).forEach(error => toast.error(error));
      setIsSubmitting(false);
      return;
    }

    const result = await FormSubmissionHandler.submit(formData, 'crm_demo');

    if (result.success) {
      toast.success(result.message);
      setFormData({ fullName: '', email: '', phone: '', company: '', requirements: '' });
    } else {
      toast.error(result.message);
    }
    setIsSubmitting(false);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses} placeholder="Full Name *" required />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="Work Email *" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="Phone Number *" required />
        </div>
        <div>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Company Name" />
        </div>
      </div>
      <div>
        <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows="3" className={inputClasses} placeholder="Briefly describe your current plot management challenges..." />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg font-medium bg-primary hover:bg-emerald-600 text-white shadow-[0_0_20px_rgba(0,168,107,0.3)] transition-all">
        {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Scheduling...</> : <>Request Demo <ArrowRight className="w-5 h-5 ml-2" /></>}
      </Button>
    </form>
  );
}

export default DemoRequestForm;
