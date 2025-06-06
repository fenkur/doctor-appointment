const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(`MongoDB Server Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;