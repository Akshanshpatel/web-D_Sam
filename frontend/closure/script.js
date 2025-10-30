
// a closure is created when a function "remembers" the variables from its outer scope, even after that outer function has finished executing.
//small application of count
function countApp(){

    //closure usage keeping data private

    let count=0;
    return{
        getCount:function(){
            return count;
        },
        incrCount:function(){
            return count+=1;
        },
        decrCount:function(){
            return count-=1;
        },
        reset:function(){
            return count=0;
        }
    }
}

let vari=countApp();
console.log(vari.getCount());
console.log(vari.incrCount());
console.log(vari.incrCount());
console.log(vari.decrCount());
console.log(vari.reset());
console.log(vari.toString());

//constructor definition
function User(username,gmail){
    this.username=username;
    this.gmail=gmail;
    
}

User.prototype.description=function(){    //directly creating method in parent object of User
    return `My name is ${this.username}`
}

let user1=new User('Aks','akshanshpatel003@gmail.com');
console.log(user1);
console.log(user1.description());



