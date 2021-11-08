const express = require('express');
const connectDB = require('./config/server');
const products = require('./routes/product.route')


//Create Server 
const app = express();

//Connection a DB
connectDB();

// Middleware 
app.use(express.json());
app.use('/api/products', require('./routes/product.route'));

//Create Routes Principal
// app.get('/', (req, res) => {
//     res.send('Project CRUD')
// })

app.listen(4200, () => {
    console.log('El servidor funciona')
})