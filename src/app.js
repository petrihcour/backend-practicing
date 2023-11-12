const express = require("express"); // requiring the express package and assigning it to a variable
const morgan = require("morgan");
const app = express(); // the express package exports an Express function that i will assign to a new variable. i get a new express application and assign it to a VARIABLE
app.use(morgan("dev"));

app.get("/hello", (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
});

app.get("/songs", (req, res) => {
    const title = req.query.title;
    res.send(title);
})

// Route parameters

// You want this one to go before /say/:greeting because the routes could be confused for one another. if we request /say/goodbye first, since Express looks at each piece of middleware in order, it will request /say/goodbye first, thus displaying "Sorry to see you go!"" on the screen if  /say/goodbye is the path
app.get("/say/goodbye", (req, res) => {
    res.send("Sorry to see you go!")
})


app.get("/say/:greeting", (req, res, next) => {
    const greeting = req.params.greeting;
    const name = req.query.name;
    const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
    res.send(content);
});

app.get("/states/:abbreviation", (req, res, next) => {
    const abbreviation = req.params.abbreviation;
    if (abbreviation.length !== 2) {
        next("State abbreviation is invalid.");
    } else {
        res.send(`${abbreviation} is a nice state. I'd like to visit.`)
    }
})

// error handling for route that doesn't exist

app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`)
})

// error handling for when there's problem with app itself or i trigger with next funciton in previous middleware function

app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
})


module.exports = app; // export the express function so it can be used in the server.js file 
