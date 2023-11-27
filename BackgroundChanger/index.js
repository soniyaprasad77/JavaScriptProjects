const start = document.getElementById('start');
const stopp =document.getElementById('stop');
function randomColor(){
   const hex = '0123456789ABCDEF';
   let color = '#';
   for(let i=0; i<6 ; i++){
     
       color += hex[Math.floor(Math.random() * 16)];
       
  }
  
  return color;
  
}

let intervalId;
function startChangingColor(){
    if(!intervalId){
        intervalId= setInterval(changeBgColor, 1000);
    }


}
function stopChangingColor(){
 clearInterval(intervalId);
 intervalId=null;
}


function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}
start.addEventListener('click', startChangingColor);
stopp.addEventListener('click', stopChangingColor);