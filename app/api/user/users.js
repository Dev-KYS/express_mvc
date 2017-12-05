var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kim147258',
    port: 3306,
    database: 'preorder'
});

conn.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    res.render('login2');
});

router.post('/register', function (req, res, next) {
    var uid = req.body.uid;
    conn.query("SELECT count(*) as cnt FROM t_user WHERE uid='"+uid+"'", function (err, rows, fields) {
        if(!err){
            console.log(rows);
            if(rows[0].cnt > 0){
                console.log("DUPLICATE");
            }else{
                conn.query("INSERT INTO t_user (uid) VALUES ('"+uid+"')", function (err, rows, fields) {
                    if(!err){
                        console.log('AJAX token_id: ' + uid);
                    }else{
                        console.log('ERROR');
                    }
                });
            }
        }
    });


});

module.exports = router;
