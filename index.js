const express = require('express')

const app = express();

app.get('/', (request , response) => {
  return response.json({ message: 'vai logo com video porra'});
})

app.listen(3333);