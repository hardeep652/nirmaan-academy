"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

interface FormData {
  fullName: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  course: string;
  qualification: string;
  marks: string;
}

interface FormErrors {
  fullName?: string;
  parentName?: string;
  phone?: string;
  email?: string;
  address?: string;
}

const courses = [
  "DDCET",
  "Degree Engineering",
  "Diploma Engineering",
];

const getSemesters = (course: string) => {
  if (course === "Diploma Engineering") {
    return ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  }
  if (course === "Degree Engineering") {
    return ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];
  }
  return [];
};

export default function AdmissionsForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    course: courses[0],
    qualification: getSemesters(courses[0])[0] || "",
    marks: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "course") {
      const sems = getSemesters(value);
      setFormData((prev) => ({ ...prev, course: value, qualification: sems[0] || "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
    const message = `Hello Nirmaan Academy,%0A%0ANew Admission Enquiry:%0A%0AStudent Name: ${formData.fullName}%0AParent/Guardian: ${formData.parentName}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AAddress: ${formData.address}%0ACourse Interested: ${formData.course}%0ASemester: ${formData.qualification || "N/A"}%0APrevious Marks: ${formData.marks || "N/A"}`;
    window.open(`https://wa.me/917043412251?text=${message}`, "_blank");
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: "",
      parentName: "",
      phone: "",
      email: "",
      address: "",
      course: courses[0],
      qualification: getSemesters(courses[0])[0] || "",
      marks: "",
    });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border transition-colors outline-none ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-300 focus:border-orange-500"
    }`;

  if (submitted) {
    return (
      <section className="section-space section-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center"
          >
            <PremiumCard>
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Submitted!
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for applying to Nirmaan Academy. We will contact you shortly on WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
              >
                Submit Another Application
              </button>
            </PremiumCard>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space section-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Admissions Open" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            Apply for Admission
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-soft)" }}>
            Fill out the form below and we&apos;ll get back to you on WhatsApp with admission details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <PremiumCard>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass("fullName")}
                    placeholder="Student's full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className={inputClass("parentName")}
                    placeholder="Parent or guardian name"
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
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
                    Email Address
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
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass("address")} resize-none`}
                  placeholder="Full address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                    Course Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    {courses.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {formData.course !== "DDCET" && (
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                      Sem
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      {getSemesters(formData.course).map((q) => (
                        <option key={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: "var(--text-dark)" }}>
                  Previous Marks / Percentage (optional)
                </label>
                <input
                  type="text"
                  name="marks"
                  value={formData.marks}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="e.g. 85% or 8.5 CGPA"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-60 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  );
}
