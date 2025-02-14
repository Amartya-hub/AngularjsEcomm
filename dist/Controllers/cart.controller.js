var CartController = /** @class */ (function () {
    function CartController(CartService) {
        this.CartService = CartService;
        this.cart = [];
        this.getCart();
    }
    CartController.prototype.getCart = function () {
        this.cart = this.CartService.getCart();
    };
    CartController.prototype.addToCart = function (cart) {
        this.CartService.addToCart(cart);
        this.cart.filter(function (c) { return c.name === cart.name; })[0].quantityAvl--;
        alert("Added to cart!");
    };
    CartController.$inject = ["CartService"];
    return CartController;
}());

