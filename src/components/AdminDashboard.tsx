import React from 'react';
import {
  Bus,
  Route,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Plus,
  Edit,
  Wrench,
  MapPin,
  Clock,
  Users,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  DollarSign,
  Phone,
  Mail,
  User,
  TrendingUp,
  Download,
  Filter,
  Search,
  Building,
  Shield,
  Bell,
  Palette,
  Database,
  Globe,
  Lock,
  Key,
  Smartphone,
  Monitor,
  Save,
  Upload,
  Camera,
  MapPinIcon,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Copy,
  RotateCcw,
  Power,
  RefreshCw,
  Trash,
  Archive,
  FileText as FileIcon,
  Cloud,
  Link,
  Code,
  Zap,
  ToggleLeft,
  ToggleRight,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Contrast,
  Type,
  Layout,
  Grid,
  List,
  Image as ImageIcon,
  Video,
  Music,
  Headphones,
  Mic,
  Share2,
  ExternalLink,
  QrCode,
  CreditCard as Payment,
  Banknote,
  Navigation,
  Target,
  TrendingDown,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  Bookmark,
  Star,
  AlertCircle,
  CheckSquare,
  Square,
  BarChart2,
  PieChart,
  LineChart,
  Import,
  FileSpreadsheet,
  Calculator,
  Percent,
  DollarSign as Currency
} from 'lucide-react';
import { Bus as BusType, Route as RouteType, Booking, RecentActivity, AdminSection } from '../types';
import SettingsPanel from './SettingsPanel';

interface Props {
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
  buses: BusType[];
  routes: RouteType[];
  bookings: Booking[];
  recentActivities: RecentActivity[];
  onLogout: () => void;
  onAddBus: () => void;
  onCreateRoute: () => void;
  onEditRoute: (route: RouteType) => void;
  onDeleteRoute: (routeId: string) => void;
  onBookBus: (bus: BusType) => void;
  onUpdateBookingStatus: (bookingId: string, status: string) => void;
  onGenerateReport: (type: string) => void;
}

const AdminDashboard: React.FC<Props> = ({
  activeSection,
  setActiveSection,
  buses,
  routes,
  bookings,
  recentActivities,
  onLogout,
  onAddBus,
  onCreateRoute,
  onEditRoute,
  onDeleteRoute,
  onBookBus,
  onUpdateBookingStatus,
  onGenerateReport
}) => {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'buses', label: 'Bus Management', icon: Bus },
    { id: 'routes', label: 'Routes', icon: Route },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col fixed h-screen z-10">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
          <p className="text-sm text-gray-600">Sagar Tours & Travels</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id as AdminSection)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        {activeSection === 'overview' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Buses</p>
                    <p className="text-2xl font-bold text-gray-800">{buses.length}</p>
                  </div>
                  <Bus className="text-blue-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Routes</p>
                    <p className="text-2xl font-bold text-gray-800">{routes.filter(r => r.status === 'Active').length}</p>
                  </div>
                  <Route className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">₹{bookings.filter(b => b.paymentStatus === 'Paid').reduce((sum, b) => sum + b.totalAmount, 0).toLocaleString()}</p>
                  </div>
                  <DollarSign className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
                  </div>
                  <Calendar className="text-purple-500" size={32} />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={onAddBus}
                  className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Plus size={20} />
                  <span>Add New Bus</span>
                </button>
                <button
                  onClick={onCreateRoute}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Route size={20} />
                  <span>Create Route</span>
                </button>
                <button
                  onClick={() => setActiveSection('reports')}
                  className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <FileText size={20} />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'booking' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'payment' ? 'bg-green-100 text-green-600' :
                      activity.type === 'route_created' ? 'bg-purple-100 text-purple-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {activity.type === 'booking' && <Calendar size={16} />}
                      {activity.type === 'payment' && <DollarSign size={16} />}
                      {activity.type === 'route_created' && <Route size={16} />}
                      {activity.type === 'bus_added' && <Bus size={16} />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500">{new Date(activity.timestamp).toLocaleString()}</p>
                    </div>
                    {activity.amount && (
                      <div className="text-right">
                        <p className="font-semibold text-green-600">₹{activity.amount.toLocaleString()}</p>
                        {activity.status && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activity.status === 'Confirmed' || activity.status === 'Paid' ? 'bg-green-100 text-green-800' :
                            activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {activity.status}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'buses' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Bus Management</h1>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {buses.map((bus) => (
                      <tr key={bus.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bus.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.route}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.driver}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="mr-2">{bus.passengers}/{bus.capacity}</span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(bus.passengers / bus.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            bus.status === 'On Route' ? 'bg-green-100 text-green-800' :
                            bus.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {bus.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.eta}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {bus.status === 'Available' ? (
                            <button
                              onClick={() => onBookBus(bus)}
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                            >
                              Book Bus
                            </button>
                          ) : (
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit size={16} />
                              </button>
                              <button className="text-orange-600 hover:text-orange-900">
                                <Wrench size={16} />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'routes' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Route Management</h1>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Import size={16} />
                  <span>Import Routes</span>
                </button>
                <button className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  <Target size={16} />
                  <span>Optimize Routes</span>
                </button>
                <button
                  onClick={onCreateRoute}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Plus size={20} />
                  <span>Create New Route</span>
                </button>
              </div>
            </div>

            {/* Route Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Routes</p>
                    <p className="text-2xl font-bold text-gray-800">{routes.length}</p>
                  </div>
                  <Route className="text-blue-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Routes</p>
                    <p className="text-2xl font-bold text-gray-800">{routes.filter(r => r.status === 'Active').length}</p>
                  </div>
                  <MapPin className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Under Maintenance</p>
                    <p className="text-2xl font-bold text-gray-800">{routes.filter(r => r.status === 'Under Maintenance').length}</p>
                  </div>
                  <Wrench className="text-orange-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Average Distance</p>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(routes.reduce((acc, r) => acc + r.distance, 0) / routes.length)} km</p>
                  </div>
                  <BarChart3 className="text-purple-500" size={32} />
                </div>
              </div>
            </div>

            {/* Route Filters & Search */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search routes..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                    />
                  </div>

                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Under Maintenance">Under Maintenance</option>
                  </select>

                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Cities</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <CheckSquare size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">0 selected</span>
                  </div>

                  <div className="flex items-center border rounded-lg">
                    <button className="p-2 hover:bg-gray-100 border-r">
                      <SortAsc size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100">
                      <FilterIcon size={16} className="text-gray-400" />
                    </button>
                  </div>

                  <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <FileSpreadsheet size={16} />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Routes Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                        <div className="flex items-center space-x-1">
                          <span>Route ID</span>
                          <SortAsc size={12} />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                        <div className="flex items-center space-x-1">
                          <span>Route</span>
                          <SortAsc size={12} />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                        <div className="flex items-center space-x-1">
                          <span>Distance</span>
                          <SortAsc size={12} />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                        <div className="flex items-center space-x-1">
                          <span>Duration</span>
                          <SortAsc size={12} />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                        <div className="flex items-center space-x-1">
                          <span>Price</span>
                          <SortAsc size={12} />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buses</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {routes.map((route) => {
                      const occupancyRate = Math.floor(Math.random() * 100);
                      const revenue = Math.floor(Math.random() * 50000) + 10000;
                      const popularity = Math.floor(Math.random() * 5) + 1;

                      return (
                        <tr key={route.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                                {route.id.slice(-2)}
                              </div>
                              <div className="ml-3">
                                <div className="font-medium text-gray-900">{route.id}</div>
                                <div className="text-xs text-gray-500">Created {route.createdAt}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Navigation size={16} className="text-blue-500 mr-2" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{route.from} → {route.to}</div>
                                <div className="text-xs text-gray-500">
                                  {route.stops.length > 0 && `${route.stops.length} stops: ${route.stops.slice(0, 2).join(', ')}${route.stops.length > 2 ? '...' : ''}`}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Target size={16} className="text-gray-400 mr-2" />
                              <span>{route.distance} km</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock size={16} className="text-gray-400 mr-2" />
                              <span>{route.duration}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-gray-900">₹{route.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{route.frequency}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-gray-600">Occupancy</span>
                                  <span className="font-medium">{occupancyRate}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full ${
                                      occupancyRate >= 80 ? 'bg-green-500' :
                                      occupancyRate >= 60 ? 'bg-yellow-500' :
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${occupancyRate}%` }}
                                  ></div>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">₹{revenue.toLocaleString()} revenue</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                route.status === 'Active' ? 'bg-green-100 text-green-800' :
                                route.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                                'bg-orange-100 text-orange-800'
                              }`}>
                                {route.status}
                              </span>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    size={12}
                                    className={`${
                                      i < popularity ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Users size={16} className="text-gray-400 mr-1" />
                                <span className="font-medium">{route.busesAssigned.length}</span>
                              </div>
                              {route.busesAssigned.length > 0 && (
                                <div className="flex -space-x-1">
                                  {route.busesAssigned.slice(0, 3).map((busId, index) => (
                                    <div
                                      key={busId}
                                      className="w-6 h-6 bg-blue-100 border-2 border-white rounded-full flex items-center justify-center text-xs font-bold text-blue-600"
                                      title={`Bus ${busId}`}
                                    >
                                      {busId.slice(-1)}
                                    </div>
                                  ))}
                                  {route.busesAssigned.length > 3 && (
                                    <div className="w-6 h-6 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                                      +{route.busesAssigned.length - 3}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-1">
                              <button
                                className="p-1 text-blue-600 hover:text-blue-900 hover:bg-blue-100 rounded"
                                title="View Details"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => onEditRoute(route)}
                                className="p-1 text-green-600 hover:text-green-900 hover:bg-green-100 rounded"
                                title="Edit Route"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                className="p-1 text-purple-600 hover:text-purple-900 hover:bg-purple-100 rounded"
                                title="Assign Buses"
                              >
                                <Users size={16} />
                              </button>
                              <button
                                className="p-1 text-orange-600 hover:text-orange-900 hover:bg-orange-100 rounded"
                                title="Route Analytics"
                              >
                                <BarChart2 size={16} />
                              </button>
                              <div className="relative">
                                <button className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                                  <MoreHorizontal size={16} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comprehensive Route Analytics */}
            {routes.length > 0 && (
              <div className="mt-8 space-y-8">

                {/* Route Performance Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Top Performing Routes</h3>
                      <TrendingUp className="text-green-500" size={20} />
                    </div>
                    <div className="space-y-4">
                      {routes.slice(0, 5).map((route, index) => {
                        const performance = Math.floor(Math.random() * 100);
                        const revenue = Math.floor(Math.random() * 50000) + 10000;
                        return (
                          <div key={route.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{route.from} - {route.to}</p>
                                <p className="text-xs text-gray-500">₹{revenue.toLocaleString()} revenue</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <div className="w-12 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-green-500 h-2 rounded-full"
                                    style={{ width: `${performance}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs font-medium text-green-600">{performance}%</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Route Analytics</h3>
                      <BarChart2 className="text-blue-500" size={20} />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-blue-900">Average Occupancy</p>
                          <p className="text-xs text-blue-700">Across all routes</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">74%</div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-green-900">Total Revenue</p>
                          <p className="text-xs text-green-700">This month</p>
                        </div>
                        <div className="text-2xl font-bold text-green-600">₹2.4L</div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-purple-900">Avg Distance</p>
                          <p className="text-xs text-purple-700">Per route</p>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">{Math.round(routes.reduce((acc, r) => acc + r.distance, 0) / routes.length)} km</div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-orange-900">Route Efficiency</p>
                          <p className="text-xs text-orange-700">Cost per km</p>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">₹12.5</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Popular Destinations</h3>
                      <Target className="text-purple-500" size={20} />
                    </div>
                    <div className="space-y-3">
                      {[...new Set(routes.map(r => r.to))].slice(0, 6).map((destination, index) => {
                        const routeCount = routes.filter(r => r.to === destination).length;
                        const popularity = Math.floor(Math.random() * 100);
                        return (
                          <div key={destination} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                index === 0 ? 'bg-yellow-500' :
                                index === 1 ? 'bg-gray-400' :
                                index === 2 ? 'bg-orange-600' :
                                'bg-blue-500'
                              }`}>
                                {index + 1}
                              </div>
                              <span className="font-medium text-sm">{destination}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">{routeCount} routes</div>
                              <div className="flex items-center space-x-1">
                                <div className="w-8 bg-gray-200 rounded-full h-1">
                                  <div
                                    className="bg-purple-500 h-1 rounded-full"
                                    style={{ width: `${popularity}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-purple-600">{popularity}%</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Route Management Tools */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Route Optimization</h3>
                      <Calculator className="text-indigo-500" size={20} />
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
                        <Target className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-3">Optimize routes for better efficiency and profitability</p>
                        <div className="grid grid-cols-2 gap-3">
                          <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                            <Navigation size={14} />
                            <span>Distance</span>
                          </button>
                          <button className="flex items-center justify-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                            <Currency size={14} />
                            <span>Revenue</span>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Optimization Suggestions</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2 p-2 bg-blue-50 rounded">
                            <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div className="text-xs">
                              <p className="font-medium text-blue-900">Mumbai-Pune route</p>
                              <p className="text-blue-700">Consider adding express service (+15% revenue)</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 p-2 bg-yellow-50 rounded">
                            <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                            <div className="text-xs">
                              <p className="font-medium text-yellow-900">Delhi-Agra route</p>
                              <p className="text-yellow-700">Low occupancy detected (-23% efficiency)</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 p-2 bg-green-50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <div className="text-xs">
                              <p className="font-medium text-green-900">Bangalore-Mysore route</p>
                              <p className="text-green-700">Performing above average (+8% profit)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Route Reports</h3>
                      <FileSpreadsheet className="text-emerald-500" size={20} />
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <BarChart2 className="w-6 h-6 text-blue-500 mb-2" />
                          <span className="text-xs font-medium">Performance Report</span>
                          <span className="text-xs text-gray-500">Last 30 days</span>
                        </button>
                        <button className="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <PieChart className="w-6 h-6 text-green-500 mb-2" />
                          <span className="text-xs font-medium">Revenue Analysis</span>
                          <span className="text-xs text-gray-500">By route</span>
                        </button>
                        <button className="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <LineChart className="w-6 h-6 text-purple-500 mb-2" />
                          <span className="text-xs font-medium">Trend Analysis</span>
                          <span className="text-xs text-gray-500">Growth trends</span>
                        </button>
                        <button className="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <FileSpreadsheet className="w-6 h-6 text-orange-500 mb-2" />
                          <span className="text-xs font-medium">Export Data</span>
                          <span className="text-xs text-gray-500">CSV/Excel</span>
                        </button>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium text-sm mb-3">Quick Stats</h4>
                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div className="p-2 bg-blue-50 rounded">
                            <div className="text-lg font-bold text-blue-600">{routes.filter(r => r.status === 'Active').length}</div>
                            <div className="text-xs text-blue-700">Active Routes</div>
                          </div>
                          <div className="p-2 bg-green-50 rounded">
                            <div className="text-lg font-bold text-green-600">87%</div>
                            <div className="text-xs text-green-700">Avg Efficiency</div>
                          </div>
                          <div className="p-2 bg-purple-50 rounded">
                            <div className="text-lg font-bold text-purple-600">₹24.5K</div>
                            <div className="text-xs text-purple-700">Daily Revenue</div>
                          </div>
                          <div className="p-2 bg-orange-50 rounded">
                            <div className="text-lg font-bold text-orange-600">156</div>
                            <div className="text-xs text-orange-700">Total Trips</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route Comparison & Benchmarking */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Route Comparison & Benchmarking</h3>
                    <div className="flex space-x-2">
                      <select className="px-3 py-1 border rounded text-sm">
                        <option>Last 30 days</option>
                        <option>Last 7 days</option>
                        <option>This month</option>
                      </select>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                        Compare
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left font-medium text-gray-600">Route</th>
                          <th className="px-4 py-2 text-center font-medium text-gray-600">Occupancy</th>
                          <th className="px-4 py-2 text-center font-medium text-gray-600">Revenue</th>
                          <th className="px-4 py-2 text-center font-medium text-gray-600">Efficiency</th>
                          <th className="px-4 py-2 text-center font-medium text-gray-600">Rating</th>
                          <th className="px-4 py-2 text-center font-medium text-gray-600">Trend</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {routes.slice(0, 6).map((route) => {
                          const occupancy = Math.floor(Math.random() * 100);
                          const revenue = Math.floor(Math.random() * 50000) + 10000;
                          const efficiency = Math.floor(Math.random() * 100);
                          const rating = (Math.random() * 2 + 3).toFixed(1);
                          const trend = Math.random() > 0.5 ? 'up' : 'down';
                          const trendValue = Math.floor(Math.random() * 20) + 1;

                          return (
                            <tr key={route.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="font-medium">{route.from} - {route.to}</div>
                                <div className="text-xs text-gray-500">{route.distance} km • {route.duration}</div>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <div className="w-8 bg-gray-200 rounded-full h-1.5">
                                    <div
                                      className={`h-1.5 rounded-full ${
                                        occupancy >= 80 ? 'bg-green-500' :
                                        occupancy >= 60 ? 'bg-yellow-500' :
                                        'bg-red-500'
                                      }`}
                                      style={{ width: `${occupancy}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">{occupancy}%</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center font-medium">₹{revenue.toLocaleString()}</td>
                              <td className="px-4 py-3 text-center">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  efficiency >= 80 ? 'bg-green-100 text-green-800' :
                                  efficiency >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {efficiency}%
                                </span>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span className="text-sm font-medium">{rating}</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className={`flex items-center justify-center space-x-1 ${
                                  trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                  <span className="text-sm font-medium">{trendValue}%</span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === 'bookings' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Booking Management</h1>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Filter size={20} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Download size={20} />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Booking Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
                  </div>
                  <Calendar className="text-blue-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Confirmed Bookings</p>
                    <p className="text-2xl font-bold text-gray-800">{bookings.filter(b => b.status === 'Confirmed').length}</p>
                  </div>
                  <CheckCircle className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Bookings</p>
                    <p className="text-2xl font-bold text-gray-800">{bookings.filter(b => b.status === 'Pending').length}</p>
                  </div>
                  <Clock className="text-orange-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">₹{bookings.filter(b => b.paymentStatus === 'Paid').reduce((sum, b) => sum + b.totalAmount, 0).toLocaleString()}</p>
                  </div>
                  <DollarSign className="text-purple-500" size={32} />
                </div>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passengers</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div className="flex items-center">
                              <User size={16} className="text-gray-400 mr-2" />
                              {booking.customerName}
                            </div>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Phone size={12} className="mr-1" />
                              {booking.customerPhone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <p className="font-medium">{booking.itemName}</p>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              booking.type === 'trip' ? 'bg-blue-100 text-blue-800' :
                              booking.type === 'bus' ? 'bg-green-100 text-green-800' :
                              booking.type === 'hajj' ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {booking.type.toUpperCase()}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {booking.travelDate ? new Date(booking.travelDate).toLocaleDateString() : 'TBD'}
                          {booking.departureTime && <div className="text-xs text-gray-400">{booking.departureTime}</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Users size={16} className="text-gray-400 mr-2" />
                            {booking.passengers}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">₹{booking.totalAmount.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            booking.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                            booking.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {booking.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              className="text-blue-600 hover:text-blue-900"
                              title="View Details"
                            >
                              <Eye size={16} />
                            </button>
                            {booking.status === 'Pending' && (
                              <button
                                onClick={() => onUpdateBookingStatus(booking.id, 'Confirmed')}
                                className="text-green-600 hover:text-green-900"
                                title="Confirm Booking"
                              >
                                <CheckCircle size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => onUpdateBookingStatus(booking.id, 'Cancelled')}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel Booking"
                            >
                              <XCircle size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Booking Analytics */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Booking Types Distribution</h3>
                <div className="space-y-4">
                  {['trip', 'bus', 'hajj', 'umrah'].map((type) => {
                    const count = bookings.filter(b => b.type === type).length;
                    const percentage = bookings.length > 0 ? (count / bookings.length) * 100 : 0;
                    return (
                      <div key={type} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded mr-3 ${
                            type === 'trip' ? 'bg-blue-500' :
                            type === 'bus' ? 'bg-green-500' :
                            type === 'hajj' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}></div>
                          <span className="capitalize font-medium">{type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{count} bookings</span>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                type === 'trip' ? 'bg-blue-500' :
                                type === 'bus' ? 'bg-green-500' :
                                type === 'hajj' ? 'bg-purple-500' :
                                'bg-orange-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold">{percentage.toFixed(1)}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
                <div className="space-y-4">
                  {bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">{booking.customerName}</p>
                        <p className="text-sm text-gray-500">{booking.itemName}</p>
                        <p className="text-xs text-gray-400">{new Date(booking.createdAt).toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">₹{booking.totalAmount.toLocaleString()}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reports' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border rounded-lg">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                  <option>This Year</option>
                  <option>Custom Range</option>
                </select>
                <button
                  onClick={() => onGenerateReport('all')}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Download size={20} />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">₹{bookings.filter(b => b.paymentStatus === 'Paid').reduce((sum, b) => sum + b.totalAmount, 0).toLocaleString()}</p>
                    <p className="text-sm text-green-600">+15.3% from last month</p>
                  </div>
                  <TrendingUp className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Customers</p>
                    <p className="text-2xl font-bold text-gray-800">{new Set(bookings.map(b => b.customerEmail)).size}</p>
                    <p className="text-sm text-blue-600">+8.2% from last month</p>
                  </div>
                  <Users className="text-blue-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-800">{((bookings.filter(b => b.status === 'Confirmed').length / bookings.length) * 100).toFixed(1)}%</p>
                    <p className="text-sm text-green-600">+2.1% from last month</p>
                  </div>
                  <BarChart3 className="text-orange-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg. Booking Value</p>
                    <p className="text-2xl font-bold text-gray-800">₹{Math.round(bookings.reduce((sum, b) => sum + b.totalAmount, 0) / bookings.length).toLocaleString()}</p>
                    <p className="text-sm text-purple-600">+5.7% from last month</p>
                  </div>
                  <DollarSign className="text-purple-500" size={32} />
                </div>
              </div>
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => onGenerateReport('revenue')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Revenue Report</h3>
                  <DollarSign className="text-green-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Detailed revenue analysis by service type, time period, and payment status</p>
                <p className="text-sm text-green-600 font-medium">Generate →</p>
              </button>

              <button
                onClick={() => onGenerateReport('bookings')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Booking Analytics</h3>
                  <Calendar className="text-blue-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Booking trends, popular destinations, and customer preferences</p>
                <p className="text-sm text-blue-600 font-medium">Generate →</p>
              </button>

              <button
                onClick={() => onGenerateReport('routes')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Route Performance</h3>
                  <Route className="text-purple-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Route utilization, profitability, and optimization opportunities</p>
                <p className="text-sm text-purple-600 font-medium">Generate →</p>
              </button>

              <button
                onClick={() => onGenerateReport('customers')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Customer Insights</h3>
                  <Users className="text-orange-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Customer behavior, retention rates, and segmentation analysis</p>
                <p className="text-sm text-orange-600 font-medium">Generate →</p>
              </button>

              <button
                onClick={() => onGenerateReport('financial')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Financial Summary</h3>
                  <BarChart3 className="text-red-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Profit & loss, expense tracking, and financial forecasting</p>
                <p className="text-sm text-red-600 font-medium">Generate →</p>
              </button>

              <button
                onClick={() => onGenerateReport('operational')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Operations Report</h3>
                  <Settings className="text-gray-500" size={24} />
                </div>
                <p className="text-gray-600 mb-2">Fleet utilization, maintenance schedules, and operational efficiency</p>
                <p className="text-sm text-gray-600 font-medium">Generate →</p>
              </button>
            </div>

            {/* Recent Reports & Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  {['trip', 'bus', 'hajj', 'umrah'].map((type) => {
                    const typeBookings = bookings.filter(b => b.type === type);
                    const revenue = typeBookings.filter(b => b.paymentStatus === 'Paid').reduce((sum, b) => sum + b.totalAmount, 0);
                    const totalRevenue = bookings.filter(b => b.paymentStatus === 'Paid').reduce((sum, b) => sum + b.totalAmount, 0);
                    const percentage = totalRevenue > 0 ? (revenue / totalRevenue) * 100 : 0;

                    return (
                      <div key={type} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded mr-3 ${
                            type === 'trip' ? 'bg-blue-500' :
                            type === 'bus' ? 'bg-green-500' :
                            type === 'hajj' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}></div>
                          <span className="capitalize font-medium">{type} Services</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold">₹{revenue.toLocaleString()}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                type === 'trip' ? 'bg-blue-500' :
                                type === 'bus' ? 'bg-green-500' :
                                type === 'hajj' ? 'bg-purple-500' :
                                'bg-orange-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{percentage.toFixed(1)}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Growth Rate</span>
                    <span className="font-semibold text-green-600">+15.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-blue-600">4.8/5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fleet Utilization</span>
                    <span className="font-semibold text-purple-600">87.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">On-time Performance</span>
                    <span className="font-semibold text-orange-600">94.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Repeat Customer Rate</span>
                    <span className="font-semibold text-red-600">68.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Response Time</span>
                    <span className="font-semibold text-gray-600">2.3 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'settings' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
              <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Settings Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-gray-800 mb-4">Settings Categories</h3>
                  <nav className="space-y-2">
                    {[
                      { id: 'company', label: 'Company Info', icon: Building },
                      { id: 'users', label: 'User Management', icon: Users },
                      { id: 'notifications', label: 'Notifications', icon: Bell },
                      { id: 'security', label: 'Security', icon: Shield },
                      { id: 'system', label: 'System Config', icon: Settings },
                      { id: 'appearance', label: 'Appearance', icon: Palette },
                      { id: 'backup', label: 'Backup & Data', icon: Database }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors"
                        >
                          <Icon size={18} className="text-gray-500" />
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Settings Content */}
              <div className="lg:col-span-3 space-y-8">

                {/* Company Information */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <Building className="text-blue-500 mr-3" size={24} />
                    <h2 className="text-xl font-semibold">Company Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        defaultValue="Sagar Tours & Travels"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        defaultValue="info@sagartours.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+91 9876543210"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        defaultValue="https://sagartours.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea
                        rows={3}
                        defaultValue="123 Main Street, Mumbai, Maharashtra, India - 400001"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Camera className="text-gray-400" size={24} />
                        </div>
                        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                          <Upload size={16} />
                          <span>Upload Logo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Management */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Users className="text-green-500 mr-3" size={24} />
                      <h2 className="text-xl font-semibold">User Management</h2>
                    </div>
                    <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      <Plus size={16} />
                      <span>Add User</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <User className="text-blue-600" size={20} />
                              </div>
                              <div>
                                <p className="font-medium">Admin User</p>
                                <p className="text-sm text-gray-500">admin@sagartours.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Super Admin</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500">2 hours ago</td>
                          <td className="px-4 py-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <Bell className="text-orange-500 mr-3" size={24} />
                    <h2 className="text-xl font-semibold">Notification Preferences</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-4">Email Notifications</h4>
                        <div className="space-y-3">
                          {[
                            'New bookings',
                            'Payment confirmations',
                            'Cancellations',
                            'System updates',
                            'Daily reports'
                          ].map((item) => (
                            <label key={item} className="flex items-center">
                              <input type="checkbox" defaultChecked className="mr-3 rounded" />
                              <span className="text-sm">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-4">SMS Notifications</h4>
                        <div className="space-y-3">
                          {[
                            'Critical alerts',
                            'Payment failures',
                            'Emergency updates',
                            'Maintenance schedules'
                          ].map((item) => (
                            <label key={item} className="flex items-center">
                              <input type="checkbox" defaultChecked className="mr-3 rounded" />
                              <span className="text-sm">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Notification Frequency</h4>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Immediate</option>
                        <option>Hourly digest</option>
                        <option>Daily digest</option>
                        <option>Weekly summary</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <Shield className="text-red-500 mr-3" size={24} />
                    <h2 className="text-xl font-semibold">Security Settings</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4">Password Policy</h4>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3 rounded" />
                          <span className="text-sm">Require strong passwords</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3 rounded" />
                          <span className="text-sm">Two-factor authentication</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 rounded" />
                          <span className="text-sm">Password expiry (90 days)</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Session Management</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>30 minutes</option>
                            <option>1 hour</option>
                            <option>2 hours</option>
                            <option>Never</option>
                          </select>
                        </div>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3 rounded" />
                          <span className="text-sm">Log failed login attempts</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                      <Key size={16} />
                      <span>Reset Admin Password</span>
                    </button>
                  </div>
                </div>

                {/* System Configuration */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <Settings className="text-purple-500 mr-3" size={24} />
                    <h2 className="text-xl font-semibold">System Configuration</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4">Business Settings</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>INR (₹)</option>
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>Asia/Kolkata (IST)</option>
                            <option>UTC</option>
                            <option>America/New_York</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Booking Settings</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Auto-confirm bookings</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>Manual approval</option>
                            <option>Auto-confirm with payment</option>
                            <option>Always auto-confirm</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation period</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>24 hours</option>
                            <option>48 hours</option>
                            <option>72 hours</option>
                            <option>1 week</option>
                          </select>
                        </div>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3 rounded" />
                          <span className="text-sm">Send confirmation emails</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backup & Data */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-6">
                    <Database className="text-indigo-500 mr-3" size={24} />
                    <h2 className="text-xl font-semibold">Backup & Data Management</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4">Automated Backups</h4>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-3 rounded" />
                          <span className="text-sm">Enable daily backups</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 rounded" />
                          <span className="text-sm">Weekly full backup</span>
                        </label>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Backup retention</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option>30 days</option>
                            <option>90 days</option>
                            <option>1 year</option>
                            <option>Forever</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Data Export</h4>
                      <div className="space-y-3">
                        <button className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                          <Download size={16} />
                          <span>Export All Data</span>
                        </button>
                        <button className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                          <Download size={16} />
                          <span>Export Bookings</span>
                        </button>
                        <button className="w-full flex items-center justify-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                          <Download size={16} />
                          <span>Export Customer Data</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Database className="text-yellow-600 mr-2" size={20} />
                        <div>
                          <p className="font-medium text-yellow-800">Last Backup</p>
                          <p className="text-sm text-yellow-700">Today at 3:00 AM - Size: 127 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
