const express=require("express")
const PORT=process.env.PORT||3000;

const app =express()

app.get("/",(req,res)=>{
    res.send("testing")
})

app.listen(PORT,()=>{
    console.log(`application is running on port ${PORT}`)
})