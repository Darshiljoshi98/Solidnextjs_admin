"use client";
import React, { useState } from "react";

export default function AddDataForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic for saving the data
    console.log("Form Submitted", formData);

    try {
      const response = await fetch("/api/Feedback", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          clientname: formData.name,
          clientDesignation: formData.designation,
          clientFeedback: formData.content
        }),
      });
      if (response.status === 200) {
        alert("feedback add")
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" bg-gray-50 flex ">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white shadow-md rounded-lg px-8 py-10 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Add New Record
        </h2>
        <p className="text-gray-500 text-sm text-center">
          Fill out the details below to add or update a record.
        </p>

        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            placeholder="Enter the person's name"
            required
          />
        </div>

        {/* Designation Field */}
        <div className="space-y-2">
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-gray-600"
          >
            Designation
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            placeholder="Enter the designation"
            required
          />
        </div>

        {/* Content Field */}
        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
            placeholder="Enter the testimonial or content"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Save Record
          </button>
        </div>
      </form>
    </div>
  );
}
