const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middleware/authentication");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const Blog = require("./models/blog");

// Middleware Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
// Middleware for allowing Express to use 'public' folder as static
app.use(express.static(path.resolve("./public")));

// Enviornment Setup for EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// Connection 
mongoose.connect("mongodb://localhost:27017/blog-app")
    .then(() => {
        console.log("MongoDB Connected.")
    })
    .catch((error) => {
        console.log("MongoDB Error.")
    });



app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
});


// Routes 
app.use("/user", userRoute);
app.use("/blog", blogRoute);


// Server Listening
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is Listening at PORT:${PORT}.`);
});