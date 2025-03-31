// Task 1 - New customer creation and total spent after purchases

class Customer { // creates class with customer name, email, and purchase history
    constructor(name, email) {
        this.name = name; // name
        this.email = email; // email
        this.purchaseHistory = []; // purchase history
        console.log(`New customer created: ${this.name} (${this.email})`);
    };

    addPurchase(amount) { // adds an amount to purchase history
        this.purchaseHistory.push(amount);
        console.log(`${this.name} made a purchase of $${amount}`);
    };

    getTotalSpent() {
        const total = this.purchaseHistory.reduce((total, amount) => total + amount, 0); // adds the total plus the amount to get to the new total amount spent
        console.log(`${this.name}'s Total Spent: $${total}`);
        return total;
    };
};

const jamie = new Customer("Jamie", "jamietart01@gmail.com");
jamie.addPurchase(35);
jamie.addPurchase(25);
jamie.getTotalSpent();

// Task 2 - Creating a Sales Rep Class

class SalesRep { // creates sales rep class
   constructor(name) {
    this.name = name;
    this.clients = [];
    console.log(`Sales Rep: ${name}`);
   }

   addClient(customer) { // method that adds a client
    this.clients.push(customer) // adds a customer to the clients array
    console.log(`Client: ${customer.name}`)
   }
   
   getClientTotal(name) { // method that gets the client total
    const client = this.clients.find(c=> c.name === name);
    return client ? client.getTotalSpent() : 0;
   }
}

const rep = new SalesRep ("Derek Heath")
rep.addClient(jamie)

console.log(rep.getClientTotal("Tyler Adams"));
console.log(rep.getClientTotal("Alice Wonderland"));

// Task 3 - Creates VIP Customer Class

class VIPCustomer extends Customer { // creates a class that extends to customer
    constructor (name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
        console.log(`VIP Customer created: ${this.name} - Level: ${this.vipLevel}`);
    }

    getTotalSpent() { // method that gets the total amount spent
        const baseTotal = super.getTotalSpent(); // get original total from Customer
        const bonus = baseTotal * 0.10; // calculates the 10% bonus
        const totalWithBonus = baseTotal + bonus;

        console.log(`${this.name}'s Total Spent with 10% VIP Bonus: $${totalWithBonus.toFixed(2)}`); // logs the total spent with the bonus
    return totalWithBonus;
    }
};

const patrick = new VIPCustomer("Patrick Star", "patrickstar@gmail.com", "Gold"); // adds a new VIP customer
patrick.addPurchase(100);
patrick.addPurchase(50);
patrick.getTotalSpent(); 