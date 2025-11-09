const express=require('express')
const app=express();
const path=require('path')

//ejs ko set
app.set('view engine','ejs');

// views folder ka path set
app.set('views',path.join(__dirname,'views'))



//static files ko set  default public tk set
app.use(express.static(path.join(__dirname,'public')))





//home route
app.get('/',(req,res)=>{
    res.render('index')     //this will get views ke andr ki index.ejs
})





app.listen(8080,()=>{
    console.log(`app runnning at port 8080`)
})