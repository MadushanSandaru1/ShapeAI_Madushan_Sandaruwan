const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    var hight = Number(req.body.hight);
    var weight = Number(req.body.weight);
    var result = weight/(hight*hight);
    res.send("<h1>Your BMI is "+ result.toFixed(2)+"</h1>");
})

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});