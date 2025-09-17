const express = require('express');
const app = express();
require('dotenv').config();

const connect = require('./utils/dbConnection');
app.use(express.json())
connect();
const aboutRouter = require('./routes/about');
const jokesRouter = require('./routes/jokes.routes');
const autRouter = require('./routes/auth');
app.get('/', (req, res) => {
    res.send(
        "Hello World"
    )
})
app.use('/about', aboutRouter);
app.use('/api/jokes', jokesRouter);
app.use('/api/auth', autRouter);
app.listen(process.env.PORT, (req, res) => {
    console.log(
        "App running on PORT 3000"
    )
});
const tokens = {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2E4ZGI5Y2I4ZWU3YzIwZjc5Y2MyOSIsImlhdCI6MTc1ODEwNTA2OCwiZXhwIjoxNzU4MTA4NjY4fQ.gvC6xRW4jFAe7aAioIkNa9Mlgm7aBDbRyFJilHE72Ck"
}