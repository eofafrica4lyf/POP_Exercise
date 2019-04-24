const Order = require('./Order');
const db = require('./db');

global.counter = 1;
let User = function(user_name,email,password){
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.id = global.counter;
    this.isAdmin = false;
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
            for(var i=0;i<db.users.length;i++){
                if(db.users[i].id === ID){
                    return db.users[i];
                }
            }
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
    let r = 0;
    for(var i = 0;i<db.users.length;i++){
        db.users[i].user_name = (db.users[i].id === this.id)? otherName : db.users[i].user_name;
        r=i;
        
    }return db.users[r].user_name;
}
// Object prototype method to update user email
User.prototype.updateEmail = function(otherEmail){
    //Update Database first
    let r = 0;
    for(var i = 0;i<db.users.length;i++){
        db.users[i].email = (db.users[i].id === this.id)? otherEmail : db.users[i].email;
        r=i;
    }return db.users[r].email;
}
// Object prototype method to update user password
User.prototype.updatePassword = function(otherPassword){
    //Update Database first
    let r = 0;
    for(var i = 0;i<db.users.length;i++){
        db.users[i].password = (db.users[i].id === this.id)? otherPassword : db.users[i].password;
        r=i;
    }return db.users[r].password;
}
//Object prototype method to delete single user(by their ID)
User.prototype.deleteUser = function (id){
    if(this.isAdmin){
        let r = -1;
        for(var i = 0;i<db.users.length;i++){
            r = (db.users[i].id === id)? i : r;
        }
        return db.users.splice(r,1); 
    }else{
        return 'You do not have enough privileges';
    }
}
//Object prototype method to delete all users
User.prototype.deleteAllUser = function (){
    if(this.isAdmin){
        db.users = [];
        return db.users;
    }else{
        return 'You do not have enough privileges';
    }
};
//Object prototype method to search for a user by his name
// and return false if the user is not found but return
//the user object if the user is found.
User.prototype.searchForUser  = function (userName){
    let index = db.users;
    // console.log(index);
    for(var i = 0;i < index.length; i++){
        if (db.users[i].user_name === userName){
            return db.users[i];
        }
    }
    return "User not found!";
}
//***************************************************
//Order-related methods
//***************************************************
//Object prototype method to create a new order
User.prototype.createOrder = function(products){
    let user_ID = this.id;
    return new Order(user_ID,products);
}
//Object prototype method that allows an Admin user to read all the orders
User.prototype.getAllOrders = function(){
    if (this.isAdmin === true){
        return db.orders;
    }else{
        return 'You must be an Admin!';
    }
}
//Object prototype method that allows an Admin user to read a particular using it's ID
User.prototype.getOrder = function(orderI){
    if (this.isAdmin === true ){
        let order = [];
        for(var i=0;i<db.orders.length;i++){
                order = (db.orders[i].order_ID === orderI ) ? db.orders[i].products : order ;
                if(order.length === 0){
                    order = order;
                }else{
                    return order;
                }
        }
        return 'Such record does not exist!';
    }else{
        return 'You must be an Admin!';
    }
}
//Object prototype method that allows an Admin user to update the products ordered in a particular order
User.prototype.updateOrderProducts = function(orderID, arr){
    if(this.isAdmin === false){
        return 'You must be an Admin!';
    }
    let updatedProduct = [];
    for(var i=0;i<db.orders.length;i++){
        if(db.orders[i].order_ID === orderID){
            db.orders[i].products =  arr;
            updatedProduct = db.orders[i];
        }
    }
    return updatedProduct;
}
//Object prototype method that allows an Admin user to delete a order using the order ID
User.prototype.deleteOrder = function(ID){
    if(this.isAdmin === false){
        return 'You must be an Admin!';
    }
    let index = 0;
    for(var i=0;i<db.orders.length;i++){
        if(db.orders[i].order_ID === ID){
            index = i;
        }
    }
    db.orders.splice(index,1);
    return db.orders;
}
//Object prototype method that allows an Admin user to delete all orders
User.prototype.deleteAllOrders = function(){
    if(this.isAdmin === false){
        return 'You must be an Admin!';
    }
    return db.orders = [];
}

// let Mark = new User('Mark', 'mquadrant@gmail.com','qwerty');
// console.log(Mark);

// User('Name','email','password');
// User();
// console.log(db);

module.exports = User;
// exports.User = User;