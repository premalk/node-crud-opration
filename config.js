var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var App = require('./app');
app = express();
PORT = 2001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Please Add Some operations');
});
app.get('/RouterHandler',App.RouterHandler);
app.listen(PORT, (req,res)=>{
    console.log('server is running on port '+ PORT);
})
