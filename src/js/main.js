document.addEventListener("DOMContentLoaded", () => {

   // Get current year (Footer)
   const yearElement = document.getElementById("year");
   if (yearElement) {
     const currentYear = new Date().getFullYear();
     yearElement.textContent = currentYear;
   }
 
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

  // Dropdown menu
  const dropdownButton = document.getElementById('dropdownButton');
        const dropdownMenu = document.getElementById('dropdownMenu');

        // Toggle Menu
        dropdownButton.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });

        // Close Menu When Clicking Outside
        document.addEventListener('click', (e) => {
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });

        // Optional: Close Menu on Item Click
        document.querySelectorAll('#dropdownMenu a').forEach(item => {
            item.addEventListener('click', () => {
                dropdownMenu.classList.add('hidden');
            });
        });

 

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


  const sampleTransaction = {
    id: "TX123456789",
    amount: "0.5 BTC",
    status: "Completed",
    date: "2023-10-15 14:30:00",
    from: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    to: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    fee: "0.0005 BTC"
};

// Function to open modal and populate data
function openTransactionModal(transaction) {
    document.getElementById('transactionId').textContent = transaction.id;
    document.getElementById('transactionAmount').textContent = transaction.amount;
    document.getElementById('transactionStatus').textContent = transaction.status;
    document.getElementById('transactionDate').textContent = transaction.date;
    document.getElementById('transactionFrom').textContent = transaction.from;
    document.getElementById('transactionTo').textContent = transaction.to;
    document.getElementById('transactionFee').textContent = transaction.fee;

    document.getElementById('transactionModal').classList.remove('hidden');
}

// Function to close modal
function closeTransactionModal() {
    document.getElementById('transactionModal').classList.add('hidden');
}

// Event Listeners
document.getElementById('viewTransactionBtn').addEventListener('click', () => {
    openTransactionModal(sampleTransaction);
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeTransactionModal);
});

// Close modal when clicking outside
document.getElementById('transactionModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('transactionModal')) {
        closeTransactionModal();
    }
});

});

document.addEventListener("DOMContentLoaded", () => {
  // Simplified configuration (address only)
  const cryptoConfig = {
      BTC: { address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
      ETH: { address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' },
      USDT: { address: 'TXsmCYRZoL4soJ6YgXe2hwu1f5jGb1knQj' }
  };

  let depositQR = null;

  // Initialize modals
  function initModals() {
      // Deposit modal setup
      document.getElementById('depositCurrency').addEventListener('change', updateDepositInfo);
      document.getElementById('copyAddress').addEventListener('click', copyAddress);

      // Withdrawal modal setup
      document.getElementById('withdrawCurrency').addEventListener('change', updateWithdrawAddress);
      document.getElementById('withdrawForm').addEventListener('submit', handleWithdrawSubmit);

      // Modal toggle buttons
      document.querySelectorAll('#depositBtn, #withdrawBtn, .close-modal').forEach(btn => {
          btn.addEventListener('click', toggleModal);
      });

      // Click outside to close
      document.querySelectorAll('#depositModal, #withdrawModal').forEach(modal => {
          modal.addEventListener('click', e => {
              if (e.target === modal) modal.classList.add('hidden');
          });
      });

      // Initial setup
      updateDepositInfo();
      updateWithdrawAddress();
  }

  // Modal toggle function (unchanged)
  function toggleModal(e) { /* ... */ }

  // Deposit functions
  function updateDepositInfo() {
      const currency = document.getElementById('depositCurrency').value;
      const config = cryptoConfig[currency];
      const qrElement = document.getElementById('depositQr');

      // Clear previous QR code
      qrElement.innerHTML = '';
      if (depositQR) depositQR.clear();

      // Create new QR code
      depositQR = new QRCode(qrElement, {
          text: config.address,
          width: 128,
          height: 128,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
      });

      // Update address field
      document.getElementById('depositAddress').value = config.address;
      document.getElementById('copyAddress').textContent = 'Copy';
  }

  async function copyAddress() {
      try {
          await navigator.clipboard.writeText(document.getElementById('depositAddress').value);
          const copyBtn = document.getElementById('copyAddress');
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      } catch (err) {
          console.error('Failed to copy:', err);
      }
  }

  // Withdrawal functions
  function updateWithdrawAddress() {
      const currency = document.getElementById('withdrawCurrency').value;
      document.getElementById('networkCurrency').textContent = currency;
  }

  function handleWithdrawSubmit(e) {
      e.preventDefault();
      const currency = document.getElementById('withdrawCurrency').value;
      const address = document.getElementById('recipientAddress').value;

      if (!address || address.length < 10) {
          alert('Please enter a valid wallet address');
          return;
      }

      if (!document.getElementById('confirmCheck').checked) {
          alert('Please confirm the transaction details');
          return;
      }

      alert(`Withdrawal request submitted for ${currency} to:\n${address}`);
      document.getElementById('withdrawModal').classList.add('hidden');
  }

  // Initialize when page loads
  initModals();
});
  // Get elements
  const editBtn = document.querySelector('.edit');
  const cancelBtn = document.querySelector('.btn-cancel');
  const saveBtn = document.querySelector('.btn-save');
  const editPictureBtn = document.querySelector('.edit-picture');
  const inputs = document.querySelectorAll('input');
  const profilePic = document.querySelector('.profile-pic');
  
  // Store original values
  let originalValues = {};

  // Edit button click handler
  editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleEditMode(true);
  });

  // Cancel button click handler
  cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleEditMode(false);
      restoreOriginalValues();
  });

  // Save button click handler
  saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleEditMode(false);
      saveChanges();
  });

  // Profile picture edit handler
  editPictureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      
      fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                  profilePic.src = e.target.result;
              };
              reader.readAsDataURL(file);
          }
      });
      
      fileInput.click();
  });

  function toggleEditMode(enable) {
      inputs.forEach(input => {
          input.disabled = !enable;
          input.classList.toggle('focus:ring-slate-500', enable);
          input.classList.toggle('bg-slate-100', !enable);
          input.classList.toggle('dark:bg-slate-900', !enable);
      });

      saveBtn.disabled = !enable;
      cancelBtn.disabled = !enable;
      
      if(enable) storeOriginalValues();
  }

  function storeOriginalValues() {
      originalValues = {
          fname: document.getElementById('fname').value,
          lname: document.getElementById('lname').value,
          dname: document.getElementById('dname').value,
          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          city: document.getElementById('city').value,
          country: document.getElementById('country').value
      };
  }

  function restoreOriginalValues() {
      for (const [id, value] of Object.entries(originalValues)) {
          document.getElementById(id).value = value;
      }
  }

  function saveChanges() {
      // Here you would typically send data to server
      const updatedData = {
          firstName: document.getElementById('fname').value,
          lastName: document.getElementById('lname').value,
          displayName: document.getElementById('dname').value,
          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          city: document.getElementById('city').value,
          country: document.getElementById('country').value
      };

      console.log('Saving changes:', updatedData);
      // Add actual API call here
      alert('Profile updated successfully!');
      storeOriginalValues(); // Update original values after save
  }

  // Initialize original values
  storeOriginalValues();