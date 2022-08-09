"use strict";
import { greatecar } from "./greate";
import { getcar } from "./getcars";
import { upgrade_cars } from "./upgrade";
import {remove_cars} from "./remove_cars";
import {generate } from "./generate_cars";
import {race_a } from "./race";
import {race_b } from "./race_b";
import {winner} from "./winner";
let n:number = 0; 
let  num_page_end = document.querySelector('.num_page_end') as HTMLTitleElement;
let num_page = document.querySelector('.num_page') as HTMLTitleElement;
let prew_btn = document.querySelector('.prew_btn') as HTMLButtonElement;
let next_btn = document.querySelector('.next_btn') as HTMLButtonElement;
let generate_car_btn = document.querySelector('.generate_car_btn') as HTMLButtonElement;
let ul_cars = document.querySelector('.ul_cars') as HTMLButtonElement;
let greate_car = document.querySelector('.greate_car')as HTMLButtonElement;
let upgrate_car = document.querySelector('.upgrate_car') as HTMLButtonElement;



greate_car.addEventListener('click',greatecar);
generate_car_btn.addEventListener('click',generate);
//race_btn.addEventListener('click',race_a(rrr()));
 
async function rrr (){ 
    await getcar();
    let race_btn = document.querySelector('.race_btn') as HTMLButtonElement;
    race_btn.onclick=function(){
        let cars_img  = document.querySelectorAll('.car_img');
  
     cars_img.forEach(element => (race_a(element.classList[1])));
  
   };
  
}
let reset = document.querySelector('.reset') as HTMLButtonElement;
 reset.onclick = function(){
    getcar()
};
 //-----------//
 function next(){
 next_btn.addEventListener('click', function () {
    n =1+n;
    num_page.innerHTML = n.toString();
    num_page_end.innerHTML = n.toString();
    getcar(n);
 });
}

function prew(){
 prew_btn.addEventListener('click', () => {
   if (n > 1 ){
    n = n-1;
    num_page.innerHTML = n.toString();
    num_page_end.innerHTML=n.toString();
    getcar(n);
   }
 });
}

 //---------------//
function sel (){
 ul_cars.onclick = function(event){  
    let remove_car_btn = document.querySelectorAll('.remove_car_btn') as NodeList;
    let select_car_btn = document.querySelectorAll('.select_car_btn') as NodeList;
    //for(let buttons  of select_car_btn){
     //  buttons.classList.remove('button_active');
    //}
   
const arrElem = Array.prototype.slice.call(select_car_btn, 0);
for(let i =0; i<arrElem.length;i++){
arrElem[i].classList.remove('button_active')
}
    const even = event.target as HTMLButtonElement
    if(even.getAttribute("data")!==null){
      even.classList.toggle('button_active');
    }
      //   for(let buttons_rem of remove_car_btn){
      //   if(buttons_rem.classList.contains('button_active')){
   //       let n =  (document.querySelector('.button_active')as HTMLButtonElement).getAttribute('data');
   //          remove_cars(n);
   //          buttons_rem.closest('.li_cars').remove();
   //      }
   //      buttons_rem.classList.remove('button_active');
   //   }
   const arrElem2 = Array.prototype.slice.call(remove_car_btn, 0);
   for(let i =0; i<arrElem2.length;i++){
     if( arrElem2[i].classList.contains('button_active')){
      let n:string | null =  ((document.querySelector('.button_active')as HTMLButtonElement).getAttribute('data'));
          remove_cars(n);
          arrElem2[i].closest('.li_cars').remove();
     }
     arrElem2[i].classList.remove('button_active');
      }
//----------------------------//

  upgrate_car.addEventListener('click',upgrade_cars) ;


  //------------------//
  let b_start = document.querySelectorAll('.b_start') as NodeList; 
//   for(let buttons of b_start){
//     if(buttons.classList.contains('button_active')){
//         race_b(buttons.getAttribute('data'))
//       }
//       buttons.classList.remove('button_active');
//    }
const arrElem3 = Array.prototype.slice.call(b_start, 0);
   for(let i =0; i<arrElem3.length;i++){
      if(arrElem3[i].classList.contains('button_active')){
         race_b(arrElem3[i].getAttribute('data'))
      }
      arrElem3[i].classList.remove('button_active');
   }
   //_______________//
   let a_start = document.querySelectorAll('.a_start') as NodeList;
//    for(let buttons of a_start){
//     if(buttons.classList.contains('button_active')){
//         race_a(buttons.getAttribute('data'))
//       }
//       buttons.classList.remove('button_active');
//    }
// }
const arrElem4 = Array.prototype.slice.call(a_start, 0);
   for(let i =0; i<arrElem4.length;i++){
      if(arrElem4[i].classList.contains('button_active')){
         race_a(arrElem4[i].getAttribute('data'))
      }
      arrElem4[i].classList.remove('button_active');
   }
}
}


async function run (){
await getcar();
await next();
await prew();
await sel ();
await rrr();
await winner();
}
run ()
