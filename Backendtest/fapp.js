var exp= require ("express");
var app= exp();
 
app.get("/",function (req,res) {
    res.send("Hi there");
        
    });
    app.get("/bye",function(req,res){
            res.send("googbye");
    });
    app.get("/dog",function(req,res){
        res.send("bhao bhao");
        console.log("DH");
});
app.get("*",function(req,res){
    res.send("invalid");
});
    app.listen(3000,function(){
        console.log("started"); 
    });