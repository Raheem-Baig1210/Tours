import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import TripsPage from './components/TripsPage';
import HajjUmrahPage from './components/HajjUmrahPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import TripDetailsModal from './components/modals/TripDetailsModal';
import TripBookingModal from './components/modals/TripBookingModal';
import BusBookingModal from './components/modals/BusBookingModal';
import { HajjDetailsModal, UmrahDetailsModal, HajjBookingModal, UmrahBookingModal } from './components/modals/HajjUmrahModals';
import { AddBusModal, CreateRouteModal, EditRouteModal } from './components/modals/AdminModals';
import Notification from './components/Notification';

import { tripsData } from './data/tripsData';
import { initialBuses } from './data/busesData';
import { initialRoutes } from './data/routesData';
import { initialBookings, initialRecentActivities } from './data/bookingsData';
import { hajjPackages, umrahPackages } from './data/hajjUmrahData';
import { showNotificationHelper } from './utils/notifications';
import { authConfig } from './config/env';
import {
  Trip,
  Bus,
  Route,
  Booking,
  RecentActivity,
  HajjPackage,
  UmrahPackage,
  Notification as NotificationType,
  LoginData,
  CurrentPage,
  AdminSection
} from './types';

function App() {
  // Navigation state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  
  // Authentication state
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({ username: '', password: '' });
  
  // Admin state
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [buses, setBuses] = useState<Bus[]>(initialBuses);
  const [routes, setRoutes] = useState<Route[]>(initialRoutes);
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>(initialRecentActivities);
  
  // Modal state
  const [showTripDetails, setShowTripDetails] = useState(false);
  const [showTripBookingModal, setShowTripBookingModal] = useState(false);
  const [showBusBookingModal, setShowBusBookingModal] = useState(false);
  const [showHajjDetails, setShowHajjDetails] = useState(false);
  const [showUmrahDetails, setShowUmrahDetails] = useState(false);
  const [showHajjBooking, setShowHajjBooking] = useState(false);
  const [showUmrahBooking, setShowUmrahBooking] = useState(false);
  const [showAddBusModal, setShowAddBusModal] = useState(false);
  const [showCreateRouteModal, setShowCreateRouteModal] = useState(false);
  const [showEditRouteModal, setShowEditRouteModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  
  // Selected items state
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [selectedHajjPackage, setSelectedHajjPackage] = useState<HajjPackage | null>(null);
  const [selectedUmrahPackage, setSelectedUmrahPackage] = useState<UmrahPackage | null>(null);
  
  // Notification state
  const [notification, setNotification] = useState<NotificationType | null>(null);

  // Utility function for showing notifications
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    showNotificationHelper(setNotification, message, type);
  };

  // Authentication handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

    if (loginData.username === adminUsername && loginData.password === adminPassword) {
      setIsLoggedIn(true);
      setShowLogin(false);
      showNotification('Login successful! Welcome to admin dashboard.');
    } else {
      showNotification('Wrong credentials! Please try again.', 'error');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('overview');
    setCurrentPage('home');
    showNotification('Logged out successfully.');
  };

  // Trip handlers
  const handleTripSelect = (trip: Trip) => {
    setSelectedTrip(trip);
    setShowTripDetails(true);
  };

  const handleBookTrip = (trip: Trip) => {
    setSelectedTrip(trip);
    setShowTripBookingModal(true);
  };

  const handleTripBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bookingData = Object.fromEntries(formData);

    if (selectedTrip) {
      const newBooking = addNewBooking({
        type: 'trip',
        customerName: bookingData.name as string,
        customerEmail: bookingData.email as string,
        customerPhone: bookingData.phone as string,
        itemId: selectedTrip.id,
        itemName: selectedTrip.name,
        bookingDate: new Date().toISOString().split('T')[0],
        travelDate: bookingData.travelDate as string,
        passengers: parseInt(bookingData.passengers as string),
        totalAmount: selectedTrip.price * parseInt(bookingData.passengers as string),
        status: 'Pending',
        paymentStatus: 'Pending',
        specialRequests: bookingData.specialRequests as string
      });

      setShowTripBookingModal(false);
      setSelectedTrip(null);
      showNotification(`Trip to ${selectedTrip.name} booked successfully! Booking ID: ${newBooking.id}`);
    }
  };

  // Hajj/Umrah handlers
  const handleViewHajjDetails = (pkg: HajjPackage) => {
    setSelectedHajjPackage(pkg);
    setShowHajjDetails(true);
  };

  const handleViewUmrahDetails = (pkg: UmrahPackage) => {
    setSelectedUmrahPackage(pkg);
    setShowUmrahDetails(true);
  };

  const handleBookHajj = (pkg: HajjPackage) => {
    setSelectedHajjPackage(pkg);
    setShowHajjBooking(true);
  };

  const handleBookUmrah = (pkg: UmrahPackage) => {
    setSelectedUmrahPackage(pkg);
    setShowUmrahBooking(true);
  };

  const handleHajjBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bookingData = Object.fromEntries(formData);

    if (selectedHajjPackage) {
      const newBooking = addNewBooking({
        type: 'hajj',
        customerName: bookingData.name as string,
        customerEmail: bookingData.email as string,
        customerPhone: bookingData.phone as string,
        itemId: selectedHajjPackage.id,
        itemName: selectedHajjPackage.name,
        bookingDate: new Date().toISOString().split('T')[0],
        travelDate: bookingData.travelDate as string,
        passengers: parseInt(bookingData.passengers as string),
        totalAmount: selectedHajjPackage.price * parseInt(bookingData.passengers as string),
        status: 'Pending',
        paymentStatus: 'Pending',
        specialRequests: bookingData.specialRequests as string
      });

      setShowHajjBooking(false);
      setSelectedHajjPackage(null);
      showNotification(`Hajj package booking submitted successfully! Booking ID: ${newBooking.id}`);
    }
  };

  const handleUmrahBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bookingData = Object.fromEntries(formData);

    if (selectedUmrahPackage) {
      const newBooking = addNewBooking({
        type: 'umrah',
        customerName: bookingData.name as string,
        customerEmail: bookingData.email as string,
        customerPhone: bookingData.phone as string,
        itemId: selectedUmrahPackage.id,
        itemName: selectedUmrahPackage.name,
        bookingDate: new Date().toISOString().split('T')[0],
        travelDate: bookingData.travelDate as string,
        passengers: parseInt(bookingData.passengers as string),
        totalAmount: selectedUmrahPackage.price * parseInt(bookingData.passengers as string),
        status: 'Pending',
        paymentStatus: 'Pending',
        specialRequests: bookingData.specialRequests as string
      });

      setShowUmrahBooking(false);
      setSelectedUmrahPackage(null);
      showNotification(`Umrah package booking submitted successfully! Booking ID: ${newBooking.id}`);
    }
  };

  // Bus handlers
  const handleBookBus = (bus: Bus) => {
    setSelectedBus(bus);
    setShowBusBookingModal(true);
  };

  const handleBusBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bookingFormData = Object.fromEntries(formData);

    if (selectedBus) {
      // Create booking record
      const routePrice = routes.find(r => r.from + ' - ' + r.to === selectedBus.route)?.price || 250;
      const newBooking = addNewBooking({
        type: 'bus',
        customerName: bookingFormData.name as string,
        customerEmail: bookingFormData.email as string,
        customerPhone: bookingFormData.phone as string,
        itemId: selectedBus.id,
        itemName: selectedBus.route,
        bookingDate: new Date().toISOString().split('T')[0],
        travelDate: bookingFormData.travelDate as string,
        departureTime: bookingFormData.departureTime as string,
        passengers: parseInt(bookingFormData.passengers as string),
        totalAmount: routePrice * parseInt(bookingFormData.passengers as string),
        status: 'Confirmed',
        paymentStatus: 'Paid'
      });

      // Update bus status
      setBuses(prev => prev.map(bus =>
        bus.id === selectedBus.id
          ? {
              ...bus,
              status: 'On Route' as const,
              passengers: bus.passengers + parseInt(bookingFormData.passengers as string),
              eta: bookingFormData.departureTime as string
            }
          : bus
      ));

      setShowBusBookingModal(false);
      setSelectedBus(null);
      showNotification(`Bus booked successfully! Booking ID: ${newBooking.id}`);
    }
  };

  // Scroll utility
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Admin modal handlers
  const handleAddBus = () => setShowAddBusModal(true);
  const handleCreateRoute = () => setShowCreateRouteModal(true);

  // Route handlers
  const handleCreateRouteSubmit = (routeData: Omit<Route, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newRoute: Route = {
      ...routeData,
      id: `ROUTE${(routes.length + 1).toString().padStart(3, '0')}`,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setRoutes(prev => [...prev, newRoute]);
    showNotification(`Route ${routeData.from} - ${routeData.to} created successfully!`);
  };

  const handleEditRoute = (route: Route) => {
    setSelectedRoute(route);
    setShowEditRouteModal(true);
  };

  const handleEditRouteSubmit = (updatedRoute: Route) => {
    setRoutes(prev => prev.map(route =>
      route.id === updatedRoute.id ? updatedRoute : route
    ));
    showNotification(`Route ${updatedRoute.from} - ${updatedRoute.to} updated successfully!`);
  };

  const handleDeleteRoute = (routeId: string) => {
    const routeToDelete = routes.find(r => r.id === routeId);
    if (window.confirm(`Are you sure you want to delete route ${routeToDelete?.from} - ${routeToDelete?.to}?`)) {
      setRoutes(prev => prev.filter(route => route.id !== routeId));
      showNotification('Route deleted successfully!');
    }
  };

  // Booking management handlers
  const handleUpdateBookingStatus = (bookingId: string, status: string) => {
    setBookings(prev => prev.map(booking =>
      booking.id === bookingId
        ? { ...booking, status: status as any, updatedAt: new Date().toISOString() }
        : booking
    ));

    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
      const newActivity: RecentActivity = {
        id: `ACT${Date.now()}`,
        type: 'booking',
        title: `Booking ${status}`,
        description: `${booking.customerName}'s booking for ${booking.itemName} has been ${status.toLowerCase()}`,
        timestamp: new Date().toISOString(),
        amount: booking.totalAmount,
        status: status
      };
      setRecentActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }

    showNotification(`Booking ${status.toLowerCase()} successfully!`);
  };

  const handleGenerateReport = (reportType: string) => {
    showNotification(`${reportType.charAt(0).toUpperCase() + reportType.slice(1)} report generation started. You will be notified when ready.`);
  };

  // Helper function to add new booking
  const addNewBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: `BK${(bookings.length + 1).toString().padStart(3, '0')}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setBookings(prev => [newBooking, ...prev]);

    // Add to recent activities
    const newActivity: RecentActivity = {
      id: `ACT${Date.now()}`,
      type: 'booking',
      title: `New ${bookingData.type.toUpperCase()} Booking`,
      description: `${bookingData.customerName} booked ${bookingData.itemName}`,
      timestamp: new Date().toISOString(),
      amount: bookingData.totalAmount,
      status: bookingData.status
    };
    setRecentActivities(prev => [newActivity, ...prev.slice(0, 9)]);

    return newBooking;
  };

  // Render Hajj/Umrah page
  if (currentPage === 'hajj-umrah') {
    return (
      <div>
        {notification && <Notification notification={notification} />}
        
        <HajjUmrahPage 
          hajjPackages={hajjPackages}
          umrahPackages={umrahPackages}
          setCurrentPage={setCurrentPage}
          onBookHajj={handleBookHajj}
          onBookUmrah={handleBookUmrah}
          onViewHajjDetails={handleViewHajjDetails}
          onViewUmrahDetails={handleViewUmrahDetails}
        />
        
        {showHajjDetails && selectedHajjPackage && (
          <HajjDetailsModal 
            package={selectedHajjPackage}
            onClose={() => setShowHajjDetails(false)}
            onBook={handleBookHajj}
          />
        )}
        
        {showUmrahDetails && selectedUmrahPackage && (
          <UmrahDetailsModal 
            package={selectedUmrahPackage}
            onClose={() => setShowUmrahDetails(false)}
            onBook={handleBookUmrah}
          />
        )}
        
        {showHajjBooking && selectedHajjPackage && (
          <HajjBookingModal 
            package={selectedHajjPackage}
            onClose={() => setShowHajjBooking(false)}
            onSubmit={handleHajjBookingSubmit}
          />
        )}
        
        {showUmrahBooking && selectedUmrahPackage && (
          <UmrahBookingModal 
            package={selectedUmrahPackage}
            onClose={() => setShowUmrahBooking(false)}
            onSubmit={handleUmrahBookingSubmit}
          />
        )}
      </div>
    );
  }

  // Render logic
  if (currentPage === 'trips') {
    return (
      <div>
        {notification && <Notification notification={notification} />}
        
        <TripsPage 
          trips={tripsData}
          onTripSelect={handleTripSelect}
          onBookTrip={handleBookTrip}
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection}
        />
        
        {showTripDetails && selectedTrip && (
          <TripDetailsModal 
            trip={selectedTrip}
            onClose={() => setShowTripDetails(false)}
            onBook={handleBookTrip}
          />
        )}
        
        {showTripBookingModal && selectedTrip && (
          <TripBookingModal 
            trip={selectedTrip}
            onClose={() => setShowTripBookingModal(false)}
            onSubmit={handleTripBookingSubmit}
          />
        )}
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div>
        {notification && <Notification notification={notification} />}
        
        <AdminDashboard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          buses={buses}
          routes={routes}
          bookings={bookings}
          recentActivities={recentActivities}
          onLogout={handleLogout}
          onAddBus={handleAddBus}
          onCreateRoute={handleCreateRoute}
          onEditRoute={handleEditRoute}
          onDeleteRoute={handleDeleteRoute}
          onBookBus={handleBookBus}
          onUpdateBookingStatus={handleUpdateBookingStatus}
          onGenerateReport={handleGenerateReport}
        />
        
        <AddBusModal 
          isOpen={showAddBusModal}
          onClose={() => setShowAddBusModal(false)}
        />
        
        <CreateRouteModal
          isOpen={showCreateRouteModal}
          onClose={() => setShowCreateRouteModal(false)}
          onCreateRoute={handleCreateRouteSubmit}
        />

        <EditRouteModal
          isOpen={showEditRouteModal}
          onClose={() => setShowEditRouteModal(false)}
          route={selectedRoute}
          onEditRoute={handleEditRouteSubmit}
        />
        
        {showBusBookingModal && selectedBus && (
          <BusBookingModal 
            bus={selectedBus}
            onClose={() => setShowBusBookingModal(false)}
            onSubmit={handleBusBookingSubmit}
          />
        )}
      </div>
    );
  }

  if (showLogin) {
    return (
      <div>
        {notification && <Notification notification={notification} />}
        
        <LoginPage 
          loginData={loginData}
          setLoginData={setLoginData}
          handleLogin={handleLogin}
          setShowLogin={setShowLogin}
        />
      </div>
    );
  }

  return (
    <div>
      {notification && <Notification notification={notification} />}
      
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowLogin={setShowLogin}
        scrollToSection={scrollToSection}
      />
      
      <HomePage 
        setCurrentPage={setCurrentPage}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}

export default App;
