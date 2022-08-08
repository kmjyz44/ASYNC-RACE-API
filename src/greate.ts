"use strict";
import { getcar } from "./getcars";
;
let greate_name = document.querySelector('.greate_name') as HTMLInputElement;
let greate_color = document.querySelector('.greate_color') as HTMLInputElement;

function greatecar (){
  if(greate_name.value   == '' ){
    alert('Имя машины не может быть пустым');
  }
  else{
    var request = new XMLHttpRequest();
    let url_car = 'http://127.0.0.1:3000/garage/';
    request.responseType = 'json';
    request.open("POST", url_car);
    request.setRequestHeader('Content-Type', 'application/json' );
    let body = {
        "name": greate_name.value,
      "color": greate_color.value,
    };
    
    request.send(JSON.stringify(body));
    getcar();
    greate_name.value = "";
}
}
export { greatecar };