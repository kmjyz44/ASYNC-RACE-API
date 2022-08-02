"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
import { upgrade_car } from "./upgrade.js";
let greate_car = document.querySelector('.greate_car');
greate_car.addEventListener('click',greatecar) ;
let upgrate_car = document.querySelector('.upgrate_car');
upgrate_car.addEventListener('click',upgrade_car) ;
 getcar();
 