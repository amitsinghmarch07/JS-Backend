const express = require("express");

const myApp = express();
myApp.get("/",handler);

myApp.get("/cust", (req,res)=> {
    res.send("cust")
})

function handler(req, res) {
    console.log("Request",req.method,req.url);
    res.send("Hello, Express");
}

myApp.listen(10000, ()=>console.log("My app started 10000"));