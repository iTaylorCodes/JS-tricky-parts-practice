function createAccount(pin, amount) {
  let balance = amount || 0;
  return {
    checkBalance: function checkBalance(pinInput) {
      if (pin === pinInput) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function deposit(pinInput, depositAmount) {
      if (pin === pinInput) {
        balance += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function withdraw(pinInput, withdrawAmount) {
      if (pin === pinInput) {
        if (withdrawAmount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawAmount;
        return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function changePin(pinInput, newPin) {
      if (pin === pinInput) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
