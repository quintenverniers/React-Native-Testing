console.log("test");

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=9000,be&units=metric&APPID=05bfbf1478a13f5f270d24fba4288943', true);

request.onload = function () {
  // Begin accessing JSON data here
    console.log(this.response);
    console.log(this.response[0].weather.main)
  }


// Send request
request.send();