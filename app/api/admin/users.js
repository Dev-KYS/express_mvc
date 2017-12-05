var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../../../preorder-68c8d-firebase-adminsdk-8dx8g-e5a07998ef.json');

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    admin.auth().getUser("L4198Ur2yGbxujZN443FmgiTVHI2")
        .then(function (userRecord) {
            console.log("user data : ", userRecord.toJSON());
        })
        .catch(function (error) {
            console.log('Error user data: ', error);
        });

    // var user_json = {'emails' : [{'email' : 'dydtlr19@gmail.com'}, {'email': 'danak1000@mj-corp.com'}]};
    // console.log(user_json.emails.length);
    // for(var i = 0; i < user_json.emails.length; i++){
    //     admin.auth().getUserByEmail(user_json.emails[i].email)
    //         .then(function (userRecord) {
    //             console.log("User Data is " + JSON.stringify(userRecord));
    //         })
    //         .catch(function (error) {
    //             console.log("Error user data: ", error);
    //         });
    // }
});


module.exports = router;
