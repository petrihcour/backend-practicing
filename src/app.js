const express = require("express"); // requiring the express package and assigning it to a variable
const morgan = require("morgan");
const app = express(); // the express package exports an Express function that i will assign to a new variable. i get a new express application and assign it to a VARIABLE

const sayHello = (req, res, next) => {
    res.send("Hello!");
}

app.use(morgan("dev"));

//i can write it like this also
// app.get("/hello", (req, res, next) => {
//     res.send("Hellooooo!")
// });

app.get("/hello", sayHello);


module.exports = app; // export the express function so it can be used in the server.js file 
