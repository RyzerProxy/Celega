/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navmenu() {
  var x = document.getElementById("navmenu");
  if (x.className === "el--2") {
    x.className += " responsive";
  } else {
    x.className = "el--2";
  }
} 

//  start slider part
let sliders =  document.getElementsByClassName("slider");
let mainSlider= sliders[0];
console.log(mainSlider.nodeType);
let btns = document.getElementsByClassName("radio-img1");

var counter=0; //this controlled only by user click or counter
// this function to do the movement
setInterval(function(){
      if(counter >= btns.length || counter < 0){
        counter = 0;
      }
    
    btns[ counter ].checked=true;

    // this for controlling the slider
    mainSlider.style.left = "-"+String(counter * 100)+"%";
    counter++;
  }, 5000);

// adding user control function:
function sliderBtn(num) {
  if(num >= btns.length || num < 0){
    num=0;
  }
  counter = num;
  btns[ counter ].checked=true;

  // this for controlling the slider
  mainSlider.style.left = "-"+String(counter * 100)+"%";
  counter++;
}
//  end  slider part


// str platform
var PC = "container pc";
var PCH = "container hidden pc";

var console = "container console";
var consoleH = "container hidden console";

var mobile = "container mobile";
var mobileH = "container hidden mobile";


var PCE = document.getElementById("PC");
var ConsoleE = document.getElementById("Console");
var MobileE = document.getElementById("Mobile");

function pc() {
  PCE.className = PC;
  ConsoleE.className = consoleH;
  MobileE.className = mobileH;
} 

function consoole() {
  PCE.className = PCH;
  ConsoleE.className = console;
  MobileE.className = mobileH;
} 

function smartphone() {
  PCE.className = PCH;
  ConsoleE.className = consoleH;
  MobileE.className = mobile;
} 
// end platform