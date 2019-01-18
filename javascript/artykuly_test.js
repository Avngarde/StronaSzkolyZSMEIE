var previous;
var i;
var a;
var rozwiniecie = false;


var mniej = document.getElementsByClassName('mniej');
var text = document.getElementsByClassName('rozwiniecie');

for(i=0; i<5; i+=1)
{
  mniej[i].style.visibility = "hidden";
  text[i].style.visibility = "hidden";
}

function expand(a)
{
    if(a=='0')
    {
      document.getElementsByClassName('articles')[0].style.height = "320px";
      document.getElementsByClassName('wiecej')[0].style.visibility = "hidden";
      mniej[0].style.visibility = "visible";
      text[0].style.visibility = "visible";
    }
}

function fold(b)
{
    if(b=='0')
    {
        document.getElementsByClassName('articles')[0].style.height = "130px";
        document.getElementsByClassName('wiecej')[0].style.visibility = "visible";
        mniej[0].style.visibility = "hidden";
        text[0].style.visibility = "hidden";        
    }
    
}