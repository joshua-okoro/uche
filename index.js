
window.addEventListener("load",loadall);
function loadall(){
    setInterval(slideshow,4000)
}

let count=1;
function slideshow(){
    if(count==1){
        setTimeout(setout,4000)
      function setout(){
          document.getElementById("slide1").style.opacity="1";

        document.getElementById("slide1").style.right="0";
        document.getElementById("slide1").style.zIndex="1000px";

        document.getElementById("slide2").style.right="-1000px";
        document.getElementById("slide2").style.zIndex="1200px";

        document.getElementById("slide3").style.right="-1400px";
        document.getElementById("slide3").style.zIndex="1400px";

            document.getElementById("slide4").style.right="-2400px";
        document.getElementById("slide4").style.zIndex="1600px";

            document.getElementById("slide5").style.right="-1600px";
        document.getElementById("slide5").style.zIndex="1800px";

            document.getElementById("slide6").style.right="-1800px";
        document.getElementById("slide6").style.zIndex="2000px";

            document.getElementById("slide7").style.right="-2000px";
        document.getElementById("slide7").style.zIndex="2200px";
         document.getElementById("slide1").style.opacity="1";
         count=2;
      }



    }
    else if(count==2){
         setTimeout(setout,4000)
      function setout(){
document.getElementById("slide2").style.opacity="0";
        document.getElementById("slide2").style.right="0";
        document.getElementById("slide2").style.zIndex="1000px";

        document.getElementById("slide1").style.right="-1000px";
        document.getElementById("slide1").style.zIndex="1200px";

        document.getElementById("slide4").style.right="-1400px";
        document.getElementById("slide4").style.zIndex="1400px";

            document.getElementById("slide3").style.right="-2400px";
        document.getElementById("slide3").style.zIndex="1600px";

            document.getElementById("slide6").style.right="-1600px";
        document.getElementById("slide6").style.zIndex="1800px";

            document.getElementById("slide5").style.right="-1800px";
        document.getElementById("slide5").style.zIndex="2000px";

            document.getElementById("slide7").style.right="-2000px";
        document.getElementById("slide7").style.zIndex="2200px";
        document.getElementById("slide2").style.opacity="1";
count=3;

      }
        
    }
     else if(count==3){
        setTimeout(setout,4000)
      function setout(){
document.getElementById("slide3").style.opacity="0";
        document.getElementById("slide4").style.right="0";
        document.getElementById("slide4").style.zIndex="1000px";

        document.getElementById("slide1").style.right="-1000px";
        document.getElementById("slide1").style.zIndex="1200px";

        document.getElementById("slide2").style.right="-1400px";
        document.getElementById("slide2").style.zIndex="1400px";

            document.getElementById("slide6").style.right="-2400px";
        document.getElementById("slide6").style.zIndex="1600px";

            document.getElementById("slide3").style.right="-1600px";
        document.getElementById("slide3").style.zIndex="1800px";

            document.getElementById("slide7").style.right="-1800px";
        document.getElementById("slide7").style.zIndex="2000px";

            document.getElementById("slide5").style.right="-2000px";
        document.getElementById("slide5").style.zIndex="2200px";
        document.getElementById("slide3").style.opacity="1";
count=4;

      }
        
    }
      else if(count==4){

setTimeout(setout,4000)
      function setout(){
 document.getElementById("slide4").style.opacity="0";
        document.getElementById("slide3").style.right="0";
        document.getElementById("slide3").style.zIndex="1000px";

        document.getElementById("slide2").style.right="-1000px";
        document.getElementById("slide2").style.zIndex="1200px";

        document.getElementById("slide1").style.right="-1400px";
        document.getElementById("slide1").style.zIndex="1400px";

            document.getElementById("slide6").style.right="-2400px";
        document.getElementById("slide6").style.zIndex="1600px";

            document.getElementById("slide7").style.right="-1600px";
        document.getElementById("slide7").style.zIndex="1800px";

            document.getElementById("slide4").style.right="-1800px";
        document.getElementById("slide4").style.zIndex="2000px";

            document.getElementById("slide5").style.right="-2000px";
        document.getElementById("slide5").style.zIndex="2200px";
        document.getElementById("slide4").style.opacity="1";
count=5;

      }       
    }
      else if(count==5){
        setTimeout(setout,4000)
      function setout(){

        document.getElementById("slide5").style.opacity="0";
        document.getElementById("slide4").style.right="0";
        document.getElementById("slide4").style.zIndex="1000px";

        document.getElementById("slide2").style.right="-1000px";
        document.getElementById("slide2").style.zIndex="1200px";

        document.getElementById("slide6").style.right="-1400px";
        document.getElementById("slide6").style.zIndex="1400px";

            document.getElementById("slide5").style.right="-2400px";
        document.getElementById("slide5").style.zIndex="1600px";

            document.getElementById("slide7").style.right="-1600px";
        document.getElementById("slide7").style.zIndex="1800px";

            document.getElementById("slide3").style.right="-1800px";
        document.getElementById("slide3").style.zIndex="2000px";

            document.getElementById("slide1").style.right="-2000px";
        document.getElementById("slide1").style.zIndex="2200px";
        document.getElementById("slide5").style.opacity="1";
count=6;

      }
    }

      else if(count==6){
        setTimeout(setout,4000)
      function setout(){
        document.getElementById("slide6").style.opacity="0";
        document.getElementById("slide5").style.right="0";
        document.getElementById("slide5").style.zIndex="1000px";

        document.getElementById("slide4").style.right="-1000px";
        document.getElementById("slide4").style.zIndex="1200px";

        document.getElementById("slide6").style.right="-1400px";
        document.getElementById("slide6").style.zIndex="1400px";

            document.getElementById("slide2").style.right="-2400px";
        document.getElementById("slide2").style.zIndex="1600px";

            document.getElementById("slide3").style.right="-1600px";
        document.getElementById("slide3").style.zIndex="1800px";

            document.getElementById("slide7").style.right="-1800px";
        document.getElementById("slide7").style.zIndex="2000px";

            document.getElementById("slide1").style.right="-2000px";
        document.getElementById("slide1").style.zIndex="2200px";
        document.getElementById("slide6").style.opacity="1";
count=1;


      }
        
      }
}

let drop=document.getElementById("drop");
let navdiv=document.getElementById("navdiv");
let exit=document.getElementById("exit");
drop.addEventListener("click",clickdrop);
function clickdrop(){
  
    if(navdiv.style.display=="none"){
        navdiv.style.display="block";
        drop.style.display="none";
    }
    else {
         navdiv.style.display="none";
         drop.style.display="block";
    }

    
}


exit.addEventListener("click",removeclick);
function removeclick(){
    clickdrop().remove();
    
}
//admin img
let imgsrc=["examplepics/elephant-2380009_1280.jpg","examplepics/images (30) - Copy.jpeg" ,];


let count2=0;

function imgcounting2(){
 document.getElementById("imgchange").src=imgsrc[count2];
    if(count2<imgsrc.length-1){
        count2++;
    }else{
        count2=0
    }

   
    setTimeout(imgcounting2,4000)

     
}
window.onload=imgcounting2()
