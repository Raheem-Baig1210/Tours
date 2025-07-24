import React, { useState } from 'react';
import { Star, Clock, Users, CheckCircle, X, MapPin, Phone, Mail, Calendar, Shield } from 'lucide-react';
import { HajjPackage, UmrahPackage } from '../types';

interface Props {
  hajjPackages: HajjPackage[];
  umrahPackages: UmrahPackage[];
  setCurrentPage: (page: 'home' | 'trips' | 'hajj-umrah') => void;
  onBookHajj: (pkg: HajjPackage) => void;
  onBookUmrah: (pkg: UmrahPackage) => void;
  onViewHajjDetails: (pkg: HajjPackage) => void;
  onViewUmrahDetails: (pkg: UmrahPackage) => void;
}

const HajjUmrahPage: React.FC<Props> = ({ 
  hajjPackages, 
  umrahPackages, 
  setCurrentPage,
  onBookHajj,
  onBookUmrah,
  onViewHajjDetails,
  onViewUmrahDetails
}) => {
  const [activeTab, setActiveTab] = useState<'hajj' | 'umrah'>('hajj');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filterPackages = (packages: (HajjPackage | UmrahPackage)[]) => {
    return packages.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPrice = priceFilter === 'all' ||
                          (priceFilter === 'budget' && pkg.price < 150000) ||
                          (priceFilter === 'premium' && pkg.price >= 150000 && pkg.price < 300000) ||
                          (priceFilter === 'luxury' && pkg.price >= 300000);
      
      return matchesSearch && matchesPrice;
    });
  };

  const filteredHajjPackages = filterPackages(hajjPackages) as HajjPackage[];
  const filteredUmrahPackages = filterPackages(umrahPackages) as UmrahPackage[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Sacred Journeys</h1>
              <p className="text-xl text-gray-600">Hajj & Umrah packages designed for spiritual fulfillment</p>
              <div className="flex items-center justify-center lg:justify-start mt-4 space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Makkah & Madinah</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>4.8+ Average Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>5K+ Pilgrims Served</span>
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
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
              >
                Book Trip
              </button>
              <button 
                onClick={() => setCurrentPage('hajj-umrah')} 
                className="px-4 py-2 bg-green-600 text-white rounded-full font-medium"
              >
                Hajj/Umrah
              </button>
              <button
                onClick={() => setCurrentPage('home')}
                className="ml-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('hajj')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'hajj'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Hajj Packages ({hajjPackages.length})
            </button>
            <button
              onClick={() => setActiveTab('umrah')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'umrah'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Umrah Packages ({umrahPackages.length})
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex gap-3 items-center">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under ₹1,50,000</option>
                <option value="premium">₹1,50,000 - ₹3,00,000</option>
                <option value="luxury">Above ₹3,00,000</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'hajj' ? (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hajj Packages</h2>
              <p className="text-gray-600">Complete your spiritual journey with our comprehensive Hajj packages</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredHajjPackages.map((pkg) => (
                <div key={pkg.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors mb-3">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>Group Package</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span 
                          key={index} 
                          className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-green-600">
                            ₹{pkg.price.toLocaleString()}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-semibold">
                          {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={() => onViewHajjDetails(pkg)}
                        className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onBookHajj(pkg)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Umrah Packages</h2>
              <p className="text-gray-600">Flexible Umrah packages for your spiritual journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredUmrahPackages.map((pkg) => (
                <div key={pkg.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors mb-3">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>Flexible Group</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span 
                          key={index} 
                          className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-green-600">
                            ₹{pkg.price.toLocaleString()}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-semibold">
                          {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={() => onViewUmrahDetails(pkg)}
                        className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onBookUmrah(pkg)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {((activeTab === 'hajj' && filteredHajjPackages.length === 0) || 
          (activeTab === 'umrah' && filteredUmrahPackages.length === 0)) && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No packages found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceFilter('all');
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Packages
            </button>
          </div>
        )}
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Guidance for Your Sacred Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Our Islamic scholars and travel experts are here to help you plan your perfect pilgrimage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Consult Our Scholars
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
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
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5K+</div>
              <div className="text-gray-600">Pilgrims Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Halal Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjUmrahPage;