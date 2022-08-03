"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
import { upgrade_cars } from "./upgrade.js";
import { select_car } from "./select.js";

let ul_cars = document.querySelector('.ul_cars')
let greate_car = document.querySelector('.greate_car');
greate_car.addEventListener('click',greatecar) ;
let upgrate_car = document.querySelector('.upgrate_car');
 getcar();
 
 ul_cars.onclick = function(event){  
    let select_car_btn = document.querySelectorAll('.select_car_btn');
     for(let buttons of select_car_btn){
       buttons.classList.remove('button_active');
    }
    event.target.classList.toggle('button_active');
  upgrate_car.addEventListener('click',upgrade_cars) ;
 }
//  if(select_car() != undefined){
//     upgrate_car.addEventListener('click', upgrade_car( select_car())) ;
//     console.log(select_car());
    
//      //upgrate_car.addEventListener('click', upgrade_car(select_car())) ;
//  }
//  else{
//     console.log('ksnksbf');
//     select_car();

//  }
 
 