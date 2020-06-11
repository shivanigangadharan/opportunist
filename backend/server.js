const express = require('express');
const mongoose = require('mongoose');

const app = express();

const items = require('./routes/api/items');



//body parser middleware
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('Error:- ' + err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

