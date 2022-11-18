"use strict";

var server = require("server");

server.get("Test", function(req, res, next) {
    var myvariable = req.sessionVar;
    res.render("training/VarTest", { myvariable: myvariable });
    return next();
});

module.exports = server.exports();
