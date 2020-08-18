const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const items = require('./routes/api/items');

var dotenv = require('dotenv');
dotenv.config();

//body parser middleware
app.use(express.json());

//DB config
//const db = require('./config/keys').mongoURI;
const db = require('./muri.env').mongoURI;


//connect to mongodb
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('Error:- ' + err));

//use routes
app.use('/api/items', items);

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

