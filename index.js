const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
      default: null,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});
  
// Create a User model
const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    try {
        // Create a new user from the request body
        const newUser = new User(req.body);
        
        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Send the saved user as a response
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle any errors that occur during saving
        res.status(400).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
