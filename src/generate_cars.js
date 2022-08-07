"use strict";
import { getcar } from "./getcars.js";
let greate_car = document.querySelector('.greate_car');
let greate_name = document.querySelector('.greate_name');
let greate_color = document.querySelector('.greate_color');

async function generate (){
     for(let i= 0; i<100;i++){
    var request = new XMLHttpRequest();
    let url_car = 'http://127.0.0.1:3000/garage/';
    request.responseType = 'json';
    request.open("POST", url_car);
    request.setRequestHeader('Content-Type', 'application/json' )
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
        }
         return color;
      }
      function getRandomName(){
        let myArray = [
            "Газель","VAZ 2108","VAZ 2112","VAZ 2115","VAZ 2114","VAZ NIVA (4*4)","LADA Granta","LADA Kalina","LADA PRIORA sedan","LADA LARGUS" ,"Volga Siber", "Acura", "Audi A3 (8P)",	 	 	 	 	 
            "Audi A4 B5",	 	 
            "Audi A4 B6",	 	 	 
            "Audi A4 B8" ,	 	 
            "Audi A6 C7",
            "Audi A8 D2", 	 	 
            "Audi Q3",
            "Audi Q5",
            "Audi Q7",
            "Audi 80 B3-B4",	 	 	 
            "Audi 100 / А6" ,	 	 	 
            "Bentley Continenta",	 	 
            "BMW 7 F01",	 	 	 
            "BMW 5 GT F07",
            "BMW 7 e38",	 
            "BMW 7 e65",  	 	 
            "BMW 1 e87", 	 
            "BMW 3 e90", 
            "Cadillac Escalade 2", 	 	 
            "Cadillac CTS 1", 	 	 	 	 
            "Chevrolet Aveo T300",
            "Chevrolet Captiva",
            "Chevrolet Cruze" ,	 	 	 	 
            "Chery CrossEastar (B14)",
            "Citroen Berlingo",	 	 
            "Citroen C5", 	 	 	 	 	 
            "Chrysler Neon 2",	 	 	 
            "Chrysler Grand Voyager" ,	 	 	 
            "Daewoo Matiz",	 	 	 	 	 	 
            "Dodge Grand Caravan" ,	 	 	 	 	 	 
            "FIAT GRANDE PUNTO", 	 	 
            "FORD S-MAX",	 	 	 	 	 	 
            "FORD Focus 1",	 	 	 
            "FORD Kuga", 	 	 
            "Honda Accord 7",
            "Hyundai Elantra", 	 	 
            "Hyundai Sonata 5",	 	 	 	 	 
            "Infiniti G 4 ",
            "Infiniti Q50",
            "Jeep Grand Cherokee WK1",	 	 	 	 
            "Kia CEED 2 5D" ,	 	 	 
            "VW T5"];
        let rand = Math.floor(Math.random()*myArray.length);
        let rValue = myArray[rand];
        return rValue;

      }
    let body = {
        "name": getRandomName(),
      "color": getRandomColor(),
    };
    
    request.send(JSON.stringify(body));
   
    getcar();
}  
}
export { generate };