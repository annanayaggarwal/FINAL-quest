//Imports
const AppRoutes = require('./routes/index');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');


//Init
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
db();


/*
Routes
*/

//Test Route
app.use('/test', (req, res) => {
    res.send('Testing');
});

app.use('/api', AppRoutes);


//Server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
