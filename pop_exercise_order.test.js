const User = require('./User');
const Admin = require('./Admin');
const db = require('./db');

var ord1 = {user_ID:1,
            timeOfOrder: '12:04',
            dateOfOrder: '12-02-2019',
            id: 1,
            products: ['Peaches']
}
let userI = new Admin('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
console.log(userI.createOrder(1,'12:04','12-02-2019',['peaches']));
console.log(db);

//Create a new Order
describe('(Create a new Order)(***)The Order Object ',()=>{
    it('creates new order with properties and auto-increments the ID',()=>{
        expect(userI.createOrder('12:04','12-02-2019',['peaches'])).toEqual(ord1);
        // expect(userI).toEqual(ex1);
        // expect(userII).toEqual(ex2);
        // expect(userIII).toEqual(ex3);
        // console.log('userI');
        // console.log(userI);
        // console.log('userII');
        // console.log(userII);
        // console.log('userIII');
        // console.log(userIII);
    }); 
});