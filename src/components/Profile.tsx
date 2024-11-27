import React, { useState, useEffect } from 'react';
import { useUser } from '../store/userStore';

export const Profile: React.FC = () => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const [file, setFile] = useState<File | string | null>(null);

  // Default profile picture URL
  const DEFAULT_PROFILE_PIC_URL = 'https://envs.sh/0J1.jpg';

  // Use effect to load initial avatar if available
  const [avatar, setAvatar] = useState<string | null>(user?.avatar || DEFAULT_PROFILE_PIC_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser({ name, avatar });
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // If the user selects a file, we will update the avatar with the file
      setAvatar(URL.createObjectURL(selectedFile)); // Temporarily use the file URL
      setFile(selectedFile);
    } else {
      // Reset to default if no file selected
      setAvatar(DEFAULT_PROFILE_PIC_URL);
      setFile(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300"
          />
        </div>

        <div className="flex justify-center mt-4">
          <img
            src={avatar || DEFAULT_PROFILE_PIC_URL}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
