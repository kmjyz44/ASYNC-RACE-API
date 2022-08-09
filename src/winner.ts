
async function winner() {
    let out = '';
    
    let winner_ul = document.querySelector('.winner_ul') as HTMLElement;
    console.log(winner_ul);
    var request = new XMLHttpRequest();
    request.responseType = 'json';
    let url_car = 'http://127.0.0.1:3000/winners?_page=1&_sort=wins&_order=ASC&_limit=5';
   await request.open("get",url_car );
   request.setRequestHeader('Content-Type', 'application/json' );
   request.response.forEach((element: { id: string; wins: string; time: string; }) => {
    out+= '<li class = "li_cars">'+'<div class="menu_car" style="display: flex;">'+
    '<h2>'+element.id+'</h2>'+'<h2>'+element.wins+'</h2>'+'<h2>'+element.time+'</h2>'+'</div>'+
    '</li>';
    winner_ul.innerHTML =out;
    })
    
    request.send();
    }
    winner();
export {winner}