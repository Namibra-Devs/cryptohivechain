import * as CryptoCharts from "cryptocharts";

document.addEventListener("DOMContentLoaded", () => {
  // Dark mode - Light mode
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  const themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

  // Navbar
  const hamburger = document.getElementById("hamburger-button");
  const navMenu = document.getElementById("navmenu");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");

  if (hamburger && navMenu && open && close) {
    hamburger.addEventListener("click", () => {
      if (navMenu.classList.contains("scale-y-0")) {
        navMenu.classList.remove("scale-y-0", "opacity-0");
        navMenu.classList.add("scale-y-100", "opacity-100");
        open.classList.add("hidden");
        close.classList.remove("hidden");
      } else {
        navMenu.classList.add("scale-y-0", "opacity-0");
        navMenu.classList.remove("scale-y-100", "opacity-100");
        open.classList.remove("hidden");
        close.classList.add("hidden");
      }
    });
  }

  // Form Elements
  const form = document.getElementById("register-form");
  const submitButton = document.getElementById("submit-button");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Clear errors on input change (Only if form exists)
  if (form && emailInput && passwordInput && confirmPasswordInput) {
    emailInput.addEventListener("input", () => {
      emailError.classList.add("hidden");
      emailError.textContent = "";
    });
    passwordInput.addEventListener("input", () => {
      passwordError.classList.add("hidden");
      passwordError.textContent = "";
    });
    confirmPasswordInput.addEventListener("input", () => {
      confirmPasswordError.classList.add("hidden");
      confirmPasswordError.textContent = "";
    });

    // Form submission handling
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default submission

      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      let valid = true;

      // Email validation
      if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        error.classList.remove("hidden");
        valid = false;
      }

      // Password match validation
      if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        passwordError.classList.remove("hidden");
        valid = false;
      }

      // If everything is valid, submit the form
      if (valid) {
        error.classList.add("hidden");
        error.textContent = "";
        form.submit();
      }
    });
  }

  // Get current year (Footer)
  const yearElement = document.getElementById("year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Password and Confirm Password Fields (Works for both pages)
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const btnShowHide = document.getElementById("show-hide-password");
  const btnConfirm = document.getElementById("show-hide-password-confirm");

  const showIcons = document.querySelectorAll(".show");
  const hideIcons = document.querySelectorAll(".hide");

  // Show/Hide Password for Sign-in Page
  if (passwordInput && btnShowHide) {
    btnShowHide.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showIcons[0]?.classList.add("hidden");
        hideIcons[0]?.classList.remove("hidden");
      } else {
        passwordInput.type = "password";
        showIcons[0]?.classList.remove("hidden");
        hideIcons[0]?.classList.add("hidden");
      }
    });
  }

  // Show/Hide Password for Register Page (Only if Confirm Password Exists)
  if (confirmPasswordInput && btnConfirm) {
    btnConfirm.addEventListener("click", () => {
      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        showIcons[1]?.classList.add("hidden");
        hideIcons[1]?.classList.remove("hidden");
      } else {
        confirmPasswordInput.type = "password";
        showIcons[1]?.classList.remove("hidden");
        hideIcons[1]?.classList.add("hidden");
      }
    });
  }

  //   Charts
  // CryptoCharts.priceHistory({
  //   chart_id: "btc",
  //   iconomi_tickers: ["BTC"],
  //   last_days: 30,
  //   axes: true,
  //   loading_indicator: true
  // });
});
