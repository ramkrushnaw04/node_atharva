const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/civilloan', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database!');
    }).catch((error) => {
        console.log('Error connecting to database!', error);
        process.exit(1);
    });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to civilloan application." });
});

require('./App/Routes/app.routes.js')(app);
let port =8080;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});