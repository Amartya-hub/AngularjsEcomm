import * as angular from "angular";

angular.module("Ecommerce", ['ngRoute', "authModule"])
.config(($routeProvider: any) => {
    $routeProvider
        .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "AuthController"
        })
        .when("/product", {
            templateUrl: "src/views/product.html",
            controller: "ProductController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});