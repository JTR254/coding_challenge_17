// Task 1 - New customer creation and total spent after purchases

class Customer { // creates class with customer name, email, and purchase history
    constructor(name, email) {
        this.name = name; // name
        this.email = email; // email
        this.purchaseHistory = []; // purchase history
    }

    addPurchase(amount) { // adds an amount to purchase history
        this.purchaseHistory.push(amount)
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // adds the total plus the amount to get to the new total amount spent
    }
};
