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
var kontrast = false;

$('body').css('fontSize', '1em');

document.getElementById('contrast').addEventListener("click", function(){
   if(kontrast == false){
      $('.pasek_articles').css('background-color', 'yellow');
      $('.STRONY_TEMATYCZNE').css('background-color', 'yellow');
      $('.articles').css('background-color', 'black');
      $('.text_in_articles').css('color', 'white');
      $('.text_in_articles2').css('color', 'white');
      $('.rozwiniecie').css('color', 'white');
      $('.menubuttons').css('background-color', 'black');
      $('.menuoption').css('background-color', 'black');
      $('.option-animation-div').css('background-color', 'yellow');
      $('.text-article-contrast').css('color', 'white');
      $('.text-article-contrast-button').css('color', 'white');
      $('.text-article-contrast-title').css('color', 'white');
      $('.themepages').css('background-color', 'black');
      $('#contrast-div').css('color', 'white');
      $('.contrast-li').css('color', 'white');
      $('.contrast-text').css('color', 'white');
      $('#podstrona').css('background-color', 'black');
      $('#podstrona *').css('color', 'white');
      kontrast = true;
   }
   else{
      $('.pasek_articles').css('background-color', '#73a9ff');
      $('.STRONY_TEMATYCZNE').css('background-color', 'rgb(131, 180, 245)');
      $('.articles').css('background-color', 'white');
      $('.menubuttons').css('background-color', '#21303f');
      $('.menuoption').css('background-color', '#21303f');
      $('.option-animation-div').css('background-color', '#0A5794');
      $('.text-article-contrast-title').css('color', '#3399ff');
      $('.text-article-contrast').css('color', 'black');
      $('.themepages').css('background-color', 'rgb(253, 253, 253)');
      $('#contrast-div').css('color', 'black');
      $('.contrast-li').css('color', 'black');
      $('.contrast-text').css('color', 'black');
      $('#podstrona').css('background-color', 'white');
      $('#podstrona *').css('color', 'black');
      kontrast = false;
   }
   
});

document.getElementsByClassName('zoom-icon')[1].addEventListener("click", function(){
    $('body').css('fontSize', '0.7em');
});

document.getElementsByClassName('zoom-icon')[2].addEventListener("click", function(){
    $('body').css('fontSize', '1em');
});

document.getElementsByClassName('zoom-icon')[3].addEventListener("click", function(){
    $('body').css('fontSize', '1.3em');
    $('#strona-glowna').css('fontSize', '0.9em');
    $('#dla-nauczycieli').css('fontSize', '0.9em');
});

document.getElementById('RODO').addEventListener("mouseout", function(){
   document.getElementById('RODO_text').style.marginLeft = "7px";
   $('#RODO_text a').css('color', 'black');
});



if(warunek1 > 0 && warunek1 < 400)
{
   $('#respmenuholder').css('right', '-70px');
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