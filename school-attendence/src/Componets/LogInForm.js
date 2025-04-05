import { useState } from "react";
import LoginImge from  "../Images/LoginImg.jpg";
export default function LoginPage() {
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-2xl grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <div>
          <img src={LoginImge} alt="My Image"  className="w-full rounded-lg"/>;
        </div>

        {/* Right Side - Form */}
        <div>
          {!showOtp ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowOtp(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block font-medium flex justify-left">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block font-medium flex justify-left">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block font-medium flex justify-left">User Type</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Student</option>
                  <option>Teacher</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block font-medium">Enter OTP</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
