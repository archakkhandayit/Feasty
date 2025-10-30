import React, { useState } from 'react';
// Removed 'type { MenuItem }' import
import MenuItemCard from '../components/menu/MenuItemCard';
import MenuFormModal from '../components/menu/MenuFormModal';
import Button from '../components/ui/Button';

// Removed MenuPageProps interface

// Removed : React.FC<{ className?: string }>
const PlusIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

// Removed : React.FC<MenuPageProps>
const MenuPage = ({ menuItems, onAddMenuItem, onUpdateMenuItem, onDeleteMenuItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Removed <MenuItem | null> type annotation
  const [editingItem, setEditingItem] = useState(null);

  // Removed type annotation
  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  };

  // Removed type annotation
  const handleSave = (item) => {
    if ('id' in item) {
      onUpdateMenuItem(item);
    } else {
      onAddMenuItem(item);
    }
    handleCloseModal();
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Menu Management</h2>
        <Button onClick={() => handleOpenModal()}>
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New Dish
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map(item => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            onEdit={() => handleOpenModal(item)}
            onDelete={() => onDeleteMenuItem(item.id)} 
          />
        ))}
      </div>

      {isModalOpen && (
        <MenuFormModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          item={editingItem}
        />
      )}
    </div>
  );
};

export default MenuPage;