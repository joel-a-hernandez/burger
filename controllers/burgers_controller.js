
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
      ], [
        req.body.burger_name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    // burger.add(req.body.burger_name, function(result) {
    //     // Send back the ID of the new burger
    //     res.json({ id: result.insertId });
    // });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.json(result);
    });
});

// Export routes for server.js to use.
module.exports = router;