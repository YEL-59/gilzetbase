import React from "react";

const ProfileSettingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Profile & Settings
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Manage your account information and preferences.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Profile Photo */}
          <div className="mb-10">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              Profile Photo
            </h2>
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://via.placeholder.com/150" // Replace with actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Remove photo
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Change photo
                </button>
              </div>
            </div>
          </div>

          {/* First Name */}
          <div className="mb-8">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <div className="flex items-center gap-4">
              <input
                id="firstName"
                type="text"
                defaultValue="Ratree"
                className="flex-1 px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
              <button className="px-6 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition">
                Save
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Bio (optional)
            </label>
            <p className="text-xs text-amber-600 mb-2">
              * Mandatory if you win an award
            </p>
            <textarea
              id="bio"
              rows="4"
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button className="px-6 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition">
                Save Bio
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label
                htmlFor="instagram"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Instagram username or link
              </label>
              <input
                id="instagram"
                type="text"
                placeholder="@username or https://..."
                className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Website URL
              </label>
              <input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <div className="flex justify-end mb-8 pt-4 border-t border-gray-100">
            <button className="px-8 py-3 text-sm font-bold text-white bg-amber-500 rounded-lg hover:bg-amber-600 shadow-md transition-all active:scale-95">
              Update Profile Information
            </button>
          </div>

          {/* Email */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">example@gmail.com</span>
              <button className="px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition">
                Change Email
              </button>
            </div>
          </div>

          {/* Country */}
          <div className="mb-8">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option>United States</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Language */}
          <div className="mb-8">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Language
            </label>
            <select
              id="language"
              className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option>English</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-gray-500">
          Copyright © AWA 2025. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
