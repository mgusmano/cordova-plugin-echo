        //alert(window.echo.echo);
        //var success = function(r) { alert(JSON.stringify(r)); };
        //var error = function(message) { alert("Oopsie! " + message); };
        //window.echo.createEcho('hello', success, error);

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
