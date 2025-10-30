
function getBoolean(item){
    return typeof item==='boolean';
}
function getString(item){
    return typeof item==='string';
}
function getNum(item){
    return typeof item==='number';
}

//higher order function
function getType(arr,fn){
    let result=[];
    for(let item of arr){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

let arr=['sam','aks',30,40,true,false,false];

// console.log(getType(arr,getBoolean));
// console.log(getType(arr,getString));
// console.log(getType(arr,getNum));


//getting veg menu
let menu=['paneer khurchan','chicken butter','egg curry','butter paratha','egg bhurji','chicken lollipop','soda','paneer pakoda']

function isVeg(item){
    if(item.toLowerCase().indexOf('chicken')!== -1 || item.toLowerCase().indexOf('egg')!== -1 ){
        return false;
    }
    return true;
}

console.log(menu.filter(isVeg));

