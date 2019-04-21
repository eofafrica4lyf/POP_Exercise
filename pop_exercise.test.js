const User = require('./pop_exercise');
const db = require('./db');

var ex1 = {user_name: "Name",email: "email",password: "password",id: 1,isAdmin: true};
var ex2 = {user_name: "Name",email: "email",password: "password",id: 2,isAdmin: false};
var ex3 = {user_name: "Name",email: "email",password: "password",id: 3,isAdmin: false};

let userI = new User('Name','email','password', true);
        let userII = new User('Name','email','password', false);
        let userIII = new User('Name','email','password', false);

describe('The User Object ',()=>{
    it('creates new users with properties and auto-increments the ID',()=>{
        
        expect(userI).toEqual(ex1);
        expect(userII).toEqual(ex2);
        expect(userIII).toEqual(ex3);
        // console.log('userI');
        // console.log(userI);
        // console.log('userII');
        // console.log(userII);
        // console.log('userIII');
        // console.log(userIII);
    }); 
});
describe('The User Object ',()=>{
    it('has written into the database and has stored userI data',()=>{
        expect(db.users[0].user_name).toEqual('Name');
        // console.log('db');
        console.log(db);
    }); 
    it('has written into the database and has stored userII data',()=>{
        expect(db.users[1].id).toEqual(2);
    }); 
});
describe('The User Object ',()=>{
    it('reads a user from the database using his ID',()=>{
       expect(User.getUser(1)).toEqual({user_name: "Name",email: "email",password: "password",id: 1,isAdmin: true});
    //    console.log('User.getUser(1)');
    //    console.log(User.getUser(1));
    }); 
    it('reads a user from the database using his ID',()=>{
       expect(User.getUser(3)).toEqual({user_name: "Name",email: "email",password: "password",id: 3,isAdmin: false});
    //    console.log('User.getUser(2)');
    //    console.log(User.getUser(2));
    }); 
    it('returns an error when an invalid parameter(string) is passed',()=>{
       expect(User.getUser('3')).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(NaN) is passed',()=>{
       expect(User.getUser(NaN)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(Infinity) is passed',()=>{
       expect(User.getUser(Infinity)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(-Infinity) is passed',()=>{
       expect(User.getUser(-Infinity)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid number of parameters are passed',()=>{
       expect(User.getUser(2,3)).toEqual('Invalid number of parameters was passed');
    }); 
});
describe('The User Object ',()=>{
    it('is read to return all users by an ADMIN user',()=>{
       expect(userI.getUsers()).toEqual([ { user_name: 'Name', email: 'email', password: 'password', id: 1,isAdmin: true },
       { user_name: 'Name', email: 'email', password: 'password', id: 2,isAdmin: false },
       { user_name: 'Name', email: 'email', password: 'password', id: 3,isAdmin: false } ]);
    }); 
    it('is read to return all users by an ordinary user',()=>{
       expect(userII.getUsers()).toEqual('You do not have enough privileges');
    }); 
});