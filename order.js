const db = require('./db');
const User = require('./User');

global.orderCounter = 1;


let Order = function(user_ID,products){
    this.user_ID = user_ID;
    this.timeOfOrder = new Date().toLocaleTimeString();
    this.dateOfOrder = new Date().toLocaleDateString();
    this.products = products;
    this.order_ID = global.orderCounter;
    global.orderCounter++;
    //store order data in database
    db.orders.push({user_ID: this.user_ID,timeOfOrder: this.timeOfOrder,dateOfOrder: this.dateOfOrder,products: this.products,order_ID: this.order_ID});
}
// Order.prototype = Object.create(User.prototype);
Order.prototype = User.prototype;
Order.prototype = Order;
Order.prototype.constructor = Order;


module.exports = Order;