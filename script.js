// First make a new branch. Push into the branch, someone needs to approve it.
// After it gets approved, it will get merged into main. 

var wheel = document.querySelector('.container');
var spinBtn = document.querySelector('.buttonparent');
var rng = Math.ceil(Math.random() * 3600);

// Giving the button the wheel spin function.
spinBtn.onclick = function() {
    wheel.style.transform = "rotate(" + rng + "deg)";
    rng += Math.ceil(Math.random() * 3600); 
}



