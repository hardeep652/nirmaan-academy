"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InstantCallback() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Nirmaan Academy,%0A%0A${formData.name} would like an instant callback.%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/917043412251?text=${message}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
    }, 4000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full gradient-orange text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow"
      >
        <i className="bi bi-telephone-fill text-lg"></i>
        <span className="hidden sm:inline">Call Me in 5 Mins</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 right-6 sm:bottom-auto sm:right-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-[calc(100vw-3rem)] sm:w-[400px] bg-white rounded-[var(--radius-lg)] shadow-2xl z-[70] overflow-hidden"
            >
              {/* Mobile Transform Override using CSS classes for responsive positioning */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50 pointer-events-none" />
              
              <div className="relative p-6 sm:p-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="bi bi-x-lg"></i>
                </button>

                {!isSubmitted ? (
                  <>
                    <div className="mb-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
                        <i className="bi bi-clock-fill text-2xl"></i>
                      </div>
                      <h3 className="text-xl font-bold text-[#062b5b]">
                        Instant Callback
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Enter your details and an admission counselor will call you back within 5 minutes.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#062b5b] mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-white/80"
                          placeholder="e.g. Rahul Patel"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#062b5b] mb-1">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-white/80"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg gradient-orange text-white font-bold hover:shadow-lg transition-shadow mt-2"
                      >
                        Request Callback Now
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <i className="bi bi-check-lg text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#062b5b] mb-2">
                      Request Received!
                    </h3>
                    <p className="text-gray-600">
                      Thank you! One of our admission counselors will call you at{" "}
                      <span className="font-semibold text-gray-800">{formData.phone}</span> in the next 5 minutes.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
