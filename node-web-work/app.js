const express = require('express');

const application = express();
const port = process.env.PORT || 3000;

application.get('/', (request, response) => {
  response.send('Welcome to first API');
});

application.listen(port, () => {
  console.log(`application is running on ${port}`);
});
