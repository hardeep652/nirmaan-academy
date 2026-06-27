"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter a valid name (min 2 characters)";
    }

    const phoneClean = formData.phone.replace(/[\s\-]/g, "");
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    const message = `Hello Nirmaan Academy,%0A%0AName: ${formData.fullName}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917043412251?text=${message}`, "_blank");
    setIsSubmitting(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border transition-colors outline-none ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-300 focus:border-orange-500"
    }`;

  return (
    <section id="contact" className="section-space section-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionBadge text="Get In Touch" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            Contact Us
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-soft)" }}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <PremiumCard>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass("fullName")}
                    placeholder="Your Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Your message (min 10 characters)..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </PremiumCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <PremiumCard>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                <span className="text-[#ff7a00]">Academy</span> Information
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl text-blue-600 shrink-0">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      21, 3rd Floor, Shree Ratna Complex,<br />
                      Opp. Krishna Nagar Society,<br />
                      Near, Akhbar Nagar Cir,<br />
                      Ahmedabad, Gujarat 380013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl text-blue-600 shrink-0">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm mt-1">
                      <a href="tel:+917043412251" className="hover:text-blue-600 transition-colors">+91 7043412251</a><br />
                      <a href="tel:+919106558028" className="hover:text-blue-600 transition-colors">+91 9106558028</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl text-blue-600 shrink-0">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:nirmaanacademy7@gmail.com"
                      className="text-gray-600 text-sm mt-1 hover:text-blue-600 transition-colors"
                    >
                      nirmaanacademy7@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917043412251?text=Hello%20Nirmaan%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <i className="bi bi-whatsapp"></i> WhatsApp Us
              </a>
            </PremiumCard>

            <PremiumCard className="min-h-60 sm:min-h-72 p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939!2d72.54465!3d23.065139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8378b8b89a81%3A0x37c3bbdaaedf6e1f!2sNirmaan+Academy!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "240px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nirmaan Academy Location"
              />
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
