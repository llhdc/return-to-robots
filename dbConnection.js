let client = {
  db: null,
  connect: connect
};

function connect(callback) {
  let MongoClient = require("mongodb").MongoClient;
  // Connection URL
  let url = "mongodb://localhost:27017/robots";

  // Use connect method to connect to the Server
  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(`Connected MongoDB @ ${url}`);
    client.db = db;
    callback(client);
  });
}

module.exports = client;
