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

const upload=multer({
    storage:storage,
    fileFilter: (req, file, cb)=> {
      if(file.mimetype==="image/jpg"||
        file.mimetype==="image/png"||
        file.mimetype==="image/jpeg"||
        file.mimetype==="image/webp"      
      ){
        cb(null, true)
      }else{
        cb(null, false);
        return cb(new Error("Only jpg, png, jpeg and webp format is allowed"))
      }
    }
   
  }).single('myfile')
// var upload=multer({storage:storage}).single('myfile')

// fileFilter: (req, file, cb)=> {
//     if(file.mimetype==="image/jpg"||
//     file.mimetype==="image/png"||
//     file.mimetype==="image/jpeg"||
//     file.mimetype==="image/webp"
//     ){
//     cb(null, true)
//     }else{
//     cb(null, false);
//     return cb(new Error("Only jpg, png, jpeg and webp format is allowed"))
//     }
//     },
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

app.listen(511,function(){
    console.log("server run success")
})