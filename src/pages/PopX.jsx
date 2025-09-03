import { Link } from "react-router";
const PopX = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to PopX</h1>
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-600 mb-8">consectetur adipiscing elit.</p>
        <Link to="/signup" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 mb-4">
          Create Account
        </Link>
        <div className="text-center">
          <Link to="/login" className="text-purple-600 font-medium hover:text-purple-800">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default PopX;