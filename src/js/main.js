// import * as CryptoCharts from "cryptocharts";

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

  // Configuration for withdraw and deposit
 const cryptoConfig = {
  BTC: {
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      fee: 0.0005,
      minDeposit: 0.001,
      balance: 2.5432
  },
  ETH: {
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      fee: 0.005,
      minDeposit: 0.01,
      balance: 15.32
  },
  USDT: {
      address: 'TXsmCYRZoL4soJ6YgXe2hwu1f5jGb1knQj',
      fee: 10,
      minDeposit: 50,
      balance: 5000
  }
};

let depositQR = null;

// Initialize modals
function initModals() {
  // Deposit modal setup
  document.getElementById('depositCurrency').addEventListener('change', updateDepositInfo);
  document.getElementById('copyAddress').addEventListener('click', copyAddress);
  
  // Withdrawal modal setup
  document.getElementById('withdrawCurrency').addEventListener('change', updateWithdrawInfo);
  document.getElementById('maxAmount').addEventListener('click', setMaxAmount);
  document.getElementById('withdrawAmount').addEventListener('input', calculateTotal);
  document.getElementById('withdrawForm').addEventListener('submit', handleWithdrawSubmit);
  
  // Modal toggle buttons
  document.querySelectorAll('#depositBtn, #withdrawBtn, .close-modal').forEach(btn => {
      btn.addEventListener('click', toggleModal);
  });
  
  // Click outside to close
  document.querySelectorAll('#depositModal, #withdrawModal').forEach(modal => {
      modal.addEventListener('click', e => {
          if(e.target === modal) modal.classList.add('hidden');
      });
  });
  
  // Initial setup
  updateDepositInfo();
  updateWithdrawInfo();
}

// Modal toggle function
function toggleModal(e) {
  const btnId = e.target.id;
  if(btnId === 'depositBtn') {
      const modal = document.getElementById('depositModal');
      modal.classList.toggle('hidden');
      if(!modal.classList.contains('hidden')) {
          updateDepositInfo();
      }
  } else if(btnId === 'withdrawBtn') {
      const modal = document.getElementById('withdrawModal');
      modal.classList.toggle('hidden');
      if(!modal.classList.contains('hidden')) {
          updateWithdrawInfo();
      }
  } else if(e.target.classList.contains('close-modal')) {
      e.target.closest('[id$="Modal"]').classList.add('hidden');
  }
}

// Deposit functions
function updateDepositInfo() {
  const currency = document.getElementById('depositCurrency').value;
  const config = cryptoConfig[currency];
  const qrElement = document.getElementById('depositQr');
  
  // Clear previous QR code
  qrElement.innerHTML = '';
  if(depositQR) {
      depositQR.clear();
      depositQR = null;
  }

  // Create new QR code
  depositQR = new QRCode(qrElement, {
      text: config.address,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
  });

  // Update other elements
  document.getElementById('depositAddress').value = config.address;
  document.getElementById('depositCurrencyName').textContent = currency;
  document.getElementById('depositCurrencySymbol').textContent = currency;
  document.getElementById('minDeposit').textContent = config.minDeposit;
}

async function copyAddress() {
  try {
      const address = document.getElementById('depositAddress').value;
      await navigator.clipboard.writeText(address);
      const copyBtn = document.getElementById('copyAddress');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
          copyBtn.textContent = 'Copy';
      }, 2000);
  } catch (err) {
      console.error('Failed to copy:', err);
  }
}

// Withdrawal functions
function updateWithdrawInfo() {
  const currency = document.getElementById('withdrawCurrency').value;
  const config = cryptoConfig[currency];
  
  document.getElementById('balanceCurrency').textContent = currency;
  document.getElementById('availableBalance').textContent = config.balance.toFixed(4);
  document.getElementById('networkFee').textContent = `${config.fee} ${currency}`;
  calculateTotal();
}

function setMaxAmount() {
  const currency = document.getElementById('withdrawCurrency').value;
  const config = cryptoConfig[currency];
  const maxAmount = Math.max(config.balance - config.fee, 0);
  document.getElementById('withdrawAmount').value = maxAmount.toFixed(8);
  calculateTotal();
}

function calculateTotal() {
  const currency = document.getElementById('withdrawCurrency').value;
  const config = cryptoConfig[currency];
  const amount = parseFloat(document.getElementById('withdrawAmount').value) || 0;
  const total = amount + config.fee;
  document.getElementById('totalAmount').textContent = 
      `${total.toFixed(8)} ${currency}`;
}

function handleWithdrawSubmit(e) {
  e.preventDefault();
  const currency = document.getElementById('withdrawCurrency').value;
  const config = cryptoConfig[currency];
  const amount = parseFloat(document.getElementById('withdrawAmount').value);
  
  if(!validateWithdrawal(amount, config)) return;

  alert(`Withdrawal submitted: ${amount} ${currency}`);
  document.getElementById('withdrawModal').classList.add('hidden');
}

function validateWithdrawal(amount, config) {
  const address = document.getElementById('recipientAddress').value;
  const confirmed = document.getElementById('confirmCheck').checked;
  
  if(!address || address.length < 10) {
      alert('Please enter a valid wallet address');
      return false;
  }

  if(!amount || amount <= 0 || (amount + config.fee) > config.balance) {
      alert('Invalid amount');
      return false;
  }

  if(!confirmed) {
      alert('Please confirm the transaction details');
      return false;
  }

  return true;
}

// Initialize when page loads
initModals();


});
