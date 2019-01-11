var y = 0;
var i = 0;


var mniej = document.getElementsByClassName('mniej')[0];
  mniej.style.visibility = "hidden";
var text = document.getElementsByClassName('rozwiniecie')[0];
  text.style.visibility = "hidden";


function expand()
{
  document.getElementsByClassName('articles')[y].style.height = "320px";
  document.getElementsByClassName('wiecej')[y].style.visibility = "hidden";
  mniej.style.visibility = "visible";
  text.style.visibility = "visible";
}

function fold()
{
  document.getElementsByClassName('articles')[y].style.height = "130px";
  document.getElementsByClassName('wiecej')[y].style.visibility = "visible";
  mniej.style.visibility = "hidden";
  text.style.visibility = "hidden";
}
