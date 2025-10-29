import React, { useState } from "react";

// Input Field Component for reusability
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows = 1,
  formData,
  handleChange,
  errors,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {rows > 1 ? (
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 resize-none`}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-shadow duration-200`}
      />
    )}
    {errors[name] && (
      <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
    )}
  </div>
);

const DeliveryAddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zipCode: "",
    deliveryInstructions: "",
  });

  const [errors, setErrors] = useState({});

  // Basic form validation (simplified for demo)
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "A valid 10-digit phone number is required.";
    if (!formData.addressLine1)
      newErrors.addressLine1 = "Street Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.zipCode || !/^\d{6}$/.test(formData.zipCode))
      newErrors.zipCode = "A valid 6-digit zip code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send formData to your backend here
      console.log("Address saved successfully:", formData);
      alert("Address Saved! (Check console for data)");
      // You would typically navigate to the payment screen after this
    } else {
      console.error("Validation failed", errors);
    }
  };

  return (
    // <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex justify-center items-start pt-10">
    <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        Delivery Address
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Full Name"
            name="fullName"
            placeholder="E.g., Jane Doe"
            required
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="10 digit number"
            required
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>

        {/* Address Fields */}
        <InputField
          label="Street Address / House Number"
          name="addressLine1"
          placeholder="E.g., 123 Main St, Apt 4B"
          required
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <InputField
          label="Landmark / Building Name (Optional)"
          name="addressLine2"
          placeholder="E.g., Near City Hospital"
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        {/* City and Zip Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="City"
            name="city"
            placeholder="E.g., New Delhi"
            required
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <InputField
            label="Zip Code"
            name="zipCode"
            placeholder="E.g., 110001"
            required
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>

        {/* Delivery Instructions */}
        <InputField
          label="Delivery Instructions (Optional)"
          name="deliveryInstructions"
          placeholder="E.g., Leave order at the front desk, ring bell twice."
          rows={3}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        {/* Save/Continue Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Address & Continue
        </button>
      </form>
    </div>
    // </div>
  );
};

export default DeliveryAddressForm;
