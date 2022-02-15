const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express()

const PORT = 5050

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/passwords', (req, res) => {
    const count = 5

    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(10, false)
    )

    res.json(passwords)

    console.log(passwords)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(PORT)

console.log(`Server is up on port ${PORT}`);