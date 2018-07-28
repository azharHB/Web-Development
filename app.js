var express = require("express"),
    app = express(),
    http = require("http").Server(app).listen(80),
    
    upload = require("express-fileupload");
app.use(upload())   

console.log("Server Started!"); 
app.get("/", function(req,res){
    res.sendFile(__dirname+"/HomePage.html");
})
app.post("/",function(req,res){
    if(req.files){  
        var file = req.files.filename,
        filename = file.name;
        file.mv("./Uploads/"+filename,function(err){
            if (err){
                console.log(err)
                res.send("error Occured")                
            }
            else{
                res.send("Done...")
            }
        });        
    }
})

