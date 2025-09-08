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
        className="absolute inset-0 bg-deep-space/90 backdrop-blur-xl"
        onClick={handleClose}
      >
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      </div>
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-void-black/95 to-cyber-dark/90 border-2 border-electric-blue/40 rounded-2xl shadow-2xl backdrop-blur-xl cyber-glow">
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/20 via-neon-cyan/20 to-holographic-purple/20 animate-pulse pointer-events-none"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-electric-blue/30 relative z-10">
          <h2 className="text-2xl font-bold text-white cyber-text-glow">Let's Discuss Your Project</h2>
          <button
            onClick={handleClose}
            className="p-3 text-cyber-silver hover:text-electric-blue transition-all duration-300 rounded-lg hover:bg-electric-blue/10 border border-electric-blue/20 hover:border-electric-blue cyber-glow-sm"
          >
            <ApperIcon name="X" size={24} />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 relative z-10">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-cyber-silver mb-3 cyber-text-subtle">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-6 py-4 bg-void-black/80 border-2 rounded-xl text-white placeholder-cyber-silver focus:outline-none focus:ring-2 transition-all duration-300 cyber-input ${
                errors.name 
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                  : 'border-electric-blue/30 hover:border-electric-blue/50 focus:border-electric-blue focus:ring-electric-blue/20'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-cyber-silver mb-3 cyber-text-subtle">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-6 py-4 bg-void-black/80 border-2 rounded-xl text-white placeholder-cyber-silver focus:outline-none focus:ring-2 transition-all duration-300 cyber-input ${
                errors.email 
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                  : 'border-electric-blue/30 hover:border-electric-blue/50 focus:border-electric-blue focus:ring-electric-blue/20'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-base font-semibold text-cyber-silver mb-3 cyber-text-subtle">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-6 py-4 bg-void-black/80 border-2 rounded-xl text-white placeholder-cyber-silver focus:outline-none focus:ring-2 transition-all duration-300 cyber-input ${
                errors.company 
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                  : 'border-electric-blue/30 hover:border-electric-blue/50 focus:border-electric-blue focus:ring-electric-blue/20'
              }`}
              placeholder="Your company name"
            />
            {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company}</p>}
          </div>

          {/* Project Details Field */}
          <div>
            <label htmlFor="projectDetails" className="block text-base font-semibold text-cyber-silver mb-3 cyber-text-subtle">
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              className={`w-full px-6 py-4 bg-void-black/80 border-2 rounded-xl text-white placeholder-cyber-silver focus:outline-none focus:ring-2 transition-all duration-300 resize-none cyber-input ${
                errors.projectDetails 
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                  : 'border-electric-blue/30 hover:border-electric-blue/50 focus:border-electric-blue focus:ring-electric-blue/20'
              }`}
              placeholder="Tell us about your project requirements, timeline, and goals..."
            />
            {errors.projectDetails && <p className="mt-2 text-sm text-red-400">{errors.projectDetails}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 cyber-button-outline"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 cyber-button-primary relative overflow-hidden group"
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? (
                  <>
                    <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ApperIcon name="Send" className="w-5 h-5 ml-2" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 animate-pulse"></div>
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;