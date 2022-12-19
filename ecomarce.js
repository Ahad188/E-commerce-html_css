var menu = document.getElementById("menuitems");
     menu.style.maxHeight = "0px";

     function menutoggol(){
          if(menu.style.maxHeight == "0px"){

               menu.style.maxHeight = "200px";
          }else{
               menu.style.maxHeight = "0px";

          };
     };
     // produtcs sitals
     //  var proimg = document.getElementById("pro-img");
     //  var small = document.getElementsByClassName("small-img");

      function myFunction(smallimg){
          var fullImg = document.getElementById("pro-img");
          fullImg.src = smallimg.src;
       };
     //   account

     var log = document.getElementById("log");
     var reg = document.getElementById("reg");
     var ind = document.getElementById("ind");

     function regs(){
          reg.style.transform = "translateX(0px)"
          log.style.transform = "translateX(0px)"
          ind.style.transform = "translateX(100px)"
     }
     function login(){
          reg.style.transform = "translateX(300px)"
          log.style.transform = "translateX(300px)"
          ind.style.transform = "translateX(0px)"
     }