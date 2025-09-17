const express = require('express');
const app = express();
require('dotenv').config();

const connect = require('./utils/dbConnection');
app.use(express.json())
connect();
const aboutRouter = require('./routes/about');
const jokesRouter = require('./routes/jokes.routes');
app.get('/', (req, res) => {
    res.send(
        "Hello World"
    )
})
app.use('/about', aboutRouter);
app.use('/api/jokes', jokesRouter);
app.listen(3000, (req, res) => {
    console.log(
        "App running on PORT 3000"
    )
});