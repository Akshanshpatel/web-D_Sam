
//we use promise in order to avoid callback hell

let p1=new Promise((resolve,reject)=>{
    console.log('Tame lgega');
    setTimeout(()=>{
        resolve();
    },3000)
})

p1.then(()=>{
    console.log("resolve bolte");
}).catch(()=>{
        console.log("rejection");
})
