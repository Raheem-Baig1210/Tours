import React from 'react';
import { X } from 'lucide-react';
import { Bus } from '../../types';

interface Props {
  bus: Bus;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const BusBookingModal: React.FC<Props> = ({ bus, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold mb-4">Book Bus - {bus.id}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <input name="customerName" type="text" placeholder="Customer Name" className="w-full p-2 border rounded" required />
          <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <input name="destination" type="text" placeholder="Destination" className="w-full p-2 border rounded" required />
          <input name="departureDate" type="date" className="w-full p-2 border rounded" required />
          <input name="departureTime" type="time" className="w-full p-2 border rounded" required />
          <input name="passengers" type="number" placeholder="Number of Passengers" min="1" max={bus.capacity} className="w-full p-2 border rounded" required />
          <input name="amount" type="number" placeholder="Total Amount (₹)" className="w-full p-2 border rounded" required />
          <div className="flex space-x-2">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Book Now</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusBookingModal;