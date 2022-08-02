"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
let greate_car = document.querySelector('.greate_car');

greate_car.addEventListener('click',greatecar) ;

 getcar("GET",'http://127.0.0.1:3000/garage/');
 