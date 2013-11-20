
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

alert('in3');
    
var Echo = function() {
    this.echo = 'hi';
    
    this.createEcho = function(valToEcho, successCallback, errorCallback) {
        alert('in createEcho ' + valToEcho);
        cordova.exec(
            successCallback, 
            errorCallback, 
            'Echo', 
            'echo', 
            [
                {                  
                    "theVal": valToEcho
                }
            ]
        ); 
     };   
    
};

var echo = new Echo();

module.exports = echo;
