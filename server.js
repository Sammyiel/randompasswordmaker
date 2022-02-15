const express = require('express');
const path = require('path');
require('dotenv').config()
const generatePassword = require('password-generator');
const res = require('express/lib/response');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.json({ message: `App is up!` });
})

app.get('/passwords', (req, res) => {
    const count = 5;

    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(10, false)
    )

    res.json(passwords);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3030;
app.listen(port);

console.log(`Server is up on port ${port}!`);