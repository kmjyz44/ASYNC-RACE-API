
export async function race_a(atr:string){
    
let car_img  = document.querySelector('.'+atr+'') as HTMLImageElement;
let start = Date.now(); // запомнить время начала
let timer = await setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }
  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);
}, (Math.random() * (1 - 70) + 120)
);
return timer;
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
 function draw(timePassed: number) {
    car_img.style.left = timePassed / 1.6 + 'px';
}

}
 