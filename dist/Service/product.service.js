var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        throw new Error("Method not implemented.");
    };
    ProductService.prototype.loginUser = function (username, password) {
        localStorage.setItem('authenticated', "true");
    };
    ProductService.prototype.logoutUser = function () {
        localStorage.removeItem('authenticated');
    };
    ProductService.prototype.isUserLoggedIn = function () {
        return localStorage.getItem('authenticated') === "true";
    };
    return ProductService;
}());

