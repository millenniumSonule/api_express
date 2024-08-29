const express = require('express');
const fs = require('fs');
const app = express();
const users = require('./MOCK_DATA.json');

const PORT = 8000;

//routes

//get api data
app.get('/api/users', (req, res) => {
    return res.json(users);
})

//get users in html (Server side rendering, good for desktop and 
//mobile browsers, wont work for mobile apps since this api gives data in html form)
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li> ${user.first_name} </li>`)}
        </ul>
    `;
    res.send(html);
})

//get rquest with dynamic path parameters
//get user with specific ID
app.get('/users/:id', (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
});

//create a user // add data
app.post('/api/users' , (req,res)=> {
    const body = req.body;
    console.log("body ",body)
    return  res.json({data:'body'});
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
