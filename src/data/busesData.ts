import { Bus } from '../types';

export const initialBuses: Bus[] = [
  { 
    id: 'BUS001', 
    route: 'Mumbai - Pune', 
    driver: 'Rajesh Kumar', 
    capacity: 45, 
    passengers: 32, 
    status: 'On Route', 
    eta: '2:30 PM' 
  },
  { 
    id: 'BUS002', 
    route: 'Delhi - Agra', 
    driver: 'Amit Singh', 
    capacity: 50, 
    passengers: 28, 
    status: 'On Route', 
    eta: '4:15 PM' 
  },
  { 
    id: 'BUS003', 
    route: 'Bangalore - Mysore', 
    driver: 'Suresh Reddy', 
    capacity: 40, 
    passengers: 0, 
    status: 'Available', 
    eta: '-' 
  },
  { 
    id: 'BUS004', 
    route: 'Chennai - Pondicherry', 
    driver: 'Karthik Raj', 
    capacity: 35, 
    passengers: 0, 
    status: 'Maintenance', 
    eta: '-' 
  },
  { 
    id: 'BUS005', 
    route: 'Kolkata - Darjeeling', 
    driver: 'Ravi Das', 
    capacity: 42, 
    passengers: 0, 
    status: 'Available', 
    eta: '-' 
  },
  { 
    id: 'BUS006', 
    route: 'Jaipur - Udaipur', 
    driver: 'Mohan Sharma', 
    capacity: 48, 
    passengers: 0, 
    status: 'Available', 
    eta: '-' 
  },
  { 
    id: 'BUS007', 
    route: 'Goa - Mumbai', 
    driver: 'Prakash Naik', 
    capacity: 38, 
    passengers: 0, 
    status: 'Available', 
    eta: '-' 
  },
  { 
    id: 'BUS008', 
    route: 'Hyderabad - Vijayawada', 
    driver: 'Venkat Rao', 
    capacity: 44, 
    passengers: 0, 
    status: 'Available', 
    eta: '-' 
  }
];