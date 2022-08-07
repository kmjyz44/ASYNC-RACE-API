"use strict";
import { greatecar } from "./greate.js";
import { getcar } from "./getcars.js";
import { upgrade_cars } from "./upgrade.js";
import {remove_cars} from "./remove_cars.js";
import {generate } from "./generate_cars.js";
import {race_a } from "./race.js";
import {race_b } from "./race_b.js";

let n = 0; 
let  num_page_end = document.querySelector('.num_page_end');
let num_page = document.querySelector('.num_page');
let prew_btn = document.querySelector('.prew_btn');
let next_btn = document.querySelector('.next_btn');
let generate_car_btn = document.querySelector('.generate_car_btn');
let ul_cars = document.querySelector('.ul_cars');
let greate_car = document.querySelector('.greate_car');
let upgrate_car = document.querySelector('.upgrate_car');



greate_car.addEventListener('click',greatecar);
generate_car_btn.addEventListener('click',generate);
//race_btn.addEventListener('click',race_a(rrr()));
 
async function rrr (){ 
    await getcar();
    let race_btn = document.querySelector('.race_btn');
    race_btn.onclick=function(){
        let cars_img  = document.querySelectorAll('.car_img');
  
     cars_img.forEach(element => (race_a(element.classList[1])));
   };
  
}
let reset = document.querySelector('.reset');
 reset.addEventListener('click',getcar);
 //-----------//
 function next(){
 next_btn.addEventListener('click', function () {
    n =1+n;
    num_page.innerHTML = n;
    num_page_end.innerHTML=n;
    getcar(n);
 });
}

function prew(){
 prew_btn.addEventListener('click', () => {
   if (n > 1 ){
    n = n-1;
    num_page.innerHTML = n;
    num_page_end.innerHTML=n;
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
//----------------------------//

  upgrate_car.addEventListener('click',upgrade_cars) ;


  //------------------//
  let b_start = document.querySelectorAll('.b_start'); 
  for(let buttons of b_start){
    if(buttons.classList.contains('button_active')){
        race_b(buttons.getAttribute('data'))
      }
      buttons.classList.remove('button_active');
   }
   //_______________//
   let a_start = document.querySelectorAll('.a_start');
   for(let buttons of a_start){
    if(buttons.classList.contains('button_active')){
        race_a(buttons.getAttribute('data'))
      }
      buttons.classList.remove('button_active');
   }
}
}



async function run (){
await getcar();
await next();
await prew();
await sel ();
await rrr();
}
run ();