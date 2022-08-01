"use strict";

const licars = document.querySelector('.licars');
 function getcar() {
    var request = new XMLHttpRequest();
    var url_car = 'http://127.0.0.1:3000/garage/';
    request.open('GET', url_car);
    request.onload = function () {
        return console.log(request.response);
    };
    request.send();
}

export {getcar}