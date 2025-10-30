let arr=[
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D'
]

let img=document.querySelector('img');
let num=0;

setInterval(()=>{
    img.setAttribute('src',arr[num])
    num=(num+1)%arr.length;
},1000)


//creating and adding new element

let arti=document.querySelector('article');  //accessing parent element
let beta=document.createElement('div');// creating new element
let beta2=document.createElement('div')

beta.innerHTML='Bitwa Tag'
beta2.innerHTML='Shaitaan beta'

// arti.appendChild(beta)
arti.prepend(beta,beta2)
