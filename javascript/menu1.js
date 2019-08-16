function helperExpand(index1){
    switch(index1){
        case 1:
            for(i=0; i<7; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            }
            break;

        case 2:
            for(i=6; i<15; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            } 
            break;  
            
        case 3:
            for(i=14; i<21; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            } 
            break;

        case 4:
            for(i=19; i<25; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            } 
            break;

        case 5:
            for(i=23; i<30; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            } 
            break;

        case 6:
            for(i=28; i<34; i+=1){
                $('.menuoption').eq(i).css('display', 'block');
            } 
            break;                      
    }
}

function helperFold(index2){
    switch(index2){
        case 1:
            for(i=0; i<7; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            }
            break;
    
        case 2:
            for(i=6; i<15; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            } 
            break;  
            
        case 3:
            for(i=14; i<21; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            } 
            break;
    
        case 4:
            for(i=19; i<25; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            } 
            break;
    
        case 5:
            for(i=23; i<30; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            } 
            break;
    
        case 6:
            for(i=28; i<34; i+=1){
                $('.menuoption').eq(i).css('display', 'none');
            } 
            break;                      
        }
}

function expand(index){
    $('.option-animation-div').eq(index).animate({width: "100%"});	
    $('.option-arrow').eq(index-1).css({'transform' : 'rotate(90deg)'}); 
    $('.optionholder').eq(index-1).css('display', 'block'); 
    helperExpand(index);
}

function expandMobile(index){
    $('.option-animation-div').eq(index).animate({width: "100%"});	
    $('.option-arrow').eq(index-1).css({'transform' : 'rotate(90deg)'}); 
    if(lista[1] == false && lista[2] == false && lista[3] == false && lista[4] == false && lista[5] == false)
    {
        $('.optionholder').eq(index-1).css('display', 'block'); 
        helperExpand(index);
        lista[index] = true;
    }
    else
    {
        if(lista[1] == true)
        {
            $('.optionholder').eq(1).css('display', 'none');
            lista[1] = false; 
            helperExpand(index);
            lista[index] = true; 
        }
        else if(lista[2] == true)
        {
            $('.optionholder').eq(2).css('display', 'none'); 
            lista[2] = false;
            helperExpand(index);
            lista[index] = true;  
        }
        else if(lista[3] == true)
        {
            $('.optionholder').eq(3).css('display', 'none'); 
            lista[3] = false;
            helperExpand(index);  
            lista[index] = true;
        }
        else if(lista[4] == true)
        {
            $('.optionholder').eq(4).css('display', 'none'); 
            lista[4] = false;
            helperExpand(index);  
            lista[index] = true;
        }
        else if(lista[5] == true)
        {
            $('.optionholder').eq(5).css('display', 'none'); 
            lista[5] = false;
            helperExpand(index);  
            lista[index] = true;
        }
    }
}

function fold(index){
$('.option-animation-div').eq(index).animate({width: "0%"});
$('.option-arrow').eq(index-1).css({'transform' : 'rotate(-0deg)'});
$('.optionholder').eq(index-1).css('display', 'none'); 
helperFold(index);
}


function foldMobile(index){
    $('.option-animation-div').eq(index).animate({width: "0%"});
    $('.option-arrow').eq(index-1).css({'transform' : 'rotate(-0deg)'});
    $('.optionholder').eq(index-1).css('display', 'none'); 
    helperFold(index);
    lista[index] = false;
    }

var warunek = $('body').width();
var lista = [false, false, false, false, false, false];

if(warunek <=700){

    document.getElementsByClassName("menubuttons")[1].addEventListener("click", function(){
        if(lista[0] == false)
        {
            expandMobile(1);
        }
        else if(lista[0] == true)
        {
            foldMobile(1);
        }
    });

    document.getElementsByClassName("menubuttons")[2].addEventListener("click", function(){
        if(lista[1] == false)
        {
            expandMobile(2);
        }
        else if(lista[1] == true)
        {
            foldMobile(2);
        }
    });

    document.getElementsByClassName("menubuttons")[3].addEventListener("click", function(){
        if(lista[2] == false)
        {
            expandMobile(3);
        }
        else if(lista[2] == true)
        {
            foldMobile(3);
        }
    });

    document.getElementsByClassName("menubuttons")[4].addEventListener("click", function(){
        if(lista[3] == false)
        {
            expandMobile(4);
        }
        else if(lista[3] == true)
        {
            foldMobile(4);
        }
    });

    document.getElementsByClassName("menubuttons")[5].addEventListener("click", function(){
        if(lista[4] == false)
        {
            expandMobile(5);
        }
        else if(lista[4] == true)
        {
            foldMobile(5);
        }
    });

    document.getElementsByClassName("menubuttons")[6].addEventListener("click", function(){
        if(lista[5] == false)
        {
            expandMobile(6);
        }
        else if(lista[5] == true)
        {
            foldMobile(6);
        }
    });
}
//..........................................................................................
document.getElementsByClassName('menubuttons')[0].addEventListener("mouseover", function(){
    expand(0)
});

document.getElementsByClassName('menubuttons')[0].addEventListener("mouseleave", function(){
    fold(0)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[1].addEventListener("mouseover", function(){
    expand(1)
});

document.getElementsByClassName('menubuttons')[1].addEventListener("mouseleave", function(){
    fold(1)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[2].addEventListener("mouseover", function(){
    expand(2)
});

document.getElementsByClassName('menubuttons')[2].addEventListener("mouseleave", function(){
    fold(2)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[3].addEventListener("mouseover", function(){
    expand(3)
});

document.getElementsByClassName('menubuttons')[3].addEventListener("mouseleave", function(){
    fold(3)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[4].addEventListener("mouseover", function(){
    expand(4)
});

document.getElementsByClassName('menubuttons')[4].addEventListener("mouseleave", function(){
    fold(4)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[5].addEventListener("mouseover", function(){
    expand(5)
});

document.getElementsByClassName('menubuttons')[5].addEventListener("mouseleave", function(){
    fold(5)
});
//..........................................................................................
document.getElementsByClassName('menubuttons')[6].addEventListener("mouseover", function(){
    expand(6)
});

document.getElementsByClassName('menubuttons')[6].addEventListener("mouseleave", function(){
    fold(6)
});
//..........................................................................................