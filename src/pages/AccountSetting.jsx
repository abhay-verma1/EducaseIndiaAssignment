
const AccountSettings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Account Settings</h2>
        
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl font-bold mr-6">
            MD
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="text-gray-600 space-y-3">
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing</p>
          <p>Elitz.Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
          <p>Labore Et Dolore Magna Aliquyam Erat.Sed Diam</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;