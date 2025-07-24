import React from 'react';
import { X, Star, CheckCircle, Clock, Users, MapPin, Calendar, Phone, Mail, Shield, CreditCard } from 'lucide-react';
import { HajjPackage, UmrahPackage } from '../../types';

interface HajjDetailsModalProps {
  package: HajjPackage;
  onClose: () => void;
  onBook: (pkg: HajjPackage) => void;
}

interface UmrahDetailsModalProps {
  package: UmrahPackage;
  onClose: () => void;
  onBook: (pkg: UmrahPackage) => void;
}

interface HajjBookingModalProps {
  package: HajjPackage;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

interface UmrahBookingModalProps {
  package: UmrahPackage;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const HajjDetailsModal: React.FC<HajjDetailsModalProps> = ({ package: pkg, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img src={pkg.image} alt={pkg.name} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold mb-2">{pkg.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{pkg.rating}</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{pkg.duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-800">{pkg.duration}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Group Size</div>
                  <div className="font-semibold text-gray-800">20-40 People</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl text-center">
                  <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Season</div>
                  <div className="font-semibold text-gray-800">Hajj Season</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Package Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h3>
              <div className="space-y-6 mb-8">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center">
                    <X className="w-6 h-6 mr-2" />
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.excludes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl sticky top-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-gray-800">{pkg.rating}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      ₹{pkg.price.toLocaleString()}
                    </div>
                    <div className="text-xl text-gray-500 line-through mb-1">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </div>
                    <div className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-6">per person</div>
                </div>
                
                <button
                  onClick={() => {
                    onClose();
                    onBook(pkg);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold text-lg shadow-lg transform hover:scale-105"
                >
                  Book This Package
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Need guidance?</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold text-lg">+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UmrahDetailsModal: React.FC<UmrahDetailsModalProps> = ({ package: pkg, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img src={pkg.image} alt={pkg.name} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold mb-2">{pkg.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{pkg.rating}</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{pkg.duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-800">{pkg.duration}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Group Size</div>
                  <div className="font-semibold text-gray-800">Flexible</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl text-center">
                  <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Season</div>
                  <div className="font-semibold text-gray-800">Year Round</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Package Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h3>
              <div className="space-y-6 mb-8">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center">
                    <X className="w-6 h-6 mr-2" />
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.excludes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl sticky top-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-gray-800">{pkg.rating}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      ₹{pkg.price.toLocaleString()}
                    </div>
                    <div className="text-xl text-gray-500 line-through mb-1">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </div>
                    <div className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-6">per person</div>
                </div>
                
                <button
                  onClick={() => {
                    onClose();
                    onBook(pkg);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold text-lg shadow-lg transform hover:scale-105"
                >
                  Book This Package
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Need guidance?</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold text-lg">+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HajjBookingModal: React.FC<HajjBookingModalProps> = ({ package: pkg, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2">Book Hajj Package</h3>
              <p className="text-green-100">{pkg.name}</p>
              <div className="flex items-center mt-2 space-x-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">{pkg.duration}</span>
                <span className="bg-white/20 px-2 py-1 rounded">₹{pkg.price.toLocaleString()}/person</span>
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
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input 
                  name="customerName" 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input 
                name="email" 
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                required 
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              Hajj Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Hajj Year *</label>
                <select 
                  name="hajjYear" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024 (1445 AH)</option>
                  <option value="2025">2025 (1446 AH)</option>
                  <option value="2026">2026 (1447 AH)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Pilgrims *</label>
                <select 
                  name="pilgrims" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
            <textarea 
              name="requirements" 
              placeholder="Any dietary restrictions, medical conditions, or special requests..." 
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none" 
              rows={4}
            ></textarea>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-green-600" />
              Pricing Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Package Price (per person)</span>
                <span className="font-semibold">₹{pkg.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>You Save</span>
                <span className="font-semibold">₹{(pkg.originalPrice - pkg.price).toLocaleString()}</span>
              </div>
              <div className="border-t border-green-200 pt-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Amount</span>
                <span className="text-2xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</span>
              </div>
            </div>
          </div>

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
              className="flex-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold shadow-lg transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const UmrahBookingModal: React.FC<UmrahBookingModalProps> = ({ package: pkg, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2">Book Umrah Package</h3>
              <p className="text-green-100">{pkg.name}</p>
              <div className="flex items-center mt-2 space-x-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">{pkg.duration}</span>
                <span className="bg-white/20 px-2 py-1 rounded">₹{pkg.price.toLocaleString()}/person</span>
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
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input 
                  name="customerName" 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input 
                name="email" 
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                required 
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              Umrah Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Date *</label>
                <input 
                  name="travelDate" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Pilgrims *</label>
                <select 
                  name="pilgrims" 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" 
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
            <textarea 
              name="requirements" 
              placeholder="Any dietary restrictions, medical conditions, or special requests..." 
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none" 
              rows={4}
            ></textarea>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-green-600" />
              Pricing Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Package Price (per person)</span>
                <span className="font-semibold">₹{pkg.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>You Save</span>
                <span className="font-semibold">₹{(pkg.originalPrice - pkg.price).toLocaleString()}</span>
              </div>
              <div className="border-t border-green-200 pt-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Amount</span>
                <span className="text-2xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</span>
              </div>
            </div>
          </div>

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
              className="flex-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold shadow-lg transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};