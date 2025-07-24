import { Booking, RecentActivity } from '../types';

export const initialBookings: Booking[] = [
  {
    id: 'BK001',
    type: 'trip',
    customerName: 'Rahul Sharma',
    customerEmail: 'rahul.sharma@email.com',
    customerPhone: '+91 9876543210',
    itemId: 1,
    itemName: 'Goa Beach Paradise',
    bookingDate: '2024-01-25',
    travelDate: '2024-02-15',
    passengers: 2,
    totalAmount: 15000,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    specialRequests: 'Vegetarian meals preferred',
    createdAt: '2024-01-25T10:30:00',
    updatedAt: '2024-01-25T10:30:00'
  },
  {
    id: 'BK002',
    type: 'bus',
    customerName: 'Priya Patel',
    customerEmail: 'priya.patel@email.com',
    customerPhone: '+91 9123456789',
    itemId: 'BUS001',
    itemName: 'Mumbai - Pune',
    bookingDate: '2024-01-25',
    travelDate: '2024-01-26',
    departureTime: '2:30 PM',
    passengers: 1,
    totalAmount: 250,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-25T14:15:00',
    updatedAt: '2024-01-25T14:15:00'
  },
  {
    id: 'BK003',
    type: 'hajj',
    customerName: 'Mohammed Ali',
    customerEmail: 'mohammed.ali@email.com',
    customerPhone: '+91 9234567890',
    itemId: 1,
    itemName: 'Premium Hajj Package',
    bookingDate: '2024-01-24',
    travelDate: '2024-06-15',
    passengers: 2,
    totalAmount: 450000,
    status: 'Pending',
    paymentStatus: 'Pending',
    specialRequests: 'Need wheelchair assistance',
    createdAt: '2024-01-24T16:45:00',
    updatedAt: '2024-01-24T16:45:00'
  },
  {
    id: 'BK004',
    type: 'umrah',
    customerName: 'Fatima Sheikh',
    customerEmail: 'fatima.sheikh@email.com',
    customerPhone: '+91 9345678901',
    itemId: 1,
    itemName: 'Deluxe Umrah Package',
    bookingDate: '2024-01-23',
    travelDate: '2024-03-10',
    passengers: 1,
    totalAmount: 85000,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-23T11:20:00',
    updatedAt: '2024-01-23T11:20:00'
  },
  {
    id: 'BK005',
    type: 'trip',
    customerName: 'Amit Kumar',
    customerEmail: 'amit.kumar@email.com',
    customerPhone: '+91 9456789012',
    itemId: 3,
    itemName: 'Rajasthan Royal Heritage',
    bookingDate: '2024-01-22',
    travelDate: '2024-02-28',
    passengers: 4,
    totalAmount: 32000,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-22T09:10:00',
    updatedAt: '2024-01-22T09:10:00'
  },
  {
    id: 'BK006',
    type: 'bus',
    customerName: 'Sneha Reddy',
    customerEmail: 'sneha.reddy@email.com',
    customerPhone: '+91 9567890123',
    itemId: 'BUS002',
    itemName: 'Delhi - Agra',
    bookingDate: '2024-01-25',
    travelDate: '2024-01-27',
    departureTime: '4:15 PM',
    passengers: 2,
    totalAmount: 700,
    status: 'Pending',
    paymentStatus: 'Pending',
    createdAt: '2024-01-25T18:30:00',
    updatedAt: '2024-01-25T18:30:00'
  }
];

export const initialRecentActivities: RecentActivity[] = [
  {
    id: 'ACT001',
    type: 'booking',
    title: 'New Trip Booking',
    description: 'Rahul Sharma booked Goa Beach Paradise for 2 passengers',
    timestamp: '2024-01-25T10:30:00',
    amount: 15000,
    status: 'Confirmed'
  },
  {
    id: 'ACT002',
    type: 'booking',
    title: 'Bus Booking',
    description: 'Priya Patel booked Mumbai - Pune bus',
    timestamp: '2024-01-25T14:15:00',
    amount: 250,
    status: 'Confirmed'
  },
  {
    id: 'ACT003',
    type: 'booking',
    title: 'Hajj Package Booking',
    description: 'Mohammed Ali requested Premium Hajj Package for 2 passengers',
    timestamp: '2024-01-24T16:45:00',
    amount: 450000,
    status: 'Pending'
  },
  {
    id: 'ACT004',
    type: 'payment',
    title: 'Payment Received',
    description: 'Fatima Sheikh completed payment for Umrah package',
    timestamp: '2024-01-23T11:20:00',
    amount: 85000,
    status: 'Paid'
  },
  {
    id: 'ACT005',
    type: 'route_created',
    title: 'New Route Added',
    description: 'Admin created route Kolkata - Darjeeling',
    timestamp: '2024-01-22T15:00:00'
  }
];
