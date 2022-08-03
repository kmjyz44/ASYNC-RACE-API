let ul_cars = document.querySelector('.ul_cars');
export  async function select_car (){
   ul_cars.onclick = function(event){  
 event.target.classList.toggle('button_active');
}
}


