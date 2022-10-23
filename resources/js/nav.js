const borger = document.querySelector(".borger");
const icon = document.querySelector("#nav-icon");
const options = document.querySelector(".options");
function myFunction(x) {
    if (x.matches) { // If media query matches
      options.style.visibility = "hidden"
      
    } else {
      options.style.visibility = "visible"
      icon.className = "fa fa-bars hide"
    }
  }
var x = window.matchMedia("(max-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
let btn_counter = 2;
borger.addEventListener("click", () => {
  if (btn_counter % 2 == 0) {
    icon.className = "fa fa-solid fa-x hide";
    options.style.visibility = "visible";
  } else {
    icon.className = "fa fa-bars hide";
    options.style.visibility = "hidden";
  }
  console.log(btn_counter);
  btn_counter += 1;
});
