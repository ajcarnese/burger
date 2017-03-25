//controller files are plural
var express = require("express");

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burger.js');
var router = express.Router();


router.get("/", function(req, res) {
    burger.all("burgers", function(data){
        res.render('index', {burgers: data});
    });    
});

router.get("/new", function(req, res) {
    res.render('burgers/new');
});

router.post("/create", function(req, res){
    var cols = ['burger_name'];
    var vals = [req.body.burger_name];

    burger.create(cols, vals, function(response){
        res.redirect('/burgers');
    });
})


module.exports = router;