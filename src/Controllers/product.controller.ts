import * as ng from "angular";
import { ProductService } from "../Service/product.service";

export class ProductController {
    static $inject = ["$scope", "ProductService"]; // Inject the necessary services

    isLoggedIn = false;  
    products = [];  
    constructor(
        private $scope: ng.IScope, 
        private productService: ProductService
    ) {
        
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.isLoggedIn = true;
            this.loadProducts();
        }
    }

    loadProducts() {
        this.products = this.productService.getProducts();  
    }
}

