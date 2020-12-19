const express = require('express');
const {join} = require('path');

const cookieParser = require('cookie-parser'); 

const router = require("./router")

const app = express();

app.set('port', 3000);
app.use(express.json());
app.use(cookieParser());

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router());

app.get('*', (req, res)=>{
    res.status(404).send('<p>page not found</p>');
})

module.exports = app;