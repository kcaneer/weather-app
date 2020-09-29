
var api = "https://api.openweathermap.org/data/2.5/weather?zip="

var api2 = ",us&appid=";

var key ="2a891f25c80028033b31396fe83cee9e";

async function callAPI (){
    var zipcode = document.getElementById('zip').value;
    const response = await fetch(api + zipcode + api2 + key);
    const data = await response.json();  
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].main;
    // const icon = data.weather[0].icon;


    document.getElementById('city').textContent = name;
    document.getElementById('kelvin').textContent = "Kelvin: " + temp;
    document.getElementById('fahrenheit').textContent = "Fahrenheit: " + (((temp-273.15)*1.8)+32);
    document.getElementById('celsius').textContent = "Celsius: " + (temp-273.15);
    document.getElementById('condition').textContent = "Condition: " + description;
    // document.getElementById('image').textContent = icon;
}

// var state = 1;

// function init() {updatePage()
// }

// // if restart button is click set state back to 1//
// // function reStart() {
// //     state = 1;
// //     updatePage()
// // }

// // // if next button is clicked do current state plus 1 //
// function nextPage () {
//     console.log(state);
//     state++;
//     updatePage()
// }

// // define what each state looks like by calling back to html//

// function updatePage() {
//     if (state == 1) {
//         document.getElementById("city").innerHTML = " ";
//         document.getElementById("kelvin").innerHTML = " ";
//         document.getElementById("fahrenheit").innerHTML = " ";
//         document.getElementById("celsius").innerHTML = " ";
//         document.getElementById("condition").innerHTML = " ";
//         document.getElementById("image").innerHTML = " ";
//     }
//     else if (state == 2) {
//         document.getElementById("city").innerHTML = city;
//         document.getElementById("kelvin").innerHTML = kelvin;
//         document.getElementById("fahrenheit").innerHTML = fahrenheit;
//         document.getElementById("celsius").innerHTML = celsius;
//         document.getElementById("condition").innerHTML = condition;
//         document.getElementById("image").innerHTML = image;
//     }
//     else if (state == 3) {
//         document.getElementById("city").innerHTML = "Error: Invalid Zip Code";
//         document.getElementById("kelvin").innerHTML = " ";
//         document.getElementById("fahrenheit").innerHTML = " ";
//         document.getElementById("celsius").innerHTML = " ";
//         document.getElementById("condition").innerHTML = " ";
//         document.getElementById("image").innerHTML = " ";
//     }
// }
// https://api.openweathermap.org/data/2.5/weather?zip=40356,us&appid=2a891f25c80028033b31396fe83cee9e 



// const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid=2a891f25c80028033b31396fe83cee9e"
//     async function getWeather() {
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         const { city, kelvin, fahrenheit, celsius, condition, image} = data;
//     }