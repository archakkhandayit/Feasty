import React, { useState, useEffect } from 'react';
// Removed 'type { MenuItem }' import
import Modal from '../ui/Modal';
import Button from '../ui/Button';

// Removed MenuFormModalProps interface
// Removed : React.FC<MenuFormModalProps>
const MenuFormModal = ({ isOpen, onClose, onSave, item }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price.toString());
      setCategory(item.category);
      setImageUrl(item.imageUrl);
    } else {
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageUrl(`https://picsum.photos/seed/${Date.now()}/400/300`);
    }
  }, [item, isOpen]);

  // Removed event type annotation
  const handleSubmit = (e) => {
    e.preventDefault();
    const priceValue = parseFloat(price);
    if (!name || !description || isNaN(priceValue) || !category) {
        alert("Please fill all fields correctly.");
        return;
    }
    
    const submittedItem = {
      name,
      description,
      price: priceValue,
      category,
      imageUrl,
    };

    if (item) {
      onSave({ ...submittedItem, id: item.id });
    } else {
      onSave(submittedItem);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item ? 'Edit Dish' : 'Add New Dish'}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Dish Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} min="0" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
            </div>
             <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
            </div>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-lg overflow-hidden bg-gray-100">
                <img src={imageUrl} alt="Preview" className="h-full w-full object-cover" />
              </span>
              <p className="ml-4 text-xs text-gray-500">Image URL is auto-generated for this demo.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="submit">Save Dish</Button>
        </div>
      </form>
    </Modal>
  );
};

export default MenuFormModal;