import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ArrowRight, Loader2 } from 'lucide-react';

function DemoRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key:
              '2dd0ad94-2df3-47b5-b7d5-3944fa0fb676',

            subject:
              'New CRM Demo Request - Sivaraa Infotech',

            from_name: 'CRM Demo Request Form',

            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            requirements: formData.requirements,
          }),
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        toast.success(
          'Demo request submitted successfully!'
        );

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          requirements: '',
        });
      } else {
        toast.error(
          result.message || 'Failed to send request'
        );
      }
    } catch (error) {
      console.error(error);

      toast.error(
        'Something went wrong. Please try again.'
      );
    }

    setIsSubmitting(false);
  };

  const inputClasses = `
    w-full
    rounded-2xl
    border
    border-slate-200
    bg-slate-50
    px-4
    py-3.5
    text-slate-900
    placeholder:text-slate-400
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-500/30
    focus:border-cyan-500
    transition-all
    duration-300
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Full Name *"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Work Email *"
          required
        />

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Phone Number *"
          required
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Company / Project Name"
        />

      </div>

      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        rows="4"
        className={inputClasses}
        placeholder="Tell us about your project requirements..."
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full
          py-6
          text-lg
          font-semibold
          bg-cyan-500
          hover:bg-cyan-600
          text-white
          rounded-xl
          transition-all
          duration-300
          hover:scale-[1.02]
          shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            Request Free Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}

export default DemoRequestForm;