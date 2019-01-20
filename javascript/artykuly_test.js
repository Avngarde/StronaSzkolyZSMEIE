var previous;
var a;
var b;
var rozwiniecie = false;

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





function expand(a)
{
    $('.articles').eq(a).css('height', '320px');
    $('.wiecej').eq(a).css('visibility', 'hidden');
    $('.mniej').eq(a).css('visibility', 'visible');
    $('.rozwiniecie').eq(a).css('visibility', 'visible');
}

function fold(b)
{
    $('.articles').eq(b).css('height', '130px');
    $('.wiecej').eq(b).css('visibility', 'visible');
    $('.mniej').eq(b).css('visibility', 'hidden');
    $('.rozwiniecie').eq(b).css('visibility', 'hidden');
}
