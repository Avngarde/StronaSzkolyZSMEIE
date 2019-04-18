var indeks1;
var indeks2;
var pozostaly_rozwiniety = false
var rozwiniecie0 = false;
var rozwiniecie1 = false;
var rozwiniecie2 = false;
var rozwiniecie3 = false;
var rozwiniecie4 = false;
var rozwiniecie5 = false;
var rozwiniecie6 = false;
var rozwiniecie7 = false;
var rozwiniecie8 = false;
var rozwiniecie9 = false;
var rozwiniecie10 = false;
var button = false;
var previous;
var mniej = "Mniej...";
var wiecej = "Więcej...";
var wysokosc = $('.articles').eq(0).height();
var warunek1 = $('body').width();

$('body').css('fontSize', '1em');
//.................................................
/*if(warunek1 > 700)
{
   wysokosc1 = $('.themepages').eq(0).height();
   wysokosc2 = $('.themepages').eq(1).height();
   if(wysokosc1 >= wysokosc2)
   {
      $('.themepages').eq(1).height(wysokosc1);
      $('#menuright').height(wysokosc1 * 1.04);
   }
   else if(wysokosc1 < wysokosc2)
   {
      $('.themepages').eq(0).height(wysokosc2);
      $('#menuright').height(wysokosc2 * 1.04);
   }

}*/



document.getElementsByClassName('zoom-icon')[0].addEventListener("click", function(){
    alert("jej");
});

document.getElementsByClassName('zoom-icon')[1].addEventListener("click", function(){
    $('body').css('fontSize', '0.7em');
});

document.getElementsByClassName('zoom-icon')[2].addEventListener("click", function(){
    $('body').css('fontSize', '1em');
});

document.getElementsByClassName('zoom-icon')[3].addEventListener("click", function(){
    $('body').css('fontSize', '1.3em');
});

document.getElementById('RODO').addEventListener("mouseout", function(){
   document.getElementById('RODO_text').style.marginLeft = "7px";
   $('#RODO_text a').css('color', 'black');
});



if(warunek1 > 0 && warunek1 < 400)
{
   $('#respmenuholder').css('right', '-80px');
}
else if(warunek1 > 401 && warunek1 <701)
{
   $('#respmenuholder').css('right', '-100px');
}

document.getElementById('rightmenubutton').addEventListener("click", function(){
   if(button == false)
   {
      $('#respmenuholder').css('right', '5px');
      button = true;
   }
   else if(button == true)
   {
      if(warunek1 > 0 && warunek1 < 400)
      {
         $('#respmenuholder').css('right', '-80px');
         button = false;
      }
      else if(warunek1 > 401 && warunek1 <701)
      {
         $('#respmenuholder').css('right', '-100px');
         button = false;
      }
      
   }
   
});

//........................................................................................

$('.rozwiniecie').hide();

document.getElementsByClassName("button")[0].addEventListener("click", function()
{
   if(rozwiniecie0 == false)
   {
      expand(0); 
   }
   else if(rozwiniecie0 == true)
   {
      fold(0);
   }       
});

document.getElementsByClassName("button")[1].addEventListener("click", function()
{
   if(rozwiniecie1 == false)
   {
      expand(1); 
   }
   else if(rozwiniecie1 == true)
   {
      fold(1);
   }       
});

document.getElementsByClassName("button")[2].addEventListener("click", function()
{
   if(rozwiniecie2 == false)
   {
      expand(2); 
   }
   else if(rozwiniecie2 == true)
   {
      fold(2);
   }       
});

document.getElementsByClassName("button")[3].addEventListener("click", function()
{
   if(rozwiniecie3 == false)
   {
      expand(3); 
   }
   else if(rozwiniecie3 == true)
   {
      fold(3);
   }       
});

document.getElementsByClassName("button")[4].addEventListener("click", function()
{
   if(rozwiniecie4 == false)
   {
      expand(4); 
   }
   else if(rozwiniecie4 == true)
   {
      fold(4);
   }       
});

document.getElementsByClassName("button")[5].addEventListener("click", function()
{
   if(rozwiniecie5 == false)
   {
      expand(5); 
   }
   else if(rozwiniecie5 == true)
   {
      fold(5);
   }       
});

document.getElementsByClassName("button")[6].addEventListener("click", function()
{
   if(rozwiniecie6 == false)
   {
      expand(6); 
   }
   else if(rozwiniecie6 == true)
   {
      fold(6);
   }       
});

document.getElementsByClassName("button")[7].addEventListener("click", function()
{
   if(rozwiniecie7 == false)
   {
      expand(7); 
   }
   else if(rozwiniecie7 == true)
   {
      fold(7);
   }       
});

document.getElementsByClassName("button")[8].addEventListener("click", function()
{
   if(rozwiniecie8 == false)
   {
      expand(8); 
   }
   else if(rozwiniecie8 == true)
   {
      fold(8);
   }       
});

document.getElementsByClassName("button")[9].addEventListener("click", function()
{
   if(rozwiniecie9 == false)
   {
      expand(9); 
   }
   else if(rozwiniecie9 == true)
   {
      fold(9);
   }       
});

document.getElementsByClassName("button")[2].addEventListener("click", function()
{
   if(rozwiniecie10 == false)
   {
      expand(10); 
   }
   else if(rozwiniecie10 == true)
   {
      fold(10);
   }       
});



function expand(indeks1)
{
   if(pozostaly_rozwiniety == false)
   {
      $('.articles').eq(indeks1).animate({height: 2.5*wysokosc});
      $('.button').eq(indeks1).animate({top: 1.5*wysokosc}, function() 
          {
             $('.rozwiniecie').eq(indeks1).show();
             $('.rozwiniecie').eq(indeks1).fadeTo("slow", 1);
             $('.button > a').eq(indeks1).html(mniej);
             rozwiniecie0 = false;
             rozwiniecie1 = false;
             rozwiniecie2 = false;
             rozwiniecie3 = false;
             rozwiniecie4 = false;
             rozwiniecie5 = false;
             rozwiniecie6 = false;
             rozwiniecie7 = false;
             rozwiniecie8 = false;
             rozwiniecie9 = false;
             rozwiniecie10 = false;
             if(indeks1 == 0)
             {
                rozwiniecie0 = true;
             }
             else if(indeks1 == 1)
             {
                rozwiniecie1 = true;
             }
             else if(indeks1 == 2)
             {
                rozwiniecie2 = true;
             }
             else if(indeks1 == 3)
             {
                rozwiniecie3 = true;
             }
             else if(indeks1 == 4)
             {
                rozwiniecie4 = true;
             }
             else if(indeks1 == 5)
             {
                rozwiniecie5 = true;
             }
             else if(indeks1 == 6)
             {
                rozwiniecie6 = true;
             }
             else if(indeks1 == 7)
             {
                rozwiniecie7 = true;
             }
             else if(indeks1 == 8)
             {
                rozwiniecie8 = true;
             }
             else if(indeks1 == 9)
             {
                rozwiniecie9 = true;
             }
             else if(indeks1 == 10)
             {
                rozwiniecie10 = true;
             }
             previous = indeks1;
             pozostaly_rozwiniety = true;
          });
   }
   else if(pozostaly_rozwiniety == true)
   {
      $('.rozwiniecie').eq(previous).fadeTo("slow", 0, function()
      {
         $('.button').eq(previous).css('position', 'relative');
         $('.articles').eq(previous).animate({height: wysokosc});
         $('.button').eq(previous).animate({top: '0%'}, function()
         {
            $('.button > a').eq(previous).delay(4000);
            $('.button > a').eq(previous).html(wiecej);


            $('.articles').eq(indeks1).animate({height: 2.5*wysokosc});
            $('.button').eq(indeks1).animate({top: 1.5*wysokosc}, function() 
                {
                   $('.rozwiniecie').eq(indeks1).show();
                   $('.rozwiniecie').eq(indeks1).fadeTo("slow", 1);
                   $('.button > a').eq(indeks1).html(mniej);
                   rozwiniecie0 = false;
                   rozwiniecie1 = false;
                   rozwiniecie2 = false;
                   rozwiniecie3 = false;
                   rozwiniecie4 = false;
                   rozwiniecie5 = false;
                   rozwiniecie6 = false;
                   rozwiniecie7 = false;
                   rozwiniecie8 = false;
                   rozwiniecie9 = false;
                   rozwiniecie10 = false;
                   if(indeks1 == 0)
                   {
                      rozwiniecie0 = true;
                   }
                   else if(indeks1 == 1)
                   {
                      rozwiniecie1 = true;
                   }
                   else if(indeks1 == 2)
                   {
                      rozwiniecie2 = true;
                   }
                   else if(indeks1 == 3)
                   {
                      rozwiniecie3 = true;
                   }
                   else if(indeks1 == 4)
                   {
                      rozwiniecie4 = true;
                   }
                   else if(indeks1 == 5)
                   {
                      rozwiniecie5 = true;
                   }
                   else if(indeks1 == 6)
                   {
                      rozwiniecie6 = true;
                   }
                   else if(indeks1 == 7)
                   {
                      rozwiniecie7 = true;
                   }
                   else if(indeks1 == 8)
                   {
                      rozwiniecie8 = true;
                   }
                   else if(indeks1 == 9)
                   {
                      rozwiniecie9 = true;
                   }
                   else if(indeks1 == 10)
                   {
                      rozwiniecie10 = true;
                   }
                   previous = indeks1;
                   pozostaly_rozwiniety = true;
                });
         });    
      });      
   }             
}

function fold(indeks2)
{
   $('.rozwiniecie').eq(indeks2).fadeTo("slow", 0, function()
   {
      $('.button').eq(indeks2).css('position', 'relative');
      $('.articles').eq(indeks2).animate({height: wysokosc});
      $('.button').eq(indeks2).animate({top: '0%'}, function()
      {
         $('.button > a').eq(indeks2).delay(4000);
         $('.button > a').eq(indeks2).html(wiecej);
         if(indeks2 == 0)
                   {
                      rozwiniecie0 = false;
                   }
                   else if(indeks2 == 1)
                   {
                      rozwiniecie1 = false;
                   }
                   else if(indeks2 == 2)
                   {
                      rozwiniecie2 = false;
                   }
                   else if(indeks2 == 3)
                   {
                      rozwiniecie3 = false;
                   }
                   else if(indeks2 == 4)
                   {
                      rozwiniecie4 = false;
                   }
                   else if(indeks2 == 5)
                   {
                      rozwiniecie5 = false;
                   }
                   else if(indeks2 == 6)
                   {
                      rozwiniecie6 = false;
                   }
                   else if(indeks2 == 7)
                   {
                      rozwiniecie7 = false;
                   }
                   else if(indeks2 == 8)
                   {
                      rozwiniecie8 = false;
                   }
                   else if(indeks2 == 9)
                   {
                      rozwiniecie9 = false;
                   }
                   else if(indeks2 == 10)
                   {
                      rozwiniecie10 = false;
                   }
      });    
   });
   pozostaly_rozwiniety = false;
  
}

