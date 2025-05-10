const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://paragbhimani603:paragbhimani123@cluster0.2ld5l.mongodb.net/blog-Api');
        console.log('MongoDB Connected');
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
module.exports = connectDB();