require('./db/connect');
var express = require('express');
var app = express();
var itemRoutes = require('./routes/item');


app.use(express.static('public'));
app.use('/', itemRoutes);

app.listen(8080, function() {
    console.log('Listening on port 8080');
});
exports.app = app;
