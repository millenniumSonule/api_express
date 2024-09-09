const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 8000;


const url = 'mongodb://localhost:27017/';
const dbName = 'test'; 

async function connectDB() {

  try{

    const client = await MongoClient.connect(url);
    console.log('connected');

    const db = client.db(dbName);

    const list_of_collections = await client.db('test').admin();
    console.log(list_of_collections)

    await client.close();
    console.log('Connection closed');


  }catch(error) {
    console.error(error);
  }

}

connectDB();


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
