const express=require('express')
const app=express()
const path=require('path')
const methodOverride = require('method-override')
const { v4:uuid } = require('uuid');  // uuid provides universally unique identity

uuid();

let comments=[
    {
        // id:0,
        id:uuid(),
        name:"Akshansh",
        comment:"atmkbfjg"
    },
    {
        // id:1,
        id:uuid(),

        name:"Akshay",
        comment:"Chalre Nooob"
    },
    {
        // id:2,
        id:uuid(),
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

//middleware for method overriding of post to patch
app.use(methodOverride('_method'))









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
    comments.push({name,comment,id:uuid()})
    res.redirect('/blogs')  
})


//task4 showing particular using id
//using req.params and subreddit here
app.get('/blogs/:id',(req,res)=>{
    let{id}=req.params
    // console.log(id)
    let foundComment=comments.find((comment)=>{return comment.id==id}) //return id that is a string
    // console.log(foundComment)
    

    res.render('show',{foundComment})
})


//task 5 edit ka page
app.get('/blogs/:id/edit',(req,res)=>{
    let{id}=req.params
    let foundComment=comments.find((comment)=>{return comment.id==id})

    res.render('edit',{foundComment});
})


//actually editing
app.patch('/blogs/:id',(req,res)=>{
    let{id}=req.params
    let foundComment=comments.find((comment)=>{return comment.id==id})
    let{comment}=req.body;
    console.log(comment)
    foundComment.comment=comment
    res.redirect('/blogs')
})




//actually delete logic
app.post('/blogs/:id',(req,res)=>{
    let{id}=req.params;
    let newArr=comments.filter((comment)=>{return comment.id!=id})
    comments=newArr;
    res.redirect('/blogs')
})







app.listen(8000,()=>{
    console.log(`app working at port 8000`)
})