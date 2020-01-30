const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://vhcord:hager1417@cluster0-yzfmt.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333);
mongoose.set('useCreateIndex' , true)