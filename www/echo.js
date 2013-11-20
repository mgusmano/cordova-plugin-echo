
//window.echo = function(str, callback) {
//    cordova.exec(callback, function(err) {
//        callback('Nothing to echo.');
//    }, "Echo", "echo", [str]);
//};

//window.echo("echome", function(echoValue) {
//    alert(echoValue == "echome"); // should alert true.
//});


var cordova = require('cordova'),
    exec = require('cordova/exec');

function handlers() {

var Echo = function() {
    this.echo = 'hi';
    // Create new event handlers on the window (returns a channel instance)
};

var echo = new Echo();

module.exports = echo;
