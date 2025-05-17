import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

/** @type {import('firebase/app').FirebaseApp | undefined} */
let app;
/** @type {import('firebase/firestore').Firestore | undefined} */
let db = undefined;
/** @type {import('firebase/analytics').Analytics | undefined} */
let analytics = undefined;

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
