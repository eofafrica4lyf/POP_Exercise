const db = require('./db');

global.counter = 1;
let User = function(user_name,email,password){
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.id = global.counter;
    global.counter++;
    // store user data in database
    db.users.push(this);
}
User.prototype = User;
User.prototype.id = this.id + 1;
// 
User.prototype.getUser = function(ID){
    if(arguments.length > 1){
        return 'Invalid number of parameters was passed';
    }else{
        if( (typeof(ID) !== 'number') || ID === Infinity || ID === -Infinity){

            return 'Invalid ID parameter was passed';
        }else if( isNaN(ID)){
            return 'Invalid ID parameter was passed';
        }
        else{
            return db.users[ID-1];
        }   
    }
    
    
}


// User('Name','email','password');
// User();

module.exports = User;
// exports.User = User;