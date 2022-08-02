import { getcar } from "./getcars.js";
let upgrate_name = document.querySelector('.upgrate_name');
let upgrate_color = document.querySelector('.upgrate_color')
let n = 2;
function upgrade_car(){
    var request = new XMLHttpRequest();
    let url_car = 'http://127.0.0.1:3000/garage/'+n+'';
    request.responseType = 'json';
    request.open("PUT", url_car);
    request.setRequestHeader('Content-Type', 'application/json' )
    let body = {
        "name": upgrate_name.value,
      "color": upgrate_color.value
    };
    
    request.send(JSON.stringify(body));
    getcar();
    
}

export { upgrade_car }