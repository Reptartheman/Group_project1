// First make a new branch. Push into the branch, someone needs to approve it.
// After it gets approved, it will get merged into main. 


let yellows = ["Bananas", "Pineapples", "Lemons", "Mangos", "Peaches"];
let oranges = ["Oranges", "Nectarine", "Cantaloupe", "Persimmon"];
let reds = ["Strawberry", "Watermelon","Cranberry", "Raspberry"];
let greens = ["Kiwi", "Lime", "Granny Smith", "Avocado"];
let purples = ["Purple Grape", "Plum", "Fig", "Blackberry"];
let blues = ["Blueberry", "Elderberry", "Concord Grapes", "Damson Plum"];
var wheel = document.querySelector('.wheel');
var spinBtn = document.querySelector('.buttonparent');
var rng = Math.ceil(Math.random() * 3600);
let startingPoint = 0
let rotation = 0
let fruitDisplay = document.getElementById("fruitdisplay");
let tempDisplay = document.getElementById("tempdisplay");
const apiKey = "a6301245a67ac8187fe62fefb9b35996";
let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=8160474e6f23dd64a3ea9a9e05d2989d&units=imperial";
let fruitFetch = "https://api.edamam.com/api/nutrition-data?app_id=196dc1f4&app_key=1da65c319c451540e894e3475137325f&ingr=1 banana";

// Giving the button the wheel spin function.
spinBtn.onclick = function() {
    getData();
    wheel.style.transform = "rotate(" + rotation + "deg)";
    rng = Math.ceil(Math.random() * 3600);
     rotation = rng%360
     console.log(rotation);
     console.log("Range:" + rng);
     startingPoint = 360 - Math.abs(startingPoint-rotation)
     console.log(startingPoint);
     switch(true){
        case ((startingPoint >= 0) && (startingPoint <= 60)):
            colorChoice = greens
            break;
    
        case ((startingPoint > 60) && (startingPoint <= 120)):
            colorChoice = purples
            break;
        case ((startingPoint > 120) && (startingPoint <= 180)):
            colorChoice = oranges
            break;
        case ((startingPoint > 180) && (startingPoint <= 240)):
            colorChoice = reds
            break;
        case ((startingPoint > 240) && (startingPoint <= 300)):
            colorChoice = blues
            break;
            case ((startingPoint > 300) && (startingPoint <= 360)):
            colorChoice = yellows
            break;
    }} 


    wheel.style.transform = "rotate(" + rotation + "deg)";
    rotation = -1 * rotation
    let result = rng%360;

// the function below grabs the data from the API
function getData(){
    fetch(fruitFetch)
    .then(function(response){
     return response.json();
    })
    .then(function(data){
     console.log(data);
     console.log(data.calories);
     fruitDisplay.append("Calories:" + data.calories);
     localStorage.setItem("Calories", data.calories);

    })
    fetch(requestUrl)
    .then(function(response){
     return response.json();
    })
    .then(function(citydata){
     console.log(citydata); 
     tempDisplay.append("Enjoy at: " + citydata.main.temp + " degrees.");  
})
}

function getLocalStorage(){
    var storage = localStorage.getItem("Calories"); 
    if (storage !== null ){
        fruitDisplay.append("Calories:" + storage);
    }  
    
}
getLocalStorage();



// TO DO: store results in an Array. 
// TO DO: 
// We will need conditional statements to randomly select a color from each <div>.
// A new function will nest the conditional statements for the colors to be removed from the <div>.
// Button should be disabled after four clicks.
// Every fruit that is landed on will be highlighted to indicate selection.
// Do rng divided by 360, store it in a variable, then do a switch case for each color.