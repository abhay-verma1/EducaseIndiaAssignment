import { InputField } from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/accountsetting");
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Signin to your</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">PopX account</h1>
        
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-600 mb-8">consectetur adipiscing elit,</p>
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
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
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 mt-4"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;