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