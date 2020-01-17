const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://vhcord:hager1417@cluster0-yzfmt.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (request , response) => {
  return response.json({ message: 'vai logo com video porra'});
})

app.listen(3333);