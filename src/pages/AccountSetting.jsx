import React, { useState, useRef } from "react";

const AccountSettings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[340px] border-solid border-[2px] h-[100vh] bg-neutral-100 shadow-lg w-full">
        <h2 className="text-[20px] font-bold text-gray-800 h-[70px] bg-white mb-8 flex items-center px-2">
          Account Settings
        </h2>
        <div className="flex items-center px-2 mb-8">
          <div className="relative">
            <img
              src={
                profileImage
                  ? profileImage
                  : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg"
              }
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mr-6"
            />
            <button
              onClick={handleCameraClick}
              className="absolute bottom-0 right-4 bg-purple-600 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="text-gray-600 px-2 space-y-3">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitz.Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat.Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
