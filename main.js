
var api = "https://api.openweathermap.org/data/2.5/weather?zip="

var api2 = ",us&appid=";

var key ="2a891f25c80028033b31396fe83cee9e";

async function callAPI (){
    var zipcode = document.getElementById("zip").value;
    const response = await fetch(api + zipcode + api2 + key).then(Response => Response.json());   
    console.log(response)
}

var state = 1;

function init() {updatePage()
}

// // if restart button is click set state back to 1//
// // function reStart() {
// //     state = 1;
// //     updatePage()
// // }

// // if next button is clicked do current state plus 1 //
function nextPage () {
    console.log(state);
    state++;
    updatePage()
}

// // define what each state looks like by calling back to html//

function updatePage() {
    if (state == 1) {
        document.getElementById("city").innerHTML = " ";
        document.getElementById("kelvin").innerHTML = " ";
        document.getElementById("fahrenheit").innerHTML = " ";
        document.getElementById("celsius").innerHTML = " ";
        document.getElementById("condition").innerHTML = " ";
        document.getElementById("image").innerHTML = " ";
    }
    else if (state == 2) {
        document.getElementById("city").innerHTML = city;
        document.getElementById("kelvin").innerHTML = kelvin;
        document.getElementById("fahrenheit").innerHTML = fahrenheit;
        document.getElementById("celsius").innerHTML = celsius;
        document.getElementById("condition").innerHTML = condition;
        document.getElementById("image").innerHTML = image;
    }
    else if (state == 3) {
        document.getElementById("city").innerHTML = "Error: Invalid Zip Code";
        document.getElementById("kelvin").innerHTML = " ";
        document.getElementById("fahrenheit").innerHTML = " ";
        document.getElementById("celsius").innerHTML = " ";
        document.getElementById("condition").innerHTML = " ";
        document.getElementById("image").innerHTML = " ";
    }
}
// https://api.openweathermap.org/data/2.5/weather?zip=40356,us&appid=2a891f25c80028033b31396fe83cee9e 



// const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid=2a891f25c80028033b31396fe83cee9e"
//     async function getWeather() {
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         const { city, kelvin, fahrenheit, celsius, condition, image} = data;
//     }