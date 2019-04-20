function pop_exercise(name,email,password){
    
    let userCreate = function(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    return new userCreate(name,email,password);
}

module.exports = pop_exercise;