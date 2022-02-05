//Dependencies
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
//const fruitRouter = require('./controllers/fruits')

const {PORT = 3004, DATABASE_URL} = process.env;
require('dotenv').config()

//Database Configuration
mongoose.connect(process.env.DATABASE_URL)

//Connection Events 
mongoose.connection
.on('open', () => console.log(' You are connected to MongoDB '))
.on('close', () => console.log('You are disconnected to Mongodb'))
.on('error', (error) => console.log('MongoDB error'));



// App
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use('/api/fruits' ,  require('./controllers/fruits'))
app.use(cors({
    origin: "*",
}));
//Start server
app.listen(PORT,() => {
    console.log(`Server is Listening: ${PORT}` )
})
