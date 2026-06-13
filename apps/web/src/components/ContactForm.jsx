import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
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

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();

      formPayload.append(
        "access_key",
        "2dd0ad94-2df3-47b5-b7d5-3944fa0fb676"
      );

      formPayload.append(
        "subject",
        "New Contact Form Lead - Sivaraa Infotech"
      );

      formPayload.append(
        "from_name",
        "Sivaraa Infotech Website"
      );

      formPayload.append(
        "Full Name",
        formData.fullName
      );

      formPayload.append(
        "Email",
        formData.email
      );

      formPayload.append(
        "Phone",
        formData.phone
      );

      formPayload.append(
        "Company",
        formData.company
      );

      formPayload.append(
        "Service",
        formData.service
      );

      formPayload.append(
        "Budget",
        formData.budgetRange
      );

      formPayload.append(
        "Project Details",
        formData.projectDetails
      );

      formPayload.append(
        "Newsletter Subscription",
        formData.subscribe ? "Yes" : "No"
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formPayload
        }
      );

      const result = await response.json();

      if (result.success) {

        toast.success(
          "Thank you! Your message has been sent successfully."
        );

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budgetRange: '',
          projectDetails: '',
          subscribe: false
        });

      } else {

        toast.error(
          result.message || "Something went wrong."
        );

      }

    } catch (error) {

      toast.error(
        "Failed to send message. Please try again."
      );

      console.error(error);

    } finally {

      setIsSubmitting(false);

    }
  };

  const inputClasses = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-white
    px-4
    py-3
    text-slate-800
    placeholder:text-slate-400
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-500/20
    focus:border-cyan-500
    transition-all
    duration-300
  `;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@company.com"
            required
          />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+91 98765 43210"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Company
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your Company Ltd."
          />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Service Interested In
          </label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">
              Select a service...
            </option>

            <option value="360-tours">
              360° Virtual Tours
            </option>

            <option value="crm">
              Plot Management CRM
            </option>

            <option value="drone">
              Drone Cinematics
            </option>

            <option value="maps">
              Interactive Smart Maps
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Budget Range
          </label>

          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">
              Select budget...
            </option>

            <option value="under-50k">
              Under ₹50,000
            </option>

            <option value="50k-2lakh">
              ₹50,000 - ₹2,00,000
            </option>

            <option value="over-2lakh">
              Over ₹2,00,000
            </option>
          </select>
        </div>

      </div>

      <div>

        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Project Details *
        </label>

        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows="5"
          className={inputClasses}
          placeholder="Tell us about your project requirements..."
          required
        />

      </div>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
          className="w-5 h-5"
        />

        <label
          htmlFor="subscribe"
          className="text-sm text-slate-600 cursor-pointer"
        >
          Subscribe to updates and newsletters
        </label>

      </div>

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
          shadow-[0_0_25px_rgba(34,211,238,0.35)]
        "
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

    </form>
  );
}

export default ContactForm;