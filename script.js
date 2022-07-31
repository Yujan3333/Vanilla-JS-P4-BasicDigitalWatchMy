const hours=document.querySelector('.hour');
const minutes=document.querySelector('.min');
const seconds=document.querySelector('.sec');

//making a Date Object inside a funtion which we will call every second
const tick=()=>{
const time= new Date();
//here i am changing the format to 12 hours
hours.innerText=`${time.getHours()%12||12}`;
minutes.innerText=`${time.getMinutes()}`;
seconds.innerText=`${time.getSeconds()}`;
}

setInterval(tick,1000);