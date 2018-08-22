"use strict";

const database = {};

database.logIn = (username, password) => {
    return fetch(`http://localhost:8088/users?username=${username}&password=${password}`)
        .then(r => r.json())
}

database.weatherFetch = (zipCode) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=03640ab0f8c1f4e8f508e9ebbfbca100`)
        .then(r => r.json())
}

database.postUser = (newUser) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(r => r.json())
}



module.exports = database;