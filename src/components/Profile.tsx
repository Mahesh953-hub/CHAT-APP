import React, { useState } from 'react';
import { useUser } from '../store/userStore';

export const Profile: React.FC = () => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const [avatar, setAvatar] = useState<File | string | null>(null);
  //const [file, setFile] = useState<File | string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser({ name, avatar });
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
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300"
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
