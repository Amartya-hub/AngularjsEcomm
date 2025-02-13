
angular.module("eCommerce", ['ngRoute', "authModule", "catlogModule"])
    .config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
        templateUrl: "src/views/login.html",
        controller: "AuthController"
    })
        .when("/catlog", {
        templateUrl: "src/views/catlog.html",
        controller: "CatlogController"
    })
        .otherwise({
        redirectTo: "/catlog"
    });
});
