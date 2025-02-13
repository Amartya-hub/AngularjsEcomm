import { Catlog,CatlogService } from "../Service/catlog.service";




export class CatlogController {
    static $inject = ["CatlogService"];

    catlogs: Catlog[] = [];

    constructor(private catlogService: CatlogService) {
        this.getCatlogs();
    }

    getCatlogs(){
        this.catlogs = this.catlogService.getCatlogs();
    }

    addToCart(catlog: any){
        this.catlogService.addToCart(catlog);
        this.catlogs.filter((c: any) => c.name === catlog.name)[0].quantityAvl--;
        alert("Added to cart!");
    }
}