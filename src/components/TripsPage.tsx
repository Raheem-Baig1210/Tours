import React, { useState } from 'react';
import { Star, Filter, Search, MapPin, Clock, Users, Calendar } from 'lucide-react';
import { Trip } from '../types';

interface Props {
  trips: Trip[];
  onTripSelect: (trip: Trip) => void;
  onBookTrip: (trip: Trip) => void;
  setCurrentPage: (page: 'home' | 'trips' | 'hajj-umrah') => void;
  scrollToSection: (section: string) => void;
}

const TripsPage: React.FC<Props> = ({ 
  trips, 
  onTripSelect, 
  onBookTrip, 
  setCurrentPage, 
  scrollToSection 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Filter and sort trips
  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || 
                         trip.highlights.some(h => h.toLowerCase().includes(selectedFilter.toLowerCase()));
    
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'budget' && trip.price < 20000) ||
                        (priceRange === 'mid' && trip.price >= 20000 && trip.price < 30000) ||
                        (priceRange === 'luxury' && trip.price >= 30000);
    
    return matchesSearch && matchesFilter && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'duration': return parseInt(a.duration) - parseInt(b.duration);
      default: return b.rating - a.rating; // popular
    }
  });

  const filterOptions = [
    { value: 'all', label: 'All Destinations' },
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountains' },
    { value: 'heritage', label: 'Heritage' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'spiritual', label: 'Spiritual' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Your Next Adventure</h1>
              <p className="text-xl text-gray-600">Choose from our carefully curated travel experiences</p>
              <div className="flex items-center justify-center lg:justify-start mt-4 space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{trips.length} Destinations</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>4.7+ Average Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>10K+ Happy Travelers</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
              <button 
                onClick={() => setCurrentPage('home')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('trips')} 
                className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium"
              >
                Book Trip
              </button>
              <button 
                onClick={() => setCurrentPage('hajj-umrah')} 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200"
              >
                Hajj/Umrah
              </button>
              <button 
                onClick={() => scrollToSection('destinations')} 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                Destinations
              </button>
              <button
                onClick={() => setCurrentPage('home')}
                className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under ₹20,000</option>
                <option value="mid">₹20,000 - ₹30,000</option>
                <option value="luxury">Above ₹30,000</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredTrips.length} of {trips.length} trips
              {searchTerm && <span className="font-medium"> for "{searchTerm}"</span>}
            </p>
            {(searchTerm || selectedFilter !== 'all' || priceRange !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                  setPriceRange('all');
                  setSortBy('popular');
                }}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Trips Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredTrips.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No trips found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
                setPriceRange('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Trips
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <div key={trip.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title || trip.name} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Save ₹{(trip.originalPrice - trip.price).toLocaleString()}
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{trip.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {trip.title || trip.name}
                    </h3>
                  </div>
                  
                  {/* Trip Info */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{trip.reviews || 'reviews'}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">
                    {trip.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {trip.highlights.slice(0, 3).map((highlight, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {trip.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                        +{trip.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-green-600">
                          ₹{trip.price.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          ₹{trip.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">per person</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">
                        {Math.round(((trip.originalPrice - trip.price) / trip.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => onTripSelect(trip)}
                      className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onBookTrip(trip)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us create a custom travel package just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Custom Package Request
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call +91 98765 43210
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPage;