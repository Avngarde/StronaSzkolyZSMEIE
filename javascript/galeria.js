$('#screenholder').css('display', 'block');
document.getElementById('screenholderimg').style.backgroundImage = "url('zdjecia/s1.JPG')";
document.getElementById('screenholderimg').style.style.backgroundSize = "50% 50%";

































document.getElementsByClassName('zdj_galeria')[0].addEventListener("click", function(){
    Screen();
});

function Screen()
{
    document.getElementById('screenholderimg').style.backgroundImage = "url('zdjecia/s1.JPG')";
    document.getElementById('screenhodlerimg').style.style.backgroundSize = "100% 100%";
    $('#screenholder').css('display', 'block');
}