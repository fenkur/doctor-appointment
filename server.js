const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// env config
dotenv.config();

// mongodb connection
connectDB();

const app = express();


// middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/user', require('./routes/userRoutes'));


const port = process.env.PORT || 8080;
const mode = process.env.DEV_MODE;

app.listen(port, () => {
    console.log(`Server running on port ${port} and mode is ${mode}`.bgCyan.white); 
});