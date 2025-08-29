import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Request = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Make a Request</h1>

      {submitted && (
        <p className="text-green-600 text-center mb-4">
          ✅ Your request has been submitted successfully!
        </p>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Service</label>
          <select
            name="service"
            required
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">-- Select a service --</option>
            <option value="Printing">Printing</option>
            <option value="Photocopy">Photocopy</option>
            <option value="Laminating">Laminating</option>
            <option value="Binding">Binding</option>
            <option value="Letter Head">Letter Head</option>
            <option value="Basic Training (3 Months)">
              Basic Training (3 Months)
            </option>
            <option value="Advanced Training (6 Months)">
              Advanced Training (6 Months)
            </option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Details</label>
          <textarea
            name="details"
            rows="4"
            className="w-full border rounded-lg px-3 py-2 resize-none outline-none"
            placeholder="Provide any specific details or requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Request;
