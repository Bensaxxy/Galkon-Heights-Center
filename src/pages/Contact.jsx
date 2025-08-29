import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl md:max-w-6xl 2xl:max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            We are here to help you with all your printing, photocopying, and
            training needs.
          </p>
          <p>
            <span className="font-medium">📍 Address:</span> A2 (room oo1) Grand
            Floor, Block C, Near FRSC Office, Phase II, Federal Secretariat
            Complex, Abuja.
          </p>
          <p>
            <span className="font-medium">📞 Phone:</span> +234 810 569 1875
          </p>
          <p>
            <span className="font-medium">✉️ Email:</span> galkon2018@gmail.com
          </p>
        </div>

        {/* Google Map (Optional Embed) */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7880.105359532959!2d7.5018657246694485!3d9.058959624029677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1756469522027!5m2!1sen!2sng"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-64 border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
