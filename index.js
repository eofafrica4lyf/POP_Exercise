const User = require('./User');
const Admin = require('./Admin');
const Order = require('./Order');
const db = require('./db');

//Create new users(both Admin and user)
console.log('\n########Create new users(both Admin and user)\n\n');
let Mark = new Admin('Mark', 'mquadrant@gmail.com','qwerty1');

let Ben = new User('Ben', 'mquadrant@gmail.com','qwerty2');

let Olar = new User('Olar', 'osunboteolar@gmail.com','qwerty3');

console.log(db);

//Read a single user by the ID
console.log('\n########Read a single user by the ID\n\n');
console.log(Mark.getUser(1));//By Admin
console.log(Ben.getUser(3));//By ordinary user

//Read all users(*)
console.log('\n########Read all users\n\n');
console.log(Mark.getUsers());//By Admin
console.log(Ben.getUsers());//By ordinary user

//Update the details of a user
console.log('\n########Update the details of a user\n\n');
console.log(Mark.updateUserName('Eshomomoh'));
console.log(db);

//Delete a user(*)
console.log('\n########Delete a user\n\n');
console.log(Mark.deleteUser(2));//Admin Mark deleted user ben;
console.log(db);
console.log(Ben.deleteUser(3));//Ordinary user Ben cannot delete a user(Olar).

//Delete all users(*)
console.log('\n########Delete all users\n\n');
console.log(Mark.deleteAllUser());//Delete all users
console.log(Ben.deleteAllUser());//Delete all users


//Search for a user by his name....

let David = new Admin('David', 'david@gmail.com','qwerty1');

let Goliath = new User('Goliath', 'goliath@gmail.com','qwerty2');

let Saul = new User('Saul', 'saul@gmail.com','qwerty3');

console.log('\n########Search for a user\n\n');

console.log(David.searchForUser('Mark'));//Admin user searches for a username
console.log(Mark);//Search for a deleted username !!!!!!Big issue here
console.log(db);
console.log(Goliath.searchForUser('David'));//Ordinary user search for a username


//Create a new order
console.log('\n########Create a new order\n\n');
console.log(David.createOrder(['marshmallows']));
console.log(David.createOrder(['sling','stones']));
console.log(Goliath.createOrder(['spear','javelin','helmet']));

//Read all orders(*)
console.log('\n########Read all orders\n\n');
console.log(David.getAllOrders());//Admin reads all orders
console.log(Goliath.getAllOrders());//Admin reads all orders

//Read one order by it's ID(*)
console.log('\n########Read one order by it\'s ID\n\n');
console.log(David.getOrder(1));//Admin reads all orders
console.log(Goliath.getOrder(1));//Admin reads all orders

//Update order details(*)
console.log('\n########Update order details\n\n');
console.log(David.getOrder(1));//Admin reads all orders
console.log(David.updateOrderProducts(1,['oreos','kitkat']));//Admin succesfully updates order details.
console.log(Goliath.updateOrderProducts(1,['oreos','kitkat']));//User cannot update order details.

//Delete one order(*)
console.log('\n########Delete one order\n\n');
console.log(David.getAllOrders());//Admin reads all orders.
console.log(David.deleteOrder(1));//Admin deletes an order
console.log(David.getAllOrders());//Admin reads all orders again to check that order is deleted.
console.log(Goliath.deleteOrder(2));//Admin deletes an order
console.log(David.getAllOrders());//Admin reads all orders again to check that ordinary user was not able to delete the order

//Delete all orders(*)
console.log('\n########Delete all orders\n\n');
console.log(David.getAllOrders());//Admin reads all orders.
console.log(David.deleteAllOrders());//Admin deletes all orders
console.log(David.getAllOrders());//Admin reads all orders.
console.log(Goliath.deleteAllOrders());//ordinary user tries to delete all orders, but can't
console.log(David.getAllOrders());//Admin reads all orders.
