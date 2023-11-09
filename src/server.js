const { PORT = 5000 } = process.env; // with destrucuting and default arguments, set the variable PORT to be equal to whatever value is found inside of process.env or default to 5000
const app = require("./app"); // require the Express application that i exported 
const listener = () => console.log(`Yaaaaay! Listening on Port ${PORT}!`); // this function will run when the server successfully starts
app.listen(PORT, listener); // the listen() method on the Express application 'app.listen()' is what runs the server. listen() takes two arguments: a port number and a function. 

// the PORT variable defines where the server is running
// the listener() function will get called as soon as the server has successfully started 