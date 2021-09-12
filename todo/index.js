var express = require('express');
var app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res){
    res.render('index');
 });

app.listen(8080, function () {
  console.log('Running on port 8080!')
});

app.set('view engine', 'ejs');


var task = ["buy milk", "learn javascript", "learn express"];

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete});
});