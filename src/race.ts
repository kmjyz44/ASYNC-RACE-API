
export async function race_a(atr:string){
  let n:number;
  let num_page = document.querySelector('.num_page') as HTMLDataElement;
  let page:string = num_page.innerText;
  
  let car_img  = document.querySelector('.'+atr+'') as HTMLImageElement;
  let car_id = car_img.getAttribute('data');
  let speed_random:number = Math.trunc(Math.random() * (1 - 70) + 120);
  car_img.setAttribute('data_speed',speed_random.toString());

  async function getstart(){
  var request = new XMLHttpRequest();
  let url_car = 'http://127.0.0.1:3000/engine?id='+car_id+'&status=started';
  request.responseType = 'json';
  await request.open("PATCH", url_car);
  request.setRequestHeader('Content-Type', 'application/json' );
  let body = {
    "velocity": speed_random,
    "distance": 500000
  };
   await request.send(JSON.stringify(body));
   request.onload = function() {
    if (request.status == 500) { 
      console.log('cc 200')
      n=0;
  }
  else{
    n=1.6
  }
  }
  }
 
 async function getdrive() {
  var request = new XMLHttpRequest();
  request.responseType = 'json';
  let url_car = 'http://127.0.0.1:3000/engine?id='+car_id+'&status=drive';
 await request.open("PATCH",url_car );
 request.setRequestHeader('Content-Type', 'application/json' );
 let body2 = {
  "success": true
 };
   request.send(JSON.stringify(body2));
  }
  //_________________________________//
  async function getstopped() {
    var request = new XMLHttpRequest();
    request.responseType = 'json';
    let url_car = 'http://127.0.0.1:3000/engine?id='+car_id+'&status=stopped';
   await request.open("PATCH",url_car );
   request.setRequestHeader('Content-Type', 'application/json' );
   let body2 = {
    "velocity": speed_random,
    "distance": 500000

   };
     request.send(JSON.stringify(body2));
    }
    
   
    async function winner() {
      var request = new XMLHttpRequest();
      request.responseType = 'json';
      let url_car = 'http://127.0.0.1:3000/winners';
     await request.open("POST",url_car );
     request.setRequestHeader('Content-Type', 'application/json' );
     let body2 = {
      "id": car_id,
      "wins": atr,
      "time": speed_random
     };
       request.send(JSON.stringify(body2));
      }

     
let start = Date.now(); 
let timer =  setInterval(function() {
  function draw(timePassed: number) {
    car_img.style.left = timePassed / n + 'px';
  }
  
  let timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer); 
    return;
  }
  
  draw(timePassed);
}, (speed_random)
);
//return timer;
// async function getSort(){
//   var request = new XMLHttpRequest();
// request.responseType = 'json';
// let url_car = 'http://127.0.0.1:3000/engine?id='+car_id+'';
// await request.open("GET",url_car );
// request.setRequestHeader('Content-Type', 'application/json' );
// console.log(request.response)
//  request.send();
 
// }
  


async function ass (){
  await getstart();
  await getdrive();
  await getstopped();
 // getSort();
  await winner()
}
ass ();
}
//}
