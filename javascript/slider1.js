var a;
var b = 0;
var previous = 0;
var c;
var d = 0;

 document.getElementsByClassName('slide')[0].style.display = 'block';
 document.getElementsByClassName('arrow')[0].style.display = "block";
 document.getElementsByClassName('arrow')[1].style.display = "block";

 function plusSlides(a)
{

    if(b == 7)
    {
        b=-1;
        document.getElementsByClassName('slide')[7].style.display = "none";
        document.getElementsByClassName('slide')[b+=a].style.display = "block";
        document.getElementsByClassName('arrow')[0].style.display = "block";
        document.getElementsByClassName('arrow')[1].style.display = "block";
    }
    else
    {
        document.getElementsByClassName('slide')[b].style.display = "none";
        document.getElementsByClassName('slide')[b+=a].style.display = "block";
        document.getElementsByClassName('arrow')[0].style.display = "block";
        document.getElementsByClassName('arrow')[1].style.display = "block";
    }

}

function minusSlides(a)
{
    if(b == 0)
    {
        b=7;
        document.getElementsByClassName('slide')[0].style.display = "none";
        document.getElementsByClassName('slide')[7].style.display = "block";
        document.getElementsByClassName('arrow')[0].style.display = "block";
        document.getElementsByClassName('arrow')[1].style.display = "block";
    }
    else
    {
        document.getElementsByClassName('slide')[b].style.display = "none";
        document.getElementsByClassName('slide')[b-=a].style.display = "block";
        document.getElementsByClassName('arrow')[0].style.display = "block";
        document.getElementsByClassName('arrow')[1].style.display = "block";
    }

}
