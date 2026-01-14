// src/pages/ContactUs.jsx
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yaha real backend call daal sakte ho (emailjs, formspree, firebase, etc)
    // Abhi demo ke liye fake success dikha rahe hain
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus({
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          error: true,
          message: "Please fill in all required fields.",
        });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero / Page Title */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact SportlyRadar
          </h1>
          <p className="text-lg md:text-xl text-center text-blue-100 max-w-3xl mx-auto opacity-90">
            Have questions about cricket, football, kabaddi, or any other sport?  
            Want to collaborate or report an issue? We're here to help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">support@sportlyradar.com</p>
                    <p className="text-gray-600 text-sm mt-1">We usually reply within 24 hours</p>
                  </div>
                </div>

                {/* Phone (optional - agar real number daalna ho to) */}
                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm mt-1">Mon–Sat: 10 AM – 7 PM IST</p>
                  </div>
                </div> */}

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      SportlyRadar Team<br />
                      Kanpur, Uttar Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://twitter.com/sportlyradar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/sportlyradar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-pink-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.225.223 2.692.072 7.05.014 8.33 0 8.738 0 12c0 3.262.014 3.67.072 4.95.15 4.358 2.623 6.825 6.981 6.977 1.28.058 1.688.072 4.949.072 3.262 0 3.67-.014 4.95-.072 4.358-.15 6.825-2.623 6.977-6.981.058-1.28.072-1.688.072-4.949 0-3.262-.014-3.67-.072-4.95-.15-4.358-2.623-6.825-6.981-6.977C15.67.014 15.262 0 12 0z"/>
                      <circle cx="12" cy="12" r="3.5"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/sportlyradar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${
                  formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="e.g. Feedback, Bug Report, Partnership, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-6 text-center md:text-left">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}