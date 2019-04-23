const User = require('./User');
const Admin = require('./Admin');
const db = require('./db');

var ord1 = {user_ID:1,
            
            order_ID: 1,
            products: ['peaches']
}
let userI = new Admin('Emmanuel','aboderinemmanuel@gmail.com','qwerty');

// console.log(userI.createOrder(1,'12:04','12-02-2019',['peaches']));
console.log(db);

//Create a new Order
describe('(Create a new Order)(***)The Order Object ',()=>{
    it('creates new order with properties and auto-increments the ID',()=>{
        let firstOrder = userI.createOrder(['peaches']);
        console.log(firstOrder);
        expect(firstOrder.products).toEqual(expect.arrayContaining(['peaches']));
    }); 
});
//Read all the orders(*)
describe('(Read all the orders(*))(***)The Admin user ',()=>{
    it('reads all the order items/objects',()=>{
        let firstOrder = userI.createOrder(['peaches']);
        console.log(db.orders.length);
        expect(userI.getAllOrders().length).toEqual(2);
    }); 
    it('(makes sure it is an Admin user)reads all the order items/objects',()=>{
        let userII = new User('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
        let firstOrder = userII.createOrder(['peaches']);
        console.log(db.orders.length);
        expect(userI.getAllOrders().length).toEqual('You must be an Admin!');
    }); 
});