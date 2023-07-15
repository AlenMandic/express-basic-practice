# express-basic-practice
A very basic node/express server with simple full-stack capablities. For learning purposes.

This app can be used or cloned/forked by anyone if they want to play around with the code. Meant for NodeJS begginers. Instructions at the bottom.

In this app we:
- We set up a basic `Express.js` server in `server.js` as the base of our app
- Routing: We handle different routes and types of query params, from their own file. Including a large variety of `GET` requests, and we also allow the client to send in `POST` requests to our server from the front end, and we then send a response back!
- We create basic middleware functions including a simple error handler.
- We serve static files from our `/public/` folder using `express.static`
- I simulate mock data in `/data/users.js`.
- We use a templating engine called `EJS` to create and serve fully dynamic HTML pages for any user in our `users.js`. Also the `/users` page.
- We create our own API endpoint which can be retreived by anyone using `fetch` and an `Accept: json` header in `/users/api`, which returns a JSON list of all our current users.
  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  In order to test the code out for yourself, you can clone the repository from GitHub or do it locally using git bash or command prompt.
   - Create a new empty folder for this project
   - Open git bash in that folders location and run:  `git clone https://github.com/AlenMandic/express-basic-practice`
   - while in the terminal install needed Node dependencies:
      - `npm install express`
      - `npm install ejs`
      - `npm install cors`
   - Then while you're in the root directory of the folder just run `npm start` or `node server.js` in the terminal to start the app.

MIT LICENSE
