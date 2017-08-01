const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const User = require('./models/data');
const userRoutes = require('./routes/userRoutes')
const homeRoute = require('./routes/homeRoute')


// SETUP MUSTACHE
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress()); //register file extension .mustache
app.set("port", process.env.PORT || 3000);
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
// DONE SETTING UP MUSTACHE

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use(homeRoute)

if (require.main === module) {
  // Start a db connect and list after it's connected.
  const dbClient = require("./dbConnection")
  dbClient.connect((client) => {
    app.listen(app.get("port"), err => {
      if (err) {
        throw err;
        exit(1);
      }

      console.log(
        `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
          "port"
        )}`
      );
    });
  })
}


module.exports = app;
