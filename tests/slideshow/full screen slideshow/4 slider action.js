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