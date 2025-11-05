let express=require('express')
let app=express();
let path=require('path');

// app.get('/',(req,res)=>{
//     res.send(`<h2>Home Route betiii</h2>`)
// })

//this is ejs part
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/random',(req,res)=>{
    let number=Math.floor(Math.random()*100) ;
    res.render('random',{number})
})






//This is a better way for handling any route instead of creating one for every new req
//this one is : path
// app.get('/r/:subreddit',(req,res)=>{
//     console.log(req.params);
//     let{subreddit}=req.params;
//     res.send(`<h2>This is my ${subreddit} route</h2>`)
// })

//this one is ? query
// app.get('/search', (req,res)=>{
//     //destructuring
//     console.log(req.query.search)
//     let {search}=req.query;
//     res.send(search);
//     // res.send(req.query);
//     // res.send(req.query.search);
// })






app.listen(8080,()=>{
    console.log(`app running at 8080 port`)
})