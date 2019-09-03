var mniej = "Mniej...";
var wiecej = "Więcej...";
var indeks1;
var indeks2;
var indeks3;
var pozostaly_rozwiniety = false;
var button = false;
var previous;
var wysokosc = $('.articles').eq(0).height();
var lista = [false, false, false, false, false, false, false, false, false, false];

$('.rozwiniecie').hide();
//....................................................................

function helperArticle(indeks3){
    $('.articles').eq(indeks3).animate({height: 2.5*wysokosc});
    $('.button').eq(indeks3).animate({top: 1.5*wysokosc}, function() 
        {
           $('.rozwiniecie').eq(indeks3).show();
           $('.rozwiniecie').eq(indeks3).fadeTo("slow", 1);
           $('.text-article-contrast-button').eq(indeks3).html(mniej);
           lista[0] = false;
           lista[1] = false;
           lista[2] = false;
           lista[3] = false;
           lista[4] = false;
           lista[5] = false;
           lista[6] = false;
           lista[7] = false;
           lista[8] = false;
           lista[9] = false;
           switch(indeks3)
           {
                case 0:
                    lista[0] = true;
                    break;
                case 1:
                    lista[1] = true;
                    break;
                case 2:
                    lista[2] = true;
                    break; 
                case 3:
                    lista[3] = true;
                    break;
                case 4:
                    lista[4] = true;
                    break;
                case 5:
                    lista[5] = true;
                     break;  
                case 6:
                    lista[6] = true;
                    break;
                case 7:
                    lista[7] = true;
                    break; 
                case 8:
                    lista[8] = true;
                    break;
                case 9:
                    lista[9] = true;
                    break; 
           }
           previous = indeks3;
           pozostaly_rozwiniety = true;
        }); 
}


function expandArticle(indeks1)
{
    if(pozostaly_rozwiniety == false)
    {
          helperArticle(indeks1);
    }
    else if(pozostaly_rozwiniety == true)
    {
        $('.rozwiniecie').eq(previous).fadeTo("slow", 0, function()
        {
           $('.button').eq(previous).css('position', 'relative');
           $('.articles').eq(previous).animate({height: wysokosc});
           $('.button').eq(previous).animate({top: '0%'}, function()
           {
              $('.button > span').eq(previous).delay(4000);
              $('.text-article-contrast-button').eq(previous).html(wiecej);
              helperArticle(indeks1);
           });
        });      
    }
}



function foldArticle(indeks2)
{
    $('.rozwiniecie').eq(indeks2).fadeTo("slow", 0, function()
    {
       $('.button').eq(indeks2).css('position', 'relative');
       $('.articles').eq(indeks2).animate({height: wysokosc});
       $('.button').eq(indeks2).animate({top: '0%'}, function()
       {
          $('.button > span').eq(indeks2).delay(4000);
          $('.text-article-contrast-button').eq(indeks2).html(wiecej);
          switch(indeks2)
           {
                case 0:
                    lista[0] = false;
                    break;
                case 1:
                    lista[1] = false;
                    break;
                case 2:
                    lista[2] = false;
                    break; 
                case 3:
                    lista[3] = false;
                    break;
                case 4:
                    lista[4] = false;
                    break;
                case 5:
                    lista[5] = false;
                     break;  
                case 6:
                    lista[6] = false;
                    break;
                case 7:
                    lista[7] = false;
                    break; 
                case 8:
                    lista[8] = false;
                    break;
                case 9:
                    lista[9] = false;
                    break; 
           }
       });    
    });
    pozostaly_rozwiniety = false;
   
}



$('.button span').eq(0).click(function(){
    if(lista[0] == false)
    {
        expandArticle(0);
    }
    else if(lista[0] == true)
    {
        foldArticle(0);
    }
});

$('.button span').eq(1).click(function(){
    if(lista[1] == false)
    {
        expandArticle(1);
    }
    else if(lista[1] == true)
    {
        foldArticle(1);
    }
});

$('.button span').eq(2).click(function(){
    if(lista[2] == false)
    {
        expandArticle(2);
    }
    else if(lista[2] == true)
    {
        foldArticle(2);
    }
});

$('.button span').eq(3).click(function(){
    if(lista[3] == false)
    {
        expandArticle(3);
    }
    else if(lista[3] == true)
    {
        foldArticle(3);
    }
});

$('.button span').eq(4).click(function(){
    if(lista[4] == false)
    {
        expandArticle(4);
    }
    else if(lista[4] == true)
    {
        foldArticle(4);
    }
});

$('.button span').eq(5).click(function(){
    if(lista[5] == false)
    {
        expandArticle(5);
    }
    else if(lista[5] == true)
    {
        foldArticle(5);
    }
});

$('.button span').eq(6).click(function(){
    if(lista[6] == false)
    {
        expandArticle(6);
    }
    else if(lista[6] == true)
    {
        foldArticle(6);
    }
});

$('.button span').eq(7).click(function(){
    if(lista[7] == false)
    {
        expandArticle(7);
    }
    else if(lista[7] == true)
    {
        foldArticle(7);
    }
});

$('.button span').eq(8).click(function(){
    if(lista[8] == false)
    {
        expandArticle(8);
    }
    else if(lista[8] == true)
    {
        foldArticle(8);
    }
});

$('.button span').eq(9).click(function(){
    if(lista[9] == false)
    {
        expandArticle(9);
    }
    else if(lista[9] == true)
    {
        foldArticle(9);
    }
});