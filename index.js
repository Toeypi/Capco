var express = require('express');
var app = express();
var db = require('./config/db.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// mongoose.connection.on('connected', function () {
//     console.log(new Date(), 'MongoDB Connected');
// });

// mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) { if (err) console.log(err); })

require('fawn').init(mongoose)

app.use(bodyParser.json({ limit: '150mb' })); // parse application/json and set limit as 1.2 MB
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

var port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log("App running on port", port);
});