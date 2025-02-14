import * as angular from "angular";

angular.module("eCommerce", ['ngRoute', "authModule", "catlogModule"])
.config(($routeProvider: any) => {
    $routeProvider
        .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "AuthController"
        })
        .when("/catlog", {
            templateUrl: "src/views/catlog.html",
            controller: "CatlogController"
        })
        .when("/cart", {
            templateUrl: "src/views/cart.html",
            controller: "CartController"
        })
        .otherwise({
            redirectTo: "/catlog"
        });
});