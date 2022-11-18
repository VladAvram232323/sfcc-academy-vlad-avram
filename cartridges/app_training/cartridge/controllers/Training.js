"use strict";

var server = require("server");

server.get("RenderTemplate", function(req, res, next) {
    res.render("training/dummyText");
    return next();
});

server.get("TestRemoteInclude", function(req, res, next) {
    res.render("training/dummy2");
    return next();
});

server.get("TestDecorator", function(req, res, next) {
    res.render("training/dummy3");
    return next();
});

server.get("TestCustomTag", function(req, res, next) {
    res.render("training/contentAsset_test");
    return next();
});

server.get("Basket", function(req, res, next) {
    var BasketMgr = require("dw/order/BasketMgr");
    var Basket = BasketMgr.getCurrentBasket();

    res.render("training/showBasket", { Basket: Basket });
    return next();
});
