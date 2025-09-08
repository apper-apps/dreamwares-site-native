import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for your interest! We'll contact you within 24 hours.");
      setFormData({ name: "", email: "", company: "", projectDetails: "" });
      setErrors({});
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", company: "", projectDetails: "" });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
<div className="relative w-full max-w-md bg-surface border border-gray-600 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Let's Discuss Your Project</h2>
          <button
            onClick={handleClose}
            className="p-2 text-muted hover:text-white transition-colors rounded-lg hover:bg-primary/10"
          >
            <ApperIcon name="X" size={20} />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name Field */}
          <div>
<label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-600 hover:border-primary/50 focus:border-primary'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
<label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-600 hover:border-primary/50 focus:border-primary'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.company ? 'border-red-500' : 'border-gray-600 hover:border-primary/50 focus:border-primary'
              }`}
              placeholder="Your company name"
            />
            {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company}</p>}
          </div>

          {/* Project Details Field */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                errors.projectDetails ? 'border-red-500' : 'border-gray-600 hover:border-primary/50 focus:border-primary'
              }`}
              placeholder="Tell us about your project requirements, timeline, and goals..."
            />
            {errors.projectDetails && <p className="mt-1 text-sm text-red-400">{errors.projectDetails}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <ApperIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ApperIcon name="Send" className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;