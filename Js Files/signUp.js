import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit-signUp");

  if (!submit) {
    console.error("Submit button not found!");
    return;
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const signUp = document.getElementById('sign-up');
    const email = document.getElementById('email-signUp').value;
    const password = document.getElementById('password-signUp').value;
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully registered
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