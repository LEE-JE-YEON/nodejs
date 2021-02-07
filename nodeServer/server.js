var express = require('express');

var app = express();
const port = 3000;
var count = 0;


var server = app.listen(port, function () {
    console.log("Express server has started on port : "+port);
});


app.get('/', function (req, res) {
    res.send('Hello world ->' + count++);
});

/*// udp 전송
var dgram = require('dgram');
const xiaomiPort = 5001;
const xiaomiIp = '192.168.0.141';
const xiaomiClient = dgram.createSocket('udp4');
xiaomiClient.send('text', 0, 4, xiaomiPort, xiaomiIp, function(err, bytes) {
    if(err)
        throw err;
    console.log('UDP sent to Xiaomi');
    xiaomiClient.close();
})
*/