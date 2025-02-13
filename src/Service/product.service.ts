export class ProductService {
    getProducts(): never[] {
        throw new Error("Method not implemented.");
    }
    constructor(){
  
    }
  
    loginUser(username: string, password: string) {
      localStorage.setItem('authenticated', "true");
    }
  
    logoutUser() {
      localStorage.removeItem('authenticated');
    }
  
    isUserLoggedIn() {
      return localStorage.getItem('authenticated') === "true";
    }
  }