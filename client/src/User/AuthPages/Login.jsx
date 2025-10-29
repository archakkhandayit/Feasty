import React, { useState } from 'react';

// Input Field Component for reusability (copied from SignUpForm for consistency)
const InputField = ({ label, name, type = 'text', placeholder, required = false, formData, handleChange, errors }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-3 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-shadow duration-200`}
    />
    {errors[name] && <p className="mt-1 text-xs text-red-600 font-medium">{errors[name]}</p>}
  </div>
);
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call delay for login
      setTimeout(() => {
        setIsSubmitting(false);
        console.log('User logged in successfully:', {
          email: formData.email,
        });
        alert('Login Successful! Welcome back to Feasty!');
        // In a real app, you would redirect the user to the dashboard.
      }, 1500);
    } else {
      setIsSubmitting(false);
      console.error('Validation failed', errors);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 md:p-10 transform hover:scale-[1.01] transition-transform duration-300">
        
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-2">Feasty</h2>
        <p className="text-xl text-gray-600 mb-8 border-b pb-4">Log in to your account</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <InputField 
            label="Email Address" 
            name="email" 
            type="email" 
            placeholder="john@example.com" 
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            required
            />
          <InputField 
            label="Password" 
            name="password" 
            type="password" 
            placeholder="Enter your password" 
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            required 
          />
          
          {/* Forgot Password Link */}
          {/* For future implementation */}

          {/* <div className="text-right text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot Password?
            </a>
          </div> */}


          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg mt-6 flex items-center justify-center disabled:bg-indigo-400"
          >
            {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'Log In'}
          </button>
        </form>
        
        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          New to Feasty? 
          <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
            Create an account
          </a>
        </p>

      </div>
    </div>
  );
};

export default LoginForm;