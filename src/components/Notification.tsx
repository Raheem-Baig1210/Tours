import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Notification as NotificationType } from '../types';

interface Props {
  notification: NotificationType;
}

const Notification: React.FC<Props> = ({ notification }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-2 ${
      notification.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
    }`}>
      {notification.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle size={20} />}
      <span>{notification.message}</span>
    </div>
  );
};

export default Notification;