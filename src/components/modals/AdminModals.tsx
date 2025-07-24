import React, { useState } from 'react';
import { Route } from '../../types';

interface AddBusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CreateRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateRoute: (route: Omit<Route, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

interface EditRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  route: Route | null;
  onEditRoute: (route: Route) => void;
}

export const AddBusModal: React.FC<AddBusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Add New Bus</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Bus ID" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Route" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Driver Name" className="w-full p-2 border rounded" />
          <input type="number" placeholder="Capacity" className="w-full p-2 border rounded" />
          <div className="flex space-x-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Bus</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const CreateRouteModal: React.FC<CreateRouteModalProps> = ({ isOpen, onClose, onCreateRoute }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    distance: '',
    duration: '',
    price: '',
    stops: '',
    frequency: '',
    status: 'Active' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const routeData = {
      from: formData.from,
      to: formData.to,
      distance: parseInt(formData.distance),
      duration: formData.duration,
      price: parseInt(formData.price),
      status: formData.status,
      stops: formData.stops ? formData.stops.split(',').map(s => s.trim()) : [],
      frequency: formData.frequency,
      busesAssigned: []
    };

    onCreateRoute(routeData);
    setFormData({
      from: '',
      to: '',
      distance: '',
      duration: '',
      price: '',
      stops: '',
      frequency: '',
      status: 'Active'
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Create New Route</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Starting city"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Destination city"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Distance in kilometers"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 3h 30m"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ticket price"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stops (comma separated)</label>
            <input
              type="text"
              name="stops"
              value={formData.stops}
              onChange={handleChange}
              placeholder="Stop1, Stop2, Stop3"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              placeholder="e.g., Every 2 hours, Daily"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
          </div>

          <div className="flex space-x-2 pt-4">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Create Route
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const EditRouteModal: React.FC<EditRouteModalProps> = ({ isOpen, onClose, route, onEditRoute }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    distance: '',
    duration: '',
    price: '',
    stops: '',
    frequency: '',
    status: 'Active' as const
  });

  React.useEffect(() => {
    if (route) {
      setFormData({
        from: route.from,
        to: route.to,
        distance: route.distance.toString(),
        duration: route.duration,
        price: route.price.toString(),
        stops: route.stops.join(', '),
        frequency: route.frequency,
        status: route.status
      });
    }
  }, [route]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!route) return;

    const updatedRoute: Route = {
      ...route,
      from: formData.from,
      to: formData.to,
      distance: parseInt(formData.distance),
      duration: formData.duration,
      price: parseInt(formData.price),
      status: formData.status,
      stops: formData.stops ? formData.stops.split(',').map(s => s.trim()) : [],
      frequency: formData.frequency,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    onEditRoute(updatedRoute);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen || !route) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Edit Route - {route.id}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Starting city"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Destination city"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Distance in kilometers"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 3h 30m"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ticket price"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stops (comma separated)</label>
            <input
              type="text"
              name="stops"
              value={formData.stops}
              onChange={handleChange}
              placeholder="Stop1, Stop2, Stop3"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              placeholder="e.g., Every 2 hours, Daily"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
          </div>

          <div className="flex space-x-2 pt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Update Route
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
