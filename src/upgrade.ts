import { getcar } from "./getcars";

let upgrate_name = document.querySelector('.upgrate_name') as HTMLInputElement;
let upgrate_color = document.querySelector('.upgrate_color') as HTMLInputElement;
let n;
function upgrade_cars(){

    let button_active = document.querySelector('.button_active');
    if(upgrate_name.value  == '' ){
        alert('Имя машины не может быть пустым');
      }
      else{
    if(button_active !==null){
        
    //console.log(button_active);
    n = (button_active.getAttribute('data'));
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
}
}
export { upgrade_cars }