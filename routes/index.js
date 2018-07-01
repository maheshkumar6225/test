var express = require('express');
var app = express();
var router = express.Router();
var path   = require('path');
var config = require('../config/dbconfig');
var con    = config.con1;
var md5    = require('md5');

con.connect((err,res) => {
    
    if(err) {
            console.log(err);
    } else {
        console.log("Connected Successfully");
    }
});


router.get('/',(req,res,next) => {
    
    res.sendFile(path.join(__dirname,'/../', 'public','hello.html'),(err,result) => {
        if(err){
            next(err);
        } 
    });
});

router.post('/login',(req,res,next) => {
   
    let useremail = req.body.useremail;
    let password  = md5(req.body.password);

     con.query('select User_Id from tbl_users where User_Emai = ? and User_Password = ?',[useremail,password],(err,result) => {

                if(err){ 
                    next(err);
                } else {
                      res.json({"User_Id":result,"Code":1});
                }
        });
});

module.exports = router ;