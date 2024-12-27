import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("submit");

  if (!loginBtn) {
    console.error("Login button not found!");
    return;
  }

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const login = document.getElementById('login');
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        window.location.href = "startCoding.html";
        console.log("User:", user);
      })
      .catch((error) => {
        // Handle errors
        alert("Error: " + error.message);
        console.error(error);
      });
  });
});