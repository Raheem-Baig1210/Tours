import { Notification } from '../types';

export const showNotificationHelper = (
  setNotification: (notification: Notification | null) => void,
  message: string,
  type: 'success' | 'error' = 'success'
) => {
  setNotification({ message, type });
  setTimeout(() => setNotification(null), 3000);
};