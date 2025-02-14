export interface Catlog {
  id: number;
  name: string;
  description: string;
  quantityAvl: number;
  price: number;
}

interface CatlogInCart {
  name: string;
  quantity: number;
  price: number;
}

export class CatlogService {
  catalogs: Catlog[] = [
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
    },{
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
  catlogsInCart: CatlogInCart[] = [];

  constructor() {
  }

  getCatlogs(){
      return this.catalogs;
  }

  addToCart(catalog: any){
      let cat: any = this.catlogsInCart.filter((c: any) => c.name === catalog.name)[0] || null;
      if(cat){
          cat.quantity++;
      } else {
          this.catlogsInCart.push({
              name: catalog.name,
              quantity: 1,
              price: 100
          });
      }
  }
}