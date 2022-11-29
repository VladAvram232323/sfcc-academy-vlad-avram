"use strict";

var server = require("server");

server.get("Slider", function (req, res, next) {
     res.render("service/productSlider");
        next();
});

module.exports = server.exports();