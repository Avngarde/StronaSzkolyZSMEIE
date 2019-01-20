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

$('.mniej, .rozwiniecie').hide();

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
        $('.wiecej').eq(indeks1).hide();
        $('.mniej').eq(indeks1).show();
        $('.rozwiniecie').eq(indeks1).show();
        rozwiniecie = true;
        previous = indeks1;
    }
    else if(rozwiniecie == true)
    {
        $('.articles').eq(previous).css('height', '130px');
        $('.wiecej').eq(previous).show();
        $('.mniej').eq(previous).hide();
        $('.rozwiniecie').eq(previous).hide();

        $('.articles').eq(indeks1).css('height', '320px');
        $('.wiecej').eq(indeks1).hide();
        $('.mniej').eq(indeks1).show();
        $('.rozwiniecie').eq(indeks1).show();
        previous = indeks1;
    }
}

function fold(indeks2)
{
    $('.articles').eq(indeks2).css('height', '130px');
    $('.wiecej').eq(indeks2).show();
    $('.mniej').eq(indeks2).hide();
    $('.rozwiniecie').eq(indeks2).hide();
    rozwiniecie = false;
}
