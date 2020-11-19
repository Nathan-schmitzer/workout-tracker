const mongoose = require('mongoose');
const express = require("express");
const logger = require("morgan");
const api = require("./routes/api");
const html = require("./routes/html");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"))

app.use(express.urlencoded({  extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true});

app.use(express.static("public"));
app.use(api);
app.use(html);






app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`)
});


