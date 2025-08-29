// ==========================
// Part 1: Event Handling
// ==========================
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "🎉 Button was clicked!";
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark mode toggle
document.getElementById("toggleModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter feature
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  document.getElementById("counterValue").textContent = counter;
});

// Collapsible FAQ
document.getElementById("faqQuestion").addEventListener("click", () => {
  let answer = document.getElementById("faqAnswer");
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

// ==========================
// Part 3: Form Validation
// ==========================
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  let valid = true;

  // Name validation
  let name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex)
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation (min 6 chars)
  let password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final message
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix errors before submitting.";
  }
});
