import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Training = () => {
  const [showForm, setShowForm] = useState(null); // which program is being enrolled
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (program, duration, amount) => {
    const templateParams = {
      program_name: program,
      program_duration: duration,
      program_amount: amount,
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_TRAINING_ID, // your EmailJS template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success(`✅ Successfully enrolled in ${program}!`);
        setFormData({ name: "", email: "", phone: "" });
        setShowForm(null);
      })
      .catch(() => {
        toast.error("❌ Failed to enroll. Please try again.");
      });
  };

  const handleSubmit = (e, program, duration, amount) => {
    e.preventDefault();
    sendEmail(program, duration, amount);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Training Programs</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Training */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-3">Basic Training</h2>
          <p className="text-gray-600 mb-2">
            Duration: <span className="font-medium">3 Months</span>
          </p>
          <p className="text-gray-600 mb-2">
            Fee: <span className="font-medium">₦80,000</span>
          </p>
          <p className="text-gray-600 mb-6">
            Learn the fundamentals of computer usage, MS Office (Word, Excel,
            PowerPoint), and basic printing/photocopying operations.
          </p>
          <button
            onClick={() => setShowForm("basic")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>
        </div>

        {/* Advanced Training */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-3">Advanced Training</h2>
          <p className="text-gray-600 mb-2">
            Duration: <span className="font-medium">6 Months</span>
          </p>
          <p className="text-gray-600 mb-2">
            Fee: <span className="font-medium">₦200,000</span>
          </p>
          <p className="text-gray-600 mb-6">
            Gain advanced knowledge in desktop publishing, graphics design,
            professional document preparation and introduction to web etc...
          </p>
          <button
            onClick={() => setShowForm("advanced")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Enrollment Form */}
      {/* Enrollment Form as Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 shadow-lg rounded-xl max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">
              Enroll in{" "}
              {showForm === "basic" ? "Basic Training" : "Advanced Training"}
            </h2>
            <form
              onSubmit={(e) =>
                handleSubmit(
                  e,
                  showForm === "basic" ? "Basic Training" : "Advanced Training",
                  showForm === "basic" ? "3 Months" : "6 Months",
                  showForm === "basic" ? "₦80,000" : "₦200,000"
                )
              }
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
                >
                  Submit Enrollment
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(null)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Training;
