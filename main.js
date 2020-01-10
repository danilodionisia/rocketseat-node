const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const requireDir = require('require-dir');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

requireDir('./src/models');
const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));


const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server runngin on port 8080');
});