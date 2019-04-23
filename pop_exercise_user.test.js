const User = require('./User');
const Admin = require('./Admin');
const db = require('./db');

var ex1 = {user_name: "Emmanuel",email: "aboderinemmanuel@gmail.com",password: "qwerty",id: 1, isAdmin: true};
var ex2 = {user_name: "Maranatha",email: "aboderinmaranatha@gmail.com",password: "qwertyu",id: 2, isAdmin: false};
var ex3 = {user_name: "Foluso",email: "aboderinfoluso@gmail.com",password: "qwertyui",id: 3, isAdmin: false};

        let userI = new Admin('Emmanuel','aboderinemmanuel@gmail.com','qwerty');
        let userII = new User('Maranatha','aboderinmaranatha@gmail.com','qwertyu');
        let userIII = new User('Foluso','aboderinfoluso@gmail.com','qwertyui');
//Create a new User
describe('(Create a new User)(***)The User Object ',()=>{
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
//Search for a user by his name and return false if the user is not found
//but returns the user object if the user is found.
describe('(Search for a user by his name, ',()=>{
    it('return the user object if the name is found',()=>{
        // console.log(db.users);
        expect( User.searchForUser('Foluso') ).toEqual({user_name: "Foluso",email: "aboderinfoluso@gmail.com",password: "qwertyui",id: 3,isAdmin: false});
        // console.log(db.users);
    });
    it('return false if the name is not found',()=>{
        // console.log(db.users);
        expect( User.searchForUser('Folusoo') ).toEqual('User not found!');
        // console.log(db.users);
    });
    // it('who is an ordinary user is unable to delete a user',()=>{
    //     // console.log(db.users);
    //     expect(userIII.deleteAllUser()).toEqual('You do not have enough privileges');
    //     // console.log(db.users);
    // }); 
    });
//Confirm database write
describe('(Confirm database write)(***)The User Object ',()=>{
    it('has written into the database and has stored userI data',()=>{
        expect(db.users[0].user_name).toEqual('Emmanuel');
        // console.log('db');
        // console.log(db);
    }); 
    it('has written into the database and has stored userII data',()=>{
        expect(db.users[1].id).toEqual(2);
    }); 
});
//Read a single user by his ID
describe('(Read a single user by his ID)(***)The database ',()=>{
    it('returns the info of a single user using the User\'s ID',()=>{
       expect(User.getUser(1)).toEqual({user_name: "Emmanuel",email: "aboderinemmanuel@gmail.com",password: "qwerty",id: 1,isAdmin: true});
    //    console.log('User.getUser(1)');
    //    console.log(User.getUser(1));
    }); 
    it('returns the info of a single user using the User\'s ID',()=>{
       expect(User.getUser(3)).toEqual({user_name: "Foluso",email: "aboderinfoluso@gmail.com",password: "qwertyui",id: 3,isAdmin: false});
    //    console.log('User.getUser(2)');
    //    console.log(User.getUser(2));
    }); 
    it('returns an error when an invalid parameter(string) is passed in order to retrieve a user\'info',()=>{
       expect(User.getUser('3')).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(NaN) is passed in order to retrieve a user\'info',()=>{
       expect(User.getUser(NaN)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(Infinity) is passed in order to retrieve a user\'info',()=>{
       expect(User.getUser(Infinity)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid parameter(-Infinity) is passed in order to retrieve a user\'info',()=>{
       expect(User.getUser(-Infinity)).toEqual('Invalid ID parameter was passed');
    }); 
    it('returns an error when an invalid number of parameters are passed in order to retrieve a user\'info',()=>{
       expect(User.getUser(2,3)).toEqual('Invalid number of parameters was passed');
    }); 
});
//Read all users (*)
describe('(Read all users (*))(***)The database ',()=>{
    it('is read to return all users by an ADMIN user',()=>{
       expect(userI.getUsers()).toEqual([ {user_name: "Emmanuel",email: "aboderinemmanuel@gmail.com",password: "qwerty",id: 1,isAdmin: true},
       {user_name: "Maranatha",email: "aboderinmaranatha@gmail.com",password: "qwertyu",id: 2,isAdmin: false},
       {user_name: "Foluso",email: "aboderinfoluso@gmail.com",password: "qwertyui",id: 3,isAdmin: false} ]);
    //    console.log(userI.getUsers());
    }); 
    it('is read to return all users by an ordinary user',()=>{
       expect(userII.getUsers()).toEqual('You do not have enough privileges');
    //    console.log(userII.getUsers());
    }); 
});
//Update the details of a user
describe('(Update the details of a user)(***)The User ',()=>{
    it('is able to update his user_name',()=>{
        // console.log(db.users[userI.id-1].user_name);
        userI.updateUserName('Another Name');
        expect(db.users[userI.id-1].user_name).toBe('Another Name');
        // console.log(db.users[userI.id-1].user_name);
    }); 
    it('is able to update his email',()=>{
        // console.log(db.users[userI.id-1].email);
        userI.updateEmail('AnotherEmail');
        expect(db.users[userI.id-1].email).toBe('AnotherEmail');
        // console.log(db.users[userI.id-1].email);
    }); 
    it('is able to update his password',()=>{
        // console.log(db.users[userI.id-1].password);
        userI.updatePassword('AnotherPassword');
        expect(db.users[userI.id-1].password).toBe('AnotherPassword');
        // console.log(db.users[userI.id-1].password);
    }); 
});
//Delete a user (*)
describe('(Delete a user (*))(***)A User ',()=>{
    it('who is an ADMIN is able to delete a user',()=>{
        // console.log(db.users);
        userI.deleteUser(3);
        expect(db.users).toEqual([{
            user_name: 'Another Name',
            email: 'AnotherEmail',
            password: 'AnotherPassword',
            id: 1,
            isAdmin: true },
            {user_name: "Maranatha",email: "aboderinmaranatha@gmail.com",password: "qwertyu",id: 2,isAdmin: false} ]);
        // console.log(db.users);
    }); 
    it('who is an ordinary user is unable to delete a user',()=>{
        // console.log(db.users);
        expect(userII.deleteUser(3)).toEqual('You do not have enough privileges');
        // console.log(db.users);
    }); 
});
//Delete all users (*)
describe('(Delete all users (*))(***)A User ',()=>{
    it('who is an ADMIN is able to delete a user',()=>{
        // console.log(db.users);
        userI.deleteAllUser();
        expect(db.users).toEqual([]);
        // console.log(db.users);
    }); 
    it('who is an ordinary user is unable to delete a user',()=>{
        // console.log(db.users);
        expect(userIII.deleteAllUser()).toEqual('You do not have enough privileges');
        // console.log(db.users);
    }); 
});
