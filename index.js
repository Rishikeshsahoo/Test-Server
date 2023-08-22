const express= require("express")
const cors=require("cors");
require("dotenv").config();
const app=express();

app.use(cors())
app.use(express.json())

const port= process.env.PORT || 4000;


app.get("/",(req,res)=>{
    res.send("server is working")
})

app.get("/geoserver",(req,res)=>{
    res.send("geoserver is working")
})

app.post("/",(req,res)=>{
    const name=req.body.name;
    res.json({"message":`hello ${name}`})
})



app.listen(port,()=>{
    console.log("server started at port "+port)
})