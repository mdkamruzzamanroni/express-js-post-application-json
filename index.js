//post application JSON

// multipart form data

var express= require('express');
var multer= require('multer');
var multer=multer();

var app=express();
app.use(multer.array())

app.post('/',function(req,res){

    let JSONData= req.body;

    res.send(JSON.stringify(JSONData))
})


app.listen(5042,function(){
    console.log("server run success")
})