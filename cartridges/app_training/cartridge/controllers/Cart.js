"use strict";

var server = require("server");
var BasketMgr = require("dw/order/BasketMgr");
var currentBasket = BasketMgr.getCurrentBasket();
server.extend(module.superModule);
server.append("Show", function(req, res, next) {
    function CartModel(basket) {
        this.notes = basket.notes;
    }
    var basketModel = new CartModel(currentBasket);
    res.render("cart/cart", basketModel);
    return next();
});

module.exports = server.exports();
