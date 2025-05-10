const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/Auth.routes');
const articleRoutes = require('./routes/articles.routes');
require('./db');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Blog API');
});

app.listen(3000, () => console.log('Server running on port 3000'));