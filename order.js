const db = require('./db');
const User = require('./User');

global.orderCounter = 1;

// let useee = new User('Name','email','password',true);
// console.log(useee);
// console.log(db.users);
let Order = function(user_ID,timeOfOrder,dateOfOrder,products){
    this.user_ID = user_ID;
    this.timeOfOrder = timeOfOrder;
    this.dateOfOrder = dateOfOrder;
    this.products = products;
    this.orderID = global.orderCounter;
    global.orderCounter++;
    //store order data in database
    db.orders.push(this);
}
// Order.prototype = Object.create(User.prototype);
Order.prototype = User.prototype;

let order = new Order(1,'12:04','12-02-2019',['peaches']);
console.log(order.hasOwnProperty('user_ID'));
console.log(order instanceof User);
// module.exports = Order;