import * as admin from 'firebase-admin';

// Initialize Firebase Admin
const serviceAccount = {
  type: "service_account",
  project_id: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.VITE_FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.VITE_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.VITE_FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: import.meta.env.VITE_FIREBASE_CLIENT_CERT_URL
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
  });
}

export const adminApp = admin.app();
export const adminAuth = admin.auth();
export const adminFirestore = admin.firestore();
export const adminStorage = admin.storage(); 