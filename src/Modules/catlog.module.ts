import * as angular from 'angular';
import { CatlogService } from '../Service/catlog.service';
import { CatlogController } from '../Controllers/catlog.controller';



angular.module('catlogModule', [])
    .controller('CatlogController', CatlogController)
    .service('CatlogService', CatlogService);