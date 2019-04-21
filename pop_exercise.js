


global.counter = 1;
let User = function(user_name,email,password){
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.id = global.counter;
    global.counter++;
}
User.prototype = User;
User.prototype.id = this.id + 1;


// User('Name','email','password');
// User();

module.exports = User;
// exports.User = User;

