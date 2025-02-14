var CatlogService = /** @class */ (function () {
    function CatlogService() {
        this.catalogs = [
            {
                id: 1,
                name: "Electronics",
                description: "Gadgets and stuff",
                quantityAvl: 10,
                price: 100
            },
            {
                id: 2,
                name: "Books",
                description: "Reading materials",
                quantityAvl: 15,
                price: 100
            },
            {
                id: 3,
                name: "Clothes",
                description: "Fashionable stuff",
                quantityAvl: 12,
                price: 100
            },
            {
                id: 4,
                name: "LapTops",
                description: "HP Brands",
                quantityAvl: 19,
                price: 100000
            },
            {
                id: 5,
                name: "Laptops",
                description: "Dell Brands",
                quantityAvl: 120,
                price: 10000
            },
            {
                id: 6,
                name: "Laptops",
                description: "Apple Brands",
                quantityAvl: 10,
                price: 1000000
            }, {
                id: 7,
                name: "LapTops",
                description: "ASUS Brands",
                quantityAvl: 19,
                price: 100000
            },
            {
                id: 8,
                name: "Laptops",
                description: "YAML Brands",
                quantityAvl: 120,
                price: 10000
            },
            {
                id: 9,
                name: "Laptops",
                description: "HMI Brands",
                quantityAvl: 10,
                price: 1000000
            },
        ];
        this.catlogsInCart = [];
    }
    CatlogService.prototype.getCatlogs = function () {
        return this.catalogs;
    };
    CatlogService.prototype.addToCart = function (catalog) {
        var cat = this.catlogsInCart.filter(function (c) { return c.name === catalog.name; })[0] || null;
        if (cat) {
            cat.quantity++;
        }
        else {
            this.catlogsInCart.push({
                name: catalog.name,
                quantity: 1,
                price: 100
            });
        }
    };
    return CatlogService;
}());

