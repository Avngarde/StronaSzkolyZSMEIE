$('.menuoption').css('display', 'none');
$('.optionholder').css('display', 'none');

document.getElementsByClassName("menubuttons")[1].addEventListener("mouseover", function(){
    $('.optionholder').eq(0).css('display', 'block');
    $('.menuoption').eq(0).css('display', 'block');
    $('.menuoption').eq(1).css('display', 'block');
    $('.menuoption').eq(2).css('display', 'block');
    $('.menuoption').eq(3).css('display', 'block');
    $('.menuoption').eq(4).css('display', 'block');
    $('.menuoption').eq(5).css('display', 'block'); 
});
document.getElementsByClassName('menubuttons')[1].addEventListener("mouseout", function(){
    $('.optionholder').eq(0).css('display', 'none');
});


document.getElementsByClassName("menubuttons")[2].addEventListener("mouseover", function(){
    $('.optionholder').eq(1).css('display', 'block');
    $('.menuoption').eq(6).css('display', 'block');
    $('.menuoption').eq(7).css('display', 'block');
    $('.menuoption').eq(8).css('display', 'block');
    $('.menuoption').eq(9).css('display', 'block');
    $('.menuoption').eq(10).css('display', 'block');
    $('.menuoption').eq(11).css('display', 'block');
    $('.menuoption').eq(12).css('display', 'block');
});
document.getElementsByClassName('menubuttons')[2].addEventListener("mouseout", function(){
    $('.optionholder').eq(1).css('display', 'none');  
});


document.getElementsByClassName("menubuttons")[3].addEventListener("mouseover", function(){
    $('.optionholder').eq(2).css('display', 'block');
    $('.menuoption').eq(13).css('display', 'block');
   

   

});
document.getElementsByClassName('menubuttons')[3].addEventListener("mouseout", function(){
    $('.optionholder').eq(2).css('display', 'none');  
});

document.getElementsByClassName("menubuttons")[6].addEventListener("mouseover", function(){
    $('.optionholder').eq(3).css('display', 'block');
    $('.menuoption').eq(14).css('display', 'block');
    $('.menuoption').eq(15).css('display', 'block');
    $('.menuoption').eq(16).css('display', 'block');
    $('.menuoption').eq(17).css('display', 'block');

});
document.getElementsByClassName('menubuttons')[6].addEventListener("mouseout", function(){
    $('.optionholder').eq(3).css('display', 'none');  
});

