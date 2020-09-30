
var api = "https://api.openweathermap.org/data/2.5/weather?zip="

var api2 = ",us&appid=";

var key = "2a891f25c80028033b31396fe83cee9e";

function roundNum(x) {
    var y = x.toFixed(2)
    return y
}

async function callAPI() {
    var zipcode = document.getElementById('zip').value;
    const response = await fetch(api + zipcode + api2 + key);
    const data = await response.json();
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].main;
    const fhite = ((temp - 273.15) * 1.8) + 32;
    const celsius = temp - 273.15;
    const icon = data.weather[0].icon;
    const image = "./images/" + icon + ".png";

    document.getElementById('hidden').style = "";
    document.getElementById('city').textContent = name;
    document.getElementById('kelvin').textContent = temp + "°";
    document.getElementById('fahrenheit').textContent = roundNum(fhite) + "°";
    document.getElementById('celsius').textContent = roundNum(celsius) + "°";
    document.getElementById('condition').textContent = description;
    document.getElementById('image').setAttribute("src", image)

//     if (icon = "01d") {
//         document.getElementById('image').src = "icons/01d.png";
//     }

//     else if (icon = "01n") {
//         document.getElementById('image').src = "icons/01n.png";
//     }
//     else if (icon = "02d") {
//         document.getElementById('image').src = "icons/02d.png";
//     }
//     else if (icon = "02n") {
//         document.getElementById('image').src = "icons/02n.png";
//     }
// }
}

