const express = require("express");
const path = require("path");
require("./db/conn"); 
const User = require("./models/contactus");
const app = express();
const port = process.env.PORT || 3000;

// Setting the path
const staticpath = path.join(__dirname, "../public");

//middileware
// app.use(('/css'), express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use(express.urlencoded({extended: false}))
app.use(express.static(staticpath))
app.set("view engine", "hbs");

// Routing
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/intro", (req, res) => {
    res.render("index");
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
})

app.get("/services", (req, res) => {
    res.render("services");
})

app.get("/portfolio", (req, res) => {
    res.render("portfolio");
})

app.get("/team", (req, res) => {
    res.render("team");
})

app.get("/contact", (req, res) => {
    res.render("contactus");
})

app.post("/contactus", async(req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error)
    }
})

//server create
app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
})
