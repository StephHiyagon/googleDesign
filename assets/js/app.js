

function moveScroll(event){
  var panel= document.getElementsByClassName('nav-menu')[0];
  var ul= document.getElementsByTagName('nav')[0];
  var name=document.getElementsByClassName('name')[0];
  var search=document.getElementsByClassName('search')[0];
  var lup=document.getElementById('lup');
  var goo=document.getElementById('goo');
  var scroll=window.pageYOffset || document.body.scrollTop;
  var finalScroll=0;
  console.log(scroll);
  if(scroll>50){

    panel.classList.add("top");
    ul.classList.add("menu-rel");
    name.classList.add("name-rel");
    lup.classList.add("search-rel");
    lup.style.display="inline-block";
    goo.style.display="inline-block";
  }
  else {
    panel.classList.remove("top");
    ul.classList.remove("menu-rel");
    name.classList.remove("name-rel");
    lup.classList.remove("search-rel");
    lup.style.display="none";
    goo.style.display="none";
    }
    finalScroll=scroll;
  }


window.addEventListener('scroll',moveScroll);
