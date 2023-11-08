import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVo33poLa0QiSrJV2ymz9Ycm8Xku2GRMg",
  authDomain: "house-marketplace-app-4b2ce.firebaseapp.com",
  projectId: "house-marketplace-app-4b2ce",
  storageBucket: "house-marketplace-app-4b2ce.appspot.com",
  messagingSenderId: "438394353074",
  appId: "1:438394353074:web:b3f82b99b368d9280e60ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
