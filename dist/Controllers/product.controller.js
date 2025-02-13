var ProductController = /** @class */ (function () {
    function ProductController($scope, productService) {
        this.$scope = $scope;
        this.productService = productService;
        this.isLoggedIn = false;
        this.products = [];
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.isLoggedIn = true;
            this.loadProducts();
        }
    }
    ProductController.prototype.loadProducts = function () {
        this.products = this.productService.getProducts();
    };
    ProductController.$inject = ["$scope", "ProductService"]; // Inject the necessary services
    return ProductController;
}());

