// First make a new branch. Push into the branch, someone needs to approve it.
// After it gets approved, it will get merged into main. 

var wheel = document.querySelector('.wheel');
var spinBtn = document.querySelector('.buttonparent');
var rng = Math.ceil(Math.random() * 3600);

// Giving the button the wheel spin function.
spinBtn.onclick = function() {
    wheel.style.transform = "rotate(" + rng + "deg)";
    rng += Math.ceil(Math.random() * 3600); 
}


// Recipe finder
//var recipeSearch = document.querySelector("");

//recipeSearch.addEventListener("click", (){
  //  recipeSearch();
//})

//function recipeSearch(){
  //  var appID = "152ce9d9";
    //var appKey = "0c7f1fb6a280c124d6bfdd378fe124af";
   // var recipeResponse = fetch(`https://api.edamam.com/api/recipes/v2?app_id={appID}&app_key={appKey}&q=chicken`);
    //console.log(recipeResponse);
