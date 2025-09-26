
class Human{
    constructor(username,gender,age){
        this.username=username,
        this.gender=gender,
        this.age=age
    }
    getInfo(username,age){
        return (`My name is ${this.username} and ${this.age} years old`);
    }
}

let human1=new Human('Aks','Male',21);
// console.log(human1.age);
// console.log(human1.getInfo());


class Student extends Human{
    constructor(username,gender,age,rollNo){
        super(username,gender,age)   //super includes all props that are inherited 
            this.roll=rollNo;
    }
    getInfo(username,age){
        return (`Masti dekho ${this.username} ki Also ${this.age} years old`);
    }
}

let student1=new Student('Rohit','Male',22,2315510018)
// console.log(student1.roll);
// console.log(student1.getInfo());



//this keyword
//this points to what? --> depends only on function calling (How it is being called)

//1.Regular calling ---this points to windows
function fun(){
    console.log(this);
}
fun();

// 2.Method calling  ---this points to object
let obj={
    fn:function(){
        console.log(this);
    }
}
console.log(obj.fn());    //undefined

// let obj1=obj.fn;
// console.log(obj1());   //this way of calling is Regular not object

let quest={
    fn:function(){
        function calculate(){
            console.log(this);
        }
        calculate(); //regular invokation
    }
}
quest.fn();   //this is giving windows cz after fn running calculate() is regular calling 


// 3-Constructor calling---this points to newly created object in this case hamesha

function CreateObj(){
    // console.log(this);  this will gives CreateObj constructor only
    this.x=20
}
let objnew=new CreateObj();
console.log(objnew);
console.log(objnew.x);


// 4-> .cal(), .bind(), .apply() 

//while using call(x) this points to whatever passed inside call eg-x
//bind and apply later

// 5-Arrow Function




