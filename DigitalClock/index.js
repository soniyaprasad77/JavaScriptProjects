const clk = document.getElementById("clock");

setInterval(function(){
  let date= new Date();
  clk.innerHTML= date.toLocaleTimeString();

}, 1000)


