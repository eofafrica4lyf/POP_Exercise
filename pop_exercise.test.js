const pop_exercise = require('./pop_exercise');

var ex1 = {
    name: "Name",
    email: "email",
    password: "password",
    id: 1
}


describe('The User Object ',()=>{
    it('creates a new user with properties',()=>{
        expect(pop_exercise('Name','email','password')).toEqual(ex1);
    });
    
});