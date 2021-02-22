const { Mongoose } = require("mongoose")

const mongoose = require("mongoose");

// mongodb+srv://sumit_infotech:<password>@cluster0.rb6lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//Creating a Database
mongoose.connect("mongodb+srv://sumit_infotech:Sumit123@$@cluster0.rb6lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connection Success");
}).catch( (error) => {
    console.log(error);
})
