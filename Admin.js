const db = require('./db');
const User = require('./User');

let Admin = function(user_name,email,password){
    User.call(this, user_name, email, password);
    // this.user_name = user_name;
    // this.email = email;
    // this.password = password;
    this.isAdmin = true;
    // this.id = global.counter;
    // global.counter++;
    // store user data in database
    // db.users.push(this);
};
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

module.exports = Admin;