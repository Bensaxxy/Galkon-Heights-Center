import React from "react";

const Training = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Training Programs</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Training */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-3">Basic Training</h2>
          <p className="text-gray-600 mb-3">
            Duration: <span className="font-medium">3 Months</span>
          </p>
          <p className="text-gray-600 mb-6">
            Learn the fundamentals of computer usage, MS Office (Word, Excel,
            PowerPoint), and basic printing/photocopying operations.
          </p>
          <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>

        {/* Advanced Training */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-3">Advanced Training</h2>
          <p className="text-gray-600 mb-3">
            Duration: <span className="font-medium">6 Months</span>
          </p>
          <p className="text-gray-600 mb-6">
            Gain advanced knowledge in desktop publishing, graphics design and
            professional document preparation.
          </p>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
