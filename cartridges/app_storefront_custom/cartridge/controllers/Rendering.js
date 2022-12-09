"use strict";

var server = require("server");

server.get("Carousels", function (req, res, next) {
     res.render("service/carousels");
        next();
});

module.exports = server.exports();