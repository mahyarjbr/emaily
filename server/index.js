const express = require("express");
const authRoutes = require("./routes/authRoutes");
const mongoose=require("mongoose")
require("./services/passport");


const app = express();
const PORT = process.env.PORT || 5000



mongoose.connect("mongodb://localhost:27017").then(() =>{
    console.log("db connected")
}).catch((err) =>{
    console.log(err)

})


app.get("/", (req, res) => {
    res.send("home page")
})

authRoutes(app);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        console.log(err)
      
    }
    else {
        console.log(`server is runnig on PORT ${PORT}`)
    }
})
