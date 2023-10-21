const express = require('express');
const app = express();
const fs = require('fs');

// Defining  the path for  the JSON file
const usersFilePath = `${__dirname}/Users_Info1.json`;

// Defining a route to list users
app.get('/listUsers', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    console.log(data);
    res.send(data);
  });
});



app.get('/', (req, res) => {
  res.send(`<a href="/listUsers" >Get Users</a>`);
});
// Starting the Express server
const port = 8081;
const server = app.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Server listening at http://${address}:${port}`);
});
