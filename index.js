const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());


MongoClient.connect('mongodb://localhost:27017/', function(error, client) {
  // Use the admin database for the operation
  const adminDb = client.db('myDb').admin();
  // List all the available databases
  adminDb.listDatabases(function(err, dbs) {
     console.log(dbs);
  });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
