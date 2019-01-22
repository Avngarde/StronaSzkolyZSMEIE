var indeks1;
var indeks2;
var rozwiniecie = false;
var previous;
var mniej = "Mniej...";
var wiecej = "Więcej...";

$('.rozwiniecie').hide();

document.getElementsByClassName("button")[0].addEventListener("click", function()
{
   if(rozwiniecie == false)
   {
      expand(0); 
   }
   else if(rozwiniecie == true)
   {
      fold(0);
   }       
});

function expand(indeks1)
{
    
     $('.articles').eq(indeks1).animate({height: '320px'});
     $('.button').eq(indeks1).animate({top: '190px'}, function() 
         {
            $('.rozwiniecie').eq(indeks1).show();
            $('.rozwiniecie').eq(indeks1).fadeTo("slow", 1);
            $('.button > a').eq(indeks1).html(mniej);
            rozwiniecie = true;
            previous = indeks1;
         });       
}

function fold(indeks2)
{
   $('.rozwiniecie').eq(indeks2).fadeTo("slow", 0, function()
   {
      $('.button').eq(indeks2).css('position', 'relative');
      $('.articles').eq(indeks2).animate({height: '130px'});
      $('.button').eq(indeks2).animate({top: '0%'}, function()
      {
         $('.button > a').eq(indeks2).delay(4000).html(wiecej);
         rozwiniecie = false;
      });    
   });
  
}
