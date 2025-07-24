import React, { useState } from 'react';
import {
  Building,
  Users,
  Bell,
  Shield,
  Settings,
  Palette,
  Database,
  Link,
  Code,
  Wrench,
  Activity,
  Save,
  RotateCcw,
  Upload,
  Camera,
  Edit,
  Trash2,
  Plus,
  Key,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Power,
  RefreshCw,
  Archive,
  Cloud,
  Zap,
  ToggleLeft,
  ToggleRight,
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
  User,
  Phone,
  Mail
} from 'lucide-react';

const SettingsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  const [notifications, setNotifications] = useState({
    email: { bookings: true, payments: true, cancellations: true, updates: true, reports: true },
    sms: { critical: true, payments: false, emergency: true, maintenance: true },
    frequency: 'immediate'
  });
  
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Sagar Tours & Travels',
    email: 'info@sagartours.com',
    phone: '+91 9876543210',
    website: 'https://sagartours.com',
    address: '123 Main Street, Mumbai, Maharashtra, India - 400001',
    logo: null,
    currency: 'INR',
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD/MM/YYYY'
  });

  const settingsTabs = [
    { id: 'company', label: 'Company Info', icon: Building },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'system', label: 'System Config', icon: Settings },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Link },
    { id: 'api', label: 'API Settings', icon: Code },
    { id: 'payments', label: 'Payment Settings', icon: Payment },
    { id: 'backup', label: 'Backup & Data', icon: Database },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'monitoring', label: 'System Monitor', icon: Activity }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'company':
        return (
          <div className="space-y-8">
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
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                  <input 
                    type="email" 
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input 
                    type="url" 
                    value={companyInfo.website}
                    onChange={(e) => setCompanyInfo({...companyInfo, website: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea 
                    rows={3}
                    value={companyInfo.address}
                    onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <Camera className="text-blue-500" size={28} />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <Upload size={16} />
                        <span>Upload Logo</span>
                      </button>
                      <p className="text-xs text-gray-500">PNG, JPG up to 2MB. Recommended: 200x200px</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Globe className="text-green-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Business Settings</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                  <select 
                    value={companyInfo.currency}
                    onChange={(e) => setCompanyInfo({...companyInfo, currency: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="INR">INR (₹) - Indian Rupee</option>
                    <option value="USD">USD ($) - US Dollar</option>
                    <option value="EUR">EUR (€) - Euro</option>
                    <option value="GBP">GBP (£) - British Pound</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                  <select 
                    value={companyInfo.timezone}
                    onChange={(e) => setCompanyInfo({...companyInfo, timezone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Asia/Kolkata">Asia/Kolkata (IST +05:30)</option>
                    <option value="UTC">UTC (Universal Time)</option>
                    <option value="America/New_York">America/New_York (EST/EDT)</option>
                    <option value="Europe/London">Europe/London (GMT/BST)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (JST +09:00)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                  <select 
                    value={companyInfo.dateFormat}
                    onChange={(e) => setCompanyInfo({...companyInfo, dateFormat: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2024)</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY (12/31/2024)</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD (2024-12-31)</option>
                    <option value="DD-MM-YYYY">DD-MM-YYYY (31-12-2024)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Users className="text-green-500 mr-3" size={24} />
                  <h2 className="text-xl font-semibold">User Management</h2>
                </div>
                <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Plus size={16} />
                  <span>Add New User</span>
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
                    {[
                      { name: 'Admin User', email: 'admin@sagartours.com', role: 'Super Admin', status: 'Active', lastLogin: '2 hours ago' },
                      { name: 'Manager', email: 'manager@sagartours.com', role: 'Manager', status: 'Active', lastLogin: '1 day ago' },
                      { name: 'Support Agent', email: 'support@sagartours.com', role: 'Support', status: 'Inactive', lastLogin: '3 days ago' }
                    ].map((user, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3">
                              <User className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === 'Super Admin' ? 'bg-red-100 text-red-800' :
                            user.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">{user.lastLogin}</td>
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* User Roles & Permissions */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Shield className="text-purple-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Roles & Permissions</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { role: 'Super Admin', permissions: ['All Access', 'User Management', 'System Config', 'Data Export'], color: 'red' },
                  { role: 'Manager', permissions: ['Booking Management', 'Route Management', 'Reports', 'Customer Support'], color: 'blue' },
                  { role: 'Support', permissions: ['View Bookings', 'Customer Communication', 'Basic Reports'], color: 'green' }
                ].map((role, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className={`font-semibold mb-3 text-${role.color}-600`}>{role.role}</h4>
                    <ul className="space-y-2">
                      {role.permissions.map((permission, pIndex) => (
                        <li key={pIndex} className="flex items-center text-sm">
                          <CheckCircle2 className={`w-4 h-4 mr-2 text-${role.color}-500`} />
                          {permission}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Bell className="text-orange-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Notification Preferences</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-500" />
                    Email Notifications
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(notifications.email).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <button
                          onClick={() => setNotifications({
                            ...notifications,
                            email: { ...notifications.email, [key]: !value }
                          })}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-green-500" />
                    SMS Notifications
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(notifications.sms).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <button
                          onClick={() => setNotifications({
                            ...notifications,
                            sms: { ...notifications.sms, [key]: !value }
                          })}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="font-medium mb-4">Notification Frequency</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['immediate', 'hourly', 'daily', 'weekly'].map((freq) => (
                    <label key={freq} className="flex items-center">
                      <input
                        type="radio"
                        name="frequency"
                        value={freq}
                        checked={notifications.frequency === freq}
                        onChange={(e) => setNotifications({...notifications, frequency: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm capitalize">{freq}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Advanced Notification Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Volume2 className="text-purple-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Advanced Notification Settings</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Sound Notifications</h4>
                    <p className="text-sm text-gray-600">Play sound for critical alerts</p>
                  </div>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Desktop Notifications</h4>
                    <p className="text-sm text-gray-600">Show desktop notifications for new bookings</p>
                  </div>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <Monitor className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-Archive</h4>
                    <p className="text-sm text-gray-600">Automatically archive notifications after 30 days</p>
                  </div>
                  <button
                    onClick={() => setAutoSave(!autoSave)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      autoSave ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoSave ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Shield className="text-red-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Security Settings</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Authentication</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Add extra security to your account</p>
                      </div>
                      <button
                        onClick={() => setTwoFA(!twoFA)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          twoFA ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          twoFA ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="border-t pt-4">
                      <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <Key size={16} />
                        <span>Change Password</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Session Management</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>Never</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Failed Login Attempts</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Lock after 3 attempts</option>
                        <option>Lock after 5 attempts</option>
                        <option>Lock after 10 attempts</option>
                        <option>Never lock</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Monitoring */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Activity className="text-orange-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Security Monitoring</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-medium text-green-800">Security Status: Good</h4>
                  </div>
                  <p className="text-sm text-green-700">No security threats detected</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-blue-800">SSL Certificate</h4>
                  </div>
                  <p className="text-sm text-blue-700">Valid until Dec 2024</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-4">Recent Security Events</h4>
                <div className="space-y-3">
                  {[
                    { event: 'Successful login from Mumbai, India', time: '2 hours ago', status: 'success' },
                    { event: 'Failed login attempt from unknown location', time: '1 day ago', status: 'warning' },
                    { event: 'Password changed successfully', time: '3 days ago', status: 'success' }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          event.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                        }`} />
                        <span className="text-sm">{event.event}</span>
                      </div>
                      <span className="text-xs text-gray-500">{event.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Settings className="text-purple-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">System Configuration</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Performance Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cache Duration</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>1 hour</option>
                        <option>6 hours</option>
                        <option>24 hours</option>
                        <option>1 week</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Auto-backup Frequency</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Manual only</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">System Status</h4>
                  <div className="space-y-3">
                    {[
                      { service: 'Database', status: 'Running', uptime: '99.9%' },
                      { service: 'Web Server', status: 'Running', uptime: '99.8%' },
                      { service: 'Email Service', status: 'Running', uptime: '98.5%' },
                      { service: 'SMS Gateway', status: 'Running', uptime: '97.2%' }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                          <span className="font-medium">{service.service}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{service.status}</p>
                          <p className="text-xs text-gray-500">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Mode */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Wrench className="text-orange-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Maintenance Mode</h2>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-yellow-800">Enable Maintenance Mode</h4>
                  <p className="text-sm text-yellow-700">This will temporarily disable public access to the system</p>
                </div>
                <button
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    maintenanceMode ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              {maintenanceMode && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Maintenance Mode Active</h4>
                  <p className="text-sm text-red-700 mb-3">The system is currently in maintenance mode. Public users will see a maintenance page.</p>
                  <textarea
                    placeholder="Enter maintenance message for users..."
                    className="w-full px-3 py-2 border border-red-300 rounded-lg text-sm"
                    rows={3}
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Palette className="text-indigo-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Appearance Settings</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Theme Settings</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {isDarkMode ? <Moon className="w-5 h-5 mr-2" /> : <Sun className="w-5 h-5 mr-2" />}
                        <span>Dark Mode</span>
                      </div>
                      <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isDarkMode ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isDarkMode ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                      <div className="flex space-x-3">
                        {['blue', 'green', 'purple', 'red', 'orange'].map((color) => (
                          <button
                            key={color}
                            className={`w-8 h-8 rounded-full bg-${color}-500 hover:scale-110 transition-transform`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Layout Preferences</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sidebar Position</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" name="sidebar" value="left" defaultChecked className="mr-2" />
                          <span className="text-sm">Left</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="sidebar" value="right" className="mr-2" />
                          <span className="text-sm">Right</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Table View</label>
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg hover:bg-gray-50">
                          <Grid className="w-4 h-4" />
                          <span className="text-sm">Grid</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg hover:bg-gray-50">
                          <List className="w-4 h-4" />
                          <span className="text-sm">List</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Branding */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <ImageIcon className="text-pink-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Custom Branding</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Login Page Background</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload background image</p>
                    <button className="text-blue-500 text-sm hover:underline">Choose File</button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload favicon (.ico)</p>
                    <button className="text-blue-500 text-sm hover:underline">Choose File</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Link className="text-green-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Third-Party Integrations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Google Analytics', description: 'Track website analytics', icon: BarChart3, connected: true, color: 'green' },
                  { name: 'PayPal', description: 'Payment processing', icon: Payment, connected: true, color: 'blue' },
                  { name: 'Stripe', description: 'Credit card processing', icon: Banknote, connected: false, color: 'purple' },
                  { name: 'Twilio', description: 'SMS notifications', icon: Smartphone, connected: true, color: 'red' },
                  { name: 'Mailgun', description: 'Email delivery service', icon: Mail, connected: false, color: 'orange' },
                  { name: 'WhatsApp Business', description: 'Customer communication', icon: Phone, connected: false, color: 'green' }
                ].map((integration, index) => {
                  const Icon = integration.icon;
                  return (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <Icon className={`w-8 h-8 text-${integration.color}-500`} />
                        <div className={`w-3 h-3 rounded-full ${
                          integration.connected ? 'bg-green-500' : 'bg-gray-300'
                        }`} />
                      </div>
                      <h4 className="font-semibold mb-1">{integration.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                      <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        integration.connected 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}>
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Webhooks */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code className="text-purple-500 mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Webhooks</h2>
                </div>
                <button className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  <Plus size={16} />
                  <span>Add Webhook</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { url: 'https://api.example.com/booking-webhook', events: ['booking.created', 'booking.updated'], status: 'Active' },
                  { url: 'https://analytics.example.com/events', events: ['payment.completed'], status: 'Inactive' }
                ].map((webhook, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">{webhook.url}</code>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        webhook.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {webhook.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {webhook.events.map((event, eventIndex) => (
                        <span key={eventIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {event}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Code className="text-blue-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">API Configuration</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">API Keys</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Public API Key', key: 'pk_live_xxxxxxxxxxxxxxxxxxxxxxxx', visible: false },
                      { name: 'Secret API Key', key: 'process.env.REACT_APP_STRIPE_KEY', visible: false }
                    ].map((apiKey, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{apiKey.name}</h5>
                          <button className="text-blue-600 hover:text-blue-800">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <code className="flex-1 bg-gray-100 px-3 py-2 rounded text-sm font-mono">
                            {apiKey.visible ? apiKey.key : '••••••••••••••••••••••••••••'}
                          </code>
                          <button className="text-gray-600 hover:text-gray-800">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors">
                      <Plus className="w-4 h-4 mx-auto mb-1" />
                      Generate New API Key
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">API Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rate Limiting</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>100 requests/minute</option>
                        <option>500 requests/minute</option>
                        <option>1000 requests/minute</option>
                        <option>Unlimited</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">API Version</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>v1.0 (Current)</option>
                        <option>v0.9 (Legacy)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">CORS Enabled</p>
                        <p className="text-sm text-gray-600">Allow cross-origin requests</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Documentation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <FileIcon className="text-green-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">API Documentation</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Authentication', description: 'Learn how to authenticate API requests', icon: Lock },
                  { title: 'Bookings API', description: 'Manage bookings programmatically', icon: Calendar },
                  { title: 'Webhooks', description: 'Real-time event notifications', icon: Zap }
                ].map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <Icon className="w-8 h-8 text-blue-500 mb-3" />
                      <h4 className="font-semibold mb-2">{doc.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                      <div className="flex items-center text-blue-600 text-sm">
                        <span>View Documentation</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Payment className="text-green-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Payment Gateway Settings</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Payment Methods</h4>
                  <div className="space-y-4">
                    {[
                      { method: 'Credit/Debit Cards', enabled: true, icon: Payment },
                      { method: 'UPI Payments', enabled: true, icon: Smartphone },
                      { method: 'Net Banking', enabled: true, icon: Globe },
                      { method: 'Digital Wallets', enabled: false, icon: Smartphone },
                      { method: 'Cash on Delivery', enabled: true, icon: Banknote }
                    ].map((payment, index) => {
                      const Icon = payment.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center">
                            <Icon className="w-5 h-5 text-gray-500 mr-3" />
                            <span>{payment.method}</span>
                          </div>
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              payment.enabled ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                          >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              payment.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Payment Configuration</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>INR - Indian Rupee</option>
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Payment Gateway</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Razorpay</option>
                        <option>PayU</option>
                        <option>Stripe</option>
                        <option>PayPal</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Fee (%)</label>
                      <input 
                        type="number" 
                        defaultValue="2.5"
                        min="0"
                        max="10"
                        step="0.1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Analytics */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <BarChart3 className="text-purple-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Payment Analytics</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Revenue', value: '₹5,43,210', change: '+12.5%', color: 'green' },
                  { label: 'Successful Payments', value: '1,234', change: '+8.2%', color: 'blue' },
                  { label: 'Failed Payments', value: '45', change: '-15.3%', color: 'red' },
                  { label: 'Refund Requests', value: '12', change: '+2.1%', color: 'orange' }
                ].map((stat, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className={`text-sm text-${stat.color}-600`}>{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'backup':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Database className="text-indigo-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Backup Management</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Backup Schedule</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Daily Backup</p>
                        <p className="text-sm text-gray-600">Every day at 3:00 AM</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Weekly Full Backup</p>
                        <p className="text-sm text-gray-600">Every Sunday at 2:00 AM</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Retention Period</label>
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
                  <h4 className="font-medium mb-4">Backup Status</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                        <h5 className="font-medium text-green-800">Last Backup Successful</h5>
                      </div>
                      <p className="text-sm text-green-700">Today at 3:00 AM - Size: 127 MB</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium">Storage Usage</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <p className="text-sm text-gray-600">6.8 GB of 10 GB used</p>
                    </div>
                    
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                      Create Manual Backup
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Backups */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Backups</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
              </div>
              
              <div className="space-y-3">
                {[
                  { date: '2024-01-25 03:00', type: 'Daily', size: '127 MB', status: 'Success' },
                  { date: '2024-01-24 03:00', type: 'Daily', size: '125 MB', status: 'Success' },
                  { date: '2024-01-23 03:00', type: 'Daily', size: '123 MB', status: 'Success' },
                  { date: '2024-01-21 02:00', type: 'Weekly', size: '1.2 GB', status: 'Success' },
                  { date: '2024-01-20 03:00', type: 'Daily', size: '121 MB', status: 'Failed' }
                ].map((backup, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        backup.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <p className="font-medium">{backup.type} Backup</p>
                        <p className="text-sm text-gray-600">{backup.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">{backup.size}</span>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Archive className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'maintenance':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Wrench className="text-orange-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">System Maintenance</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Maintenance Tools</h4>
                  <div className="space-y-3">
                    {[
                      { action: 'Clear Cache', description: 'Clear all cached data', icon: RefreshCw, color: 'blue' },
                      { action: 'Database Cleanup', description: 'Remove old logs and temporary data', icon: Database, color: 'green' },
                      { action: 'System Health Check', description: 'Run diagnostic tests', icon: Activity, color: 'purple' },
                      { action: 'Update System', description: 'Check for system updates', icon: Upload, color: 'orange' }
                    ].map((tool, index) => {
                      const Icon = tool.icon;
                      return (
                        <button key={index} className={`w-full flex items-center p-3 border rounded-lg hover:bg-${tool.color}-50 transition-colors text-left`}>
                          <Icon className={`w-5 h-5 text-${tool.color}-500 mr-3`} />
                          <div>
                            <p className="font-medium">{tool.action}</p>
                            <p className="text-sm text-gray-600">{tool.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">System Information</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Server Uptime', value: '15 days, 6 hours' },
                      { label: 'Database Size', value: '2.3 GB' },
                      { label: 'Cache Size', value: '145 MB' },
                      { label: 'Log Files', value: '89 MB' },
                      { label: 'Last Update', value: '2024-01-15' },
                      { label: 'PHP Version', value: '8.2.0' }
                    ].map((info, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{info.label}</span>
                        <span className="font-medium">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduled Maintenance */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Scheduled Maintenance</h3>
                <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  <Plus size={16} />
                  <span>Schedule Maintenance</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { task: 'Database Optimization', scheduled: '2024-02-01 02:00', duration: '2 hours', status: 'Pending' },
                  { task: 'Server Security Update', scheduled: '2024-02-15 01:00', duration: '30 minutes', status: 'Pending' },
                  { task: 'SSL Certificate Renewal', scheduled: '2024-03-01 00:00', duration: '15 minutes', status: 'Pending' }
                ].map((maintenance, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{maintenance.task}</h5>
                      <p className="text-sm text-gray-600">Scheduled: {maintenance.scheduled} (Duration: {maintenance.duration})</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        {maintenance.status}
                      </span>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'monitoring':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <Activity className="text-red-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold">System Monitoring</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: 'CPU Usage', value: '45%', status: 'good', icon: Cpu },
                  { metric: 'Memory Usage', value: '67%', status: 'warning', icon: HardDrive },
                  { metric: 'Disk Space', value: '32%', status: 'good', icon: Database },
                  { metric: 'Network I/O', value: '78%', status: 'critical', icon: Wifi }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${
                          metric.status === 'good' ? 'text-green-500' :
                          metric.status === 'warning' ? 'text-yellow-500' :
                          'text-red-500'
                        }`} />
                        <span className={`w-3 h-3 rounded-full ${
                          metric.status === 'good' ? 'bg-green-500' :
                          metric.status === 'warning' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{metric.metric}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">System Performance (Last 24 Hours)</h4>
                <div className="h-32 bg-white rounded border flex items-center justify-center">
                  <p className="text-gray-500">Performance chart would be displayed here</p>
                </div>
              </div>
            </div>

            {/* Error Logs */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent System Alerts</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View All Logs</button>
              </div>
              
              <div className="space-y-3">
                {[
                  { level: 'error', message: 'Database connection timeout', time: '2 hours ago', source: 'MySQL' },
                  { level: 'warning', message: 'High memory usage detected', time: '4 hours ago', source: 'System Monitor' },
                  { level: 'info', message: 'Backup completed successfully', time: '6 hours ago', source: 'Backup Service' },
                  { level: 'warning', message: 'SSL certificate expires in 30 days', time: '1 day ago', source: 'Security Monitor' }
                ].map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      alert.level === 'error' ? 'bg-red-500' :
                      alert.level === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-600">{alert.source} • {alert.time}</p>
                    </div>
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.level === 'error' ? 'text-red-500' :
                      alert.level === 'warning' ? 'text-yellow-500' :
                      'text-blue-500'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a settings category</div>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <Save size={20} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Settings Categories</h3>
            <nav className="space-y-2">
              {settingsTabs.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Icon size={18} className={activeTab === item.id ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
