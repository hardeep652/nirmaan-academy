"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "DDCET Preparation",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      course: "DDCET Preparation",
      message: "",
    });
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <section id="contact" className="section-space section-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Get In Touch" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            Contact Us
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-soft)" }}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <PremiumCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option>DDCET Preparation</option>
                    <option>Engineering Tuition</option>
                    <option>Admission Guidance</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
                >
                  Send Inquiry
                </button>
              </form>
            </PremiumCard>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card */}
            <PremiumCard>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                <span className="text-[#ff7a00]">Academy</span> Information
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm mt-1">
                      +91 00000 00000
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm mt-1">
                      info@nirmaanacademy.in
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button className="w-full mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <i className="bi bi-whatsapp"></i> WhatsApp Us
              </button>
            </PremiumCard>

            {/* Map Placeholder */}
            <PremiumCard className="min-h-72">
              <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-blue-300 rounded-lg bg-gradient-to-br from-blue-100 to-orange-100 text-gray-400 font-semibold">
                Google Maps Location
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
