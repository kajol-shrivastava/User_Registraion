const express=require("express")
const PORT=process.env.PORT||3000;


const app =express()
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.send("testing")
})

app.get("/index",(req,res)=>{
    res.render("pages/index");
})

app.listen(PORT,()=>{
    console.log(`application is running on port ${PORT}`)
})