const User = require('./pop_exercise');
const db = require('./db');

var ex1 = {user_name: "Name",email: "email",password: "password",id: 1};
var ex2 = {user_name: "Name",email: "email",password: "password",id: 2};
var ex3 = {user_name: "Name",email: "email",password: "password",id: 3};


describe('The User Object ',()=>{
    it('creates new users with properties and auto-increments the ID',()=>{
        let userI = new User('Name','email','password');
        let userII = new User('Name','email','password');
        let userIII = new User('Name','email','password');
        expect(userI).toEqual(ex1);
        expect(userII).toEqual(ex2);
        expect(userIII).toEqual(ex3);
    }); 
});
describe('The User Object ',()=>{
    it('has written into the database and has stored userI data',()=>{
        expect(db.users[0].user_name).toEqual('Name');
    }); 
    it('has written into the database and has stored userII data',()=>{
        expect(db.users[1].id).toEqual(2);
    }); 
});
