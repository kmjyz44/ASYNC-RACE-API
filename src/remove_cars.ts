"use strict";
import { getcar } from "./getcars";
function remove_cars (n:string | null){
    // let button_active = document.querySelector('.button_active');
    // n = (button_active.getAttribute('data'));
    var request = new XMLHttpRequest();
    let url_car = 'http://127.0.0.1:3000/garage/'+n+'';
    request.responseType = 'json';
    request.open("DELETE", url_car);
    request.setRequestHeader('Content-Type', 'application/json' )
    request.send();
    getcar();
   
}
export { remove_cars };