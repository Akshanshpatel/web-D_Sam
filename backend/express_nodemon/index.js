let express=require('express')
let app=express();

// app.get('/',(req,res)=>{
//     res.send(`<h2>Home Route betiii</h2>`)
// })


//This is a better way for handling any route instead of creating one for every new req
//this one is : path
// app.get('/r/:subreddit',(req,res)=>{
//     console.log(req.params);
//     let{subreddit}=req.params;
//     res.send(`<h2>This is my ${subreddit} route</h2>`)
// })

//this one is ? query
app.get('/search', (req,res)=>{
    //destructuring
    console.log(req.query.search)
    let {search}=req.query;
    res.send(search);
    // res.send(req.query);
    // res.send(req.query.search);
})

app.listen(8080,()=>{
    console.log(`app running at 8080 port`)
})