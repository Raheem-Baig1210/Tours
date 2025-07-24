import React from 'react';
import { X, User, Phone, Mail, Calendar, Users, MessageSquare, CreditCard, Shield } from 'lucide-react';
import { Trip } from '../../types';

interface Props {
  trip: Trip;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TripBookingModal: React.FC<Props> = ({ trip, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2">Book Your Adventure</h3>
              <p className="text-blue-100">{trip.title || trip.name}</p>
              <div className="flex items-center mt-2 space-x-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">{trip.duration}</span>
                <span className="bg-white/20 px-2 py-1 rounded">₹{trip.price.toLocaleString()}/person</span>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <form onSubmit={onSubmit} className="p-8 space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                    required 
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Trip Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Departure Date *</label>
                <input
                  name="travelDate"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers *</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="passengers"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
              Special Requirements (Optional)
            </label>
            <textarea
              name="specialRequests"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              rows={4}
            ></textarea>
          </div>

          {/* Pricing Summary */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-green-600" />
              Pricing Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Package Price (per person)</span>
                <span className="font-semibold">₹{trip.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>You Save</span>
                <span className="font-semibold">₹{(trip.originalPrice - trip.price).toLocaleString()}</span>
              </div>
              <div className="border-t border-green-200 pt-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Amount</span>
                <span className="text-2xl font-bold text-green-600">₹{trip.price.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * Final price will be calculated based on number of travelers and selected date
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-blue-600" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-1 text-blue-600" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1 text-blue-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-bold shadow-lg transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripBookingModal;
