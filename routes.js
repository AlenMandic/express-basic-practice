// we use the express function Router to define and create new route handlers, then export them across our file directory.
const express = require("express")
const router = express.Router() // router.get means our routers always uses express router functionalities.
const path = require("path") // node module for easier handling of our file system/directory
const users = require("./data/users");

// setting / as the root base of our app, in this case index.html
router.get("/", (req, res) => {
    console.log(req.headers['user-agent']);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

router.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"))
})

router.get("/users", (req, res) => {
  let user_map = users.map(users => users )

  res.render("user_main.ejs", {user_map})
})

// Making my own API endpoint, so any user can call this endpoint with the Accept header = JSON, and receive a JSON object of our users.
router.get("/users/api", (req, res) => {
    if(req.header("Accept") === 'application/json') {
      const jsonUsers = users.map((user) => JSON.stringify(user));
      res.json(jsonUsers);
    } else {
      res.status(406).send("Incorrect format request. Only JSON is acceptable.")
    }
  })

// populating a js file with mock registered users, and allowing access to view their profiles via url parameter /users/:id
router.get("/users/:id", (req, res) => {
    //first we access whatever the user is trying to get, :id is the params in this case. This will just be whatever the user types in after /users/
    userId = req.params.id

    const user = users.find(user => user.id === userId) // find is the perfect method for this since it returns only 1 thing, whichever user exactly matches req.params.id. so our wanted user.

    if(user) {
     res.render('users.ejs', { user });  // render('users.js') means send as response our template EJS file which is called users.ejs. We feed it our user data object. And we send to that template page our user object and everything it entails, so we can use user.name etc.
    } else {
      res.status(404).send("User not found.")
    }
})

// if user guesses this number they are rewarded with a cool animation
router.post("/game", (req, res) => {

  let correct_guess = Math.floor(Math.random() * 10 + 1).toString();
  let user_guess = req.body;

  if(user_guess === correct_guess) {
    res.json("YOU WON")
  } else {
    res.json("YOU GUESSED WRONG")
  }
})

module.exports = router