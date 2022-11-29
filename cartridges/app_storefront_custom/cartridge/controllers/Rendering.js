"use strict";

var server = require("server");

server.get("RenderingContent", function (req, res, next) {
     res.render("service/rendering");
        next();
});

module.exports = server.exports();