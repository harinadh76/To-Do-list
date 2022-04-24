const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended:true}));

 let items = ["Dont skip","work to", "Tomorrow"];
 let item = "";

app.get("/",function(req,res){
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
   
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
     day = today.toLocaleDateString("en-US", options);
    res.render("list",{dayy : day , newListItem : items});
});

app.post("/",function(req,res){
     item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server running at port 3000");
})