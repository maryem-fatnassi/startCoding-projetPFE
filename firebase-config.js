import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxIT4E3DykD7YroUX_yNt1eC53qG9KJe0",
    authDomain: "login-and-sign-up-a7799.firebaseapp.com",
    projectId: "login-and-sign-up-a7799",
    storageBucket: "login-and-sign-up-a7799.firebasestorage.app",
    messagingSenderId: "947582019722",
    appId: "1:947582019722:web:e69059c5b81dee517fa573"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);