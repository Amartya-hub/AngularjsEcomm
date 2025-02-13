import * as angular from "angular";
import { AuthController } from "../Controllers/auth.Controller";
import { AuthService } from "../Service/auth.service";

var authModule = angular.module("authModule", [])
    .controller("AuthController", AuthController)
    .service("AuthService", AuthService);