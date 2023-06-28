 var len=document.querySelectorAll(".drum").length;
 for(var i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  // when a selected element detects a click  then coressponding function is called and function will return according to the event happend on it.
  var buttonInnerHtml=this.innerHTML;
   makeasound(buttonInnerHtml);
  });
}
  document.addEventListener("keypress",function(event){ // we can name anything as event or evt or e....
    makeasound(event.key);
    // here funtion is call back function and it is called by selected element when keyis pressed.
    //here keypress function is called what ever event hapened with keys the function will return that  event and event conatains key as objects
    // so event.key is called
   });
function makeasound(key){
  switch(key){
    case "w":
      var audio =new Audio("crash.mp3");
      audio.play();
      break;
      case "a":
      var audio =new Audio("kick-bass.mp3");
      audio.play();
      break;
      
      case "s":
      var audio =new Audio("snare.mp3");
      audio.play();
      break;

      case "d":
      var audio =new Audio("tom-1.mp3");
      audio.play();
      break;

      case "j":
      var audio =new Audio("tom-2.mp3");
      audio.play();
      break;

      case "k":
      var audio =new Audio("tom-3.mp3");
      audio.play();
      break;


      case "l":
      var audio =new Audio("tom-4.mp3");
      audio.play();
      break;


      default:
        console.log();
  }

} ;
//document.querySelector(".drum").addEventListener("click",funtion
 // alert("i am clicked");
 // }); // for a single target

