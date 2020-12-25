const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

const items = require('./routes/api/items');


const uri = process.env.MONGODB_URI;

//body parser middleware
app.use(express.json());

//DB config
// const db = require('./muri.env').mongoURI;
// console.log('db = ', db);
console.log('uri == ', uri);

//connect to mongodb
mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
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

