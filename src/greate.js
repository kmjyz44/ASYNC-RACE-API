"use strict";

function greatecar (){
    var request = new XMLHttpRequest();
    let url_car = 'http://127.0.0.1:3000/garage/';
    request.responseType = 'json';
    request.open("POST", url_car);
    request.setRequestHeader('Content-Type', 'application/json' )
    let body = {
        "name": "New Red Car",
      "color": "#ff0000",
      "id": 10
    };
    request.send(JSON.stringify(body));
}
export { greatecar };