document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".signup-form");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Account created for ${email}!`);
    signupForm.reset();
  });
});

document.getElementById("signup-button").addEventListener("click", function () {
  window.location.href = "LogIn.html"; // Change to your login page URL
});
