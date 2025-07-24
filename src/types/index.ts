export interface Trip {
  id: number;
  name: string;
  title?: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews?: string;
  image: string;
  description?: string;
  highlights: string[];
  itinerary: string[] | Array<{
    day: number;
    title: string;
    activities: string[];
  }>;
  inclusions: string[];
  exclusions: string[];
}

export interface Bus {
  id: string;
  route: string;
  driver: string;
  capacity: number;
  passengers: number;
  status: 'Available' | 'On Route' | 'Maintenance';
  eta: string;
}

export interface Route {
  id: string;
  from: string;
  to: string;
  distance: number;
  duration: string;
  price: number;
  status: 'Active' | 'Inactive' | 'Under Maintenance';
  stops: string[];
  frequency: string;
  busesAssigned: string[];
  createdAt: string;
  updatedAt: string;
}

export interface HajjPackage {
  id: number;
  name: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  highlights: string[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
}

export interface UmrahPackage {
  id: number;
  name: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  highlights: string[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
}

export interface Notification {
  message: string;
  type: 'success' | 'error';
}

export interface Booking {
  id: string;
  type: 'trip' | 'bus' | 'hajj' | 'umrah';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  itemId: string | number;
  itemName: string;
  bookingDate: string;
  travelDate?: string;
  departureTime?: string;
  passengers: number;
  totalAmount: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  paymentStatus: 'Pending' | 'Paid' | 'Refunded';
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RecentActivity {
  id: string;
  type: 'booking' | 'route_created' | 'bus_added' | 'payment';
  title: string;
  description: string;
  timestamp: string;
  amount?: number;
  status?: string;
}

export interface Report {
  id: string;
  title: string;
  type: 'revenue' | 'bookings' | 'routes' | 'customers';
  dateRange: {
    from: string;
    to: string;
  };
  data: any;
  generatedAt: string;
  generatedBy: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export type CurrentPage = 'home' | 'trips' | 'hajj-umrah';
export type AdminSection = 'overview' | 'buses' | 'routes' | 'bookings' | 'reports' | 'settings';
