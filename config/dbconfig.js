var mysql = require('mysql');

var con_phase2 = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'assignment_db'
  });

  module.exports={"con1":con_phase2};
  
