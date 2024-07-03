const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sosyalmedya', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});
