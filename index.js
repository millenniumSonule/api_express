const express = require('express');
const fs = require('fs');
const app = express();
const users = require('./MOCK_DATA.json');
const { error } = require('console');

const PORT = 8000;


app.use(express.urlencoded({ extended: false })) // middleware to convert the data from url into form data
//create a user // add data
app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ data: body });
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
