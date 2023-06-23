const express = require("express") 
const routes = require("./routes")
const cors = require("cors")
const path = require("path")

const app = express()

const port = 3000

//defining a custom middleware function. This function will run on every request received by the server.
const loggerMiddleWare = (req, res, next) => {
    console.log("Request received at", new Date().toLocaleString(), req.method, req.url);
// when the above code either resolves or fails we pass the request to the next function(if there is one) or route handlers
next()
}

app.use(cors()) // so i can test my API endpoint users/api from a different origin.
app.use(loggerMiddleWare) // basic middleware function
app.use(express.text()) // client can "post" send some text to my server via a game
app.use('/public', express.static(path.join(__dirname, 'public'))) // any files inside /public/ will be served up as static files.
app.use("/", routes) // import and use all of our route handlers from routes.js which start with "/"
app.set('view engine', 'ejs'); // use our templating engine!

// Error handling middleware. If an error occurs on any incoming request we handle it with the code below.
app.use((error, req, res, next) => {
 console.error(error)
 // we manually set our response to an error code of 500 to indicate something going wrong. And send a message.
 res.status(500).send("Something went wrong!")
})

// Starts our application on given url/port
app.listen(port, () => {
    console.log(`Server listening on localhost: ${port}`);
})