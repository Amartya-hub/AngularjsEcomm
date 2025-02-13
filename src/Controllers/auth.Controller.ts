import * as ng from "angular";
import { AuthService } from "../Service/auth.service";


export class AuthController {
    static $inject = ["$scope", "$location"];

    user = {
        username: "amartyakaushik044",
        password: "seed"
    }

    constructor(private $scope: ng.IScope, private authService: AuthService) {
    }

    login(){
        this.authService.loginUser(this.user.username, this.user.password);
        // $location.path("/home");
    }
}