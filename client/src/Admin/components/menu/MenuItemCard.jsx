import React from 'react';
// Removed 'type { MenuItem }' import

// Removed MenuItemCardProps interface

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

// Removed : React.FC<MenuItemCardProps>
const MenuItemCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-40 object-cover" src={item.imageUrl} alt={item.name} />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1 h-10">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-orange-500">${item.price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <button onClick={onEdit} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
              <EditIcon />
            </button>
            <button onClick={onDelete} className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;