document.getElementById('mniej').style.visibility = "hidden";
document.getElementById('text_article').style.visibility = "hidden";

function artykuły1()
{
  document.getElementById('article1').style.height = "300px";
  document.getElementById('wiecej').style.visibility = "hidden";
  document.getElementById('text_article').style.visibility = "visible";
  document.getElementById('mniej').style.visibility = "visible";
}

function artykuły2()
{
  document.getElementById('article1').style.height = "130px";
  document.getElementById('wiecej').style.visibility = "visible";
  document.getElementById('text_article').style.visibility = "hidden";
  document.getElementById('mniej').style.visibility = "hidden";
}
