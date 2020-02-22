var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update({
      devoured :req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {

        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


  router.delete("/:id", function(req, res) {
    var condition = "id = "+req.params.id;

    burger.delete(condition, function(result) {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
       // res.redirect("/")
    })
})



  module.exports = router; 