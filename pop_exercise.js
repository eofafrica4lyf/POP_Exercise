function pop_exercise(name,email,password){
    
    let count = 1;
    let userCreate = function(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = count;
        count++;
    }

    return new userCreate(name,email,password);
}

module.exports = pop_exercise;