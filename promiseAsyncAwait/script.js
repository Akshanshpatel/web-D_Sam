
//we use promise in order to avoid callback hell

let p1=new Promise((resolve,reject)=>{
    console.log('Tame lgega');
    setTimeout(()=>{
        resolve();
    },3000)
})


// p1.then(()=>{
    //     console.log("resolve bolte");
    // }).catch(()=>{
        //         console.log("rejection");
        // })
        
//but for more work we can create new promises inside then also

p1.then( ()=>{
    new Promise( ()=>{
        setTimeout(()=>{
            console.log('2 sec Time or lgega');
        },2000)
    })
})
// .then() can be created here also cz previous p1.then() is itself returning a promise

//this creates kind of a vertical chaining
//to avoid this we use Async Await


//await ke block ka jbtk complete nhi hoga vo wait krega instead of going to next line

async function assii(){
    console.log('Syntax check kr');
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 sec ho gye");
            resolve();
        },3000)
    }) 
    
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 sec ho gye");
            resolve();
        },2000)
    }) 
    console.log('Dono kam hogye asynchronously');
    
}

assii();