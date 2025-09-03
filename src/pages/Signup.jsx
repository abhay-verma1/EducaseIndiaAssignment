import { InputField , RadioOption } from "../components/InputField";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 max-w-[340px] border-solid border-[2px] h-[100vh] w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Create your</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">PopX account</h1>
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
            required
          />
          
          <InputField
            label="Phone number"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            required
          />
          
          <InputField
            label="Email address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
          
          <InputField
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          />
          
          <InputField
            label="Company name"
            value={formData.companyName}
            onChange={handleChange}
            name="companyName"
          />
          
          <RadioOption
            name="agency"
            options={['Yes', 'No']}
            selected={formData.isAgency}
            onChange={handleRadioChange}
            label="Are you an Agency?"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 mt-[120px]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;