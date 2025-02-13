var CatlogController = /** @class */ (function () {
    function CatlogController(catlogService) {
        this.catlogService = catlogService;
        this.catlogs = [];
        this.getCatlogs();
    }
    CatlogController.prototype.getCatlogs = function () {
        this.catlogs = this.catlogService.getCatlogs();
    };
    CatlogController.prototype.addToCart = function (catlog) {
        this.catlogService.addToCart(catlog);
        this.catlogs.filter(function (c) { return c.name === catlog.name; })[0].quantityAvl--;
        alert("Added to cart!");
    };
    CatlogController.$inject = ["CatlogService"];
    return CatlogController;
}());

