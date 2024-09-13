const express = require('express');
const MongoClient = require('mongodb');
const app = express();
const PORT = 8000;


const url = 'mongodb://localhost:27017';
const dbName = 'test';

// connect to mongoDB
async function connectDB() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  
}



// insert data to mongoDB
async function insertData() {

}

// insert multiple documents
async function insertMultipleDocuments() {
  
}

// find a document
async function findDocument() {

}

// find multiple documents
async function findMultipleDocuments() {

}

// update document
async function updateDocument() {
  
}

// delete a document
async function document() {

}


// create an index
async function index() {
  
}


// drop a collection
async function dropCollection() {

}


