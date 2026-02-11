import { useState } from "react";

const PasswordSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = () => {
    // Handle password update logic here
    console.log("Updating password...");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Handle account deletion logic here
      console.log("Deleting account...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Change Password Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Change Password
          </h2>

          <div className="space-y-5">
            {/* Current Password */}
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current Password
              </label>
              <input
                id="current-password"
                type="password"
                placeholder="Enter your current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Update Button */}
            <button
              onClick={handleUpdatePassword}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200"
            >
              Update password
            </button>
          </div>
        </div>

        {/* Delete Account Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Delete your account
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            By deleting your account, you'll no longer be able to access any of
            your designs or log in to memorii.
          </p>

          <button
            onClick={handleDeleteAccount}
            className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-2.5 rounded-lg border border-gray-300 transition-colors duration-200"
          >
            Delete account
          </button>
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-sm text-gray-500">
            Copyright @ AVA 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PasswordSettings;
