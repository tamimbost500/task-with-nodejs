const mongoose = require("mongoose");
const databaseConnect = async() => {
 await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Data base Connected!"));
};
module.exports = databaseConnect;
