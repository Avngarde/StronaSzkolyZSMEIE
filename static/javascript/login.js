$('body').click(function(){
    document.getElementById('legend').style.color = '#999999';
    document.getElementsByClassName('fieldset')[0].style.borderColor = '#cecdcd';
});

document.getElementsByClassName('inputy')[0].addEventListener("click", function(event){
    document.getElementById('legend').style.color = '#668cff';
    document.getElementsByClassName('fieldset')[0].style.borderColor = '#668cff';
    event.stopPropagation();
});

document.getElementsByClassName('inputy')[1].addEventListener("click", function(event){
    document.getElementById('legend').style.color = '#668cff';
    document.getElementsByClassName('fieldset')[0].style.borderColor = '#668cff';
    event.stopPropagation();  
});

