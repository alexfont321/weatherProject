"use strict";

const loginForm = require("./loginForm");
const database = require("./dataBase");
const weatherDOM = require("./weatherDOM");

const randomZipCode = () => {
    return Math.floor(Math.random() * 100000)
}
randomZipCode();

document.querySelector("#login-form").innerHTML = loginForm();

document.querySelector("#login-btn").addEventListener("click", () => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    database.logIn(username, password)
    .then(result => {

        if (result.length) {
            document.querySelector("#login-form").innerHTML = "";
            console.log(result[0].zipCode)
            database.weatherFetch(result[0].zipCode)
            .then(result => {
                  console.log(result)  
                  document.querySelector("#weather").innerHTML = weatherDOM(result);
            })



        } else {
            document.querySelector("#login-form").innerHTML = "";
            let newObject = {
                username: username,
                password: password,
                zipCode: randomZipCode(),
            }
            database.postUser(newObject)
            .then(() => {
                database.logIn(username, password)
                .then(result => {
                    database.weatherFetch(result[0].zipCode)
                    .then(result => {
                        document.querySelector("#weather").innerHTML = weatherDOM(result);

                    })

                })

            }

            )
        }

    })

})