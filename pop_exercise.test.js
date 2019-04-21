const User = require('./pop_exercise');
// const db = require('./db');

// let count = 1;

// console.log(User());
var ex1 = {
    user_name: "Name",
    email: "email",
    password: "password",
    id: 1
};
var ex2 = {
    user_name: "Name",
    email: "email",
    password: "password",
    id: 2
};
var ex3 = {
    user_name: "Name",
    email: "email",
    password: "password",
    id: 3
};


test('The User Object ',()=>{
    // it('creates a new user with properties',()=>{
            // let user = Object.create(new User('name','email','password'));
            // console.log(user);
        let userI = new User('Name','email','password');
        let userII = new User('Name','email','password');
        let userIII = new User('Name','email','password');
        console.log(userI instanceof Object);
        // console.log(userII);
        // console.log(ex1);
        expect(userI).toEqual(ex1);
        expect(userII).toEqual(ex2);
        expect(userIII).toEqual(ex3);
        // expect(pop_exercise.constructor('Name','email','password')).toEqual(ex1);
        // console.log(count);
    // });
    
});