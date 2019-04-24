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
        // console.log(firstOrder);
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
        let firstOrder = userI.createOrder(['peaches','apples']);
        // console.log(db.orders[3].products);
        expect(userI.getOrder(3).products).toEqual(['peaches','apples']);
    }); 
    it('(makes sure it is an Admin user)reads one order by it\'s ID',()=>{
        let userII = new User('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
        let firstOrder = userII.createOrder(['peaches','pineapple']);
        // console.log(db.orders);
        expect(userII.getOrder(4)).toEqual('You must be an Admin!');
    }); 
    it('(reads one order by it\'s ID and if the ID doesn\'t return an object, it returns a failure message',()=>{
        // console.log(db.orders);
        expect(userI.getOrder(6)).toEqual('Such record does not exist!');
    }); 
});
//Update order details(*)
describe('Update order details(*)(***)The Admin user ',()=>{
    it('can update the products',()=>{
        // console.log(db.orders);
        // userI.updateOrderProducts(3,['mangoes']);
        expect(userI.updateOrderProducts(3,['mangoes']).products).toEqual(['mangoes']);
    });
    it('can update the products;if he\'s not an Admin he can\'t carry out the update',()=>{
        let userIV = new User('Bash','mark.bashir@gmail.com','qwesfrty');
        let firstOrder = userIV.createOrder(['peaches','strawberry']);
        // console.log(db);
        // console.log(firstOrder);
        // console.log(userIV.products);
        // userI.updateOrderProducts(3,['mangoes']);
        expect(userIV.updateOrderProducts(6,['mangoes'])).toEqual('You must be an Admin!');
    });
});
//Delete one order(*)
describe('Delete an order(*)(***)The Admin user ',()=>{
    it('can delete one order when provided the order ID',()=>{
        olength = db.orders.length;
        // console.log(olength);
        // console.log(db.orders);
        userI.deleteOrder(6); 
        // console.log(db.orders);
        expect(db.orders.length).toEqual(olength - 1);
    });
    it('(make sure it is an admin)can delete one order when provided the order ID',()=>{
        let userIV = new User('Bash','mark.bashir@gmail.com','qwesfrty');
        expect(userIV.deleteOrder(2)).toEqual('You must be an Admin!');
    });
});
//Delete all order(*)
describe('Delete all orders(*)(***)The Admin user ',()=>{
    it('is able to delete all orders',()=>{
        // console.log(db.orders);
        userI.deleteAllOrders();
        // console.log(db.orders);
        expect(db.orders).toEqual([]);
    });
    it('(make sure it is an admin)is able to delete all orders',()=>{
        let userIV = new User('Bash','mark.bashir@gmail.com','qwesfrty');
        
        // console.log(db.orders);
        expect(userIV.deleteAllOrders()).toEqual('You must be an Admin!');
    });
});