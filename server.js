const express = require('express');
const routes = require('./routes/index');

// Create an instacne of express
const app = express();

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// load all routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
