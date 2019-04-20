const pop_exercise = require('./pop_exercise');

var ex1 = {
    name: "Name",
    email: "email",
    password: "password"
}


describe('The User Object ',()=>{
    it('creates a new user with properties',()=>{
        expects(pop_exercise('Name','email','password')).toBe(ex1);
    });
});