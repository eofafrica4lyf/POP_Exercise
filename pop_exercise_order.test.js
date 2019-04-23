const User = require('./User');
const Admin = require('./Admin');
const db = require('./db');

var ord1 = {user_ID:1,
            
            order_ID: 1,
            products: ['peaches']
}
let userI = new Admin('Emmanuel','aboderinemmanuel@gmail.com','qwerty');

// console.log(userI.createOrder(1,'12:04','12-02-2019',['peaches']));
// console.log(db);

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
        expect(userI.getAllOrders().length).toEqual(2);
        
    }); 
    it('(makes sure it is an Admin user)reads all the order items/objects',()=>{
        let userII = new User('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
        let firstOrder = userII.createOrder(['peaches']);
        expect(userII.getAllOrders()).toEqual('You must be an Admin!');
    }); 
});
//Read one order by it\'s ID(*)
describe('(Read all the orders(*))(***)The Admin user ',()=>{
    it('reads one order by it\'s ID',()=>{
        let firstOrder = userI.createOrder(['peaches,apples']);
        console.log(db.orders[3] );
        expect(userI.getOrder(3).products).toEqual(['peaches','apples']);

    }); 
    // it('(makes sure it is an Admin user)reads one order by it\'s ID',()=>{
    //     let userII = new User('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
    //     let firstOrder = userII.createOrder(['peaches']);
    //     expect(userII.getAllOrders()).toEqual('You must be an Admin!');
    // }); 
});