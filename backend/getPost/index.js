const express=require('express')
const app=express()
const path=require('path')


let comments=[
    {
        id:0,
        name:"Akshansh",
        comment:"atmkbfjg"
    },
    {
        id:1,
        name:"Akshay",
        comment:"Chalre Nooob"
    },
    {
        id:2,
        name:"Manish",
        comment:"DSA Paglu"
    }
]






//ejs set
app.set('view engine','ejs')

//views folder for ejs set
app.set('views',path.join(__dirname,'views'))

//public folder set
app.use(express.static(path.join(__dirname,'public')));

//for getting data out of form otherwise its default is undefined
app.use(express.urlencoded({extended:true}))

//root 
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to home</h1>")
})


//blogs page
app.get('/blogs',(req,res)=>{
    res.render('index',{comments})
})



//new in url
app.get('/new',(req,res)=>{
    res.render('new')
})
app.get('/blogs/new',(req,res)=>{
    res.render('new')
})

//actually create a new one and redirect
app.post('/blogs',(req,res)=>{
    // console.log(req.body)
    let{name,comment}=req.body  //destructuring
    comments.push({name,comment,id:comments.length})
    res.redirect('/blogs')  
})


//task4 showing particular using id
//using req.params and subreddit here
app.get('/blogs/:id',(req,res)=>{
    let{id}=req.params
    // console.log(id)
    let foundComment=comments.find((comment)=>{return comment.id==id})
    // console.log(foundComment)
    

    res.render('show',{foundComment})
})





app.listen(8000,()=>{
    console.log(`app working at port 8000`)
})