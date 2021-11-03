const { application } = require('express');
const express = require('express');

//Create Server 
const app = express();

//Create Routes
app.get('/', (req, res) => {
    res.send('Project CRUD')
})

app.listen(4000, () => {
    console.log('El servidor funciona')
})