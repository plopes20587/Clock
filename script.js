$(document).ready( function() {

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');
    if (seconds < 10) {
        // Add the "0" digit to the front
        // so 9 becomes "09"
        seconds = "0" + seconds;
    }
    // Then we set the text inside the clock div
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

  }

  // This runs the displayTime function the first time
  displayTime();

  setInterval(displayTime, 1000);

});
