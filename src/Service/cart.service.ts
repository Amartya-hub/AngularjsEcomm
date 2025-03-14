export interface Cart {
    id : number;
    name : string;
    description : string;
    quantityAvl : number;
    price : number;
}



export class CartService {
    carts : Cart[] = [{
        id : 1,
        name : "Electronics",
        description : "Gadgets and stuff",
        quantityAvl : 10,
        price : 100
    },{
        id : 2,
        name : "Books",
        description : "Reading materials",
        quantityAvl : 15,
        price : 100
    },{
        id : 3,
        name : "Clothes",
        description : "Fashionable stuff",
        quantityAvl : 12,
        price : 100
    },{
        id : 4,
        name : "LapTops",
        description : "HP Brands",
        quantityAvl : 19,
        price : 100000
    },{
        id : 5,
        name : "Laptops",
        description : "Dell Brands",
        quantityAvl : 120,
        price : 10000
    },{
        id : 6,
        name : "Laptops",
        description : "Apple Brands",
        quantityAvl : 10,
        price : 1000000
    },{
        id : 7,
        name : "LapTops",
        description : "Lenovo Brands",
        quantityAvl : 100,
        price : 100000
    },
];
    
        getCart() {
            return this.carts;
        }
    
        addToCart(cart : any) {
            let cartInCart = this.carts.filter((c : any) => c.name === cart.name)[0];
            if(cartInCart.quantityAvl > 0) {
                cartInCart.quantityAvl--;
            }
        }
    }