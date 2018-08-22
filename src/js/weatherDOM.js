"use strict";

const weatherToDom = (city) => {
    return `<div>
                <h1>${city.name}</h1>
                <h3>Temperature: ${Math.floor(kelvinToFarenheit(city.main.temp))} F</h3>
                <p>Humidity: ${city.main.humidity}</p>
                <p>Today we have ${city.weather[0].description.toUpperCase()}</p>
                <div>
                    <h3>Wind</h3>
                    <p>Wind Degrees: ${city.wind.deg}</p>
                    <p>Wind Speed: ${city.wind.speed}</p>
                </div>
            </div>
    
    `

}


const kelvinToFarenheit = (temp) => {
    return ((9/5) * (temp - 273) + 32);
};

module.exports = weatherToDom;