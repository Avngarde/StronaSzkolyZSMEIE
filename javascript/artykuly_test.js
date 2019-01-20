var indeks1;
var indeks2;
var rozwiniecie = false;
var previous;

var wiecej0 = $('.wiecej').eq(0);
var wiecej1 = $('.wiecej').eq(1);
var wiecej2 = $('wiecej').eq(2);

var mniej0 = $('.mniej').eq(0);
var mniej1 = $('.mniej').eq(1);
var mniej2 = $('.mniej').eq(2);

$('.mniej, .rozwiniecie').css('visibility', 'hidden');

wiecej0.addEventListener("click", function() {expand(0)});
wiecej1.addEventListener("click", function() {expand(1)});
wiecej2.addEventListener("click", function() {expand(2)});

mniej0.addEventListener("click", function() {fold(0)});
mniej1.addEventListener("click", function() {fold(1)});
mniej2.addEventListener("click", function() {fold(2)});


function expand(indeks1)
{
    if(rozwiniecie == false)
    {
        $('.articles').eq(indeks1).css('height', '320px');
        $('.wiecej').eq(indeks1).css('visibility', 'hidden');
        $('.mniej').eq(indeks1).css('visibility', 'visible');
        $('.rozwiniecie').eq(indeks1).css('visibility', 'visible');
        rozwiniecie = true;
        previous = indeks1;
    }
    else if(rozwiniecie == true)
    {
        $('.articles').eq(previous).css('height', '130px');
        $('.wiecej').eq(previous).css('visibility', 'visible');
        $('.mniej').eq(previous).css('visibility', 'hidden');
        $('.rozwiniecie').eq(previous).css('visibility', 'hidden');

        $('.articles').eq(indeks1).css('height', '320px');
        $('.wiecej').eq(indeks1).css('visibility', 'hidden');
        $('.mniej').eq(indeks1).css('visibility', 'visible');
        $('.rozwiniecie').eq(indeks1).css('visibility', 'visible');
        previous = indeks1;
    }
}

function fold(indeks2)
{
    $('.articles').eq(indeks2).css('height', '130px');
    $('.wiecej').eq(indeks2).css('visibility', 'visible');
    $('.mniej').eq(indeks2).css('visibility', 'hidden');
    $('.rozwiniecie').eq(indeks2).css('visibility', 'hidden');
    rozwiniecie = false;
}
