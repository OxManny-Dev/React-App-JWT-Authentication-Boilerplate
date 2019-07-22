const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');


const app = express();

// Database setup

mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true, useCreateIndex: true });

// App middlewares setup
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes setup
const routes = require('./routes');
app.use(routes);

// Server setup
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
