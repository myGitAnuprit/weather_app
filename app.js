var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
var weather = require('openweather-apis');
weather.setLang('in');

weather.setCoordinate('13.0827','80.2707');
weather.setUnits('metric');
weather.setAPPID('9c4cef7486cbd69cca44fdc1acc10e88');


weather.getPressure(function(err, pres){
        console.log(" Pressure : ", pres,"Pascal. ");
    });
 
weather.getTemperature(function(err, temp)
    {
            console.log(" Tempreture : ", temp," Celcius. ");
    });


weather.getHumidity(function(err, hum)
    {
            console.log(" Humidity: ", hum," grams per cubic meter. ");
    });


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

