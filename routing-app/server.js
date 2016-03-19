var express= require('express');
var app = express();

var path = require('path');

//set the public folder to serve the public assets
app.use(express.static(__dirname + '/public'));

//set up our one route to get the index.html
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
    
});

app.listen(8080);
console.log('Magic port at 8080');
