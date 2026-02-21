const express = require("express");
const app = express();

app.get("/", (req,res)=>{
 res.send("Hello AKS Demo");
});

app.listen(3000);
