import React from 'react';
import { X, Star, CheckCircle, Clock, Users, MapPin, Calendar, Phone } from 'lucide-react';
import { Trip } from '../../types';

interface Props {
  trip: Trip;
  onClose: () => void;
  onBook: (trip: Trip) => void;
}

const TripDetailsModal: React.FC<Props> = ({ trip, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img src={trip.image} alt={trip.title || trip.name} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg"
          >
            <X size={24} />
          </button>
          
          {/* Trip Title Overlay */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold mb-2">{trip.title || trip.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{trip.rating}</span>
                <span className="text-sm ml-1">({trip.reviews || 'reviews'})</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{trip.duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Quick Info Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-800">{trip.duration}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Group Size</div>
                  <div className="font-semibold text-gray-800">2-50 People</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl text-center">
                  <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Best Time</div>
                  <div className="font-semibold text-gray-800">Year Round</div>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Trip</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{trip.description}</p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {trip.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h3>
              <div className="space-y-6 mb-8">
                {Array.isArray(trip.itinerary) && trip.itinerary.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    {typeof item === 'string' ? (
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-lg">{item}</p>
                      </div>
                    ) : (
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {item.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-3">Day {item.day}: {item.title}</h4>
                          <ul className="space-y-2">
                            {item.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
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
                    {trip.inclusions.map((item, index) => (
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
                    {trip.exclusions.map((item, index) => (
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
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl sticky top-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-gray-800">{trip.rating}</span>
                    <span className="text-gray-600 ml-1">({trip.reviews || 'reviews'})</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      ₹{trip.price.toLocaleString()}
                    </div>
                    <div className="text-xl text-gray-500 line-through mb-1">
                      ₹{trip.originalPrice.toLocaleString()}
                    </div>
                    <div className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                      Save ₹{(trip.originalPrice - trip.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-6">per person</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{trip.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-semibold">2-50 people</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-semibold">Easy</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    onClose();
                    onBook(trip);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-bold text-lg shadow-lg transform hover:scale-105"
                >
                  Book This Adventure
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Need help planning?</p>
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold text-lg">+91 98765 43210</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Available 24/7 for assistance</p>
                </div>
                
                <div className="mt-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">Why Choose Us?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Best Price Guarantee</li>
                    <li>• 24/7 Customer Support</li>
                    <li>• Instant Confirmation</li>
                    <li>• Flexible Cancellation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;