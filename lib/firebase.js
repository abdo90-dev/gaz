import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

// Initialisation de Firebase uniquement côté client
let app;
let db= undefined;
let analytics;

if (typeof window !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Erreur d'initialisation Firebase:", error);
  }
}

export { db, analytics };