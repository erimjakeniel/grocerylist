var express= require('express');
var app= express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');

})

app.get('/data', (req, res) => {
    var item = req.query.item; 
    console.log(req.query.item)
    
})
app.listen(8081,function(){
    console.log("started");
});