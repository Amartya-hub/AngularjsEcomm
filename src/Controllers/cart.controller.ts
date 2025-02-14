import {Cart,CartService } from "../Service/cart.service";




export class CartController {
    static $inject = ["CartService"];

    cart: Cart[] = [];

    constructor(private CartService: CartService) {
        this.getCart();
    }

    getCart(){
        this.cart = this.CartService.getCart();
    }

    addToCart(cart: any){
        this.CartService.addToCart(cart);
        this.cart.filter((c: any) => c.name === cart.name)[0].quantityAvl--;
        alert("Added to cart!");
    }
}