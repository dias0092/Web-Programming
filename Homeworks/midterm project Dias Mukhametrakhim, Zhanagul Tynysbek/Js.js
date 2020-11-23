function aveFunc(){
    document.getElementById("wallpaper").style.backgroundImage= "url(img/ave.jpg)";
    document.getElementById("txt").innerHTML="Create your <br> Aventador";
    
    


  if(!($('#aveb').hasClass('active'))){
    document.getElementById("aveb").className += " active";
    document.getElementById("hurb").className =
   document.getElementById("hurb").className.replace
      ( /(?:^|\s)active(?!\S)/g , '' );

   
      document.getElementById("urub").className =
      document.getElementById("urub").className.replace
         ( /(?:^|\s)active(?!\S)/g , '' );
  }
}

function urusFunc(){
    document.getElementById("wallpaper").style.backgroundImage= "url(img/uru.jpg)";
    document.getElementById("txt").innerHTML="Create your <br> Urus";

    if(!($('#urub').hasClass('active'))){
      document.getElementById("urub").className += " active";
      document.getElementById("hurb").className =
      document.getElementById("hurb").className.replace
         ( /(?:^|\s)active(?!\S)/g , '' );
   
      
         document.getElementById("aveb").className =
         document.getElementById("aveb").className.replace
            ( /(?:^|\s)active(?!\S)/g , '' );
    }
}

function hurFunc(){
    document.getElementById("wallpaper").style.backgroundImage = "url(img/hur.jpg)";
    document.getElementById("txt").innerHTML="Create your <br> Huracan";

    if(!($('#hurb').hasClass('active'))){
      document.getElementById("hurb").className += " active";
      document.getElementById("aveb").className =
     document.getElementById("aveb").className.replace
        ( /(?:^|\s)active(?!\S)/g , '' );
  
     
        document.getElementById("urub").className =
        document.getElementById("urub").className.replace
           ( /(?:^|\s)active(?!\S)/g , '' );
    } 
}


var barr = document.getElementById("hiddenmenu");
var number = 10000;
function openBar() {
    if (number % 2 != 0) {
        closeNav();
        number--;
    } else {
        openNav();
        
        number--;

    }

}

function openNav() {
  barr.style.display="block";
}

function closeNav() {
  barr.style.display="none";
}