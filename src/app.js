'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hiiii</h1>')
})

app.listen(3000, () => {
  console.log('The app is running on port 3000.')
});
