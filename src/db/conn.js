const { Mongoose } = require("mongoose")

const mongoose = require("mongoose");

//Creating a Database
mongoose.connect("mongodb://localhost:27017/SumitInfotechDb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connection Success");
}).catch( (error) => {
    console.log(error);
})
