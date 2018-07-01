var express     =   require("express");
var app         =   express();
var path        =   require("path");
var index       =   require('./routes/index');
var employer    =   require('./routes/employer');
var jobseeker   =   require('./routes/jobseeker');
var job         =   require('./routes/job');
var bodyParser  =   require('body-parser');

let http = require('http').Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
// app.use('/rec', employer);
// app.use('/js',jobseeker);
// app.use('/job'.job);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(404).json({message:"Not Found",status:"404","Error":err})
  });

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(200).json({message:"ok",status:"200","Error":err})
  });

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({message:"Internal Server Error",status:"500","Error":err})
  });
 
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(502).json({message:"Bad Gateway",status:"502","Error":err})
  });
  
 
 var port = process.env.PORT || 3000;
 
 http.listen(port, function(){
    console.log('listening in http://localhost:' + port);
 });

