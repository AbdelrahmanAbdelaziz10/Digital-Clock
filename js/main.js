let time_el = document.querySelector(".time");
function time(){
    'use strict';
let day = new Date();
let hr = day.getHours();
let min = day.getMinutes();
let sec = day.getSeconds();

if (hr< 10 ){
    hr = '0' + hr;
}
if (min <10 ){
    min = '0' + min ;
}
if (sec <10 ){
    sec = '0' + sec ;
}

time_el.innerHTML=hr +":" + min +":" + sec;

}

window,onload= function(){
    'use strict';

    this.setInterval(time , 500);

}