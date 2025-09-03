import { Link } from "react-router";
const PopX = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white max-w-[340px] flex items-end border-solid border-[2px] h-[100vh] p-4 w-full">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet , consectetur adipiscing elit.</p>
          <Link
            to="/signup"
            className="block text-center w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 mb-4"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="block text-center w-full bg-purple-200 text-neutral-800 py-3 rounded-lg font-semibold"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopX;
