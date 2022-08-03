"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
import { upgrade_cars } from "./upgrade.js";
import {remove_cars} from "./remove_cars.js";

let ul_cars = document.querySelector('.ul_cars')
let greate_car = document.querySelector('.greate_car');
greate_car.addEventListener('click',greatecar) ;
let upgrate_car = document.querySelector('.upgrate_car');
 getcar();
 
 ul_cars.onclick = function(event){  
    let remove_car_btn = document.querySelectorAll('.remove_car_btn');
    let select_car_btn = document.querySelectorAll('.select_car_btn');
    for(let buttons of select_car_btn){
       buttons.classList.remove('button_active');
    }
    if(event.target.getAttribute("data")!==null){
    event.target.classList.toggle('button_active');
    }
    for(let buttons_rem of remove_car_btn){
        if(buttons_rem.classList.contains('button_active')){
          let n =  document.querySelector('.button_active').getAttribute('data');
            remove_cars(n);
            buttons_rem.closest('.li_cars').remove();//===///
        }
        buttons_rem.classList.remove('button_active');
     }

  upgrate_car.addEventListener('click',upgrade_cars) ;
 }

 
 