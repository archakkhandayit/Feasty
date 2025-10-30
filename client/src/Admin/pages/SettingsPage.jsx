import React, { useState, useEffect } from 'react';
// Removed 'type { OutletInfo }' import
import Button from '../components/ui/Button';

// Removed SettingsPageProps interface
// Removed : React.FC<SettingsPageProps>
const SettingsPage = ({ outletInfo, onSave }) => {
  // Removed <OutletInfo> type annotation
  const [info, setInfo] = useState(outletInfo);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setInfo(outletInfo);
  }, [outletInfo]);

  // Removed event type annotation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prev => ({ ...prev, [name]: value }));
  };

  // Removed event type annotation
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(info);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Outlet Settings</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Outlet Name</label>
            <input type="text" id="name" name="name" value={info.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea id="address" name="address" value={info.address} onChange={handleChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required></textarea>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={info.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label htmlFor="hours" className="block text-sm font-medium text-gray-700">Operating Hours</label>
            <input type="text" id="hours" name="hours" value={info.hours} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div className="flex items-center justify-end space-x-4">
            {isSaved && <span className="text-green-600 text-sm transition-opacity duration-300">Changes saved successfully!</span>}
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;