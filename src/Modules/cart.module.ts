import * as angular from 'angular';
import { CartService } from '../Service/cart.service';
import { CartController } from '../Controllers/cart.Controller';



angular.module('cartModule', [])
    .controller('CartController', CartController)
    .service('CartService', CartService);