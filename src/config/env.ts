// Environment Configuration
// ========================
// Centralized access to environment variables

interface AppConfig {
  // Authentication
  auth: {
    adminUsername: string;
    adminPassword: string;
    jwtSecret: string;
    sessionTimeout: number;
    maxLoginAttempts: number;
  };
  
  // API Configuration
  api: {
    baseUrl: string;
    timeout: number;
  };
  
  // Payment Gateways
  payment: {
    razorpay: {
      keyId: string;
      keySecret: string;
    };
    stripe: {
      publishableKey: string;
      secretKey: string;
    };
  };
  
  // Database
  database: {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
  };
  
  // Email Service
  email: {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
  };
  
  // SMS Gateway
  sms: {
    twilioAccountSid: string;
    twilioAuthToken: string;
    twilioPhoneNumber: string;
  };
  
  // Google Services
  google: {
    mapsApiKey: string;
    analyticsId: string;
  };
  
  // Social Media
  social: {
    facebookAppId: string;
    twitterApiKey: string;
  };
  
  // File Upload
  upload: {
    maxFileSize: number;
    allowedFileTypes: string[];
  };
  
  // Security
  security: {
    passwordMinLength: number;
  };
  
  // Application
  app: {
    name: string;
    version: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
    nodeEnv: string;
    debugMode: boolean;
  };
}

// Get environment variable with fallback
const getEnvVar = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] || fallback;
};

// Get environment variable as number
const getEnvNumber = (key: string, fallback: number): number => {
  const value = import.meta.env[key];
  return value ? parseInt(value, 10) : fallback;
};

// Get environment variable as boolean
const getEnvBoolean = (key: string, fallback: boolean): boolean => {
  const value = import.meta.env[key];
  return value ? value.toLowerCase() === 'true' : fallback;
};

// Application configuration object
export const config: AppConfig = {
  auth: {
    adminUsername: getEnvVar('VITE_ADMIN_USERNAME', 'admin'),
    adminPassword: getEnvVar('VITE_ADMIN_PASSWORD', 'admin123'),
    jwtSecret: getEnvVar('VITE_JWT_SECRET', 'fallback_jwt_secret'),
    sessionTimeout: getEnvNumber('VITE_SESSION_TIMEOUT', 3600000), // 1 hour
    maxLoginAttempts: getEnvNumber('VITE_MAX_LOGIN_ATTEMPTS', 5),
  },
  
  api: {
    baseUrl: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
    timeout: getEnvNumber('VITE_API_TIMEOUT', 10000),
  },
  
  payment: {
    razorpay: {
      keyId: getEnvVar('VITE_RAZORPAY_KEY_ID'),
      keySecret: getEnvVar('VITE_RAZORPAY_KEY_SECRET'),
    },
    stripe: {
      publishableKey: getEnvVar('VITE_STRIPE_PUBLISHABLE_KEY'),
      secretKey: getEnvVar('VITE_STRIPE_SECRET_KEY'),
    },
  },
  
  database: {
    host: getEnvVar('VITE_DB_HOST', 'localhost'),
    port: getEnvNumber('VITE_DB_PORT', 5432),
    name: getEnvVar('VITE_DB_NAME', 'sagar_tours_db'),
    user: getEnvVar('VITE_DB_USER', 'postgres'),
    password: getEnvVar('VITE_DB_PASSWORD'),
  },
  
  email: {
    smtpHost: getEnvVar('VITE_SMTP_HOST', 'smtp.gmail.com'),
    smtpPort: getEnvNumber('VITE_SMTP_PORT', 587),
    smtpUser: getEnvVar('VITE_SMTP_USER'),
    smtpPassword: getEnvVar('VITE_SMTP_PASSWORD'),
    fromEmail: getEnvVar('VITE_FROM_EMAIL', 'noreply@sagartours.com'),
  },
  
  sms: {
    twilioAccountSid: getEnvVar('VITE_TWILIO_ACCOUNT_SID'),
    twilioAuthToken: getEnvVar('VITE_TWILIO_AUTH_TOKEN'),
    twilioPhoneNumber: getEnvVar('VITE_TWILIO_PHONE_NUMBER'),
  },
  
  google: {
    mapsApiKey: getEnvVar('VITE_GOOGLE_MAPS_API_KEY'),
    analyticsId: getEnvVar('VITE_GOOGLE_ANALYTICS_ID'),
  },
  
  social: {
    facebookAppId: getEnvVar('VITE_FACEBOOK_APP_ID'),
    twitterApiKey: getEnvVar('VITE_TWITTER_API_KEY'),
  },
  
  upload: {
    maxFileSize: getEnvNumber('VITE_MAX_FILE_SIZE', 5242880), // 5MB
    allowedFileTypes: getEnvVar('VITE_ALLOWED_FILE_TYPES', 'jpg,jpeg,png,pdf,doc,docx').split(','),
  },
  
  security: {
    passwordMinLength: getEnvNumber('VITE_PASSWORD_MIN_LENGTH', 8),
  },
  
  app: {
    name: getEnvVar('VITE_APP_NAME', 'Sagar Tours & Travels'),
    version: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    companyEmail: getEnvVar('VITE_COMPANY_EMAIL', 'info@sagartours.com'),
    companyPhone: getEnvVar('VITE_COMPANY_PHONE', '+91 9876543210'),
    companyAddress: getEnvVar('VITE_COMPANY_ADDRESS', '123 Main Street, Mumbai, Maharashtra, India - 400001'),
    nodeEnv: getEnvVar('VITE_NODE_ENV', 'development'),
    debugMode: getEnvBoolean('VITE_DEBUG_MODE', true),
  },
};

// Export individual configs for convenience
export const authConfig = config.auth;
export const apiConfig = config.api;
export const paymentConfig = config.payment;
export const databaseConfig = config.database;
export const emailConfig = config.email;
export const smsConfig = config.sms;
export const googleConfig = config.google;
export const socialConfig = config.social;
export const uploadConfig = config.upload;
export const securityConfig = config.security;
export const appConfig = config.app;

// Helper functions
export const isProduction = (): boolean => config.app.nodeEnv === 'production';
export const isDevelopment = (): boolean => config.app.nodeEnv === 'development';
export const isDebugMode = (): boolean => config.app.debugMode;

// Validation function to check required environment variables
export const validateConfig = (): { isValid: boolean; missingVars: string[] } => {
  const requiredVars: Array<{ key: string; value: any }> = [
    { key: 'VITE_ADMIN_USERNAME', value: config.auth.adminUsername },
    { key: 'VITE_ADMIN_PASSWORD', value: config.auth.adminPassword },
    { key: 'VITE_JWT_SECRET', value: config.auth.jwtSecret },
  ];
  
  const missingVars = requiredVars
    .filter(({ value }) => !value || value === '')
    .map(({ key }) => key);
  
  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
};

// Log configuration in development
if (isDevelopment() && isDebugMode()) {
  console.log('🔧 App Configuration:', {
    environment: config.app.nodeEnv,
    appName: config.app.name,
    version: config.app.version,
    apiBaseUrl: config.api.baseUrl,
    debugMode: config.app.debugMode,
  });
  
  const validation = validateConfig();
  if (!validation.isValid) {
    console.warn('⚠️ Missing required environment variables:', validation.missingVars);
  }
}

export default config;
