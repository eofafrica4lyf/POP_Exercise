// const db = require('./db');


global.counter = 1;
let User = function(user_name,email,password){
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.id = global.counter;
    global.counter++;
    // this.id = count;
    // count++;
    // console.log(db);
    // db.users.push(this);
    // db.users.push({
    //     user_name: "Name",
    //     email: "email",
    //     password: "password",
    //     id: 1
    // });
    // console.log(db.users);
    console.log(this);
    // return this;
}
User.prototype = User;
User.prototype.id = this.id + 1;


// User('Name','email','password');
// User();

module.exports = User;
// exports.User = User;

