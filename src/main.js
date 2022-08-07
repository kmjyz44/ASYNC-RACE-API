"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
import { upgrade_cars } from "./upgrade.js";
import {remove_cars} from "./remove_cars.js";
import {generate } from "./generate_cars.js";
import {race_a } from "./race.js";


let n = 1;

let b = document.querySelectorAll('.b');
let car_button_div = document.querySelector('.car_button_div');
let num_page = document.querySelector('.num_page');
let prew_btn = document.querySelector('.prew_btn');
let next_btn = document.querySelector('.next_btn');
let generate_car_btn = document.querySelector('.generate_car_btn');
let ul_cars = document.querySelector('.ul_cars');
let greate_car = document.querySelector('.greate_car');
greate_car.addEventListener('click',greatecar);
generate_car_btn.addEventListener('click',generate);
let upgrate_car = document.querySelector('.upgrate_car');
 
 //-----------//
 function next(){
 next_btn.addEventListener('click', function () {
    n =1+n;
    num_page.innerHTML = n;
    getcar(n);
 });
}

function prew(){
 prew_btn.addEventListener('click', () => {
   if (n > 1 ){
    n = n-1;
    num_page.innerHTML = n;
    getcar(n);
   }
 });
}


 //---------------//
function sel (){
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
            buttons_rem.closest('.li_cars').remove();
        }
        buttons_rem.classList.remove('button_active');
     }

  upgrate_car.addEventListener('click',upgrade_cars) ;
 }
}


function a_race(){
let a = document.querySelector('.a'); 
a.addEventListener('click',race_a) ;
console.log(a)
}

async function run (){
await getcar();
await next();
await prew();
await sel ();
await a_race();
}
run ();