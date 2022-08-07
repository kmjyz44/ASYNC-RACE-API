
export function race_a(){
let car_img  = document.querySelector('.car_img');

let start = Date.now(); // запомнить время начала
let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 20);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
    car_img.style.left = timePassed / 1.5 + 'px';
}
}

// for(let buttons_rem of remove_car_btn){
//     if(buttons_rem.classLis=  window.onloadt.contains('button_active')){
//       let n =  document.querySelector('.button_active').getAttribute('data');
//         remove_cars(n);
//         buttons_rem.closest('.li_cars').remove();
//     }
 