
export async function race_a(atr:string){
  let n = 1.6;
  let num_page = document.querySelector('.num_page') as HTMLDataElement;
  let page:string = num_page.innerText;
  
  let car_img  = document.querySelector('.'+atr+'') as HTMLImageElement;
  let car_id = car_img.getAttribute('data');
  let speed_random = (Math.random() * (1 - 70) + 120);
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
      let url_car = 'http://127.0.0.1:3000/winners?_page='+page+'&_limit=7_'+speed_random+'';
     await request.open("PATCH",url_car );
     request.setRequestHeader('Content-Type', 'application/json' );
     let body2 = {
      "id": car_id,
      "wins": 1,
      "time": speed_random
     };
       request.send(JSON.stringify(body2));
      }

     
let start = Date.now(); 
let timer =  setInterval(function() {
  function draw(timePassed: number) {
    car_img.style.left = timePassed / 1.6 + 'px';
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

async function ass (){
  await getstart();
  await getdrive();
  await getstopped();
  await winner()
}
ass ();
}
//}
