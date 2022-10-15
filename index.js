//file upload

var express= require('express');
var multer= require('multer')
var app= express();
var storage= multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads')
    },
   filename:function(req,file,callback){
    callback(null,file.originalname)
},
})
var upload=multer({storage:storage}).single('myfile')

 function fileFilter (req, file, cb) {
    
    file.mimetype=="image/jpg"
    file.mimetype=="image/png"
    cb(null,false)
    cb(null,true)
 } 

  



app.post('/',function(req,res){
    upload(req,res,function(error){

        if(error){
            res.send("file upload fail")
        }
        else{
            res.send( "file upload success")
        }
    })
})

app.listen(505,function(){
    console.log("server run success")
})