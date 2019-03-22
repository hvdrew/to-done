const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load our config file and routes
const config = require('./config.json');
const todoRoutes = require('./routes/Routes');

// Instantiate our server instance
const app = express();

// Connect to the DB
mongoose.connect(config.DB, { useNewUrlParser: true });

// Allow all CORS
app.use(cors());

// Setup our static directory
app.use(express.static(path.join(__dirname, '/public')));

// Setup Morgan for logging
app.use(morgan('dev'));

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ====================== //

// Port
const port = config.APP_PORT || 3000;

// Routes
app.use('/api', todoRoutes);

// Spin up the server
app.listen(port, () => {
	console.clear();
	console.log(`Listening on port ${port}`);
});