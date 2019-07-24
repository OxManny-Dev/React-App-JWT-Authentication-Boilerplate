const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const cors      = require('cors');

const app = express();

// Database setup

mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true, useCreateIndex: true });

// App middlewares setup
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// Routes setup
const routes = require('./routes');
app.use(routes);

// Server setup
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
