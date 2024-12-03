const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Akashaiqbal:Akasha123@cluster0.dxvzk.mongodb.net/CarHub');
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

connectDB();
module.exports = mongoose;
