// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCeiLr2qAhfxO3U-ihLQkq0_Hf74fMgdg",
  authDomain: "dva-mods.firebaseapp.com",
  databaseURL: "https://dva-mods-default-rtdb.firebaseio.com",
  projectId: "dva-mods",
  storageBucket: "dva-mods.firebasestorage.app",
  messagingSenderId: "126139171442",
  appId: "1:126139171442:web:73d1643a3a23cf302cf8eb",
  measurementId: "G-FEMWEDYE0C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };