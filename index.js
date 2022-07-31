const express=require("express")
const app=express();
const PORT=process.env.PORT || 3000

app.get("/",(req,res) =>{
    res.send("hello world 4")

})

app.listen(PORT,(err) =>{
    if(err) {
        console.log(err)
    }
    else{
        console.log(`server is runnig on PORT ${PORT}`)
    }
})