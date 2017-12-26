//PARTNER EXERICSE 2// Write a function pushPull that takes one argument and calls it as a function.

var push = function () {
    console.log("pushing it!");
  };
  
  var pull = function () {
    console.log("pulling it!");
  };
  
  var pushPull = function (func) {
    func()
  }

  pushPull(push);
  pushPull(pull);


/* PARTNER EXERICSE 3// You can get the current date/time in Javascript by writing: var time = new Date(). 
Create a function called getTime that takes one parameter and calls it as a function.*/
var returnTime = function (time) {
    alert('The current time is: ' + time);
  };

  var getTime = function(func) {
      var time = new Date()
    func(time)
}
  getTime(returnTime);


/* PARTNER EXERICSE 4// Copy/paste the following code in your dev console.
 What error do you get? Write the missing functions to make the code work:
 */

var displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
//error : logData is not defined

var logData = function(data) {
    console.log(data)
}

  displayData(alert, logData, "I like to party");

  /* PARTNER EXERICSE 5// Change the following code to use an anonymous function:
 */

  setTimeout(function(){
      alert("I'm saying stuff!")}, 1000)
  

 