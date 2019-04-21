const db = require('./db');

global.counter = 1;
let User = function(user_name,email,password, adminStatus){
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.id = global.counter;
    if(adminStatus){
        this.isAdmin = true;
    }
    else{
        this.isAdmin = false;
    }
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
    
    
};
User.prototype.getUsers = function(){
    if(this.isAdmin){
        return db.users;
    }else {
        return 'You do not have enough privileges';
    }
    
};
// Object prototype method to update user_name
User.prototype.updateUserName = function(otherName){
    //Update Database first
    db.users[this.id-1].user_name = otherName;
    // Update the object
    return this.user_name = otherName;
}
// Object prototype method to update user email
User.prototype.updateEmail = function(otherEmail){
    //Update Database first
    db.users[this.id-1].email = otherEmail;
    // Update the object
    return this.email = otherEmail;
}
// Object prototype method to update user password
User.prototype.updatePassword = function(otherPassword){
    //Update Database first
    db.users[this.id-1].password = otherPassword;
    // Update the object
    return this.password = otherPassword;
}
//Object prototype method to delete single user(by their ID)
User.prototype.deleteUser = function (id){
    // db.users.splice(id-1,1);
    if(this.isAdmin){
        return db.users.splice(id-1,1);
    }else{
        return 'You do not have enough privileges';
    }
}
//Object prototype method to delete all users
User.prototype.deleteAllUser = function (){
    if(this.isAdmin){
        return db.users.splice(0,db.users.length);
    }else{
        return 'You do not have enough privileges';
    }
};
//Object prototype method to search for a user by his name
// and return false if the user is not found but return
//the user object if the user is found.
User.prototype.searchForUser  = function (userName){
    let index = db.users;
    console.log(index);
    for(var i = 0;i < index.length; i++){
        if (db.users[i].user_name == userName){
            return db.users[i];
        }
    }
}
// User('Name','email','password');
// User();

module.exports = User;
// exports.User = User;