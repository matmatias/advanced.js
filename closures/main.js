const bankAccount = (ownerName, initialBalance) => {
  const owner = ownerName;
  const balance = initialBalance;

  return {
    getOwner: function () {
      return owner;
    },
    getBalance: function () {
      return balance;
    },
  };
};

const account = bankAccount("John Doe", 1000);

console.log(account.getOwner());
console.log(account.getBalance());
