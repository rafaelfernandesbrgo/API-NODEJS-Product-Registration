
//imports
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//start app
const app = express();


// allows json to be passed on requests
app.use(express.json());


//start cors to define which releases, security configuration
app.use(cors())

//connect with database
mongoose.connect('put url string connection', { useNewUrlParser: true, useUnifiedTopology: true });

// referenced the models
requireDir('./src/models')


// directs the route by any method to the route file
app.use('/api', require('./src/routes'))


//listening at the door 3001
app.listen(3001);
