const express = require('express');
const path = require('path');

const app = express();

// Set the static folder for serving HTML files
app.use(express.static(path.join(__dirname)));

// Define the route for the homepage
app.get('/about.', (req, res) => {
  res.sendFile(path.join(__dirname, index.html)); 
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
