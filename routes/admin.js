var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {  

    const UserAdminPaths = "admins/users/build"; // Path For Admin Panal.
    
    res.render(`${UserAdminPaths}`, {
        Path: `/${UserAdminPaths}`
    })

});

module.exports = router;
