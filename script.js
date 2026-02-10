// Open form & set product name
function openOrderForm(product) {
  document.getElementById("productName").value = product;
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrderForm() {
  document.getElementById("orderModal").style.display = "none";
  document.getElementById("orderForm").reset();
}

// Attach click to ALL order buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const product =
        this.closest(".flower-card").querySelector("h3").innerText;
      openOrderForm(product);
    });
  });
});

// Validation
function validateOrderForm() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const qty = document.getElementById("quantity").value;

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Enter a valid 10-digit Indian mobile number");
    return false;
  }

  if (address.length < 10) {
    alert("Please enter a proper delivery address");
    return false;
  }

  if (qty < 1) {
    alert("Quantity must be at least 1");
    return false;
  }

  alert("Order placed successfully 🌸");
  closeOrderForm();
  return false;
}
let isLogin = true;

// Open / Close
function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
}

// Toggle Login / Signup
function toggleAuthMode() {
  isLogin = !isLogin;

  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Signup";
  document.getElementById("authName").style.display = isLogin ? "none" : "block";
  document.getElementById("toggleText").innerText = isLogin ? "New here?" : "Already have an account?";
}

// Handle Login / Signup
function handleAuth() {
  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value.trim();

  if (!email || !password) {
    alert("Email and password are required");
    return false;
  }

  if (!isLogin && name === "") {
    alert("Name is required for signup");
    return false;
  }

  if (!isLogin) {
    // Signup
    localStorage.setItem("floraUser", JSON.stringify({ name, email, password }));
    alert("Signup successful 🌸 Please login");
    toggleAuthMode();
    return false;
  }

  // Login
  const savedUser = JSON.parse(localStorage.getItem("floraUser"));

  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    alert("Invalid login credentials");
    return false;
  }

  // Success
  alert("Welcome back 🌷");
  closeAuthModal();
  document.getElementById("authBtn").style.display = "none";
  document.getElementById("profileIcon").style.display = "block";
  return false;
}

// Persist login state
window.addEventListener("load", () => {
  const user = localStorage.getItem("floraUser");
  if (user) {
    document.getElementById("authBtn").style.display = "none";
    document.getElementById("profileIcon").style.display = "block";
  }
});
// service booking form
// Open / Close Service Form
function openServiceForm() {
  document.getElementById("serviceModal").style.display = "flex";
}

function closeServiceForm() {
  document.getElementById("serviceModal").style.display = "none";
  document.getElementById("serviceForm").reset();
}

// Validation
function validateServiceForm() {
  const functionType = document.getElementById("functionType").value.trim();
  const seasonal = document.getElementById("seasonal").value;
  const budget = document.getElementById("budget").value;
  const qty = document.getElementById("serviceQty").value;
  const name = document.getElementById("serviceName").value.trim();
  const phone = document.getElementById("servicePhone").value.trim();

  if (!functionType || !seasonal || !budget || !qty || !name) {
    alert("Please fill all required fields");
    return false;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Enter a valid 10-digit mobile number");
    return false;
  }

  alert("Thank you for booking us 🌸 We will contact you very soon.");
  closeServiceForm();
  return false;
}
//blog.js
function addComment(btn) {
  const input = btn.previousElementSibling;
  const list = btn.nextElementSibling;

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
}

